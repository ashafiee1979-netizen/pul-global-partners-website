'use client';

import { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

export function MailtoForm({ schedule = false }: { schedule?: boolean }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const subject = schedule ? 'Strategy call request for PUL Global Partners' : 'PUL Global Partners website inquiry';
    const body = [...values.entries()].map(([key, value]) => `${key}: ${value}`).join('\n');
    window.location.href = `mailto:info@pulglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-inquiry-form" onSubmit={submit}>
      <p className="eyebrow">{schedule ? 'Request a focused conversation' : 'Send a requirement summary'}</p>
      <h3>{schedule ? 'What should we prepare for?' : 'What would you like to discuss?'}</h3>
      <div className="form-row"><label>Full name<input required name="Name" autoComplete="name" /></label><label>Work email<input required type="email" name="Email" autoComplete="email" /></label></div>
      <label>Organization<input name="Organization" autoComplete="organization" /></label>
      <label>Discussion focus<select name="Focus"><option>Federal opportunity or teaming</option><option>Overseas mission support</option><option>Management consulting</option><option>Training and capacity building</option><option>Technology and AI enablement</option><option>Trade, logistics, or procurement</option></select></label>
      {schedule && <label>Preferred dates or timing<input name="Preferred timing" placeholder="Share a few dates and your time zone" /></label>}
      <label>Requirement summary<textarea required name="Requirement summary" rows={5} placeholder="Objective, operating context, timeframe, and support needed" /></label>
      <button className="button" type="submit">Prepare Email Inquiry<ArrowRight aria-hidden="true" /></button>
      <p className="form-note">This opens an email draft addressed to PUL. Nothing is submitted and no meeting is booked until you choose Send.</p>
    </form>
  );
}
