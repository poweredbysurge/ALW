/**
 * The consultation notification Dr Wheeler receives.
 *
 * Email clients are not browsers: most strip <style> blocks, none support CSS
 * custom properties, and Gmail ignores web fonts. So the brand is rebuilt here
 * with table layout, inline styles, literal hex values from the token set, and
 * Georgia standing in for Fraunces. This is the one place in the project where
 * hardcoded colours are correct rather than a rule violation.
 */

const PAPER = '#fdfbf6';
const SAND = '#f7f1e6';
const INK = '#3e3428';
const INK_SOFT = '#6e5f4e';
const CLAY = '#8a6f5b';
const GOLD = '#dfa35b';
const LINE = '#d9cebf';

const DISPLAY = "Georgia, 'Times New Roman', serif";
const BODY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export type Inquiry = {
  name: string;
  email: string;
  message: string;
  submittedAt: Date;
};

/** Anything a sender types is untrusted; it must never reach the HTML raw. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatStamp(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/Los_Angeles',
  }).format(date);
}

export function inquirySubject(inquiry: Inquiry): string {
  return `New consultation request from ${inquiry.name}`;
}

export function inquiryText(inquiry: Inquiry): string {
  return [
    'NEW CONSULTATION REQUEST',
    '',
    `Name:  ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Sent:  ${formatStamp(inquiry.submittedAt)}`,
    '',
    'What they would like support with',
    '---------------------------------',
    inquiry.message,
    '',
    `Reply directly to this email to reach ${inquiry.name}.`,
    'Aligned Within',
  ].join('\n');
}

export function inquiryHtml(inquiry: Inquiry): string {
  const name = escapeHtml(inquiry.name);
  const email = escapeHtml(inquiry.email);
  const message = escapeHtml(inquiry.message).replace(/\r?\n/g, '<br />');
  const stamp = escapeHtml(formatStamp(inquiry.submittedAt));

  const label = `font:600 10px/1 ${BODY};letter-spacing:.14em;text-transform:uppercase;color:${CLAY};`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>New consultation request</title>
</head>
<body style="margin:0;padding:0;background:${SAND};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${name} asked for a consultation. Reply to this email to reach them.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${SAND};">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
               style="max-width:580px;background:${PAPER};border:1px solid ${LINE};">

          <!-- Masthead -->
          <tr>
            <td style="padding:34px 36px 26px;border-bottom:1px solid ${LINE};">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:12px;">
                    <div style="width:12px;height:12px;background:${GOLD};border-radius:50%;"></div>
                  </td>
                  <td>
                    <div style="font:400 19px/1 ${DISPLAY};color:${INK};letter-spacing:.01em;">Aligned Within</div>
                    <div style="${label}padding-top:6px;">Ellie Wheeler, Psy.D.</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td style="padding:38px 36px 0;">
              <div style="${label}">New consultation request</div>
              <div style="font:400 30px/1.15 ${DISPLAY};color:${INK};padding-top:14px;letter-spacing:-.01em;">
                ${name} would like to talk.
              </div>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:30px 36px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:16px 0;border-top:1px solid ${LINE};">
                    <div style="${label}">Name</div>
                    <div style="font:400 16px/1.5 ${BODY};color:${INK};padding-top:7px;">${name}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0;border-top:1px solid ${LINE};">
                    <div style="${label}">Email</div>
                    <div style="font:400 16px/1.5 ${BODY};padding-top:7px;">
                      <a href="mailto:${email}" style="color:${INK};text-decoration:underline;text-underline-offset:2px;">${email}</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0;border-top:1px solid ${LINE};border-bottom:1px solid ${LINE};">
                    <div style="${label}">Received</div>
                    <div style="font:400 16px/1.5 ${BODY};color:${INK};padding-top:7px;">${stamp}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:34px 36px 0;">
              <div style="${label}">What they would like support with</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;">
                <tr>
                  <td style="background:${SAND};border-left:2px solid ${GOLD};padding:22px 24px;">
                    <div style="font:400 16px/1.75 ${BODY};color:${INK_SOFT};">${message}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Reply -->
          <tr>
            <td style="padding:30px 36px 38px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:${GOLD};">
                    <a href="mailto:${email}?subject=Re%3A%20your%20consultation%20request"
                       style="display:inline-block;padding:15px 26px;font:600 11px/1 ${BODY};letter-spacing:.1em;text-transform:uppercase;color:${INK};text-decoration:none;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>
              <div style="font:400 14px/1.6 ${BODY};color:${CLAY};padding-top:18px;">
                Replying to this email reaches ${name} directly.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:22px 36px;background:${INK};">
              <div style="font:400 12px/1.6 ${BODY};color:${PAPER};opacity:.75;">
                Sent by the consultation form at Aligned Within.
              </div>
            </td>
          </tr>

        </table>

        <div style="font:400 11px/1.6 ${BODY};color:${CLAY};padding-top:18px;max-width:580px;">
          This message may contain sensitive personal information. Handle and store it accordingly.
        </div>

      </td>
    </tr>
  </table>
</body>
</html>`;
}
