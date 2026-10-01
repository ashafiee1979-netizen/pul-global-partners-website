import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Check, Cpu, Download, GraduationCap, Truck } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = { title: 'Capability Statement', description: 'Download the PUL Global Partners 2026 Capability Statement with company profile, NAICS codes, competencies, buyer fit, and selected experience.' };

const naics = [
  ['541611', 'Administrative & General Management Consulting', '541618', 'Other Management Consulting Services'],
  ['541612', 'Human Resources Consulting Services', '541613', 'Marketing Consulting Services'],
  ['541614', 'Process, Distribution & Logistics Consulting', '611430', 'Professional & Management Development Training'],
  ['541930', 'Translation & Interpretation Services', '561920', 'Convention & Trade Show Organizers'],
  ['561499', 'All Other Business Support Services', '541511', 'Custom Computer Programming Services'],
  ['541512', 'Computer Systems Design Services', '541513', 'Computer Facilities Management Services'],
  ['541519', 'Other Computer Related Services', '', ''],
];

const competencies = [
  { title: 'Management & Advisory', Icon: BriefcaseBusiness, items: ['Program and project management', 'Organization and workforce support', 'HR, payroll, and administration', 'Monitoring, reporting, and closeout'] },
  { title: 'Capacity Building & Language', Icon: GraduationCap, items: ['Training and facilitation', 'AI literacy and staff adoption', 'Translation and interpretation', 'Workshops, outreach, and events'] },
  { title: 'Mission, Logistics & Hospitality', Icon: Truck, items: ['Local vendor coordination', 'Procurement and logistics tracking', 'Facilities, transport, and lodging', 'Catering and hospitality support'] },
  { title: 'Technology & AI Implementation', Icon: Cpu, items: ['IT consulting and help-desk support', 'Networks, systems, and business apps', 'AI implementation support', 'Digital workflow improvement'] },
];

export default function CapabilityPage() {
  return <SiteLayout><main id="main">
    <PageHero current="Capability Statement" eyebrow="Procurement ready" title={<>Clear fit.<br />Ready to deliver.</>} description="The PUL Global Partners 2026 Capability Statement summarizes the company profile, core competencies, NAICS classifications, buyer fit, differentiators, and selected institutional experience." image="/assets/images/platform-mission-v2.webp" imageAlt="Illustrative logistics and mission support operations"><div className="button-row"><a className="button" href="/assets/documents/PUL-Global-Partners-Capability-Statement-2026.pdf" download><Download />Download PDF</a><Link className="button button-ghost" href="/contact/">Discuss a requirement</Link></div><p className="page-hero-note">PDF · Approved 2026 company document</p></PageHero>
    <section className="proof capability-metrics"><div className="shell"><div className="metrics"><div><strong>30+</strong><span>Projects supported</span></div><div><strong>1,000+</strong><span>Staff managed</span></div><div><strong>10,000+</strong><span>People trained</span></div><div><strong>2010</strong><span>Institutional heritage</span></div></div><p className="heritage-disclosure">Portfolio indicators reflect selected institutional experience and work of the PUL management team.</p></div></section>
    <section className="section capability-details"><div className="shell"><div className="section-heading"><div><p className="eyebrow">The capability overview</p><h2>Four complementary<br /><span>competency groups.</span></h2></div><p>PUL’s delivery model links people, programs, technology, suppliers, mission support, and reporting under one coordinated approach.</p></div><div className="competency-grid">{competencies.map(({ title, Icon, items }) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
    <section className="section capability-fit"><div className="shell capability-fit-layout"><div><p className="eyebrow">Best-fit buyers</p><h2>Built for varied<br /><span>operating environments.</span></h2><p>Virginia-based prime, subcontract, local-partner, and implementation partner for federal buyers and organizations delivering complex work.</p><div className="buyer-chip-grid"><span>U.S. federal agencies</span><span>Embassies and overseas missions</span><span>Prime contractors</span><span>Development implementers</span><span>NGOs and international organizations</span><span>Private-sector partners</span></div></div><div className="differentiator-panel"><p className="eyebrow">Why PUL fits</p><ul><li><Check />Transparent institutional heritage under the current U.S. entity.</li><li><Check />One delivery model connects strategy, people, vendors, logistics, reporting, and closeout.</li><li><Check />Practical experience across missions, development, telecom, training, language, and catering.</li><li><Check />Flexible prime, subcontract, consortium, and local-partner roles.</li></ul></div></div></section>
    <section className="section naics-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">SAM profile</p><h2>NAICS classifications<br /><span>in the approved statement.</span></h2></div><p>Codes and descriptions below are reproduced from the 2026 Capability Statement.</p></div><div className="naics-table-wrap"><table className="naics-table"><thead><tr><th>NAICS</th><th>Description</th><th>NAICS</th><th>Description</th></tr></thead><tbody>{naics.map((row) => <tr key={row[0]}>{row.map((cell, i) => <td key={`${row[0]}-${i}`}>{cell}</td>)}</tr>)}</tbody></table></div><p className="naics-note">The official statement labels these classifications as drawn from the SAM file. Confirm current registration details and solicitation fit before submission.</p></div></section>
    <section className="section statement-preview"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Official document</p><h2>Review the full<br /><span>Capability Statement.</span></h2></div><a className="button" href="/assets/documents/PUL-Global-Partners-Capability-Statement-2026.pdf" download><Download />Download PDF</a></div><iframe title="PUL Global Partners 2026 Capability Statement" src="/assets/documents/PUL-Global-Partners-Capability-Statement-2026.pdf#view=FitH" className="statement-pdf" /><p className="form-note"><a href="/assets/documents/PUL-Global-Partners-Capability-Statement-2026.pdf" download>Download the 2026 Capability Statement PDF</a></p></div></section>
    <section className="contact"><div className="shell contact-inner"><div><p className="eyebrow light">Partner with PUL</p><h2>Let’s talk about your requirement.</h2></div><div><p>Discuss a contract opportunity, teaming fit, mission need, or delivery challenge.</p><Link className="button button-light" href="/contact/">Start a conversation<ArrowRight /></Link></div></div></section>
  </main></SiteLayout>;
}
