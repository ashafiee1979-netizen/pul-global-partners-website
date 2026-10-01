import ResponsibleAI from './responsible-ai-adoption.mdx';
import Implementation from './implementation-discipline.mdx';
import LocalExecution from './local-execution.mdx';

export const posts = [
  { slug: 'responsible-ai-adoption', category: 'Technology & AI', title: 'Start with the work, not the tool.', cardTitle: 'Responsible AI adoption starts with the work, not the tool.', description: 'A practical framework for identifying useful, controlled AI opportunities in daily operations.', image: '/assets/images/platform-technology-v1.webp', imageAlt: 'A team reviewing a digital workflow and technology adoption plan', Body: ResponsibleAI },
  { slug: 'implementation-discipline', category: 'Program Management', title: 'Approval is a beginning, not a delivery plan.', cardTitle: 'Why implementation discipline matters after strategy is approved.', description: 'Connect work plans, vendors, reporting, and issue resolution to mission outcomes.', image: '/assets/images/platform-management-v2.webp', imageAlt: 'Program leaders translating strategy into an implementation plan', Body: Implementation },
  { slug: 'local-execution', category: 'Mission Support', title: 'Local execution is a system, not one service.', cardTitle: 'Local execution is a system, not a single service.', description: 'How staffing, language, logistics, facilities, and reporting work together.', image: '/assets/images/platform-mission-v2.webp', imageAlt: 'Logistics operations connecting facilities, suppliers, and delivery teams', Body: LocalExecution },
] as const;
