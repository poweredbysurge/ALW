import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

// Self-hosted and preloaded by Next — no render-blocking request to Google,
// no layout shift. Exposed as CSS variables consumed by @theme in globals.css.
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alignedwithin.com';
const TITLE = 'Aligned Within · Ellie Wheeler, PsyD';
const DESCRIPTION =
  'Clinical psychology in La Jolla, California. Therapy for trauma, OCD, identity, and life transitions — in person and via telehealth across California.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s · Aligned Within' },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Aligned Within',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og.png', width: 1792, height: 932, alt: 'Aligned Within — Nature meets calm therapy.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og.png'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
