import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CalendarDays, Check, ClipboardCheck, Compass, FileDown, Network, RefreshCw, ShieldCheck, Users } from 'lucide-react';
import { SiteLayout } from '@/components/site-layout';
import { Counter } from '@/components/counter';

const platforms = [
  { eyebrow: 'Strategy to execution', title: 'Management Consulting & Advisory', image: 'platform-management-v2.webp', alt: 'Advisors aligning strategy with implementation priorities', id: 'management', color: 'platform-warm' },
  { eyebrow: 'People and institutions', title: 'Capacity Building & Specialized Services', image: 'platform-capacity-v2.webp', alt: 'Facilitated professional training and team learning', id: 'capacity', color: 'platform-vibrant' },
  { eyebrow: 'Systems and enablement', title: 'Technology & Digital Solutions', image: 'platform-technology-v1.webp', alt: 'Technology professionals reviewing an enterprise workflow', id: 'technology', color: '' },
  { eyebrow: 'Operations in motion', title: 'Trade, Logistics & Mission Support', image: 'platform-mission-v2.webp', alt: 'Intermodal logistics hub supporting coordinated operations', id: 'mission', color: 'platform-amber' },
];

const gates = [
  { title: 'Understand', text: 'Mission, stakeholders, operating conditions, compliance, and risk.', outcome: 'Aligned scope', Icon: Compass },
  { title: 'Mobilize', text: 'People, partners, suppliers, work plans, controls, and readiness.', outcome: 'Ready to execute', Icon: Users },
  { title: 'Deliver', text: 'Coordinated services, field decisions, quality, and issue resolution.', outcome: 'Controlled action', Icon: Network },
  { title: 'Evidence', text: 'Progress, risk, cost, acceptance, and performance documentation.', outcome: 'Decision visibility', Icon: ClipboardCheck },
  { title: 'Improve', text: 'Feedback, corrective action, continuity, learning, and closeout.', outcome: 'Lasting value', Icon: RefreshCw },
];

export default function HomePage() {
  return <SiteLayout current="Home"><main id="main">
    <section className="hero" id="top">
      <Image className="hero-media" src="/assets/images/pul-global-strategy-hero-v1.webp" alt="Illustrative visualization of a diverse professional team coordinating strategy and implementation" width={1664} height={936} priority sizes="100vw" />
      <div className="hero-overlay" /><div className="shell hero-content">
        <p className="hero-brand-line">Strategy. Solutions. <strong>Execution.</strong></p>
        <h1 className="animated-headline"><span>Built to execute</span><span>where complexity</span><span>is real.</span></h1>
        <p className="hero-lead">A U.S.-registered implementation partner integrating management consulting, program delivery, workforce and capacity building, translation, technology, procurement, logistics, trade, and mission support.</p>
        <div className="button-row"><Link className="button" href="/solutions/">Discover Our Solutions<ArrowRight aria-hidden="true" /></Link><Link className="button button-ghost" href="/schedule/"><CalendarDays aria-hidden="true" />Discuss Your Requirements</Link></div>
        <p className="image-note">Illustrative visualization</p>
      </div>
    </section>
    <section className="impact-strip" aria-label="Institutional experience indicators"><div className="shell metrics">
      <div><Counter end={30} start={1} suffix="+" label="30 or more projects supported" /><span>Projects supported</span></div>
      <div><Counter end={1000} start={10} suffix="+" label="1,000 or more staff managed" /><span>Staff managed</span></div>
      <div><Counter end={10000} start={1} suffix="+" label="10,000 or more people trained" /><span>People trained</span></div>
      <div><Counter end={2010} start={2010} fixed label="Institutional heritage since 2010" /><span>Institutional heritage</span></div>
    </div></section>

    <section className="section intro" id="about"><div className="shell split-intro">
      <div><p className="eyebrow section-kicker">Who we are</p><h2>U.S. accountability.<br /><span>Field-tested execution.</span></h2></div>
      <div className="intro-copy"><p className="lead">PUL Global Partners is built for organizations that need more than advice. We connect strategy, qualified people, trusted suppliers, technology, local context, and accountable delivery into one coordinated implementation platform.</p>
        <p>Our institutional heritage began through PUL Consulting Services in 2010. Today, our Virginia-based company helps government buyers, prime contractors, international organizations, and private-sector partners move from a defined objective to controlled execution, measurable progress, and responsible closeout.</p>
        <p>Whether the requirement is a focused advisory assignment or a complex, partner-enabled program, PUL brings the structure, responsiveness, and field awareness needed to keep the mission moving.</p>
        <div className="execution-proof"><div><ShieldCheck /><span><strong>U.S.-based accountability</strong>Virginia-based corporate oversight</span></div><div><Network /><span><strong>Partner-enabled scale</strong>Specialists, suppliers, and local networks</span></div><div><Check /><span><strong>Evidence-led delivery</strong>Controls, reporting, and responsible closeout</span></div></div>
        <div className="button-row intro-actions"><Link className="button" href="/schedule/">Schedule a Strategy Call<CalendarDays /></Link><Link className="text-link" href="/projects/">Explore our experience<ArrowUpRight /></Link></div>
      </div>
    </div></section>

    <section className="section capabilities" id="capabilities"><div className="shell"><div className="section-heading platform-heading"><div><p className="eyebrow section-kicker">What we do</p><h2>Four business platforms.<br /><span>One delivery mindset.</span></h2></div><p>Explore focused capabilities that can stand alone or work together across a complete implementation requirement.</p></div>
      <div className="platform-showcase">{platforms.map(({ eyebrow, title, image, alt, id, color }) => <Link className={`platform-link ${color}`} href={`/solutions/#${id}`} key={id}><Image src={`/assets/images/${image}`} alt={alt} width={1122} height={1402} loading="lazy" sizes="(max-width:760px) 100vw, (max-width:1100px) 50vw, 25vw" /><span className="platform-shade" /><div><p>{eyebrow}</p><h3>{title}</h3><strong>Explore the platform<ArrowUpRight /></strong></div></Link>)}</div>
    </div></section>

    <section className="section proof" id="experience"><div className="shell"><div className="proof-header"><div><p className="eyebrow light">Implementation heritage</p><h2>Built through delivery.</h2></div><p>Selected historical assignments were delivered through PUL Consulting Services and the PUL management team. They are presented transparently as institutional heritage supporting PUL Global Partners today.</p></div>
      <div className="experience-list"><article><span>Government of the United States</span><h3>U.S. Embassy Annex Support</h3><p>Human resources, payroll management, and floor management for catering service.</p><small>2019–2021 · Overseas mission support</small></article><article><span>GIZ</span><h3>Multi-Province Soft-Skills Training</h3><p>Training across multiple provinces with catering support for more than 5,000 participants across assignments.</p><small>2018–2019 · Capacity building</small></article><article><span>AWDP · Creative Associates · USAID</span><h3>Workforce Development</h3><p>Training, job placement, employer assessment, participant logistics, and catering support.</p><small>2016–2018 · Program implementation</small></article></div>
      <div className="heritage-logos" aria-label="Selected institutional partners and clients"><div><Image src="/assets/images/heritage-usaid.png" alt="USAID" width={461} height={141} loading="lazy" /></div><div><Image src="/assets/images/heritage-world-bank.png" alt="The World Bank" width={2000} height={1544} loading="lazy" /></div><div><Image src="/assets/images/heritage-giz.jpg" alt="GIZ" width={225} height={225} loading="lazy" /></div><div><Image src="/assets/images/heritage-creative-associates.png" alt="Creative Associates International" width={411} height={169} loading="lazy" /></div></div>
      <a className="button button-light" href="/projects/">View selected experience<ArrowRight /></a>
    </div></section>

    <section className="section delivery"><div className="shell"><div className="section-heading compact"><div><p className="eyebrow section-kicker">How we deliver</p><h2>Governed execution.<br /><span>Visible progress.</span></h2></div><p>A five-gate operating framework keeps decisions, ownership, quality, and evidence connected from initial requirement through continuity and closeout.</p></div>
      <div className="delivery-framework" aria-label="PUL delivery framework"><div className="delivery-rail" aria-hidden="true" />{gates.map(({ title, text, outcome, Icon }, index) => <article key={title}><div className="gate-top"><span>Gate {String(index + 1).padStart(2, '0')}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><strong>{outcome}</strong></article>)}</div>
      <div className="delivery-footer"><p><strong>One accountable rhythm.</strong> Adapted to the client, country, contract, and mission.</p><Link className="button" href="/schedule/">Discuss Your Requirement<ArrowRight /></Link></div>
    </div></section>

    <section className="section buyers"><div className="shell buyer-grid"><div><p className="eyebrow section-kicker">Where PUL fits</p><h2>One company.<br /><span>Multiple operating environments.</span></h2><p>PUL can pursue assignments directly, support prime contractors, or assemble partner-enabled teams for specialized and country-specific requirements.</p></div>
      <div className="buyer-visuals"><article><Image src="/assets/images/buyer-federal-missions-v1.webp" alt="Illustrative visualization of professionals coordinating an international mission plan" width={1448} height={1086} loading="lazy" /><div><h3>Federal agencies &amp; overseas missions</h3><p>Prime, subcontract, and implementation support.</p></div></article><article><Image src="/assets/images/buyer-prime-development-v1.webp" alt="Illustrative visualization of an implementation team collaborating" width={1448} height={1086} loading="lazy" /><div><h3>Prime contractors &amp; development implementers</h3><p>Partner-enabled program delivery and local coordination.</p></div></article><article><Image src="/assets/images/buyer-international-private-v1.webp" alt="Illustrative visualization of international and private-sector partners planning" width={1448} height={1086} loading="lazy" /><div><h3>International organizations &amp; private-sector partners</h3><p>Consulting, technology, workforce, and operational support.</p></div></article></div>
    </div></section>

    <section className="section capability-cta"><div className="shell capability-panel"><div><p className="eyebrow light">Procurement ready</p><h2>Review our capabilities.</h2><p>Download the 2026 Capability Statement for core competencies, SAM and SBA data, NAICS codes, buyer fit, differentiators, and selected institutional experience.</p></div><Link className="button button-light" href="/capability/"><FileDown />View capability statement</Link></div></section>

    <section className="section insights" id="insights"><div className="shell"><div className="section-heading compact"><div><p className="eyebrow section-kicker">Perspectives</p><h2>Insights for<br /><span>mission delivery.</span></h2></div><Link className="text-link" href="/insights/">View all insights<ArrowRight /></Link></div>
      <div className="insight-grid"><article className="insight-ai"><div className="insight-meta"><small>Technology &amp; AI</small><span>01</span></div><h3>Responsible AI adoption starts with the work, not the tool.</h3><p>A practical framework for identifying useful, controlled AI opportunities in daily operations.</p><Link href="/insights/responsible-ai-adoption/">Read perspective<ArrowUpRight /></Link></article><article className="insight-program"><div className="insight-meta"><small>Program Management</small><span>02</span></div><h3>Why implementation discipline matters after strategy is approved.</h3><p>Connecting work plans, vendors, reporting, and issue resolution to mission outcomes.</p><Link href="/insights/implementation-discipline/">Read perspective<ArrowUpRight /></Link></article><article className="insight-mission"><div className="insight-meta"><small>Mission Support</small><span>03</span></div><h3>Local execution is a system, not a single service.</h3><p>How staffing, language, logistics, facilities, and reporting work together.</p><Link href="/insights/local-execution/">Read perspective<ArrowUpRight /></Link></article></div>
    </div></section>

    <section className="contact"><div className="shell contact-form-grid"><div><p className="eyebrow light">Start a conversation</p><h2>Bring us the mission.<br />We’ll help structure the execution.</h2><p>Schedule a focused strategy call or share the essentials for a direct follow-up.</p><Link className="button button-light" href="/schedule/"><CalendarDays />Schedule a Strategy Call</Link><p className="form-note">The inquiry form prepares an email draft. Your message is sent only when you choose Send.</p></div><div className="contact-form-placeholder"><h3>Start with the requirement</h3><p>Share your objective, operating context, timeframe, and support needed.</p><Link className="button" href="/contact/">Open the inquiry form<ArrowRight /></Link></div></div></section>
  </main></SiteLayout>;
}
