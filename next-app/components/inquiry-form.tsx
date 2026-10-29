'use client';

import { FormEvent, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

type FormResponse = {
  success?: boolean;
  acknowledgementSent?: boolean;
  error?: string;
};

export function InquiryForm({ schedule = false, partnership = false }: { schedule?: boolean; partnership?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: 'success' | 'error'; text: string }>();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

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
        }),
      });
      const result = (await response.json()) as FormResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'We could not submit your message. Please try again.');
      }

      formRef.current?.reset();
      setFeedback({
        kind: 'success',
        text: result.acknowledgementSent === false
          ? 'Your message reached PUL, but we could not send the confirmation email. We will follow up using the address you provided.'
          : 'Thank you. Your message has been sent, and a confirmation email is on its way.',
      });
    } catch (error) {
      setFeedback({
        kind: 'error',
        text: error instanceof Error ? error.message : 'We could not submit your message. Please try again.',
      });
    } finally {
      setSending(false);
    }
  }

  return (
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
        <button className="button" type="submit" disabled={sending}>
          {sending ? 'Sending...' : schedule ? 'Send Strategy Call Request' : partnership ? 'Send Partnership Inquiry' : 'Send Inquiry'}<ArrowRight aria-hidden="true" />
        </button>
        {feedback && <p className={feedback.kind === 'success' ? 'form-success' : 'form-error'} role={feedback.kind === 'success' ? 'status' : 'alert'}>{feedback.text}</p>}
        <p className="form-note">{schedule ? 'A confirmation email will be sent after submission. This is a call request, not a calendar booking; PUL will follow up to confirm availability.' : 'A confirmation email will be sent to the address you provide. PUL will follow up after reviewing your message.'}</p>
      </form>
  );
}
