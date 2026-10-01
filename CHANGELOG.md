# Change Log

## 2026-09-30 Authorized Vercel Review Deployment

- User authorized pushing the reviewed Next.js build to GitHub `main` and deploying it to the existing `pul-global-partners-website` Vercel review project.
- Set the Vercel project's Root Directory to `next-app` and Framework Preset to Next.js; corrected the preset after initial deployed page requests returned 404.
- Commit `2df039e` deployed successfully. Stable review URL: https://pul-global-partners-website.vercel.app/.
- All 11 page/article routes and the Capability Statement PDF returned HTTP 200 after redeployment; the deployed Home page was visually checked.
- The live WordPress installation, `pulglobal.com`, and DNS remain unchanged.

## 2026-09-30 Next.js Review Build Complete

- Implemented the separate Next.js App Router + TypeScript site with static export and three MDX Insights articles.
- Delivered Home, Solutions, About, Projects, Insights, Contact, Strategy Call, and Capability Statement pages using the approved design baseline and governed assets.
- Passed typecheck, optimized static build, 11-route HTTP smoke test, capability PDF check, and responsive browser QA at 1440, 1024, 768, and 390 px.
- No horizontal overflow, broken images, or browser-console errors were observed in the tested viewports; mobile navigation was exercised.
- Kept GitHub, existing Vercel deployment, and the live WordPress site unchanged. Awaiting user review before revisions or release planning.

## 2026-09-30 Change Request 012 Architecture Approval

- Replaced WordPress as the active new-build recommendation with an isolated Next.js App Router and TypeScript application.
- Approved locally authored MDX as the initial workflow for occasional Insights articles; no database or CMS at outset.
- Preserved the current WordPress website, deployed Vercel review build, static prototype, and production configuration unchanged.
- Added ADR-003 and CR-012, updated the product backlog, and began Plan version 1.1 amendment before implementation.
- GitHub push and deployment remain unapproved and out of scope for this change.

## 2026-09-25 Vercel Preview Deployment

- Pushed the completed responsive page system to the GitHub `main` branch.
- Verified the Vercel production deployment and all eight public page routes plus the Capability Statement PDF.
- The `pulglobal.com` WordPress site remains unchanged; this deployment is the separate Vercel prototype.

## 2026-09-25 Change Request 011

- Added complete standalone About, Projects, Insights, Contact, and Capability Statement pages.
- Enriched Solutions with a visual overview of all four distinct service platforms.
- Updated shared navigation, footer paths, and Home calls to action across the page system.
- Added the approved 2026 Capability Statement PDF, an accessible download path, embedded preview, and aligned NAICS table.
- Corrected inquiry and scheduling forms to transparently prepare an email draft without implying transmission or calendar booking.
- Added responsive page-system styles and synchronized shared CSS/JavaScript to the WordPress child-theme scaffold.
- Completed 56 route/viewport responsive checks; fixed the discovered 360 px metric overflow and added intrinsic image dimensions to prevent layout shift.
- Deferred below-the-fold Home and Solutions image decoding/loading while retaining the hero’s high fetch priority.
- Improved the mobile menu’s accessible open/close name and Escape behavior with focus return.
- Historic project references include attribution context and do not imply current direct awards or endorsements.
- Cross-device QA, accessibility checks, and deployment verification are tracked in the Sprint 1 QA record.

## 2026-09-22 Change Request 010

- Normalized the Home and Solutions typography into one coordinated responsive scale.
- Increased undersized descriptions, supporting copy, service summaries, and delivery text for easier executive scanning.
- Moderated oversized section and page headings while preserving the approved typefaces and visual character.
- Kept page structure, imagery, colors, content, and interactions unchanged.
- Mirrored the final typography rules into the WordPress child-theme stylesheet.
- Visually reviewed Home and Solutions at desktop width and verified responsive typography and overflow at 390 px.

## 2026-09-22 Change Request 009

- Removed the institutional logo rail from beneath the Home hero and metrics.
- Relocated the organization marks into Implementation Heritage below the engagement table.
- Replaced the five-logo set with all 12 original institutional logo files from the referenced PUL Consulting prototype at `localhost:3001`.
- Normalized optical size, spacing, alignment, and responsive behavior across a two-row executive grid.
- Finalized the visible set to USAID, The World Bank, GIZ, and Creative Associates and rebalanced the section as one four-column row.

## 2026-09-17 Change Request 008

- Audited the separate PUL Global Executive Prototype at desktop width and identified its strongest trust, content, and operating-model patterns.
- Added a restrained institutional trust rail with five approved-profile organization marks and explicit heritage disclosure.
- Added three executive delivery attributes to Who We Are without repeating registration identifiers or contact details.
- Rebuilt the five-gate delivery framework as a quieter, higher-clarity operating model with professional line icons.
- Added a two-action executive header that adapts cleanly across desktop, tablet, and mobile widths.
- Applied the Version 9 visual system consistently to Home, Solutions, and Strategy Call pages.
- Retained the approved Version 8 platform imagery, Implementation Heritage structure, and Where PUL Fits layout.

## 2026-09-17 Change Request 007

- Replaced three platform images with differentiated subjects and color systems while retaining Technology.
- Restored Implementation Heritage to its Version-6 structure.
- Restored Where PUL Fits to its Version-6 image-card layout.

## 2026-09-17 Change Request 006

- Rebuilt the platform cards with coordinated executive imagery.
- Replaced the delivery icons with a governed five-gate framework.
- Replaced buyer-fit imagery with a professional market architecture.
- Added selected client logos extracted from the approved Company Profile.
- Restyled the Insights cards and increased section-label hierarchy.
- Enriched Who We Are and added contextual strategy-call actions.

## 2026-09-17 Change Request 005

- Moved the animated institutional metrics directly below the Home hero.
- Restored the requested metric labels and 2010 heritage value.
- Slowed the metric animation to 4.2 seconds.
- Removed the Execution box and enlarged the white brand line.

## 2026-09-16 Change Request 004

- Enlarged the verified original PUL logo and primary navigation.
- Updated the brand line to “Strategy. Solutions. Execution.”
- Slowed the Home headline animation.
- Replaced gold accents with the public site’s brighter blue direction.
- Added accessible, viewport-triggered metric count-up animations.

## 2026-09-16 Change Request 003

- Replaced the Home capability CTA with a direct Solutions pathway.
- Added a strategy-call request page and Home callback form.
- Rebuilt the platform overview as four large, color-coded links to relevant Solutions sections.
- Recast the delivery process as a connected visual journey.
- Added three governed AI-generated operating-environment visuals.
- Mirrored shared assets and styles into the WordPress child-theme scaffold.

## 2026-09-16 Change Request 002

- Added Home browser and navigation tab naming.
- Strengthened the hero brand statement and complete-solution introduction.
- Added accessible headline reveal animation.
- Removed the Home credential band.
- Tightened section spacing and strengthened the “Who we are” hierarchy.
- Verified the revised Home first viewport on desktop and mobile.

## 2026-09-16 Change Request 001

- Integrated the official PUL Global Partners logo.
- Removed redundant registration and contact details from the Home header and footer.
- Aligned the Home hero with the desktop viewport.
- Simplified the Home credential band.
- Created the first Solutions page concept using existing-site terminology aligned with the final Company Profile.
- Updated design, QA, status, and change-control records.

## 2026-09-16 Sprint 1 start

- Recorded executive approval of Project Management Plan version 1.0.
- Started the design foundation and Home page epic.
- Created a responsive local Home page prototype and WordPress Blocksy child-theme scaffold.
- Added the first governed AI-generated hero visual.
- Completed initial desktop and mobile visual QA.
- Kept the production website unchanged.

## 2026-09-16

- Created project governance repository.
- Added proposed technology architecture.
- Added initial project status and session continuity protocol.
- Created Project Management Plan version 1.0 for executive review.
- No website implementation or production change was performed.
