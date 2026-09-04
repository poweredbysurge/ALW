'use client';

import { FormEvent, useEffect, useState } from 'react';

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

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  // TODO(launch): POST to a HIPAA-appropriate intake endpoint before going live.
  // Nothing is transmitted or stored today — this only shows the success state.
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span className="form-success__mark" aria-hidden="true">✓</span>
        <h3>Thank you for reaching out.</h3>
        <p>Your note has been received. Ellie will reply within 1–2 business days.</p>
        <button type="button" className="text-link" onClick={() => setSent(false)}>Send another note</button>
      </div>
    );
  }

  return (
    <form className={`consult-form ${compact ? 'consult-form--compact' : ''}`} onSubmit={submit}>
      <div className="field-pair">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="First and last name" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
      </div>
      <label>
        <span>What would you like support with?</span>
        <textarea name="message" rows={compact ? 3 : 4} placeholder="Share only what feels comfortable." required />
      </label>
      <div className="form-submit">
        <button className="button button--dark" type="submit">Request a free consultation <span aria-hidden="true">↗</span></button>
        <p>Private and pressure-free. Ellie will reply within 1–2 business days.</p>
      </div>
    </form>
  );
}
