# Change Request 012 Next.js Codebase and Insights Workflow

## Authorization

- Approved by user: 2026-09-30
- Scope: Implement a separate Next.js and TypeScript review build based on the approved PUL design and existing page framework.
- Production deployment: Not authorized. The live WordPress site, current Vercel deployment, and production project settings remain unchanged.

## Business outcome

Provide a maintainable code-first website that can be revised through this conversation, including occasional Insights articles, without introducing a database or a full CMS before the editorial volume requires one.

## Requirements

- Use Next.js App Router and TypeScript in an isolated `next-app/` directory, configured for static export.
- Preserve the recognizable Home, Solutions, About, Projects, Insights, Contact, Capability, and Strategy Call page destinations and approved PUL design direction.
- Use local MDX as the initial source format for Insights articles, with typed/validated metadata, index cards, article pages, dates, categories, and SEO metadata.
- Keep pages statically generated where appropriate and avoid unnecessary client JavaScript, runtime services, and dependencies.
- Use the approved logo, images, copy, and capability statement assets from the existing prototype; do not modify the reference prototype.
- Keep forms, scheduling, and other external integrations transparent and nonfunctional until a provider is selected and connected.
- Provide responsive behavior, accessible navigation, descriptive metadata, working internal links, optimized images, and a documented local editing workflow.
- Maintain claim and imagery governance; historic experience must not imply a current award or endorsement.
- Do not push, deploy, or alter current production settings without separate explicit approval.

## Hosting implication

Static export emits a deployable set of files and does not require a Node.js production server for the initial website. one.com and Vercel remain candidate hosts only; compare actual routing, redirects, forms, analytics, domain ownership, and IT requirements before selecting or releasing to either.

## Acceptance criteria

- All eight existing public destinations render and link correctly; Insights index and sample article routes render from MDX.
- Type checking and production build pass.
- Desktop, laptop, tablet, and mobile layouts have no unintended overflow, clipping, or overlapping content.
- Navigation and key actions work with keyboard and touch; reduced-motion behavior is respected.
- Every referenced local asset and PDF loads; images have useful alt text and responsive dimensions.
- SEO metadata is present and unique on principal pages and articles.
- Contact and scheduling behavior is not misrepresented as a delivered submission or confirmed appointment.
- Existing `prototype/` files, current Vercel settings, and public deployments remain unchanged.
- README, plan, ADR, backlog, QA evidence, changelog, and session status reflect the approved architecture and exact next step.
