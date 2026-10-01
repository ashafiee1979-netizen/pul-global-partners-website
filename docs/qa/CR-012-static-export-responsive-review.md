# Change Request 012: Static Export and Responsive Review

Date: 2026-09-30
Result: Passed for local and Vercel review release; `pulglobal.com` production remains unchanged

## Build Checks

- `npm run typecheck`: passed.
- `npm run build`: passed; Next.js generated static HTML for 13 routes, including the not-found page and three MDX article routes.
- Dependency audit: zero known vulnerabilities reported at implementation time.
- Static export: served locally from `next-app/out/` for route smoke testing.

## Route Checks

HTTP 200 verified for `/`, `/solutions/`, `/about/`, `/projects/`, `/insights/`, all three article routes, `/contact/`, `/schedule/`, and `/capability/`.

The approved Capability Statement PDF is included in the static export at `/assets/documents/PUL-Global-Partners-Capability-Statement-2026.pdf` and is linked from the Capability page.

## Vercel Review Deployment

- GitHub `main` commit `2df039e` deployed to the existing `pul-global-partners-website` Vercel project.
- Vercel Root Directory is `next-app`; Framework Preset is Next.js.
- Stable review URL: https://pul-global-partners-website.vercel.app/.
- All 11 public page/article routes and the Capability Statement PDF returned HTTP 200 after redeployment.
- Initial deployment generated successfully but served 404 for app routes because the Vercel Framework Preset was `Other`. Set it to Next.js and redeployed; routes then passed.
- Home page visually checked on the stable review URL.

## Responsive and Browser Checks

- Viewports checked: 1440, 1024, 768, and 390 px.
- No horizontal overflow or broken images observed.
- Internal page hero images present across routes.
- No browser-console errors observed during the checked flows.
- Mobile navigation open, close, and route navigation exercised.
- Contact and scheduling flows remain transparent email-draft actions; no false claim of form submission or appointment booking.

## Release Boundary

This deployment is a Vercel review site on its `vercel.app` domain. It is not connected to `pulglobal.com`; the live WordPress website and DNS were not changed. Accessibility/performance observations are visual and functional smoke checks, not a formal third-party audit or production acceptance test. External form/scheduling integrations and any future custom-domain migration require separate review and authorization.
