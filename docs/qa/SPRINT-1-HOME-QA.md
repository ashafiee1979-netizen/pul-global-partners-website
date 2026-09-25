# Sprint 1 Home Concept QA

- Date: 2026-09-16
- Target: Local Home prototype
- Browser: Chrome

## Passed

- Change Request 011 route suite: Home, Solutions, About, Projects, Insights, Contact, Capability Statement, and Strategy Call pages return local HTTP 200
- All seven standalone pages share the PUL brand header, active navigation, responsive menu, footer, and capability-statement route
- Home experience and capability actions resolve to the Projects and Capability Statement pages
- Inquiry and scheduling forms expose required-field validation and honest email-draft behavior; no false success submission is displayed
- Official Capability Statement PDF resolves locally and remains available as both download and inline preview
- WordPress child-theme CSS and JavaScript mirrors match the prototype shared files

- Desktop first viewport visually reviewed
- Desktop full page visually reviewed
- Mobile first viewport reviewed at 390 by 844
- Navigation collapses at mobile breakpoint
- Hero headline, lead, calls to action, image note, and image crop remain usable on mobile
- No document-level horizontal overflow at 390 px
- Hero image loads with descriptive alternative text
- Hero image includes intrinsic dimensions and high-priority loading
- Generated image is labeled as an illustrative visualization
- HTML parsed successfully
- PNG hero source optimized to WebP from 1,825,813 bytes to 111,380 bytes
- Official PUL Global Partners logo loads from the high-resolution transparent source
- Revised Home hero reviewed at 1440 by 900 and aligned to the desktop viewport
- Redundant Home/header UEI, CAGE, and email utility information removed
- Solutions page desktop first viewport reviewed at 1440 by 900
- Both Home and Solutions HTML files parse successfully
- Home browser title verified as `Home | PUL Global Partners`
- Home navigation item and current-page state verified on desktop
- Hero brand line and enriched capability statement reviewed at 1440 by 900 and 390 by 844
- Animated headline final visibility and transform state verified
- Reduced-motion fallback included in CSS
- Home credential band removed
- Revised “Who we are” scale and section spacing visually reviewed
- Home version 4 full-page desktop review completed at 1440 by 900
- Home version 4 full-page mobile review completed at 390 by 844
- Four platform links route to matching anchored Solutions sections
- Connected delivery journey remains readable in desktop and mobile layouts
- Three buyer-environment WebP assets load successfully
- Home callback form and dedicated strategy-call form render with required fields
- Schedule page mobile first viewport reviewed
- Home, Solutions, Schedule, and all three new image assets return HTTP 200 locally
- Official high-resolution logo source and prototype asset have identical SHA-256 hashes
- Metric counters include explicit start/end values and reduced-motion handling
- Version 5 enlarged logo, navigation, and revised brand line reviewed at 1440 by 900
- Version 5 mobile header and completed headline state reviewed at 390 by 844
- Count-up animation visually reviewed in progress and at the final `30+`, `1,000+`, `10,000+`, and `2026` values
- Version 6 metric band alignment reviewed below the hero at desktop width
- Version 6 white brand line and box removal reviewed at 1440 by 900 and 390 by 844
- Metric final values and labels verified as `30+ projects supported`, `1,000+ staff managed`, `10,000+ people trained`, and `2010 institutional heritage`
- Metric animation duration verified at 4.2 seconds
- No `Global Execution` text remains in prototype HTML
- Final regression audit confirmed Home, Solutions, and Schedule return HTTP 200
- Version 7 platform, heritage, delivery, buyer-fit, and Insights sections visually reviewed at 1440 by 900
- Version 7 complete Home page visually reviewed at 390 by 844
- No horizontal overflow detected at 1440 or 390 px
- All Home images loaded successfully with nonzero intrinsic dimensions
- Platform-card numbering and generic icons removed
- Buyer-fit image count verified as zero
- Five approved-profile client logos render in the institutional-heritage section
- Four optimized AI platform WebP assets render with descriptive alternative text
- Contextual strategy-call actions verified after Who We Are, How We Deliver, and Where PUL Fits
- Version 8 platform imagery visually reviewed at 1440 by 900 and 390 by 844
- Management, Capacity Building, Technology, and Mission Support cards use four distinct subjects and color treatments
- Technology platform image remains unchanged from version 7
- Implementation Heritage restored to the prior text-led experience layout
- Where PUL Fits restored to the prior three-environment image layout
- Version 8 regression check found zero broken images and zero horizontal overflow at desktop and mobile widths
- Version 9 Home first viewport, Who We Are, platform system, and delivery framework visually reviewed at desktop width
- Version 9 Home hero, Who We Are, and platform cards visually reviewed at 390 by 844
- Version 9 Solutions and Strategy Call first viewports visually reviewed at desktop width
- Five institutional trust marks load with nonzero intrinsic dimensions
- Version 9 mobile regression check found zero broken images and no horizontal overflow
- Global header actions collapse without overlap at desktop, tablet, and mobile breakpoints
- Mobile menu interaction verified on the Strategy Call page; `aria-expanded` and open-state class update correctly
- Solutions and Strategy Call pages pass mobile broken-image and horizontal-overflow checks
- Version 10 confirms no institutional logo rail remains beneath the Home hero
- Four requested organization marks render below the Implementation Heritage engagement table
- USAID, The World Bank, GIZ, and Creative Associates optical sizes visually reviewed in a single desktop row
- Version 11 Home and Solutions first viewports visually reviewed at desktop width
- Home and Solutions description copy normalized to a readable and consistent responsive scale
- Section, platform, delivery, heritage, buyer-fit, insight, and contact typography checked for hierarchy consistency
- Version 11 responsive rules verified at the 390 px breakpoint with no horizontal overflow

## Pending

- Automated accessibility scan and Lighthouse performance run
- Firefox and Safari review
- Production WordPress template integration
- Production form-processing and scheduling integrations

## Change Request 011 QA (2026-09-25)

- All eight routes returned HTTP 200 locally: Home, Solutions, About, Projects, Insights, Contact, Capability Statement, and Strategy Call.
- Browser layout matrix passed at 1920x1080, 1440x900, 1366x768, 1024x768, 768x1024, 390x844, and 360x800 across all eight routes (56 combinations).
- No page-level horizontal overflow and no broken images in the matrix; the NAICS data table scrolls inside its own mobile frame.
- Browser screenshots reviewed for the Home mobile layout and desktop first viewports of all supporting pages; Capability Statement reviewed on desktop and phone.
- Local-reference audit found zero missing files, anchor targets, image alt text, intrinsic image dimensions, or page titles.
- Mobile navigation open/close state and accessible name verified; Escape closes the menu and returns focus to its toggle.
- Empty Contact and Strategy Call forms were blocked by native required-field validation; no email draft or external submission was triggered.
- Strategy Call date input minimum verified as the local current date; email-draft messaging correctly says it does not reserve a calendar slot.
- Shared prototype and WordPress child-theme CSS/JavaScript copies compared for parity.
- Capability Statement PDF served locally; all listed page/asset links and anchor targets passed.
- Final cache-busted build reran the 56 responsive checks after below-the-fold Home/Solutions image loading was deferred; no page overflow or broken images.

## Environment note

PHP CLI was not installed in the current command environment, so PHP syntax validation is pending. No production deployment was attempted.
