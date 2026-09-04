import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Home } from '../../_components/home';

/**
 * Review routes for design variants, excluded from search engines. The live
 * homepage at `/` renders the approved build with none of this chrome.
 */
const VARIANTS = {
  sunlit: {
    name: 'Sunlit',
    tag: 'Live build',
    className: '',
    props: {},
    note: 'The homepage as it stands today.',
  },
  meadow: {
    name: 'Meadow',
    tag: 'Palette variant',
    className: 'palette-meadow',
    props: {},
    note: 'Brighter, yellower gold and a deeper green sage.',
  },
} as const;

type VariantKey = keyof typeof VARIANTS;
const ORDER = Object.keys(VARIANTS) as VariantKey[];

export function generateStaticParams() {
  return ORDER.map((variant) => ({ variant }));
}

export const metadata: Metadata = {
  title: 'Design review',
  robots: { index: false, follow: false },
};

export default async function VariantPreview({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  if (!(variant in VARIANTS)) notFound();

  const key = variant as VariantKey;
  const active = VARIANTS[key];
  const next = ORDER[(ORDER.indexOf(key) + 1) % ORDER.length];

  return (
    <div className={active.className}>
      <div className="palette-bar">
        <span className="palette-bar__now">
          <b>{active.name}</b>
          <small>{active.tag}</small>
        </span>
        <span className="palette-bar__note">{active.note}</span>
        <Link href={`/preview/${next}`}>
          Next: {VARIANTS[next].name} <span aria-hidden="true">→</span>
        </Link>
      </div>
      <Home {...active.props} />
    </div>
  );
}
