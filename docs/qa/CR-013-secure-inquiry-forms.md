# CR-013 Secure Inquiry Forms QA

- Date: 2026-10-29
- Scope: Local validation of server-side Strategy Call and Partner With Us inquiry delivery.

## Passed

- `npm run typecheck`
- `npm run build`: 15 routes, including dynamic `/api/contact/`
- `npm audit`: zero vulnerabilities after moving Next.js and `@next/mdx` to 16.4.3
- Local `/schedule/` and `/contact/` return HTTP 200 and show the configuration-pending state when credentials are absent.
- Unconfigured API returns HTTP 503; malformed name/email/message returns HTTP 400; invalid Turnstile token returns HTTP 400 before SMTP.
- End-to-end local harness using Cloudflare's official always-pass test secret and a mock SMTP server verified two form submissions, four total messages, correct `info@pulglobal.com` and `partner@pulglobal.com` notification recipients, and one sender acknowledgement for each submission.
- `git diff --check`

## Pending

- Live SMTP inbox delivery, sender authentication/spam placement, reply-to behavior, and production Turnstile hostname verification require owner-provided Vercel environment configuration. No real email was sent in this QA pass.
- Public forms remain disabled until `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is configured; do not publish this code as a completed live form integration before the pending checks pass.
