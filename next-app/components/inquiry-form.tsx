'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { ArrowRight } from 'lucide-react';

type TurnstileOptions = {
  sitekey: string;
  theme: 'light';
  callback: (token: string) => void;
  'expired-callback': () => void;
  'error-callback': () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type FormResponse = {
  success?: boolean;
  acknowledgementSent?: boolean;
  error?: string;
};

export function InquiryForm({ schedule = false, partnership = false }: { schedule?: boolean; partnership?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [scriptFailed, setScriptFailed] = useState(false);
  const [widgetId, setWidgetId] = useState<string>();
  const [captchaToken, setCaptchaToken] = useState('');
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: 'success' | 'error'; text: string }>();
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

  useEffect(() => {
    if (!scriptReady || !siteKey || !widgetRef.current || !window.turnstile) return;

    const id = window.turnstile.render(widgetRef.current, {
      sitekey: siteKey,
      theme: 'light',
      callback: setCaptchaToken,
      'expired-callback': () => setCaptchaToken(''),
      'error-callback': () => {
        setCaptchaToken('');
        setFeedback({ kind: 'error', text: 'Human verification could not complete. Please try again or reload the page.' });
      },
    });

    setWidgetId(id);
    return () => window.turnstile?.remove(id);
  }, [scriptReady, siteKey]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!captchaToken || sending) return;

    setSending(true);
    setFeedback(undefined);

    try {
      const values = Object.fromEntries(new FormData(event.currentTarget).entries());
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: schedule ? 'strategy-call' : partnership ? 'partnership' : 'general',
          values,
          turnstileToken: captchaToken,
        }),
      });
      const result = (await response.json()) as FormResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'We could not submit your message. Please try again.');
      }

      formRef.current?.reset();
      setCaptchaToken('');
      if (widgetId) window.turnstile?.reset(widgetId);
      setFeedback({
        kind: 'success',
        text: result.acknowledgementSent === false
          ? 'Your message reached PUL, but we could not send the confirmation email. We will follow up using the address you provided.'
          : 'Thank you. Your message has been sent, and a confirmation email is on its way.',
      });
    } catch (error) {
      setCaptchaToken('');
      if (widgetId) window.turnstile?.reset(widgetId);
      setFeedback({
        kind: 'error',
        text: error instanceof Error ? error.message : 'We could not submit your message. Please try again.',
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {siteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={() => setScriptReady(true)} onError={() => setScriptFailed(true)} />}
      <form ref={formRef} className="contact-inquiry-form" onSubmit={submit}>
        <p className="eyebrow">{schedule ? 'Request a focused conversation' : partnership ? 'Partner with PUL' : 'Send a requirement summary'}</p>
        <h3>{schedule ? 'What should we prepare for?' : partnership ? 'Tell us about the opportunity.' : 'What would you like to discuss?'}</h3>
        <div className="form-row"><label>Full name<input required name="Name" autoComplete="name" maxLength={120} /></label><label>Work email<input required type="email" name="Email" autoComplete="email" maxLength={254} /></label></div>
        <label>Organization<input name="Organization" autoComplete="organization" maxLength={200} /></label>
        <label>{partnership ? 'Partnership focus' : 'Discussion focus'}<select name="Focus">{partnership ? <><option>Joint opportunity or teaming</option><option>Local or international delivery partnership</option><option>U.S. market entry</option><option>Trade, supplier, or market collaboration</option><option>Technology, workforce, or mission capability</option><option>Professional or specialist contribution</option><option>Other partnership discussion</option></> : <><option>Federal opportunity or teaming</option><option>Overseas mission support</option><option>Management consulting</option><option>Training and capacity building</option><option>Technology and AI enablement</option><option>Trade, logistics, or procurement</option></>}</select></label>
        {partnership && <label>Opportunity or target market<input name="Opportunity or target market" placeholder="Opportunity name, geography, or client context" maxLength={300} /></label>}
        {schedule && <label>Preferred dates or timing<input name="Preferred timing" placeholder="Share a few dates and your time zone" maxLength={200} /></label>}
        <label>{partnership ? 'Opportunity and proposed role' : 'Requirement summary'}<textarea required name={partnership ? 'Opportunity and proposed role' : 'Requirement summary'} rows={5} maxLength={5000} placeholder={partnership ? 'Describe the opportunity, the capability your organization brings, a possible role, and anticipated timing.' : 'Objective, operating context, timeframe, and support needed'} /></label>
        <div className="form-honeypot" aria-hidden="true"><label>Leave this field blank<input name="company_website" tabIndex={-1} autoComplete="off" /></label></div>
        {siteKey ? <><div className="form-human-check" role="group" aria-label="Human verification"><div ref={widgetRef} /></div>{!scriptReady && !scriptFailed && <p className="form-note" role="status">Loading human verification...</p>}{scriptFailed && <p className="form-error" role="alert">Human verification is unavailable. Please reload the page or email {partnership ? 'partner@pulglobal.com' : 'info@pulglobal.com'} directly.</p>}</> : <p className="form-note" role="status">Secure submission is being configured. You can email {partnership ? 'partner@pulglobal.com' : 'info@pulglobal.com'} directly in the meantime.</p>}
        <button className="button" type="submit" disabled={sending || !siteKey || !captchaToken}>
          {sending ? 'Sending...' : schedule ? 'Send Strategy Call Request' : partnership ? 'Send Partnership Inquiry' : 'Send Inquiry'}<ArrowRight aria-hidden="true" />
        </button>
        {feedback && <p className={feedback.kind === 'success' ? 'form-success' : 'form-error'} role={feedback.kind === 'success' ? 'status' : 'alert'}>{feedback.text}</p>}
        <p className="form-note">{schedule ? 'A confirmation email will be sent after submission. This is a call request, not a calendar booking; PUL will follow up to confirm availability.' : 'A confirmation email will be sent to the address you provide. PUL will follow up after reviewing your message.'}</p>
      </form>
    </>
  );
}
