# Aligned Within — project rules

Marketing site for Ellie Wheeler, Psy.D. (clinical psychology, San Diego, CA).
Stack: **Next.js 16 App Router · Tailwind CSS v4 · TypeScript · Vercel.**

Design direction is **Sunlit Study**, approved 2026-08-29. Do not introduce a
second visual direction without being asked.

---

## Design tokens

All tokens live in one `@theme` block at the top of `app/globals.css`. Tailwind
turns each into a utility automatically (`--color-gold` → `bg-gold`, `text-gold`,
`border-gold`, `bg-gold/40`; `--font-display` → `font-display`).

**There are no hardcoded colours or font stacks anywhere in the stylesheet, and
new ones must not be added.** If a value is needed that no token covers, add a
token — don't inline a hex.

### Grounds

| Token | Hex | Use |
| --- | --- | --- |
| `--color-paper` | `#fdfbf6` | Main page background |
| `--color-shell` | `#f8f5ee` | Page frame on wide screens |
| `--color-sand` | `#f7f1e6` | Alternate section bands, hero glow |
| `--color-dune` | `#eae0d0` | Deepest light ground, inset panels |

### Rules

| Token | Hex | Use |
| --- | --- | --- |
| `--color-line` | `#d9cebf` | Standard divider |
| `--color-line-soft` | `#cbbfae` | Lighter rule inside lists |

### Type

| Token | Hex | Use |
| --- | --- | --- |
| `--color-ink` | `#3e3428` | Headlines, primary text, footer ground |
| `--color-ink-soft` | `#6e5f4e` | Body copy; **the ground for dark bands** |
| `--color-clay` | `#8a6f5b` | Captions, supporting text |
| `--color-clay-mid` | `#796958` | About-section paragraphs |
| `--color-clay-deep` | `#5f4937` | Reassurance text on the gold band |

### Accents

| Token | Hex | Use |
| --- | --- | --- |
| `--color-gold` | `#dfa35b` | Action colour — buttons, brand mark, consult band |
| `--color-gold-bright` | `#e7b374` | Gold button hover |
| `--color-gold-soft` | `#efc98a` | Focus rings, hero light wash |
| `--color-sage` | `#6c8c84` | Section labels on light grounds |
| `--color-sage-soft` | `#9db2ad` | Sage variant (legacy; prefer `sage-pale` on dark) |
| `--color-sage-pale` | `#cfe4dc` | **Section labels on any dark ground** |
| `--color-gold-pale` | `#f7e0b0` | **Gold accents on any dark ground** |
| `--color-shadow` | `#754e25` | Warm drop shadow under buttons |

### Type faces

| Token | Family | Use |
| --- | --- | --- |
| `--font-display` | Fraunces 300–500 | Headlines, section titles, pull quotes |
| `--font-body` | Inter 400–600 | Body, nav, buttons, labels |

Both are self-hosted via `next/font/google` in `app/layout.tsx` as variable
fonts. **Never add a Google Fonts `<link>`** — it reintroduces a render-blocking
request and trips `@next/next/no-page-custom-font`.

---

## Standing rules

1. **No full-Ink section bands between the header and the footer.**
   Dark bands in the body of the page use `--color-ink-soft`.
   `--color-ink` is reserved for the footer (and for text).

2. **On any dark ground, accents use the pale tints** — `--color-sage-pale` and
   `--color-gold-pale`. Full-strength `--color-gold` and `--color-sage` cannot
   clear 4.5:1 on `--color-ink-soft` (both land at ~2.8:1). The pale tints clear
   on `ink` *and* `ink-soft`, so they are the single answer for dark bands.

3. **Accessibility target is WCAG AA — 4.5:1 for text, 3:1 for text ≥24px.**
   Measure against the ground the element *actually* sits on, not the page
   background. Three bands are not paper:
   - `.sunlit-services` → `--color-ink-soft`
   - `.sunlit-consult` → `--color-gold`
   - `.sunlit-footer` → `--color-ink`

4. **CSS layering.** `@theme` → `@layer base` → `@layer components` → unlayered
   `prefers-reduced-motion`. Component styles sit in the `components` layer, so a
   Tailwind utility always beats them regardless of specificity. **Build new UI
   with utilities**; use the component layer only for what utilities express
   badly (the hero wash, keyframes, complex grid composition).

5. **Images go through `next/image`.** Portraits live in `public/ellie/`.

6. **Never use an em dash (—) in copy.** This is a hard client rule and it
   covers everything a visitor or a search engine can see: page text, headings,
   link labels, form text, alt text, and the `title`/`description`/OpenGraph
   metadata. Use a comma, a colon, or a second sentence instead. The repo is
   currently clean of em dashes under `app/`, including comments, so
   `npm run lint:dashes` is a meaningful check rather than a noisy one.
   An en dash (–) in a numeric range is fine.

---

## Known accessibility gaps

Carried over from the approved palette; all on light grounds. Fixing them means
darkening sage, which is a client decision that has not been made.

| Element | Pairing | Ratio | Needs |
| --- | --- | --- | --- |
| Section labels | `sage` on `paper` | 3.55:1 | 4.5:1 |
| Section labels | `sage` on `sand` | 3.26:1 | 4.5:1 |
| Section labels, consult band | `sage` on `gold` | 1.67:1 | 4.5:1 |
| Consult reassurance text | `clay-deep` on `gold` | 3.82:1 | 4.5:1 |

Everything on the dark bands and all body copy passes. A deeper, greener sage
that clears 4.5:1 on all three light grounds was explored in a "Meadow" variant
and not adopted; it lives in the initial commit if it is ever wanted back.

---

## Routes

- `/` — the homepage, and currently the only page.
- `/robots.txt`, `/sitemap.xml` — generated from `app/robots.ts` and
  `app/sitemap.ts`; both read `NEXT_PUBLIC_SITE_URL`.

The design-review routes under `/preview` were removed once the palette and hero
were settled. They are in the initial commit if a future review needs them.

`docs/palette.html` is the client-facing palette reference — open it directly or
publish it. Keep it in step with the `@theme` block when tokens change.

---

## Before launch

- **The consultation form does not submit anywhere.** It renders the success
  state client-side only; nothing is transmitted or stored. Needs a
  HIPAA-appropriate intake endpoint. See the TODO in `app/experience.tsx`.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel — it backs `metadataBase`, the canonical
  link, and OG tags.
- **The services band photo is hotlinked from Unsplash** in `globals.css`. It
  works, but it is a third-party dependency with no licence record for the
  client. Replace it with a licensed local asset before launch.
- Footer links to Privacy / Terms / Accessibility have no destination pages.
