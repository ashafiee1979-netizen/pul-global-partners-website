# PUL Global Partners Website

This is the separate Next.js and TypeScript review build. It does not change the existing WordPress site or the previously deployed Vercel prototype. The application is configured to produce static files and does not require a production Node.js server for its current pages.

## Local review

```powershell
npm install
npm run dev
```

Open the local URL printed by Next.js. For a production-like static build, run `npm run build`; the deployable static site is written to `out/`.

## Updating an Insights article

1. Add the article body as `content/insights/<slug>.mdx`.
2. Add the article's slug, title, category, excerpt, image, and alt text to `content/insights/posts.ts`, importing the MDX file there.
3. Run `npm run typecheck` and `npm run build`, then review the index and article route on desktop and mobile.
4. Ask for review before publishing. A new post is not live until the accepted build is released through the separately approved deployment process.

Current sample articles carry forward the three original perspective pieces from the approved static prototype. They are examples of the article template, not a claim that the rebuilt site has already been published.

## Boundaries

- No database, hosted CMS, server-side form handler, scheduling integration, analytics service, or credentials are included.
- Contact forms prepare an email draft and do not send automatically.
- The scheduling page captures preferred timing in an email draft; it does not reserve a calendar slot.
- Verify all organization-specific claims and historical attributions against the claim register before changing them.
- Do not connect a Vercel project, push this build, change DNS, or deploy without the user's explicit approval.
