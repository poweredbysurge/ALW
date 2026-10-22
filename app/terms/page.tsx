import type { Metadata } from 'next';
import Link from 'next/link';

import { LegalShell } from '../_components/legal-shell';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms for using the Aligned Within Psychological Services PC website, including the text messaging programme description, opt-in and opt-out instructions.',
  alternates: { canonical: '/terms' },
};

const UPDATED = 'October 21, 2026';

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      updated={UPDATED}
      intro="These terms cover your use of this website and the practice's text messaging programme. Using the site means you accept them. They are not a treatment agreement; that is a separate document you would review and sign before care begins."
    >
      <section className="legal-urgent">
        <h2>If this is an emergency</h2>
        <p>
          This website is not monitored for emergencies and cannot be used to get urgent help.
          If you are in danger or thinking about harming yourself, call or text <b>988</b> to
          reach the Suicide and Crisis Lifeline, call <b>911</b>, or go to your nearest emergency
          department.
        </p>
      </section>

      <section>
        <h2>What this website is</h2>
        <p>
          The site describes the practice and offers a way to ask for a consultation. The content
          is general information about therapy. It is not psychological advice, not a diagnosis,
          and not a substitute for care. Reading it, or sending the form, does not create a
          therapist and client relationship. That begins only when Dr Wheeler and you agree to
          start care and the intake paperwork is complete.
        </p>
      </section>

      <section>
        <h2>Text messaging programme</h2>
        <p>
          Aligned Within Psychological Services PC operates a text messaging programme for people
          who ask to be contacted that way.
        </p>
        <ul>
          <li>
            <b>What we send.</b> Appointment scheduling, reminders, confirmations, and replies to
            enquiries you have sent us. We do not send marketing or promotional texts.
          </li>
          <li>
            <b>How you opt in.</b> By giving us your mobile number on the consultation form, by
            providing it during intake, or by texting us first. Consent to receive texts is not a
            condition of receiving care.
          </li>
          <li>
            <b>Message frequency.</b> Varies according to your appointments and your enquiries.
          </li>
          <li>
            <b>Cost.</b> Message and data rates may apply, according to your plan with your mobile
            carrier. We do not charge for messages.
          </li>
          <li>
            <b>Opting out.</b> Reply <b>STOP</b> to any message to stop receiving texts. You will
            get a single confirmation, and nothing further. Opting out of texts does not affect
            your care, and we will reach you by phone or email instead.
          </li>
          <li>
            <b>Help.</b> Reply <b>HELP</b> to any message, or contact us on{' '}
            <a href="tel:+16193049955">(619) 304-9955</a> or{' '}
            <a href="mailto:ellie@alignedwithinpsych.com">ellie@alignedwithinpsych.com</a>.
          </li>
          <li>
            <b>Carriers.</b> Mobile carriers are not liable for delayed or undelivered messages.
            Delivery is not guaranteed, so please do not rely on a text for anything time
            critical.
          </li>
          <li>
            <b>Your data.</b> Mobile numbers, opt-in data and consent are never shared with third
            parties or affiliates for marketing or promotional purposes. Our{' '}
            <Link href="/privacy">Privacy Policy</Link> sets this out in full.
          </li>
        </ul>
        <p>
          Standard text messaging is not a secure or confidential channel. Please keep texts to
          scheduling, and bring anything clinical to a session.
        </p>
      </section>

      <section>
        <h2>The consultation form</h2>
        <p>
          Sending the form is an enquiry, not a booking. Replies usually come within one to two
          business days. Please do not use the form for urgent matters; see the emergency notice
          at the top of this page.
        </p>
      </section>

      <section>
        <h2>Fees</h2>
        <p>
          Current rates are published on the website and may change. The rate that applies to you
          is the one confirmed in your treatment agreement. Aligned Within is currently a
          private-pay practice; insurance arrangements in progress are described on the site and
          take effect only once they are live.
        </p>
      </section>

      <section>
        <h2>Content and marks</h2>
        <p>
          The text, images and design of this site belong to Aligned Within Psychological
          Services PC or are used with permission, and may not be copied or reused without
          written consent.
        </p>
      </section>

      <section>
        <h2>Links elsewhere</h2>
        <p>
          Where the site links to another organisation, we do not control that site and are not
          responsible for its content or its privacy practices.
        </p>
      </section>

      <section>
        <h2>Availability and limitation of liability</h2>
        <p>
          The site is provided as it is, without warranty, and may be unavailable at times. To the
          fullest extent the law allows, Aligned Within Psychological Services PC is not liable
          for indirect or consequential losses arising from use of this website. Nothing here
          limits liability that cannot lawfully be limited, including liability arising from
          professional services provided to a client.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the State of California. Dr Wheeler is licensed
          in California and provides services to people located in California.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          These terms may be updated. The current version is always the one posted here, with the
          date shown at the top.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Aligned Within Psychological Services PC, 4305 Gesner St, San Diego, CA 92117.{' '}
          <a href="tel:+16193049955">(619) 304-9955</a>.{' '}
          <a href="mailto:ellie@alignedwithinpsych.com">ellie@alignedwithinpsych.com</a>.
        </p>
      </section>
    </LegalShell>
  );
}
