import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Building2, Globe2, Handshake, Landmark, Mail, MapPin, Network, Phone, Users } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { MailtoForm } from '@/components/mailto-form';
import styles from './contact.module.css';

export const metadata: Metadata = { title: 'Partner With Us', description: 'Explore teaming, market, and implementation partnerships with PUL Global Partners and share an opportunity through the partner inquiry form.' };

const partnerTypes = [
  ['Prime contractors', 'Bring a qualified opportunity or invite PUL to contribute management, procurement, technology, workforce, language, or mission-support capacity.', Landmark],
  ['Local and international companies', 'Connect country knowledge, suppliers, specialist skills, and local implementation capacity with U.S.-based coordination.', Globe2],
  ['Companies entering the U.S. market', 'Explore partner connections, bid and project coordination, and practical market-entry support for U.S. opportunities.', Building2],
  ['Professionals and specialists', 'Contribute distinctive expertise in consulting, technology, AI, training, language, trade, or mission delivery.', Users],
] as const;

const opportunities = [
  ['Team on qualified opportunities', 'Bring a solicitation, client requirement, or emerging opportunity where PUL’s capabilities and your organization’s strengths can complement one another.'],
  ['Build delivery capacity together', 'Coordinate local knowledge, specialized services, suppliers, workforce, technology, and implementation support around an agreed scope.'],
  ['Connect markets and partners', 'Explore U.S. market entry, trade and supplier linkages, sourcing, export promotion, and international business relationships.'],
  ['Develop joint initiatives', 'Shape practical training, workforce, SME, economic-growth, and knowledge-exchange activities with qualified partners.'],
] as const;

export default function ContactPage() {
  return <div className={styles.page}><SiteLayout current="Partner With Us"><main id="main">
    <section className={`interior-hero ${styles.hero}`}>
      <Image className={`interior-hero-image ${styles.heroImage}`} src="/assets/images/buyer-international-private-v1.webp" alt="U.S. and international business partners reviewing an opportunity together" width={1448} height={976} priority sizes="100vw" />
      <div className={`interior-hero-shade ${styles.heroShade}`} />
      <div className={`interior-hero-content ${styles.heroContent}`}><p className="eyebrow light">Partnerships &amp; collaboration</p><h1 className="animated-headline"><span>Bring the opportunity.</span><span>Build the team together.</span></h1><p className={styles.heroLead}>PUL Global Partners welcomes qualified companies and professionals who want to bring opportunities, combine capabilities, and work together on client-aligned delivery.</p><div className="button-row"><a className="button" href="#pathways">Explore partnership pathways<ArrowRight /></a><a className="button button-ghost" href="#contact-form">Share an opportunity<ArrowUpRight /></a></div></div>
    </section>

    <section className={styles.pathways} id="pathways"><div className="shell"><div className={styles.sectionHeading}><div><p className="eyebrow">Who we welcome</p><h2>Qualified partners.<br /><span>Complementary strengths.</span></h2></div><p>Partnerships are considered around a credible opportunity, relevant qualifications, client requirements, and clear responsibilities. We welcome conversations with:</p></div><div className={styles.partnerGrid}>{partnerTypes.map(([title, text, Icon]) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.opportunities}><div className="shell"><div className={styles.sectionHeading}><div><p className="eyebrow">Work we can pursue together</p><h2>Partnership with<br /><span>purpose and fit.</span></h2></div><p>We are open to working with companies that bring opportunities and want to shape a practical, qualified team with PUL Global Partners.</p></div><div className={styles.opportunityGrid}>{opportunities.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><div className={styles.region}><Globe2 aria-hidden="true" /><p><strong>International focus</strong>Initial focus includes Central Asia, the Middle East, and North Africa. We welcome broader discussions when partner qualifications and opportunity fit align.</p></div></div></section>

    <section className={styles.model}><div className="shell"><div className={styles.sectionHeading}><div><p className="eyebrow">How we work together</p><h2>Clear roles.<br /><span>Accountable delivery.</span></h2></div><p>Each collaboration is structured around client rules, approved scope, partner qualifications, and responsibilities agreed before work begins.</p></div><div className={styles.steps}><article><span className={styles.stepNumber}>01 / QUALIFY</span><Handshake aria-hidden="true" /><h3>Confirm the fit</h3><p>Clarify the opportunity, timing, qualification needs, operating context, and potential roles.</p></article><article><span className={styles.stepNumber}>02 / ALIGN</span><Building2 aria-hidden="true" /><h3>Align responsibilities</h3><p>Agree scope, approvals, reporting, quality expectations, and partner interfaces.</p></article><article><span className={styles.stepNumber}>03 / DELIVER</span><Network aria-hidden="true" /><h3>Coordinate delivery</h3><p>Connect people, suppliers, local expertise, and progress evidence through a clear operating rhythm.</p></article></div></div></section>

    <section className={styles.contactSection} id="contact-form"><div className="shell"><div className={styles.contactGrid}><div className={styles.contactColumn}><div className={styles.contactIntro}><p className="eyebrow">Start a partnership conversation</p><h2>Tell us what you<br /><span>want to build.</span></h2><p>Share the opportunity, the capability your organization brings, the target market, and a possible role. PUL will review the information and identify a practical next discussion.</p></div><div className={styles.contactInfo}><h3>Reach PUL directly</h3><a className={styles.contactDetail} href="mailto:info@pulglobal.com"><Mail aria-hidden="true" /><span><strong>Email</strong>info@pulglobal.com</span><ArrowUpRight aria-hidden="true" /></a><a className={styles.contactDetail} href="tel:+15409937496"><Phone aria-hidden="true" /><span><strong>Phone</strong>+1-540-993-7496</span><ArrowUpRight aria-hidden="true" /></a><div><MapPin aria-hidden="true" /><span><strong>Corporate location</strong>Stafford, Virginia, USA</span></div><div className={styles.responseNote}><strong>What happens next</strong><p>Your message opens as an email draft for you to review and send. PUL will follow up to discuss fit, qualifications, and next steps.</p></div><Link className="text-link" href="/schedule/">Request a strategy call<ArrowRight /></Link></div></div><MailtoForm partnership /></div></div></section>
  </main></SiteLayout></div>;
}
