import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness, Clock3, FileText, Layers3, Mail, MapPin, Phone, CalendarCheck, CalendarDays } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { MailtoForm } from '@/components/mailto-form';

export const metadata: Metadata = { title: 'Contact', description: 'Contact PUL Global Partners about federal contracting, overseas mission support, consulting, technology, capacity building, trade, and logistics.' };

export default function ContactPage() {
  return <SiteLayout current="Contact"><main id="main">
    <PageHero current="Contact" eyebrow="Contact PUL" title={<>Start with<br />the mission.</>} description="Tell us what you are working toward, where support is needed, and how soon the work must move. We’ll help identify a focused path to engage." image="/assets/images/platform-capacity-v2.webp" imageAlt="Professionals collaborating in a capacity-building workshop"><div className="button-row"><Link className="button" href="/schedule/"><CalendarDays />Request a Strategy Call</Link><a className="button button-ghost" href="mailto:info@pulglobal.com">Email PUL</a></div></PageHero>
    <section className="section contact-page"><div className="shell contact-page-grid"><div><p className="eyebrow">A direct connection</p><h2>Let’s make the<br /><span>next step clear.</span></h2><p className="lead">Reach out about a federal opportunity, teaming role, overseas mission need, or implementation challenge.</p><div className="contact-details"><a href="mailto:info@pulglobal.com"><Mail /><span><strong>Email</strong>info@pulglobal.com</span><ArrowUpRight /></a><a href="tel:+17032232655"><Phone /><span><strong>Phone</strong>+1 703-223-2655</span><ArrowUpRight /></a><div><MapPin /><span><strong>Corporate location</strong>Stafford, Virginia, USA</span></div></div><div className="contact-response"><Clock3 /><p><strong>What happens next</strong>Share the core requirement and preferred timeframe. PUL can confirm the right participants and a focused discussion agenda.</p></div></div><MailtoForm /></div></section>
    <section className="section contact-channels"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Choose a starting point</p><h2>Find the right<br /><span>conversation.</span></h2></div><p>Use the page that best matches your current need.</p></div><div className="role-grid"><Link href="/solutions/"><Layers3 /><h3>Explore capabilities</h3><p>Review the four connected business platforms.</p></Link><Link href="/projects/"><BriefcaseBusiness /><h3>Review experience</h3><p>See selected institutional assignments and delivery contexts.</p></Link><Link href="/capability/"><FileText /><h3>Procurement information</h3><p>Open the 2026 Capability Statement and SAM profile.</p></Link><Link href="/schedule/"><CalendarCheck /><h3>Request a strategy call</h3><p>Share preferred timing and receive a focused follow-up.</p></Link></div></div></section>
  </main></SiteLayout>;
}
