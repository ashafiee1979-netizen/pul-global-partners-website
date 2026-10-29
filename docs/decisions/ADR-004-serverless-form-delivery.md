# ADR 004: Serverless Form Delivery

- Status: Approved for implementation by user request, 2026-10-29
- Date: 2026-10-29
- Supersedes: The static-export and nonfunctional-form constraints in ADR-003 and CR-012 for the form workflow only

## Decision

Use Next.js serverless route handling on Vercel for the Strategy Call and Partner With Us forms. Verify human submissions with Cloudflare Turnstile server-side, reject a hidden honeypot field, and send inquiries plus automatic acknowledgements through the organization's authenticated one.com SMTP mailbox.

- Strategy Call inquiries go to `info@pulglobal.com`.
- Partnership inquiries go to `partner@pulglobal.com`.
- The authenticated SMTP mailbox is the sender; the submitting address is used as reply-to and receives a brief confirmation.
- Do not persist inquiry data in an application database.
- A Strategy Call request remains a request and does not book a calendar slot.
- Store all SMTP and Turnstile secrets in Vercel environment variables, never in source control or browser code.

## Rationale

The existing `mailto:` flow required visitors to have a configured email application and manually send a draft. A server-side endpoint enables dependable form delivery and acknowledgements without changing the existing one.com email hosting. Cloudflare requires server-side validation of Turnstile tokens; a browser-only widget is not sufficient.

one.com documents `send.one.com` for authenticated SMTP clients on port 587 with STARTTLS. Its `mailout.one.com` website-mail option is limited to sites hosted on one.com, so the Vercel app must use the authenticated SMTP-client endpoint and verify delivery from Vercel before production use.

## Consequences and Controls

- The app is no longer a static-only export. It requires a serverless/Node-compatible host such as Vercel; uploading only static files to one.com will not run the API route.
- Configure Turnstile allowed hostnames for the review and production domains and require successful Siteverify validation before any email is sent.
- Bound and validate form fields; use a honeypot and avoid logging submitted message contents.
- If PUL's SMTP credentials or recipient mailboxes are unavailable, submissions must fail visibly rather than falsely report success.
- Verify SPF/DKIM alignment and spam placement. Do not replace one.com's nameservers or modify inbound MX records for this feature.
- A CAPTCHA reduces automated abuse but does not guarantee that every malicious submission is prevented; monitor delivery and add persistent rate limiting if abuse warrants it.
- Live sending remains disabled until a mailbox, Turnstile widget, Vercel environment variables, and end-to-end tests are complete.
