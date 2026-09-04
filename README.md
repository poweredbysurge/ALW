# Aligned Within

Marketing site for Ellie Wheeler, PsyD — clinical psychology in La Jolla, California.
Built on the **Sunlit Study** design direction approved in the 2026-08-29 client review.

**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · TypeScript · deployed on Vercel.

## Running locally

```bash
npm install     # only on a fresh clone
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

Node 22.13+ (see `.nvmrc`).

## Design tokens

The palette and typefaces live in one `@theme` block at the top of
`app/globals.css`. Tailwind turns each token into a utility automatically:

| Token | Utilities |
| --- | --- |
| `--color-gold: #dfa35b` | `bg-gold`, `text-gold`, `border-gold`, `bg-gold/40` |
| `--color-ink: #3e3428` | `text-ink`, `bg-ink`, … |
| `--font-display` (Fraunces) | `font-display` |
| `--font-body` (Inter) | `font-body` |

Change a value there and it propagates everywhere — no find-and-replace.
There are no hardcoded colours or font stacks left in the stylesheet.

## CSS layering

```
@theme            design tokens -> Tailwind utilities
@layer base       reset + document defaults
@layer components the Sunlit component styles
(unlayered)       prefers-reduced-motion overrides
```

Component styles sit in the `components` layer, so a Tailwind utility always
wins over them regardless of selector specificity. **Build new UI with
utilities;** reach for the component layer only for things utilities express
badly (the hero light wash, keyframes, complex grid compositions).

## Fonts

Fraunces and Inter are self-hosted through `next/font/google` in
`app/layout.tsx` — no request to Google at runtime, no layout shift. Both load
as variable fonts, so every weight in the 300–600 range is available from a
single file per family.

## Deploying to Vercel

Zero config — import the repo and Vercel detects Next.js. The only required
setting is an environment variable:

```
NEXT_PUBLIC_SITE_URL=https://<the real domain>
```

It backs `metadataBase`, the canonical link, and the OG/Twitter tags. Without
it the code falls back to `https://alignedwithin.com`.

Security headers (HSTS, nosniff, frame options, referrer policy) are set in
`next.config.ts`.

## Known gaps before launch

- **The consultation form does not submit anywhere.** It renders the success
  state client-side only; nothing is transmitted or stored. Needs a
  HIPAA-appropriate intake endpoint. See the TODO in `app/experience.tsx`.
- Hero, services, and portrait images are CSS placeholders awaiting real photography.
- Footer links to Privacy / Terms / Accessibility have no destination pages yet.
