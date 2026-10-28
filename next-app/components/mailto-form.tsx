'use client';

import { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

export function MailtoForm({ schedule = false, partnership = false }: { schedule?: boolean; partnership?: boolean }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const subject = schedule ? 'Strategy call request for PUL Global Partners' : partnership ? 'Partnership inquiry for PUL Global Partners' : 'PUL Global Partners website inquiry';
    const body = [...values.entries()].map(([key, value]) => `${key}: ${value}`).join('\n');
    window.location.href = `mailto:info@pulglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-inquiry-form" onSubmit={submit}>
      <p className="eyebrow">{schedule ? 'Request a focused conversation' : partnership ? 'Partner with PUL' : 'Send a requirement summary'}</p>
      <h3>{schedule ? 'What should we prepare for?' : partnership ? 'Tell us about the opportunity.' : 'What would you like to discuss?'}</h3>
      <div className="form-row"><label>Full name<input required name="Name" autoComplete="name" /></label><label>Work email<input required type="email" name="Email" autoComplete="email" /></label></div>
      <label>Organization<input name="Organization" autoComplete="organization" /></label>
      <label>{partnership ? 'Partnership focus' : 'Discussion focus'}<select name="Focus">{partnership ? <><option>Joint opportunity or teaming</option><option>Local or international delivery partnership</option><option>U.S. market entry</option><option>Trade, supplier, or market collaboration</option><option>Technology, workforce, or mission capability</option><option>Professional or specialist contribution</option><option>Other partnership discussion</option></> : <><option>Federal opportunity or teaming</option><option>Overseas mission support</option><option>Management consulting</option><option>Training and capacity building</option><option>Technology and AI enablement</option><option>Trade, logistics, or procurement</option></>}</select></label>
      {partnership && <label>Opportunity or target market<input name="Opportunity or target market" placeholder="Opportunity name, geography, or client context" /></label>}
      {schedule && <label>Preferred dates or timing<input name="Preferred timing" placeholder="Share a few dates and your time zone" /></label>}
      <label>{partnership ? 'Opportunity and proposed role' : 'Requirement summary'}<textarea required name={partnership ? 'Opportunity and proposed role' : 'Requirement summary'} rows={5} placeholder={partnership ? 'Describe the opportunity, the capability your organization brings, a possible role, and anticipated timing.' : 'Objective, operating context, timeframe, and support needed'} /></label>
      <button className="button" type="submit">{schedule ? 'Prepare Call Request' : partnership ? 'Prepare Partnership Inquiry' : 'Prepare Email Inquiry'}<ArrowRight aria-hidden="true" /></button>
      <p className="form-note">{schedule ? 'This opens an email draft to PUL. No meeting is booked unless you review and send the request and PUL confirms availability.' : 'This opens an email draft to PUL. Your information is not submitted unless you review and send the message.'}</p>
    </form>
  );
}
