export const priorityServices = [
  {
    slug: 'federal-proposal-support',
    title: 'Federal Proposal Support',
    description: 'Proposal planning and development for federal contractors, from opportunity assessment and compliance matrices to technical narratives and submission review.',
    section: 'business-development',
    related: ['/insights/federal-contract-strategies/', 'Read the federal proposal readiness guide'],
    audience: 'For prime contractors, subcontractors, and small businesses evaluating a federal pursuit or adding proposal capacity ahead of a deadline.',
    deliverables: [
      ['Opportunity assessment', 'Review the solicitation, evaluation factors, past performance fit, capacity, and pursuit risks before committing resources.'],
      ['Proposal planning and development', 'Build a compliance matrix and review schedule. Develop technical narratives, work plans, and supporting evidence against the solicitation.'],
      ['Budget and submission review', 'Organize budget inputs and check the proposal against submission instructions. The client validates pricing, approves representations, and controls final submission.'],
    ],
  },
  {
    slug: 'government-contracting-teaming-virginia',
    title: 'Government Contracting & Teaming in Virginia',
    description: 'Virginia-based teaming and implementation support for federal prime contractors, including pursuit coordination, staffing, procurement, and delivery support.',
    section: 'management',
    related: ['/about/#projects', 'Explore PUL’s institutional project experience'],
    audience: 'For federal primes and implementation partners seeking a defined workstream, specialized capacity, or support coordinating delivery in the United States and abroad.',
    deliverables: [
      ['Teaming and scope definition', 'Assess a qualified opportunity, identify complementary capabilities, and agree on deliverables, responsibilities, and reporting expectations.'],
      ['Mobilization and delivery coordination', 'Coordinate specialists, workforce, suppliers, and local partners around an agreed schedule and operating requirements.'],
      ['Reporting and closeout', 'Set milestones, track issues and deliverables, document acceptance, and support handoff and closeout.'],
    ],
  },
  {
    slug: 'procurement-contract-management',
    title: 'Procurement & Contract Management Support',
    description: 'Procurement planning, IT sourcing coordination, supplier evaluation documentation, and contract administration support for government and commercial teams.',
    section: 'procurement',
    related: ['/insights/federal-technology-readiness/', 'Read the federal technology readiness guide'],
    audience: 'For program, acquisition, and delivery teams coordinating IT, network, cloud, data center, or other defined procurement requirements.',
    deliverables: [
      ['Procurement planning and evaluation support', 'Clarify requirements, research the market, coordinate supplier outreach, and document bid comparisons and evaluation inputs.'],
      ['IT sourcing coordination', 'Coordinate sourcing for hardware, software, cloud, network, and data center needs against the technical scope and client requirements.'],
      ['Contract administration and closeout', 'Track obligations, milestones, service levels, changes, invoices, acceptance records, and renewal or closeout actions.'],
    ],
  },
];

export function servicePath(slug: string) {
  return '/solutions/' + slug + '/';
}
