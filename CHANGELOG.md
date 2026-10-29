# Change Log

## 2026-10-29 Secure Form Delivery Foundation

- Replaced client-side email drafts with a Next.js serverless form endpoint. Strategy Call messages route to `info@pulglobal.com`; Partnership messages route to `partner@pulglobal.com`; each sender receives a plain-text acknowledgement after PUL's notification is accepted by SMTP.
- Added Cloudflare Turnstile client widget and mandatory server-side validation, a honeypot, bounded input validation, clear submission states, and safe failure behavior. No message database or calendar booking was added.
- Switched from static-only export to Vercel's Next.js serverless runtime. Upgraded Next.js and `@next/mdx` to 16.4.3 following npm's critical advisory; `npm audit` now reports zero vulnerabilities.
- Added ADR-004, CR-013, form setup/deployment guidance, and a project-plan amendment. SMTP/Turnstile credentials are not present; live email sending awaits owner configuration and inbox tests.
- `npm run typecheck`, `npm run build` (15 routes including `/api/contact`), and `npm audit` (0 vulnerabilities) passed. Negative-path checks rejected missing configuration, malformed fields, and invalid human-verification tokens. An integration test with Cloudflare's official test secret and a mock SMTP server verified both recipient routes and both acknowledgements. No real email was sent; live mailbox delivery still awaits owner setup. No push or deployment performed.

## 2026-10-29 Phone and Capability Statement Update

- Replaced the public Capability Statement PDF with the new October 29, 2026 version from the Profile folder. The existing download and embedded-preview URL remains unchanged; the replacement PDF includes the new phone number.
- Updated the Partner With Us contact details and click-to-call link, plus the shared footer, to `+1-540-993-7496`.
- `npm run typecheck`, `npm run build` (14 routes), local Contact HTTP check (200), and PDF HTTP check (200) passed. GitHub push completed in commit `117b57e`; Vercel deployment status was not verified.

## 2026-10-28 Partner Form and Intro Alignment

- Reorganized “Start a partnership conversation” into a two-column layout: title, supporting copy, and direct-contact details remain together on the left while the form aligns at the top of the right column. Mobile stacks the columns.
- `npm run typecheck`, `npm run build` (14 routes), local Partner With Us HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Partner Conversation Intro Alignment

- Moved the partnership intro copy from the disconnected right-hand heading column to directly below “Tell us what you want to build,” with a controlled line width and tighter title-to-copy spacing. Contact details and form remain grouped below.
- `npm run typecheck`, `npm run build` (14 routes), local Partner With Us HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Partner With Us Card, Process, and Contact Refinement

- Added coordinated blue, teal, slate, and warm tints to partner-type and opportunity cards, with stronger icon and number hierarchy.
- Recast the three collaboration stages as a numbered process graphic with matching color accents.
- Tightened “Start a partnership conversation” spacing, reduced form/contact gaps and padding, and improved form heading hierarchy without changing inquiry behavior or its email-draft notice.
- `npm run typecheck`, `npm run build` (14 routes), local Partner With Us HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Who We Are Experience Band Softening

- Replaced the full-width navy Experience background with a restrained blue-gray surface and retuned its metrics, disclosure, experience pillars, and delivery heading to dark high-contrast colors. Preserved the five-gate cards and page structure.
- `npm run typecheck`, `npm run build` (14 routes), local Who We Are HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Who We Are Page Alignment

- Aligned Who We Are heading scale, blue accents, paragraph rhythm, and section spacing with the refined Home and Solutions pages.
- Reworked the foundation facts, five delivery gates, and four experience-domain blocks with restrained coordinated color, clearer icon/number hierarchy, and consistent responsive card layouts.
- Improved the partnership callout with a consistent primary action and increased contrast in the closing contact copy. Preserved historical-experience attribution and avoided client/assignment claims.
- `npm run typecheck`, `npm run build` (14 routes), local Who We Are HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Solutions Card Color Pass

- Added a coordinated but varied tint system to the Solutions platform cards, detailed service panels, economic-growth cards, and delivery cards. Platform accents carry through card labels and actions; hover remains restrained and reduced-motion aware.
- `npm run typecheck`, `npm run build` (14 routes), local Solutions HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Solutions Page Professional Refinement

- Aligned Solutions typography and supporting-copy sizes with the refined Home system; strengthened blue heading accents and clarified the overview copy.
- Refined the six image-led platform cards for a more balanced image/text ratio and legible service summaries. Rebuilt the 24 detailed service summaries as consistent, responsive panels with restrained platform-specific accents.
- Improved Economic Growth & SME Support hierarchy and card treatment, and integrated the Capability Statement link into “How capabilities connect” rather than retaining a separate “Procurement ready” block.
- `npm run typecheck`, `npm run build` (14 routes), local Solutions HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Home Section Title Blue Accent

- Strengthened the blue accent on the five requested Home section-title phrases: “Field-tested execution,” “One delivery mindset,” “workforce, and markets,” “Visible progress,” and “Several ways to deliver.” Other title and brand colors remain unchanged.
- `npm run typecheck`, `npm run build` (14 routes), local Home HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Home Closing Copy White Contrast

- Set both supporting sentences in the Home closing contact section to white for clearer reading on the navy background. Preserved all requested section-title colors unchanged.
- `npm run typecheck`, `npm run build` (14 routes), local Home HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Home Dark-Section Contrast Refinement

- Improved text contrast in the Home closing contact section, including supporting copy, the secondary button, and any heading accent on navy.
- Lightened footer corporate details and legal text and increased the legal line to 12 px while preserving the existing footer layout.
- `npm run typecheck`, `npm run build` (14 routes), local Home HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Home Who We Are Intro Balance

- Reorganized the Home “Who we are” section so its three existing proof points sit in a compact vertical stack beneath the headline, using the previously open left-column space without adding decorative filler or repeating copy.
- Preserved the narrative and calls to action as one right-column group on desktop; tablet and mobile switch to a single-column reading order with the proof points after the narrative.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. Local preview: http://localhost:4175/. No push or deployment performed.

## 2026-10-28 Home Where PUL Fits Redesign

- Replaced the image-led “Where PUL Fits” area with three audience profiles, three clear engagement models, and a single partnership CTA. The layout uses restrained brand accents, aligned typography, and responsive desktop/mobile arrangements without photography.
- Removed the Home “Procurement Ready” Capability Statement panel; the footer Capability Statement link remains available.
- Desktop and phone-width previews reviewed. `npm run typecheck`, `npm run build` (14 routes), local Home HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-28 Home Platform and Economic Growth Visual Refinement

- Removed the period after “Six service platforms” in the Home section headline.
- Restyled the six “What we do” links with restrained, varied brand-color tints, clearer accent hierarchy, and equal card sizing.
- Reworked the Economic Growth & SME Support cards with coordinated color accents, icon tiles, aligned headings, and responsive two-column/stacked layouts.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. Local preview: http://localhost:4175/. No push or deployment performed.

## 2026-10-28 Home Page Color, Typography, and Rhythm Refinement

- Reworked the Home “How we deliver” framework as five coordinated stage cards with distinct restrained accents, clearer gate markers, consistent outcome rows, and responsive spacing.
- Aligned Home section heading sizes, body-copy rhythm, vertical spacing, and highlight colors while preserving the approved hero and page structure.
- `npm run typecheck`, `npm run build` (14 routes), local Home HTTP check (200), and `git diff --check` passed. No push or deployment performed.

## 2026-10-26 Solutions Card Alignment and Crop Refinement

- Balanced the six platform-card summaries to a consistent scan length and set shared category, title, summary, and action spacing so text panels align uniformly.
- Fixed card proportions at desktop, tablet, and phone widths, with taller image bands than text panels; adjusted the first three image crops to start at the top and retain subjects' heads.
- Verified the updated card content in the local Solutions browser tab. `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. No push or deployment performed.

## 2026-10-26 Solutions Card Image Framing Follow-up

- Increased all six Solutions card image frames from 164 px to 192 px on desktop, 180 px on tablet, and 160 px on phones so more of each source scene is visible without returning to full-image cards.
- Repositioned each image independently to retain faces and useful context while keeping every frame edge-aligned to the same card dimensions.
- Browser verification confirmed six loaded images at identical 192 px desktop frame height and visually checked both card rows. `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. No push or deployment performed.

## 2026-10-26 Solutions Content, Imagery, Delivery Section, and Footer

- Expanded the Solutions overview introduction to explain the breadth of the six platforms and how buyers can combine them around objectives and operating context.
- Increased the six card image bands to 164 px on desktop and tuned each focal position to keep people and relevant context in frame; image bands step down at tablet and phone widths.
- Combined “How capabilities connect” and “Procurement ready” into one light, structured delivery-readiness section with three delivery pathways and an integrated Capability Statement CTA.
- Refined the shared footer component and styles used across all pages: balanced columns, smaller logo/tagline block, clearer link groups, reduced vertical padding, and aligned compact legal line.
- Verification: desktop browser visual checks of Solutions cards, combined section, and footer; TypeScript check, optimized build (14 routes), and `git diff --check` passed. Responsive breakpoints are implemented; this pass did not emulate a phone viewport. No push or deployment performed.

## 2026-10-26 Solutions Platform Card Refinement

- Reworked the six Solutions overview cards to follow PUL Consulting's compact image-strip and white-content-card pattern: 126 px image bands, readable platform labels/titles, concise gray summaries, and aligned service links.
- Preserved the six distinct images, section anchors, and detailed service descriptions below the card directory. Decorative image overlays were removed from these cards; images are now treated as decorative for assistive technology because adjacent text supplies the meaning.
- Responsive layout retains three columns on desktop, two on tablet, and a single column on phones with slightly shorter image bands.
- Verification: desktop Chrome visual review and computed-style inspection, TypeScript check, optimized build, and `git diff --check`. No push or deployment performed.

## 2026-10-26 Home Platform Directory Refinement

- Replaced the six large Home service photographs with a compact text-first directory, keeping the six official platform titles prominent and linking each to its matching Solutions section.
- Reduced the Home introduction to one concise sentence so the page acts as a clear overview while Solutions carries service descriptions and imagery.
- Responsive layout uses three columns on desktop, two on medium screens, and one column on phones; links include visible focus and restrained hover feedback.
- Reference review: Tetra Tech's Solutions taxonomy and Deloitte's service-area organization informed the scannable, detail-page-first approach. The layout remains tailored to PUL branding.
- Verification: TypeScript check, optimized build (14 routes), rendered desktop screenshot, accessibility link/anchor check, and `git diff --check` passed. No push or deployment performed.

## 2026-10-26 Home Hero Image Reframing

- Shifted the Home hero image to a 22% vertical position on desktop and retained the established right-biased horizontal crop on mobile.
- The woman's head is fully in frame with a modest top margin; the bottom/table area absorbs more of the crop. Hero height and metrics transition are unchanged.
- Browser visual check passed at the current desktop preview viewport. TypeScript and optimized build passed; `git diff --check` pending. No push or deployment performed.

## 2026-10-26 Home Hero Height Adjustment

- Reduced the Home hero to a 76 svh target with 520 px minimum and 680 px maximum on desktop; reduced mobile minimum to 580 px.
- Tightened Home-only vertical content padding so the headline, copy, and actions fit inside the hero, and more of the metrics band appears below it.
- Preserved the current hero image crop, typography, animation, and all interior-page hero dimensions.
- Verification: browser measurement at the current desktop viewport confirms the 518 px content block fits inside the 520 px hero; the metrics band enters the first screen. TypeScript and optimized build (14 routes) passed; `git diff --check` passed. No push or deployment performed.

## 2026-10-26 Unified Three-Page Hero Layout

- Standardized the Solutions, Who We Are, and Partner With Us heroes as a consistent 620 px desktop split layout, with copy in a dedicated 45% navy column and photography in a 55% right column.
- Removed text/photo overlap; aligned hero dimensions, title sizing, spacing, and image treatment across all three pages.
- Stacked copy above full-width photography below 820 px to keep portrait tablets and phones readable without overlay.
- Browser measurements at 1536 px confirmed equal hero heights and image boundaries with the text column; all CTA pairs remain in one row on desktop. All three page heroes visually inspected. TypeScript, optimized build (14 routes), and `git diff --check` passed. No push or deployment performed.

## 2026-10-26 Solutions and Partner Hero Framing

- Changed the Solutions and Partner With Us desktop/tablet hero images to fit the full source composition, right-aligned against the navy hero background rather than enlarged and cropped edge-to-edge.
- Kept cover framing on mobile so the hero image remains full-bleed at narrow widths.
- Visually checked both updated desktop heroes in Chrome; no content or navigation changes. `npm run typecheck`, optimized build (14 generated routes), and `git diff --check` passed. Mobile cover behavior remains controlled by the existing narrow-screen breakpoint. No push or deployment performed.

## 2026-10-26 Hero Image and Motion Refinement

- Brightened the full-bleed Home, Solutions, Who We Are, Partner With Us, and Capability Statement hero photography while retaining gradients for readable white text.
- Repositioned the Solutions hero image toward the top of its wide crop; the full presenter head remains visible in the desktop preview.
- Applied Home's staggered line-reveal animation to all interior hero headlines, including the Capability Statement. Existing reduced-motion rules keep these headings static when requested.
- Verification: browser-confirmed computed animation on all five hero routes and verified image brightness/object-fit across the Home, Solutions, Who We Are, Partner With Us, and Capability Statement heroes; inspected Home and Solutions visually. `npm run typecheck`, optimized `npm run build` (14 generated routes), and `git diff --check` passed. No push or deployment performed.

## 2026-10-26 Site-wide Viewport and Section-Rhythm Fix

- Established a shared page-spacing scale (64 px desktop, 52 px tablet, 44 px mobile) for unscoped and page-specific sections; reduced the Home mobile closing-band exception to match.
- Removed the lingering 88 px Solutions-to-capability transition override so page transitions follow the same responsive spacing scale.
- Rebuilt the Capability Statement opening as a full-width image-led hero consistent with the other interior pages, with responsive two-column-to-stacked content and a fixed, cover-cropped image layer.
- Tightened spacing across Home, Solutions, Who We Are, and Partner With Us while preserving each page's content order and structure.
- Verification: TypeScript check and optimized build passed (14 generated routes); nine local routes returned HTTP 200; desktop route dimensions checked at 1280 px with no document-width overflow; Home and Capability hero visually inspected. Earlier mobile/tablet baseline remains recorded in status; this pass did not claim new automated mobile viewport emulation. No push or deployment performed.

## 2026-10-26 Executive-Level Brand and Conversion Refinement

- Replaced the fragmented Home hero slogan with a clear U.S.-registered implementation-partner position and concise buyer-focused copy; retained the approved photo, headline, page structure, and brand palette.
- Added institutional-experience attribution alongside Home metrics and shortened the count-up animation to settle in 1.8 seconds with an ease-out curve.
- Changed call-to-action wording from booking/scheduling language to call-request language because the present flow prepares an email and does not reserve a calendar time; updated the navigation label, form action, and browser title accordingly.
- Corrected Partner With Us section-heading and inquiry layout at phone and narrow-tablet widths.
- Validation: `npm run typecheck`, optimized `npm run build` (14 routes), six-page local route smoke test, and `git diff --check` passed. Home and Partner With Us were visually checked at desktop, tablet (768 px), and phone (390 px); no horizontal overflow. No push or deployment performed.

## 2026-10-26 Site-wide Quality Control

- Visually reviewed Home, Solutions, Who We Are, Partner With Us, Capability Statement, and Strategy Call for hierarchy, spacing, alignment, image framing, readability, color, and shared navigation.
- Corrected low-contrast delivery-step headings and icons on Who We Are; balanced its five-step grid at tablet widths.
- Adjusted Partner With Us hero framing to keep the subject comfortably in view and refined the contact-section heading layout for tablet widths.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. No push or deployment performed.

## 2026-10-25 Insights Page Removal

- Removed Insights from primary and footer navigation and removed the Home Perspectives section and article cards.
- Replaced the Insights hub and published article views with a simple redirect to Home for legacy URLs; retained MDX article source files as unpublished content.

## 2026-10-25 Shared Navigation Position Fix

- Removed the Home-only navigation tab font-size override. The differing font widened the tab group and moved its starting position compared with Solutions and other routes.
- Primary navigation now inherits the shared tab typography and width on every page, preserving a consistent anchored position during route changes.

## 2026-10-25 Strategy Call Page Simplification

- Removed the blue photo hero from the Strategy Call page so the content begins directly with “What to expect”; established that as the page-level heading.
- Removed the extra Strategy Call entry added inside the responsive navigation. Kept the existing header Schedule a Call action.
- Preserved the existing email-draft request behavior and its no-calendar-booking disclosure.
- `npm run typecheck`, `npm run build` (14 routes), `git diff --check`, and the local `/schedule/` HTTP 200 check passed. No push or deployment performed.

## 2026-10-25 Strategy Call CTA Refinement

- Refined the header Schedule Call action with consistent button sizing, calendar icon alignment, stronger contrast, and a clearer “Schedule a Call” label.
- Added the full “Schedule a Strategy Call” action inside tablet/mobile navigation and highlighted the current action on the request page.
- Kept the request flow transparent: the form prepares an email draft and does not book a calendar appointment.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. No push or deployment performed.

## 2026-10-25 Navigation and Page Title Alignment

- Standardized shared primary navigation typography, spacing, active-page underline, and row sizing; ensured all page tabs remain in fixed positions across routes.
- Applied a consistent tablet/mobile menu pattern so long labels do not compress or shift the desktop navigation.
- Normalized interior hero-title scales across Who We Are, Solutions, Partner With Us, and Insights, preserving the Home page's larger headline as the primary visual anchor.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed; local Home route returned HTTP 200. No push or deployment performed.

## 2026-10-25 Partner With Us Page

- Repositioned the Contact page as **Partner With Us**, with a photo-led hero and explicit invitation for qualified companies and professionals to bring opportunities and pursue client-aligned work with PUL Global Partners.
- Consolidated partner audiences, collaboration opportunities, regional focus, and a three-step working model on the page; replaced the detailed partnership content on Who We Are with a concise link to the new destination.
- Added a partnership-focused inquiry form with partner roles, opportunity/market context, and proposed-role fields. Submission prepares a reviewable email draft; direct backend submission is not configured.
- Updated primary navigation, footer, and relevant page calls to action; retained `/partnerships/` as a redirect to the Partner With Us pathways.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. No push or deployment performed.

## 2026-10-25 Who We Are, Navigation, and Insights Refinement

- Removed the secondary Who We Are image and all named assignments, client identities, and associated logos. Replaced them with four high-level experience domains, explicitly attributed to PUL Consulting Services and the PUL management team rather than PUL Global Partners LLC.
- Reorganized the Who We Are introduction into a clean, text-led foundation section while retaining its single large hero image.
- Stabilized navigation alignment across routes by restricting page-specific shell sizing to `main` and reserving scrollbar space; shared header/footer now retain a consistent horizontal position.
- Rebuilt Insights as an editorial hub with a large image hero, four editorial themes, one featured article, related perspectives, and a conversation CTA.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. Who We Are and Insights were visually reviewed; no push or deployment performed.

## 2026-10-25 Who We Are Page Structure

- Renamed the combined About & Partnerships destination to **Who We Are** in navigation and page metadata.
- Rebuilt its first screen with a large Company Profile image hero matching the Home and Solutions visual treatment.
- Organized the page into distinct Our Foundation, Experience, Selected Projects, and Partner With Us sections, in that order; moved the complete seven-example project list into Selected Projects.
- Updated Home, contact, footer, and navigation links to the relevant section anchors. Kept `/projects/` and `/partnerships/` as section redirects for existing links.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. Who We Are was rendered and visually reviewed locally. No push or deployment performed.

## 2026-10-25 Solutions Page Executive Refinement

- Rebuilt the Solutions first screen with a large, responsive Company Profile photograph, stronger title/copy hierarchy, and Home-aligned primary actions.
- Matched section spacing, typography, six image-led platform links, and service description layout to the Home page system.
- Reorganized the six platform service inventories into consistent, readable two-column service lists that collapse cleanly on mobile.
- Added the Company Profile’s Economic Growth & SME Program Cycle infographic at desktop/tablet sizes; retained the text service summaries on mobile for readability.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. Solutions rendered and reviewed locally at http://localhost:4175/solutions/. No push or deployment performed.

## 2026-10-25 About & Partnerships Consolidation and Page Imagery

- Merged company background, heritage, selected experience, partnership pathways, collaboration opportunities, regional focus, and partner operating principles into one **About & Partnerships** page.
- Updated primary and footer navigation and Home calls to action; kept `/partnerships/` as a redirect to `/about/#partnerships` for existing links.
- Reviewed first-screen imagery across Home, all public pages, and individual Insight articles; each already had relevant hero imagery. Added two optimized Company Profile visuals to the combined page and retained the approved Home hero.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. The combined page was rendered and visually reviewed; all reviewed routes returned HTTP 200 locally. No push or deployment performed.

## 2026-10-25 Company Profile Alignment

- Replaced the four-platform website overview with the six service platforms in the updated Company Profile across Home and Solutions.
- Added Economic Growth & SME Support content covering enterprise capability, workforce and market connection, and program delivery measurement.
- Aligned About Us with the profile’s institutional history and selected experience, preserving clear attribution to PUL Consulting Services and the PUL management team rather than implying direct awards to PUL Global Partners LLC.
- Created a dedicated Partnerships page for qualified corporate, local, international, and professional partners; updated navigation and the Home partnership link.
- Updated the website Capability overview, site metadata, and footer navigation. The official 2026 Capability Statement PDF was not altered because no revised statement was supplied.
- Preserved the approved Home hero image/framing and existing site design direction. All changes are local; no GitHub push, Vercel deployment, WordPress change, or production change was made.
- Fixed the shared interior-page hero at tablet widths after rendered review found cramped title and description columns. Home and interior pages were visually reviewed; Solutions and Partnerships content and links were checked.
- `npm run typecheck`, `npm run build` (14 routes), and `git diff --check` passed. Local preview: http://localhost:4175/.

## 2026-10-01 Home Page Executive Refinement

- Consolidated Home typography, descriptions, section spacing, platform cards, delivery framework, insights, closing CTA, and footer in a Home-scoped responsive stylesheet; other page styles remain untouched.
- Preserved the approved Home hero image and framing; removed the “Illustrative visualization” caption.
- Clarified the distinction between PUL Global Partners LLC and institutional experience built through PUL Consulting Services since 2010.
- Expanded the four-platform introduction to summarize advisory/program delivery; workforce, training, and language services; technology; and procurement, trade, logistics, and mission support.
- Removed the Implementation Heritage block from Home; institutional heritage indicators and selected experience remain on About Us.
- Added an explicit partnership invitation and contact pathway in “Where PUL fits”; shortened the closing contact copy and aligned the footer brand line with “Strategy. Solutions. Partnership. Execution.”
- Fixed narrow-tablet overflow. Responsive QA passed at 375, 390, 768, 900, 1024, and 1440 px; mobile navigation was exercised; images loaded and no browser console errors were observed.
- `npm run typecheck` and `npm run build` passed; 13 routes prerendered. Preview remains local at http://localhost:4175/. No GitHub push, Vercel deployment, or production change was made.

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
