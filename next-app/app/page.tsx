import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CalendarDays, Check, ClipboardCheck, Compass, Network, RefreshCw, ShieldCheck, Users, BriefcaseBusiness, Building2, Landmark, Globe2 } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Counter } from '@/components/counter';
import { InsightCarousel } from '@/components/insight-carousel';
import styles from './home.module.css';

const platforms = [
  { title: 'Management Consulting & Advisory', id: 'management' },
  { title: 'Procurement Facilitation & Contract Management', id: 'procurement' },
  { title: 'Technology & Digital Solutions', id: 'technology' },
  { title: 'Global Trade & Partnerships', id: 'trade' },
  { title: 'International Initiatives & Mission Support', id: 'mission' },
  { title: 'Capacity Building & Specialized Services', id: 'capacity' },
];

const gates = [
  { title: 'Understand', text: 'Mission, stakeholders, operating conditions, compliance, and risk.', outcome: 'Aligned scope', Icon: Compass },
  { title: 'Mobilize', text: 'People, partners, suppliers, work plans, controls, and readiness.', outcome: 'Ready to execute', Icon: Users },
  { title: 'Deliver', text: 'Coordinated services, field decisions, quality, and issue resolution.', outcome: 'Controlled action', Icon: Network },
  { title: 'Evidence', text: 'Progress, risk, cost, acceptance, and performance documentation.', outcome: 'Decision visibility', Icon: ClipboardCheck },
  { title: 'Improve', text: 'Feedback, corrective action, continuity, learning, and closeout.', outcome: 'Lasting value', Icon: RefreshCw },
];

const buyerGroups = [
  { title: 'Federal agencies & overseas missions', text: 'Accountable program, technical, procurement, and in-country support shaped around mission requirements.', Icon: Landmark },
  { title: 'Prime contractors & implementers', text: 'A responsive teaming partner for focused expertise, proposal strength, added capacity, and delivery coordination.', Icon: Building2 },
  { title: 'International & private-sector partners', text: 'Market connections, workforce initiatives, institutional capacity, and qualified cross-border collaboration.', Icon: Globe2 },
];

const engagementModels = [
  { title: 'Lead a defined workstream', text: 'Own delivery against an agreed scope, milestones, and reporting rhythm.' },
  { title: 'Join an established team', text: 'Contribute specialist expertise, capacity, or coordination as a delivery partner.' },
  { title: 'Coordinate partner-enabled delivery', text: 'Align local expertise and providers around a shared operating plan.' },
];

export default function HomePage() {
  return <div className={styles.home}><SiteLayout current="Home"><main id="main">
    <section className="hero" id="top">
      <Image className="hero-media" src="/assets/images/pul-global-strategy-hero-v1.webp" alt="Professionals collaborating on a global implementation plan" width={1664} height={936} priority sizes="100vw" />
      <div className="hero-overlay" /><div className="shell hero-content">
        <p className="hero-brand-line">A U.S.-registered implementation partner</p>
        <h1 className="animated-headline"><span>Built to execute</span><span>where complexity</span><span>is real.</span></h1>
        <p className="hero-lead">Partnering with federal buyers, prime contractors, and international organizations to turn complex requirements into accountable delivery.</p>
        <div className="button-row"><Link className="button" href="/solutions/">Discover Our Solutions<ArrowRight aria-hidden="true" /></Link><Link className="button button-ghost" href="/schedule/"><CalendarDays aria-hidden="true" />Request a Strategy Call</Link></div>
      </div>
    </section>
    <section className="impact-strip" aria-label="Institutional experience indicators"><div className="shell metrics">
      <div><Counter end={30} start={1} suffix="+" label="30 or more projects supported" /><span>Projects supported</span></div>
      <div><Counter end={1000} start={10} suffix="+" label="1,000 or more staff managed" /><span>Staff managed</span></div>
      <div><Counter end={10000} start={1} suffix="+" label="10,000 or more people trained" /><span>People trained</span></div>
      <div><Counter end={2010} start={2010} fixed label="Institutional heritage since 2010" /><span>Institutional heritage</span></div>
    </div><p className="shell metrics-disclosure">Our leadership brings a record of relevant work across PUL’s institutional history, informing the experience and capabilities we bring to each engagement.</p></section>

    <section className="section intro" id="about"><div className={`shell split-intro ${styles.introGrid}`}>
      <div className={styles.introHeading}><p className="eyebrow section-kicker">Who we are</p><h2>U.S. accountability.<br /><span>Field-tested execution.</span></h2></div>
      <div className="intro-copy"><p className="lead">PUL Global Partners LLC combines U.S. contracting readiness with implementation experience built through PUL Consulting Services since 2010. We help government buyers, federal contractors, international organizations, businesses, and overseas missions move from objective to accountable execution.</p>
        <p>Our six service platforms bring together consulting, procurement and contract management, technology, global trade and partnerships, mission support, and capacity building.</p>
        <p>We connect U.S.-based coordination with local knowledge and specialized expertise, initially focusing on Central Asia, the Middle East, and North Africa.</p>
        <div className="button-row intro-actions"><Link className="button" href="/schedule/">Request a Strategy Call<CalendarDays /></Link><Link className="text-link" href="/about/#projects">Explore our experience<ArrowUpRight /></Link></div>
      </div>
      <div className={`execution-proof ${styles.introProof}`}><div><ShieldCheck aria-hidden="true" /><span><strong>U.S.-based accountability</strong>Virginia-based corporate oversight</span></div><div><Network aria-hidden="true" /><span><strong>Partner-enabled scale</strong>Specialists, suppliers, and local networks</span></div><div><Check aria-hidden="true" /><span><strong>Evidence-led delivery</strong>Controls, reporting, and responsible closeout</span></div></div>
    </div></section>

    <section className="section capabilities" id="capabilities"><div className="shell"><div className="section-heading platform-heading"><div><p className="eyebrow section-kicker">What we do</p><h2>Six service platforms<br /><span>One delivery mindset.</span></h2></div><p>Focused expertise across advisory, acquisition, technology, partnerships, mission delivery, and workforce development. Select a platform to explore its full scope.</p></div>
      <div className={styles.platformLinks}>{platforms.map(({ title, id }) => <Link className={styles.platformCard} href={`/solutions/#${id}`} key={id}><span>{title}</span><ArrowUpRight aria-hidden="true" /></Link>)}</div>
    </div></section>

    <section className="section economic-growth"><div className="shell"><div className="section-heading"><div><p className="eyebrow section-kicker">Economic growth &amp; SME support</p><h2>Connect enterprise,<br /><span>workforce, and markets.</span></h2></div><p>Our portfolio brings together business outreach, workforce development, training, employer engagement, market assessment, job placement, and trade-support activities.</p></div><div className="fit-grid"><div><BriefcaseBusiness /><h3>Build enterprise capability</h3><p>SME diagnostics, entrepreneurship training, proposal support, and practical responsible-AI adoption.</p></div><div><Network /><h3>Connect to opportunity</h3><p>Market surveys, trade linkages, job placement, employer engagement, and local coordination.</p></div><div><ClipboardCheck /><h3>Deliver and measure</h3><p>Participant logistics, implementation coordination, and performance reporting around program outcomes.</p></div></div><Link className="text-link" href="/solutions/#economic-growth">Explore SME and economic-growth support<ArrowUpRight /></Link></div></section>

    <section className="section delivery"><div className="shell"><div className="section-heading compact"><div><p className="eyebrow section-kicker">How we deliver</p><h2>Governed execution.<br /><span>Visible progress.</span></h2></div><p>A five-gate operating framework keeps decisions, ownership, quality, and evidence connected from initial requirement through continuity and closeout.</p></div>
      <div className="delivery-framework" aria-label="PUL delivery framework"><div className="delivery-rail" aria-hidden="true" />{gates.map(({ title, text, outcome, Icon }, index) => <article key={title}><div className="gate-top"><span>Gate {String(index + 1).padStart(2, '0')}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><strong>{outcome}</strong></article>)}</div>
      <div className="delivery-footer"><p><strong>One accountable rhythm.</strong> Adapted to the client, country, contract, and mission.</p><Link className="button" href="/schedule/">Request a Strategy Call<ArrowRight /></Link></div>
    </div></section>

    <section className={`section buyers ${styles.wherePUL}`} id="where-pul-fits"><div className="shell">
      <div className={styles.fitHeading}><div><p className="eyebrow section-kicker">Where PUL fits</p><h2>One partner.<br /><span>Several ways to deliver.</span></h2></div><p>We work with public-sector buyers, prime contractors, international organizations, and private-sector partners. The role is shaped by the requirement, the team, and the operating environment.</p></div>
      <div className={styles.audienceGrid}>{buyerGroups.map(({ title, text, Icon }) => <article className={styles.audienceCard} key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className={styles.engagementBlock}><div className={styles.engagementIntro}><p className="eyebrow">Engagement models</p><p>Choose the right role for the opportunity.</p></div><div className={styles.engagementGrid}>{engagementModels.map(({ title, text }) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      <div className={styles.fitCta}><p>Have an opportunity or complementary capability to discuss?</p><Link className="button" href="/contact/#pathways">Explore partnership opportunities<ArrowRight aria-hidden="true" /></Link></div>
    </div></section>

    <InsightCarousel />

    <section className="contact"><div className="shell contact-form-grid"><div><p className="eyebrow light">Start a conversation</p><h2>Bring us the mission.<br />We’ll help structure the execution.</h2><p>Request a focused strategy call or send us the essentials for a direct follow-up.</p><div className="button-row"><Link className="button button-light" href="/schedule/"><CalendarDays />Request a Strategy Call</Link><Link className="button button-ghost" href="/contact/">Partner With Us<ArrowRight /></Link></div></div><div className="contact-form-placeholder"><h3>Have a capability in mind?</h3><p>Review our platform overview and capability statement before we talk.</p><Link className="button" href="/capability/">View capability statement<ArrowRight /></Link></div></div></section>
  </main></SiteLayout></div>;
}
