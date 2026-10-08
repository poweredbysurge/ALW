import Image from 'next/image';

import { SunMark } from './sun-mark';

import { ConsultationForm, Experience } from '../experience';

const nav = [
  ['About', '#about'],
  ['Treatments', '#treatments'],
  ['Services', '#services'],
  ['Modalities', '#modalities'],
  ['Fees & Insurance', '#consultation'],
  ['FAQ', '#faq'],
  ['Contact', '#consultation'],
  ['Reflections', '#footer'],
];

export function Home() {
  return (
    <main className="site sunlit">
      <Experience />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-nav">
        <a className="site-brand" href="#main-content" aria-label="Aligned Within home">
          <span className="site-brand__mark">
            <SunMark title="Aligned Within" />
          </span>
          <span><b>Aligned Within</b><small>Ellie Wheeler, Psy.D.</small></span>
        </a>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="button button--primary button--small" href="#consultation">Free consultation</a>
      </header>

      <section className="sunlit-hero sunlit-hero--portrait" id="main-content">
        <div className="sunlit-hero__wash" aria-hidden="true" />
        <div className="sunlit-hero__ghost" aria-hidden="true"><SunMark /></div>
        <div className="sunlit-hero__copy">
          <p className="eyebrow hero-line hero-line--1">Clinical psychology · San Diego, California</p>
          <h1>
            <span className="hero-line hero-line--2">Do you feel like something</span>
            <span className="hero-line hero-line--3">in your life is <em>out of alignment?</em></span>
          </h1>
          <p className="hero-intro hero-line hero-line--4">
            You may know something needs to change without knowing where to begin.
            Therapy can be a place to listen inward, understand what shaped you, and move toward a life that feels more fully your own.
          </p>
          <div className="hero-actions hero-line hero-line--4">
            <a className="button button--primary" href="#consultation">Free consultation <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#treatments">Explore how I can help <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <figure className="hero-portrait">
          <Image
            src="/ellie/ellie-hero-1300.jpg"
            alt="Ellie Wheeler, Psy.D., smiling in her San Diego therapy office"
            width={1300}
            height={1997}
            sizes="(max-width: 780px) 82vw, 38vw"
            priority
          />
          <figcaption className="hero-portrait__id">
            <b>Ellie Wheeler, Psy.D.</b>
            <span>Clinical Psychologist</span>
          </figcaption>
        </figure>
      </section>

      <section className="intro-statement section-pad" data-reveal>
        <p className="eyebrow">A place to realign</p>
        <h2>You don’t need to become someone new.<br />You may need room to hear yourself again.</h2>
        <p>As a San Diego psychologist, Ellie offers thoughtful, collaborative therapy for the moments when old ways of coping no longer fit—and something more honest is asking to emerge.</p>
      </section>

      <section className="sunlit-treatments section-pad" id="treatments">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">What I help with</p>
          <h2>Support for what feels<br /><em>tender, stuck, or changing.</em></h2>
          <p>We can begin with what is most present. You do not need a perfect explanation for what you are feeling.</p>
        </div>
        <div className="treatment-list">
          <article data-reveal style={{ '--delay': '0ms' } as React.CSSProperties}>
            <span>01</span>
            <h3>Trauma</h3>
            <p>Trauma can leave you braced for danger, whether it came from one experience or unfolded over time. Trauma therapy offers a steady place to understand these patterns, build a sense of safety, and reconnect with parts of yourself that had to go quiet.</p>
            <a href="#consultation">Learn about trauma therapy <span aria-hidden="true">↗</span></a>
          </article>
          <article data-reveal style={{ '--delay': '90ms' } as React.CSSProperties}>
            <span>02</span>
            <h3>OCD</h3>
            <p>Intrusive thoughts and compulsions can make your world feel painfully small. OCD therapy helps you relate differently to uncertainty, loosen the cycle, and make more room for the life you value.</p>
            <a href="#modalities">How ERP can help <span aria-hidden="true">↗</span></a>
          </article>
          <article data-reveal style={{ '--delay': '180ms' } as React.CSSProperties}>
            <span>03</span>
            <h3>Identity development</h3>
            <p>Sometimes the roles, expectations, and identities we’ve carried can make it difficult to know what truly feels like you. Together, we can explore your identity, including gender, sexuality, values, and purpose, with curiosity and create a life that feels more authentic to who you are.</p>
            <a href="#consultation">Begin the conversation <span aria-hidden="true">↗</span></a>
          </article>
          <article data-reveal style={{ '--delay': '270ms' } as React.CSSProperties}>
            <span>04</span>
            <h3>Life transitions</h3>
            <p>Relationship endings, disconnection, recovery, starting college, graduate school, or university, and other major changes can unsettle your sense of self. Therapy creates space to grieve what is ending, find your footing, and move forward by your own values.</p>
            <a href="#consultation">Find support through change <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="sunlit-modalities section-pad" id="modalities">
        <div className="modalities-intro" data-reveal>
          <p className="eyebrow">How I work</p>
          <h2>Depth and direction,<br />held together.</h2>
          <p>Therapy is tailored to you. Ellie integrates approaches that make room for your history, your values, and the concrete patterns keeping you from feeling aligned within.</p>
        </div>
        <div className="modality-cards">
          <article data-reveal>
            <i aria-hidden="true">1</i>
            <h3>Psychodynamic Therapy</h3>
            <p>We notice how earlier relationships and experiences live in the present, bringing the unseen into view so you can respond with greater freedom.</p>
            <span>Understand the roots</span>
          </article>
          <article data-reveal>
            <i aria-hidden="true">2</i>
            <h3>Acceptance & Commitment Therapy</h3>
            <p>ACT helps you make room for difficult inner experiences while choosing actions grounded in what matters most to you.</p>
            <span>Live by your values</span>
          </article>
          <article data-reveal>
            <i aria-hidden="true">3</i>
            <h3>Exposure & Response Prevention</h3>
            <p>ERP is a proven approach for OCD that helps you practice meeting uncertainty without returning to compulsions.</p>
            <span>Expand your life</span>
          </article>
        </div>
      </section>

      <section className="sunlit-services section-pad" id="services">
        <div className="services-photo" data-reveal>
          <div className="image-label">San Diego · California</div>
        </div>
        <div className="services-copy" data-reveal>
          <p className="eyebrow">Services</p>
          <h2>Therapy that meets you<br />where you are.</h2>
          <div className="service-row"><span>01</span><div><h3>Individual therapy</h3><p>One-to-one psychotherapy shaped around your needs, pace, and hopes for change.</p></div></div>
          <div className="service-row"><span>02</span><div><h3>In-person in San Diego</h3><p>A private, calming space for therapy in San Diego and the surrounding area.</p></div></div>
          <div className="service-row"><span>03</span><div><h3>Telehealth across California</h3><p>Secure video sessions for clients located anywhere in California.</p></div></div>
        </div>
      </section>

      <section className="sunlit-about section-pad" id="about">
        <div className="about-portrait" data-reveal>
          <Image
            className="portrait-photo"
            src="/ellie/ellie-about-1200.jpg"
            alt="Ellie Wheeler, Psy.D., seated in her San Diego therapy office"
            width={1200}
            height={1804}
            sizes="(max-width: 780px) 100vw, 34vw"
          />
          <small>Clinical Psychologist · San Diego, CA</small>
        </div>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">Meet Ellie</p>
          <h2>Warm, curious,<br />and deeply attentive.</h2>
          <p className="about-lede">I believe you make sense in the context of what you have lived through.</p>
          <p>My role is not to tell you who to be. It is to offer a thoughtful relationship where we can understand what is happening beneath the surface, loosen what no longer serves you, and help your outer life feel more aligned with your inner one.</p>
          <p>I work especially well with young adults, college-age individuals, and people navigating trauma, OCD, recovery, divorce, identity exploration, or other seasons of profound change.</p>
          <a className="text-link text-link--rule" href="#consultation">More about me <span aria-hidden="true">↗</span></a>
        </div>
        <blockquote data-reveal>“Therapy can be both a place of refuge and a place where new ways of living begin.”</blockquote>
      </section>

      <section className="sunlit-consult section-pad" id="consultation">
        <div className="consult-heading" data-reveal>
          <p className="eyebrow">A gentle first step</p>
          <h2>Let’s see if this<br />feels like a fit.</h2>
          <p>A free consultation is a brief, low-pressure conversation. You can share what brings you here, ask questions about therapy, and get a sense of what it might be like to work together.</p>
          <div className="consult-reassurance"><SunMark /><span>No commitment.<br />Just a human conversation.</span></div>
        </div>
        <div data-reveal><ConsultationForm /></div>
      </section>

      <section className="sunlit-faq section-pad" id="faq">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Common questions</p>
          <h2>A little clarity<br />before we begin.</h2>
          <a className="text-link" href="#footer">View the full FAQ <span aria-hidden="true">↗</span></a>
        </div>
        <div className="faq-list" data-reveal>
          <details><summary>How do I know if therapy is right for me?<span aria-hidden="true">+</span></summary><p>You do not need to be in crisis or have everything figured out. If something feels painful, repetitive, or out of alignment, a consultation can help you decide whether therapy feels useful now.</p></details>
          <details><summary>Do you offer in-person and online sessions?<span aria-hidden="true">+</span></summary><p>Yes. Ellie offers in-person therapy in San Diego and secure telehealth appointments for clients located throughout California.</p></details>
          <details><summary>Do you accept insurance?<span aria-hidden="true">+</span></summary><p>Aligned Within is a private-pay practice. A superbill may be available for possible out-of-network reimbursement; coverage varies, so checking directly with your plan is recommended.</p></details>
        </div>
      </section>

      <footer className="sunlit-footer" id="footer">
        <div className="footer-brand"><SunMark /><h2>Aligned Within</h2><p>Ellie Wheeler, Psy.D.<br />Clinical Psychologist</p></div>
        <div><p className="footer-label">Practice</p><a href="#about">About Ellie</a><a href="#treatments">Treatments</a><a href="#modalities">Modalities</a><a href="#services">Services</a></div>
        <div><p className="footer-label">Visit</p><p>Private office<br />San Diego, California</p><p>Telehealth throughout California</p></div>
        <div><p className="footer-label">Begin</p><a href="#consultation">Free consultation</a><a href="#faq">Frequently asked questions</a><a href="#footer">Reflections</a></div>
        <div className="footer-bottom"><span>© 2026 Aligned Within Psychology. All rights reserved.</span><span>Privacy · Terms · Accessibility</span><span>Therapy is not emergency care.</span></div>
      </footer>
    </main>
  );
}
