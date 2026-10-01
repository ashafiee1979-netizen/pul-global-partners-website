# PUL Global Partners Website Redesign

This repository governs the local design, content, development, quality assurance, and deployment preparation for the PUL Global Partners website redesign.

## Technology decision

The approved direction is a statically exported Next.js App Router site using TypeScript and locally authored MDX for Insights. The current page framework and approved design are preserved and enriched. No database or hosted CMS is included. The user has authorized pushing the reviewed build to GitHub `main` and deploying it to the existing Vercel review project; this does not authorize changing the live WordPress site or the `pulglobal.com` domain. See `docs/decisions/ADR-003-nextjs-content-architecture.md` and Change Request 012.

## Operating rules

- No implementation begins until the project plan is approved and the user gives explicit authorization.
- `STATUS.md` is the starting point for every session and the closing record for every working session.
- Material changes must update the plan, backlog, decision log, and change log before dependent work begins.
- Credentials, passwords, private keys, database exports, and sensitive data must never be committed.
- Claims, client names, logos, metrics, testimonials, and past performance require evidence and approval.
- AI-generated imagery is conceptual and must never be represented as project evidence.

## Key locations

- `docs/plan/` controlled project plan
- `docs/decisions/` architecture and business decisions
- `docs/requirements/` requirements, claims, evidence, and acceptance criteria
- `docs/design/` design system and image governance
- `docs/qa/` test plans and results
- `docs/deployment/` deployment and rollback records
- `backlog/` prioritized work and sprint records
- `assets/ai-register/` AI asset governance records
- `next-app/` separate Next.js review build
- `prototype/` preserved visual/content reference and previously deployed baseline
- `wordpress/` historical implementation scaffold; not the selected new build target

Read `STATUS.md` before doing any work.
