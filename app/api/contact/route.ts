import { NextResponse } from 'next/server';

import { inquiryHtml, inquirySubject, inquiryText } from '../../_emails/inquiry';

/**
 * Consultation form endpoint.
 *
 * Sends through Resend's REST API with fetch rather than the SDK, so the
 * project keeps a single runtime dependency tree and nothing new to patch.
 *
 * This route never reports success unless Resend accepted the message. The
 * form it serves previously showed a success state unconditionally, which on a
 * therapy practice site meant someone could believe a private note had been
 * delivered when nothing had been sent.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TO = process.env.CONTACT_TO_EMAIL ?? 'Drelliewheeler@gmail.com';
const FROM = process.env.CONTACT_FROM_EMAIL ?? 'Aligned Within <onboarding@resend.dev>';

const LIMITS = { name: 120, email: 200, message: 4000 } as const;

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return bad('We could not read that submission.');
  }

  const data = body as Record<string, unknown>;

  // Honeypot: a field hidden from people and irresistible to bots. Answer 200
  // so the bot believes it worked and does not retry.
  if (typeof data.company === 'string' && data.company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';

  if (!name || !email || !message) return bad('Please fill in every field.');
  if (name.length > LIMITS.name) return bad('That name is too long.');
  if (email.length > LIMITS.email) return bad('That email address is too long.');
  if (message.length > LIMITS.message) return bad('That message is too long.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return bad('Please check the email address.');

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Loud in the logs, vague to the visitor, and crucially not a success.
    console.error('[contact] RESEND_API_KEY is not set; the message was not sent.');
    return bad('The form is not available right now.', 503);
  }

  const inquiry = { name, email, message, submittedAt: new Date() };

  let response: Response;
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        // So Dr Wheeler can simply hit reply and reach the person.
        reply_to: email,
        subject: inquirySubject(inquiry),
        html: inquiryHtml(inquiry),
        text: inquiryText(inquiry),
      }),
    });
  } catch (error) {
    console.error('[contact] Could not reach Resend:', error);
    return bad('We could not send that just now.', 502);
  }

  if (!response.ok) {
    // Resend's body can echo the submission, so log the status, not the payload.
    console.error(`[contact] Resend rejected the message with ${response.status}.`);
    return bad('We could not send that just now.', 502);
  }

  return NextResponse.json({ ok: true });
}
