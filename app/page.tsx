import type { Metadata } from 'next';
import { Home } from './_components/home';

export const metadata: Metadata = {
  description:
    'Ellie Wheeler, PsyD — clinical psychologist in La Jolla, California. Therapy for trauma, OCD, identity, and life transitions. In person and via telehealth across California.',
};

export default function HomePage() {
  return <Home />;
}
