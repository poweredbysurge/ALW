import Link from 'next/link';

import { SunMark } from './sun-mark';

/**
 * Shell for the policy pages. Deliberately lean: a lockup back to the site, the
 * document, and the minimum footer. These pages are read, linked to by carriers
 * and registrars, and occasionally printed, so nothing competes with the text.
 */
export function LegalShell({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="site sunlit legal">
      <a className="skip-link" href="#policy">Skip to content</a>

      <header className="legal-nav">
        <Link className="site-brand" href="/" aria-label="Aligned Within home">
          <span className="site-brand__mark">
            <SunMark title="Aligned Within" />
          </span>
          <span><b>Aligned Within</b><small>Ellie Wheeler, Psy.D.</small></span>
        </Link>
        <Link className="text-link" href="/">Back to the site <span aria-hidden="true">↗</span></Link>
      </header>

      <article className="legal-body section-pad" id="policy">
        <p className="eyebrow">Aligned Within Psychological Services PC</p>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated {updated}</p>
        <p className="legal-intro">{intro}</p>
        {children}
      </article>

      <footer className="legal-footer section-pad">
        <div>
          <p>Aligned Within Psychological Services PC</p>
          <p>4305 Gesner St, San Diego, CA 92117</p>
        </div>
        <div>
          <a href="tel:+16193049955">(619) 304-9955</a>
          <a href="mailto:ellie@alignedwithinpsych.com">ellie@alignedwithinpsych.com</a>
        </div>
        <div className="legal-footer__links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/">Home</Link>
        </div>
      </footer>
    </main>
  );
}
