# PUL Global Partners Website

This is the separate Next.js and TypeScript site. It does not change the existing WordPress site or the previously deployed Vercel prototype. It uses Next.js serverless functions for validated contact-form delivery; deploy it to Vercel or another compatible Node.js host, not as a static-only export.

## Local review

```powershell
npm install
npm run dev
```

Open the local URL printed by Next.js. Run `npm run build` to validate the production build. Local form delivery requires the environment variables documented in `../docs/deployment/FORM-DELIVERY-SETUP.md`.

## Updating an Insights article

1. Add the article body as `content/insights/<slug>.mdx`.
2. Add the article's slug, title, category, excerpt, image, and alt text to `content/insights/posts.ts`, importing the MDX file there.
3. Run `npm run typecheck` and `npm run build`, then review the index and article route on desktop and mobile.
4. Ask for review before publishing. A new post is not live until the accepted build is released through the separately approved deployment process.

Current sample articles carry forward the three original perspective pieces from the approved static prototype. They are examples of the article template, not a claim that the rebuilt site has already been published.

## Boundaries

- No database, hosted CMS, calendar booking integration, analytics service, or credentials are included.
- Contact forms use a server-side API route, validate Cloudflare Turnstile tokens, and send the inquiry plus an acknowledgement email through authenticated one.com SMTP after required environment variables are configured.
- The Strategy Call page sends a call request; it does not reserve a calendar slot.
- Verify all organization-specific claims and historical attributions against the claim register before changing them.
- Do not connect a Vercel project, push this build, change DNS, or deploy without the user's explicit approval.
