import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, ClipboardCheck, Globe2, GraduationCap, Languages, RefreshCw, ScanSearch, Users, Workflow } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import styles from './about.module.css';

export const metadata: Metadata = { title: 'Who We Are', description: 'Learn about PUL Global Partners, its institutional experience, selected projects, delivery approach, and partnership opportunities.' };

const gates = [
  ['Understand', 'Align on objectives, stakeholders, operating conditions, requirements, and risk.', ScanSearch],
  ['Mobilize', 'Prepare people, partners, suppliers, work plans, controls, and readiness.', Users],
  ['Deliver', 'Coordinate services, field decisions, quality checks, and issue resolution.', Workflow],
  ['Evidence', 'Document progress, risk, cost, acceptance, and performance for decisions.', ClipboardCheck],
  ['Improve', 'Use feedback and corrective action to strengthen continuity and closeout.', RefreshCw],
] as const;

const experienceDomains = [
  ['Mission operations', 'Staffing, facilities, vendor coordination, logistics, and local implementation support.', BriefcaseBusiness],
  ['Workforce and capacity', 'Professional training, workforce development, employer engagement, and job-readiness support.', GraduationCap],
  ['Language and stakeholder access', 'Translation, interpretation, documentation, and communication across operating contexts.', Languages],
  ['Technology, procurement, and trade', 'Network and cabling services, procurement coordination, market assessment, and trade implementation.', Globe2],
] as const;

export default function AboutPage() {
  return <div className={styles.page}><SiteLayout current="Who We Are"><main id="main">
    <section className={`interior-hero ${styles.hero}`}>
      <Image className={`interior-hero-image ${styles.heroImage}`} src="/assets/images/company-profile-global-team.webp" alt="Leadership team coordinating an international operating plan" width={1440} height={810} priority sizes="100vw" />
      <div className={`interior-hero-shade ${styles.heroShade}`} />
      <div className={`interior-hero-content ${styles.heroContent}`}><p className="eyebrow light">Who We Are</p><h1 className="animated-headline"><span>Rooted in experience.</span><span>Built for partnership.</span></h1><p className={styles.heroLead}>PUL Global Partners connects U.S.-based coordination with qualified people, local knowledge, specialized capabilities, and accountable execution.</p><div className="button-row"><a className="button" href="#experience">Explore our experience<ArrowDown /></a><Link className="button button-ghost" href="/contact/">Partner with PUL<ArrowRight /></Link></div></div>
    </section>

    <section className={`section ${styles.foundation}`}><div className={`shell ${styles.foundationGrid}`}><div><p className="eyebrow">Who we are</p><h2>Built around the work<br /><span>between strategy and results.</span></h2></div><div><p className={styles.foundationLead}>PUL Global Partners LLC is a Virginia-based contracting platform built to connect U.S.-based accountability with practical implementation.</p><p>Our institutional heritage began through PUL Consulting Services, established in 2010, and spans project delivery, workforce management, training, translation, business support, technology, and mission services.</p><p>Today, we work with U.S. Government buyers, federal contractors, international organizations, businesses, and overseas missions. Our approach is shaped by the operating context, client requirements, and qualified local and international partners.</p><div className={styles.foundationFacts}><div><strong>Virginia</strong><span>U.S.-based contracting platform</span></div><div><strong>Since 2010</strong><span>Institutional heritage through PUL Consulting Services</span></div><div><strong>Partner-enabled</strong><span>Local and specialized implementation capacity</span></div></div></div></div></section>

    <section className="proof" id="experience"><div className={`shell section ${styles.experience}`}><div className="proof-header"><div><p className="eyebrow light">Experience</p><h2>Experience that informs<br />today’s execution.</h2></div><p>Portfolio indicators describe selected work across PUL’s institutional history and management team. Historical assignments are identified transparently and are not presented as direct awards to the current U.S. entity.</p></div><div className="metrics about-metrics"><div><strong>30+</strong><span>Projects supported</span></div><div><strong>1,000+</strong><span>Staff managed</span></div><div><strong>10,000+</strong><span>People trained</span></div><div><strong>2010</strong><span>Institutional heritage</span></div></div><p className="heritage-disclosure">Selected historical assignments were delivered through PUL Consulting Services and the PUL management team.</p><div className={styles.experiencePillars}><div><strong>Mission operations</strong><span>Staffing, facilities, vendors</span></div><div><strong>People and programs</strong><span>Training, workforce, placement</span></div><div><strong>Access and engagement</strong><span>Translation, interpretation, outreach</span></div><div><strong>Systems and markets</strong><span>Technology, procurement, trade</span></div></div><div className={styles.deliveryHeading}><div><p className="eyebrow light">Our delivery approach</p><h3>Governed execution. Visible progress.</h3></div><p>A five-gate operating rhythm connects scope, ownership, quality, evidence, and learning to the mission.</p></div><ol className="about-gates">{gates.map(([title, text, Icon], i) => <li key={title}><span>{String(i + 1).padStart(2, '0')}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

    <section className={`section ${styles.projects}`} id="projects"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Institutional project experience</p><h2>Experience across<br /><span>connected disciplines.</span></h2></div><p>The experience summarized here belongs to PUL Consulting Services and the PUL management team. It is presented as institutional background, not as direct project performance by PUL Global Partners LLC.</p></div><div className={styles.projectDomains}>{experienceDomains.map(([title, text, Icon]) => <article key={title}><Icon aria-hidden="true" /><p className="eyebrow">Experience area</p><h3>{title}</h3><p>{text}</p></article>)}</div><p className={styles.projectDisclosure}>To avoid confusion about entity-level past performance, this page does not list individual assignments, client names, award details, or endorsements.</p></div></section>

    <section className={styles.partnerTeaser}><div className="shell"><div><p className="eyebrow">Partner with us</p><h2>Bring the opportunity.<br /><span>Let’s build the right team.</span></h2></div><p>Explore how qualified companies and professionals can work with PUL on opportunities that fit their capabilities, client requirements, and delivery roles.</p><Link className="button" href="/contact/">Explore partnership opportunities<ArrowUpRight /></Link></div></section>

    <section className="contact"><div className="shell contact-inner"><div><p className="eyebrow light">Start a conversation</p><h2>Bring us the requirement.<br />We’ll help shape the next step.</h2></div><div><p>Share your objectives, timeframe, and operating context. We’ll identify a focused way to engage.</p><div className="button-row"><Link className="button button-light" href="/schedule/">Request a Strategy Call</Link><Link className="button button-ghost" href="/contact/">Partner With Us</Link></div></div></div></section>
  </main></SiteLayout></div>;
}
