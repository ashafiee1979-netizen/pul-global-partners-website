# Change Request 012: Static Export and Responsive Review

Date: 2026-09-30  
Result: Passed for review build; production release not authorized

## Build Checks

- `npm run typecheck`: passed.
- `npm run build`: passed; Next.js generated static HTML for 13 routes, including the not-found page and three MDX article routes.
- Dependency audit: zero known vulnerabilities reported at implementation time.
- Static export: served locally from `next-app/out/` for route smoke testing.

## Route Checks

HTTP 200 verified for `/`, `/solutions/`, `/about/`, `/projects/`, `/insights/`, all three article routes, `/contact/`, `/schedule/`, and `/capability/`.

The approved Capability Statement PDF is included in the static export at `/assets/documents/PUL-Global-Partners-Capability-Statement-2026.pdf` and is linked from the Capability page.

## Responsive and Browser Checks

- Viewports checked: 1440, 1024, 768, and 390 px.
- No horizontal overflow or broken images observed.
- Internal page hero images present across routes.
- No browser-console errors observed during the checked flows.
- Mobile navigation open, close, and route navigation exercised.
- Contact and scheduling flows remain transparent email-draft actions; no false claim of form submission or appointment booking.

## Release Boundary

This is a local review build only. No GitHub push, Vercel deployment, or WordPress change was made. Accessibility/performance observations are visual and functional smoke checks, not a formal third-party audit or production acceptance test. Hosting compatibility, external integrations, final content approval, and release authorization remain outstanding.
