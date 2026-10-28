import { CalendarDays, Clock3, ShieldCheck, Video } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { MailtoForm } from '@/components/mailto-form';

export const metadata: Metadata = { title: 'Request a Strategy Call', description: 'Request a focused strategy discussion with PUL Global Partners.' };

export default function SchedulePage() {
  return <SiteLayout current="Schedule"><main id="main">
    <section className="section"><div className="shell schedule-layout"><div><p className="eyebrow section-kicker">Strategy call</p><h1 className="schedule-page-title">What to expect</h1><h2>A focused<br /><span>30-minute call.</span></h2><p>Designed for federal opportunities, teaming discussions, overseas mission requirements, and complex implementation needs.</p><div className="schedule-details"><div><Clock3 /><p><strong>30 minutes</strong><span>Focused discovery and next steps</span></p></div><div><Video /><p><strong>Virtual meeting</strong><span>Connection details follow confirmation</span></p></div><div><ShieldCheck /><p><strong>Purpose-led</strong><span>Relevant PUL leaders join based on your requirement</span></p></div></div><p className="form-note">This request prepares an email. It does not reserve a calendar time.</p></div><MailtoForm schedule /></div></section>
  </main></SiteLayout>;
}
