import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type FormType = 'strategy-call' | 'partnership' | 'general';
type FormValues = Record<string, unknown>;

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 6;
const submissions = new Map<string, { count: number; expiresAt: number }>();

const recipients: Record<FormType, string> = {
  'strategy-call': 'info@pulglobal.com',
  partnership: 'partner@pulglobal.com',
  general: 'info@pulglobal.com',
};

function value(values: FormValues, key: string, limit: number) {
  const entry = values[key];
  return typeof entry === 'string' ? entry.trim().slice(0, limit) : '';
}

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function getEmailSettings() {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromEmail = process.env.MAIL_FROM_EMAIL || smtpUser;
  const smtpPort = Number(process.env.SMTP_PORT || 465);

  if (!smtpUser || !smtpPass || !fromEmail || ![465, 587].includes(smtpPort)) return null;

  return {
    smtpUser,
    smtpPass,
    fromEmail,
    smtpHost: process.env.SMTP_HOST || 'send.one.com',
    smtpPort,
  };
}

function checkRateLimit(request: Request) {
  const ip = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();

  if (submissions.size > 5000) {
    for (const [key, entry] of submissions) {
      if (entry.expiresAt <= now) submissions.delete(key);
    }
  }

  const current = submissions.get(ip);

  if (!current || current.expiresAt <= now) {
    submissions.set(ip, { count: 1, expiresAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (current.count >= RATE_LIMIT) return false;

  current.count += 1;
  return true;
}

export async function POST(request: Request) {
  const settings = getEmailSettings();
  if (!settings) {
    return NextResponse.json({ error: 'Secure form delivery is not configured yet.' }, { status: 503 });
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 12000) {
    return NextResponse.json({ error: 'The submitted message is too large.' }, { status: 413 });
  }

  let body: { formType?: FormType; values?: FormValues };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 });
  }

  const formType = body.formType;
  const values = body.values;
  if (typeof formType !== 'string' || !Object.hasOwn(recipients, formType) || !values || typeof values !== 'object') {
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 });
  }

  if (value(values, 'company_website', 300)) {
    return NextResponse.json({ success: true, acknowledgementSent: true });
  }

  const name = value(values, 'Name', 120);
  const email = value(values, 'Email', 254);
  const organization = value(values, 'Organization', 200);
  const focus = value(values, 'Focus', 160);
  const summary = value(values, 'Opportunity and proposed role', 5000)
    || value(values, 'Requirement summary', 5000);
  const opportunity = value(values, 'Opportunity or target market', 300);
  const timing = value(values, 'Preferred timing', 200);

  if (name.length < 2 || !isEmail(email) || summary.length < 10) {
    return NextResponse.json({ error: 'Please enter a valid name, email address, and message.' }, { status: 400 });
  }

  if (!checkRateLimit(request)) {
    return NextResponse.json({ error: 'Too many messages were submitted. Please wait a few minutes and try again.' }, {
      status: 429,
      headers: { 'Retry-After': '600' },
    });
  }

  const isPartnership = formType === 'partnership';
  const subject = isPartnership
    ? 'Partnership inquiry for PUL Global Partners'
    : formType === 'strategy-call'
      ? 'Strategy call request for PUL Global Partners'
      : 'PUL Global Partners website inquiry';
  const message = [
    `Form type: ${subject}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || 'Not provided'}`,
    `Focus: ${focus || 'Not provided'}`,
    ...(opportunity ? [`Opportunity or target market: ${opportunity}`] : []),
    ...(timing ? [`Preferred timing: ${timing}`] : []),
    '',
    summary,
  ].join('\n');

  const transporter = nodemailer.createTransport({
    host: settings.smtpHost,
    port: settings.smtpPort,
    secure: settings.smtpPort === 465,
    requireTLS: settings.smtpPort === 587,
    auth: { user: settings.smtpUser, pass: settings.smtpPass },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 12000,
  });
  const from = `PUL Global Partners <${settings.fromEmail}>`;

  try {
    await transporter.sendMail({
      from,
      to: recipients[formType],
      replyTo: { name, address: email },
      subject,
      text: message,
    });
  } catch (error) {
    console.error('Unable to deliver website inquiry to PUL.', error instanceof Error ? error.name : 'Unknown error');
    transporter.close();
    return NextResponse.json({ error: 'We could not send your message. Please try again or email PUL directly.' }, { status: 502 });
  }

  try {
    await transporter.sendMail({
      from,
      to: { name, address: email },
      replyTo: recipients[formType],
      subject: isPartnership ? 'Thank you for contacting PUL Global Partners' : 'We received your Strategy Call request',
      text: isPartnership
        ? `Hello ${name},\n\nThank you for reaching out to PUL Global Partners. We have received your partnership inquiry and will review the opportunity and your organization’s capabilities. Our team will follow up using this email address.\n\nRegards,\nPUL Global Partners\ninfo@pulglobal.com\n+1-540-993-7496`
        : `Hello ${name},\n\nThank you for contacting PUL Global Partners. We have received your Strategy Call request and will review the details. This confirmation is not a calendar booking; our team will follow up to coordinate availability.\n\nRegards,\nPUL Global Partners\ninfo@pulglobal.com\n+1-540-993-7496`,
    });
    return NextResponse.json({ success: true, acknowledgementSent: true });
  } catch (error) {
    console.error('Unable to send website inquiry acknowledgement.', error instanceof Error ? error.name : 'Unknown error');
    return NextResponse.json({ success: true, acknowledgementSent: false });
  } finally {
    transporter.close();
  }
}
