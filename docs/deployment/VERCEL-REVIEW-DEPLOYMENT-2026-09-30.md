# Vercel Review Deployment Record

Date: 2026-09-30

## Release

- GitHub repository: `ashafiee1979-netizen/pul-global-partners-website`
- Branch and commit: `main` / `2df039e`
- Vercel project: `pul-global-partners-website`
- Vercel Root Directory: `next-app`
- Framework Preset: Next.js
- Review URL: https://pul-global-partners-website.vercel.app/
- Result: Ready; all 11 page/article routes and the Capability Statement PDF returned HTTP 200.

## Authorization and Boundary

The user authorized pushing the reviewed code to GitHub `main` and deploying it to the existing Vercel review project. This authorization did not include the live WordPress installation, the `pulglobal.com` domain, or DNS. Those remain unchanged. Contact and scheduling still prepare email drafts; no form provider or calendar integration is connected.

## Deployment Correction

The first Vercel build completed but returned 404 for site routes because the project Framework Preset was `Other`. The Vercel project was configured to use the Next.js preset and the current source redeployed. The stable review URL and all page/article/PDF paths were checked after redeployment and returned HTTP 200.
