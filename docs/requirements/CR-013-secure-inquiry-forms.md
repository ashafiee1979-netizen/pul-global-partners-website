# Change Request 013: Secure Inquiry Forms and Acknowledgements

## Authorization

- Requested by user: 2026-10-29
- Scope: Replace client-side email drafts on Strategy Call and Partner With Us forms with server-side email delivery, automatic acknowledgements, and human verification.
- Production configuration: Not complete. No SMTP credentials or Turnstile keys are committed or assumed.

## Requirements

- Send Strategy Call submissions to `info@pulglobal.com`.
- Send partnership submissions to `partner@pulglobal.com`.
- Send a plain-text acknowledgement to the sender after the PUL notification is accepted by SMTP.
- Use Cloudflare Turnstile and mandatory server-side token validation; include a honeypot and field length/format validation.
- Use authenticated one.com SMTP from a server-side Next.js route. Keep SMTP credentials and Turnstile secret out of client code and Git.
- Provide clear pending, sending, success, and failure feedback. Do not claim a meeting is booked.
- Do not persist form contents in a database.
- Preserve current contact and strategy page layouts and all other site behavior.

## Acceptance Criteria

- A verified Strategy Call request is delivered to `info@pulglobal.com`; a partnership inquiry is delivered to `partner@pulglobal.com`.
- Each sender receives the appropriate acknowledgement; email replies route to PUL's intended inbox.
- Missing, expired, reused, invalid, or wrong-host Turnstile tokens are rejected before email is sent.
- Empty/invalid fields and a filled honeypot do not generate emails.
- Successful PUL delivery with failed acknowledgement is reported honestly; SMTP failure never produces a false success state.
- Typecheck, build, API behavior tests, and a real inbox test pass after credentials are configured.

## Pending Owner Setup

- Confirm `partner@pulglobal.com` exists or forwards to the monitored partnership inbox.
- Provide or create an approved one.com mailbox for authenticated sending (for example a dedicated website sender); do not send its password in chat.
- Create a Turnstile widget and add the Vercel review hostname and, once connected, `pulglobal.com` and `www.pulglobal.com`.
- Enter the environment variables in Vercel and redeploy before end-to-end email testing.
