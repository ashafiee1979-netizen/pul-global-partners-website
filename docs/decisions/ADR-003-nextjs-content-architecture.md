# ADR 003 Next.js and Content Architecture

- Status: Approved; deployment to the separate Vercel review project authorized 2026-09-30
- Date: 2026-09-30
- Supersedes: ADR-001 as the active architecture recommendation
- Authorization boundary: Deploy the reviewed build to `pul-global-partners-website.vercel.app`; do not modify `pulglobal.com`, its WordPress installation, or DNS

## Decision

Build a separate Next.js App Router application using TypeScript and static export. Keep the existing public page framework and approved PUL visual direction. Use locally authored MDX files for occasional Insights articles, with article routes and metadata generated during the build. Do not add a database, hosted CMS, account system, or server-side service for the initial scope.

## Rationale

PUL expects to make relatively few routine site changes, with occasional new Insights articles. MDX keeps those articles structured, versioned, searchable in the repository, and straightforward for an agent or developer to update without introducing a CMS account, database, plugin maintenance, or recurring subscription. Next.js and TypeScript align with the established codebase patterns in the user's other websites and provide reusable page components, typed content structures, metadata, and a maintainable path for future growth.

This is a better fit for the requested code-first workflow than adding WordPress solely to publish a small number of articles. It does make routine edits more developer-dependent; that tradeoff is accepted for this phase. If PUL later needs frequent self-service publishing, multi-person editorial approvals, or a nontechnical authoring interface, reassess a lightweight headless CMS against the actual workflow before adding one.

## Consequences and controls

- The existing page names and visitor-facing format remain recognizable; implementation technology changes, not the intended information architecture.
- Keep pages statically renderable where practical; use server features only when a verified requirement needs them.
- Export the review build as static HTML, CSS, JavaScript, and assets so the package can run on compatible static hosting without a Node.js server. This leaves one.com and Vercel as future candidates, not selected/authorized destinations.
- Store Insights content as MDX with frontmatter validation and a consistent article template.
- Contact and scheduling actions must accurately describe behavior. Do not imply a form was transmitted or a meeting booked unless an approved provider is integrated and verified.
- Preserve the current deployed website and the prior static prototype as references. Build in a separate `next-app/` folder.
- The user explicitly authorized pushing the reviewed build to GitHub `main` and deploying it to the existing Vercel review project on 2026-09-30. This does not authorize changing the live WordPress site, its DNS, or the `pulglobal.com` domain.
- Keep secrets out of Git; production email, scheduling, analytics, and other integrations require separate security and privacy review.

## Revisit triggers

Reassess the content architecture if the publishing cadence becomes frequent, nontechnical staff need to create/publish content unaided, formal editorial workflows become necessary, dynamic personalization is required, or the hosting/deployment model changes materially.
