import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, RefreshCw, Users, Workflow, ClipboardCheck, ScanSearch, Landmark, Handshake, Network, CircleCheck } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = { title: 'About Us', description: 'How PUL Global Partners connects U.S. accountability, institutional heritage, and field-aware implementation.' };

const gates = [
  ['Understand', 'Align on objectives, stakeholders, operating conditions, requirements, and risk.', ScanSearch],
  ['Mobilize', 'Prepare people, partners, suppliers, work plans, controls, and readiness.', Users],
  ['Deliver', 'Coordinate services, field decisions, quality checks, and issue resolution.', Workflow],
  ['Evidence', 'Document progress, risk, cost, acceptance, and performance for decisions.', ClipboardCheck],
  ['Improve', 'Use feedback and corrective action to strengthen continuity and closeout.', RefreshCw],
] as const;

const roles = [
  ['Prime contractor', 'Lead a clearly scoped requirement with defined responsibilities, reporting, and delivery controls.', Landmark],
  ['Subcontractor or consortium member', 'Add management, workforce, language, technology, or mission-support capacity to a prime-led team.', Handshake],
  ['Local-partner manager', 'Coordinate country-specific people, vendors, facilities, logistics, and specialized partners.', Network],
  ['Implementation partner', 'Connect work plans, services, evidence, and closeout so approved objectives keep moving.', CircleCheck],
] as const;

export default function AboutPage() {
  return <SiteLayout current="About Us"><main id="main">
    <PageHero current="About Us" eyebrow="About PUL Global Partners" title={<>U.S. accountability.<br />Field-tested execution.</>} description="PUL Global Partners connects strategy, qualified people, suppliers, technology, local context, and accountable delivery for organizations working through complex implementation requirements." image="/assets/images/platform-management-v2.webp" imageAlt="Advisors aligning strategy with implementation priorities" />
    <section className="section"><div className="shell about-story"><div className="about-story-copy"><p className="eyebrow">Our foundation</p><h2>Built around the work<br /><span>between strategy and results.</span></h2><p className="lead">Our institutional story began through PUL Consulting Services in 2010, with work in project delivery, workforce management, training, translation, business support, technology, and mission services.</p><p>PUL Global Partners LLC carries that experience forward as a Virginia-based U.S. contracting entity. We support federal buyers, prime contractors, international organizations, businesses, and overseas missions with practical coordination from startup through closeout.</p><p>Our role is to make complex work easier to govern: clarify the requirement, mobilize the right people and partners, coordinate delivery, document progress, and improve based on evidence.</p><Link className="text-link" href="/projects/">View selected institutional experience<ArrowUpRight /></Link></div><figure className="about-visual"><Image src="/assets/images/pul-global-strategy-hero-v1.webp" alt="Illustrative visualization of a professional team coordinating a strategy and implementation plan" width={1600} height={900} loading="lazy" /><figcaption>Illustrative visualization of collaborative planning.</figcaption></figure></div></section>
    <section className="proof"><div className="shell section"><div className="proof-header"><div><p className="eyebrow light">Institutional heritage</p><h2>Experience that informs<br />today’s execution.</h2></div><p>These portfolio indicators describe selected work across PUL’s institutional history and management team. Historical assignments are identified transparently and are not presented as direct awards to the current U.S. entity.</p></div><div className="metrics about-metrics"><div><strong>30+</strong><span>Projects supported</span></div><div><strong>1,000+</strong><span>Staff managed</span></div><div><strong>10,000+</strong><span>People trained</span></div><div><strong>2010</strong><span>Institutional heritage</span></div></div><p className="heritage-disclosure">Selected historical assignments were delivered through PUL Consulting Services and the PUL management team.</p></div></section>
    <section className="section about-model"><div className="shell"><div className="section-heading"><div><p className="eyebrow">How we work</p><h2>Governed execution.<br /><span>Visible progress.</span></h2></div><p>A five-gate operating rhythm keeps scope, ownership, quality, evidence, and learning connected to the mission.</p></div><ol className="about-gates">{gates.map(([title, text, Icon], i) => <li key={title}><span>{String(i + 1).padStart(2, '0')}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
    <section className="section about-roles"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Flexible operating roles</p><h2>One partner model.<br /><span>Several ways to engage.</span></h2></div><p>The delivery role is matched to the contract, buyer, operating environment, and requirement.</p></div><div className="role-grid">{roles.map(([title, text, Icon]) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="contact"><div className="shell contact-inner"><div><p className="eyebrow light">Let’s talk about the mission</p><h2>Bring us the requirement.<br />We’ll help shape the next step.</h2></div><div><p>Share your objectives, timeframe, and operating context. We’ll identify a focused way to engage.</p><div className="button-row"><Link className="button button-light" href="/schedule/">Request a Strategy Call</Link><Link className="button button-ghost" href="/contact/">Contact PUL</Link></div></div></div></section>
  </main></SiteLayout>;
}
