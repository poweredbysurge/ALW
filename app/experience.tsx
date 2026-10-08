'use client';

import { FormEvent, useEffect, useState } from 'react';

const FALLBACK_EMAIL = 'Drelliewheeler@gmail.com';
const PHONE_DISPLAY = '(619) 304-9955';
const PHONE_HREF = 'tel:+16193049955';

export function Experience() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));

      // Only ever show success when the message actually went out.
      if (!response.ok || !result.ok) {
        setError(result.error ?? 'We could not send that just now.');
        setStatus('error');
        return;
      }

      form.reset();
      setStatus('sent');
    } catch {
      setError('We could not reach the server. Please check your connection.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-success" role="status">
        <span className="form-success__mark" aria-hidden="true">✓</span>
        <h3>Thank you for reaching out.</h3>
        <p>Your note is on its way to Ellie. She will reply within 1 to 2 business days.</p>
        <button type="button" className="text-link" onClick={() => setStatus('idle')}>Send another note</button>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form className={`consult-form ${compact ? 'consult-form--compact' : ''}`} onSubmit={submit} noValidate={false}>
      <div className="field-pair">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="First and last name" required disabled={sending} />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required disabled={sending} />
        </label>
      </div>
      <label>
        <span>What would you like support with?</span>
        <textarea name="message" rows={compact ? 3 : 4} placeholder="Share only what feels comfortable." required disabled={sending} />
      </label>

      {/* Hidden from people, tempting to bots. Never shown, never required. */}
      <div className="form-honeypot" aria-hidden="true">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === 'error' && (
        <p className="form-error" role="alert">
          {error} You can also email{' '}
          <a href={`mailto:${FALLBACK_EMAIL}`}>{FALLBACK_EMAIL}</a> or call{' '}
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> directly.
        </p>
      )}

      <div className="form-submit">
        <button className="button button--dark" type="submit" disabled={sending}>
          {sending ? 'Sending…' : 'Request a free consultation'}
          {!sending && <span aria-hidden="true">↗</span>}
        </button>
        <p>Private and pressure-free. Ellie will reply within 1 to 2 business days.</p>
      </div>
    </form>
  );
}
