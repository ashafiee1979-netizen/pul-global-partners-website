# Change Request 002 Home Hierarchy Animation and Spacing

- Requested: 2026-09-16
- Requester: Executive Sponsor
- Status: Implemented in local prototype and pending review
- Classification: Moderate

## Requested changes

1. Create a separate Home navigation tab and name the browser tab Home.
2. Make “Strategy. Solutions. Global Execution.” larger, bolder, and more attractive.
3. Enrich the opening statement so it professionally reflects the complete solution portfolio.
4. Animate “Built to execute where complexity is real.” in the spirit of the current public Home page.
5. Remove the four-platform, operating-base, heritage, and partner-role information band.
6. Reduce excessive section spacing and increase the visibility of “Who we are.”

## Implementation

- Set the document title to `Home | PUL Global Partners`.
- Added an explicit Home item to the primary navigation on Home and Solutions pages.
- Promoted the brand line into a larger, bolder hero statement.
- Rewrote the hero introduction to cover consulting, program delivery, workforce, capacity building, translation, stakeholder engagement, technology, responsible AI, procurement, logistics, trade, and mission support.
- Added a sequential line-reveal animation to the H1 with a reduced-motion fallback.
- Removed the Home credential band in full.
- Reduced global section padding and increased the size and weight of the “Who we are” kicker and introduction heading.

## Verification

- Desktop review at 1440 by 900 passed.
- Mobile review at 390 by 844 passed.
- Browser title and Home navigation state verified.
- Animated headline final state verified in the DOM and visually confirmed.
- No document-level horizontal overflow detected at either reviewed width.
