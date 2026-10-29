# Project Plan Amendment: Secure Website Inquiry Forms

- Date: 2026-10-29
- Trigger: User requested automatic acknowledgements for both forms and a human check, with Strategy Call messages routed to `info@pulglobal.com` and partnership messages to `partner@pulglobal.com`.
- Related records: ADR-004 and CR-013

## Scope Change

The initial static-only architecture is extended with one serverless API route. The public pages remain statically rendered where appropriate, while Vercel runs the form endpoint. Forms will validate Cloudflare Turnstile tokens server-side, use a honeypot and bounded input validation, send notifications through authenticated one.com SMTP, and send plain-text acknowledgements to submitters. No form data is persisted in a database. Strategy Call requests do not book calendar appointments.

## Work Breakdown and Status

| Work item | Status |
| --- | --- |
| Implement server-side form endpoint and recipient routing | Complete locally |
| Implement Turnstile widget, server token verification, and honeypot | Complete locally |
| Add acknowledgement messages and honest form states | Complete locally |
| Configure project for Vercel serverless runtime | Complete locally |
| Create/configure one.com sender mailbox and confirm partner inbox | Pending owner setup |
| Create Turnstile widget and configure allowed hostnames | Pending owner setup |
| Add production/preview secrets in Vercel | Pending owner setup |
| Test invalid-input and invalid-token rejection | Passed locally |
| Test both routing/acknowledgement paths with Turnstile test key and mock SMTP | Passed locally |
| Test real one.com delivery, failed-SMTP, and reply-to flows | Pending owner setup |

## Impact and Controls

- Hosting: static-only export is no longer suitable; keep this app on Vercel or a compatible Node.js/serverless host. The one.com mailbox remains the email provider.
- DNS: no mail nameserver or inbound MX changes are required for authenticated SMTP sending. Follow only any provider-requested sender-authentication changes after review; preserve current mail records.
- Cost/operations: adds a Turnstile configuration and one.com SMTP account dependency. No database or CMS is introduced.
- Security: secrets stay in Vercel environment variables; Turnstile is verified server-side; inputs are validated and bounded; do not log submitted message bodies.
- Release: local code changes do not constitute deployment. Verify the Vercel environment and end-to-end inbox behavior before using the custom domain for public inquiries.
