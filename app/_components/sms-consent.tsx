/**
 * The SMS consent disclosure, worded exactly as the carrier requires.
 *
 * Do not reword any part of this. An A2P registration was already rejected
 * once over the wording, and reviewers match it closely. The only liberty
 * taken is that the two policy URLs are anchors; their visible text is still
 * the full URL, so the literal string a reviewer looks for is intact.
 *
 * It renders wherever the number is published or collected: the site footer,
 * under the consultation form, and in both policy pages.
 */
export function SmsConsent({ className = '' }: { className?: string }) {
  return (
    <div className={`sms-consent ${className}`}>
      <p className="sms-consent__number">
        <a href="tel:+16193049955">(619) 304-9955</a>
      </p>
      <p className="sms-consent__body">
        By contacting us via SMS with your mobile number, you consent to receive customer care
        text messages from Aligned Within Psychological Services PC. Msg&amp;Data rates may apply.
        Message frequency varies. Text HELP for help. Reply &quot;STOP&quot; at any time to opt
        out. See our Privacy Policy at{' '}
        <a href="https://www.alignedwithinpsych.com/privacy">
          https://www.alignedwithinpsych.com/privacy
        </a>{' '}
        and our Terms of Service at{' '}
        <a href="https://www.alignedwithinpsych.com/terms">
          https://www.alignedwithinpsych.com/terms
        </a>
        .
      </p>
    </div>
  );
}
