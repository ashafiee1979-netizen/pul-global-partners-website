# Form Delivery Setup

The two forms use a Next.js serverless endpoint and send messages through one.com's authenticated SMTP service. Form contents are not stored in a database.

## One.com Mailboxes

1. Confirm `partner@pulglobal.com` is a working mailbox or forwards to the monitored partnership inbox.
2. Select an existing, approved one.com sender mailbox or create a dedicated mailbox for website notifications. Its address will be the authenticated sender and must be allowed to send through SMTP.
3. Keep the sender mailbox password private. Do not put it in Git, the browser, or a chat message.

The implementation uses `send.one.com` on port `465` with implicit TLS. one.com's `mailout.one.com` website-mail endpoint is only for websites hosted on one.com servers; this application runs as a Vercel serverless app. Test authenticated `send.one.com` delivery from Vercel before treating the form as live. See [one.com's SMTP guidance](https://help.one.com/hc/en-us/articles/115005594305-Can-I-use-your-SMTP-server-to-send-emails).

## Spam Controls

The forms use a hidden honeypot field, a minimum completion-time check, and a best-effort per-instance rate limit (six valid requests per IP per ten-minute window). This avoids a third-party CAPTCHA account, but the in-memory throttle is not shared across Vercel function instances and is less robust than a managed CAPTCHA or durable rate-limit store.

## Vercel Environment Variables

In the `pul-global-partners-website` project, open **Settings → Environment Variables**. Add the variables for the environments being used, at minimum Preview and Production. Vercel environment variables are not retroactive; redeploy after saving them.

| Variable | Value |
| --- | --- |
| `SMTP_HOST` | `send.one.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | Full email address of the approved one.com sender mailbox |
| `SMTP_PASS` | Password for that sender mailbox; mark/store as a secret |
| `MAIL_FROM_EMAIL` | Same authenticated sender email address |

The server fixes the recipients in code: Strategy Call to `info@pulglobal.com`, partnership to `partner@pulglobal.com`. Do not accept a recipient address from the browser.

## Verification

After redeployment:

1. Submit a Strategy Call request using an inbox you control. Confirm it reaches `info@pulglobal.com` and that the submitter receives an acknowledgement.
2. Submit a partnership inquiry. Confirm it reaches `partner@pulglobal.com` and the submitter receives an acknowledgement.
3. Reply to each internal notification and confirm it addresses the submitter; inspect spam/junk folders and sender authentication.
4. Test a too-fast submission, empty required fields, a filled honeypot, and repeated submissions. None should create unwanted inquiry email.
5. Confirm an SMTP failure is shown as a failure and does not display a false success message.

Vercel documents environment variable setup under [Managing Environment Variables](https://vercel.com/docs/environment-variables/managing-environment-variables). Do not change MX records or move nameservers as part of this email-sending setup.
