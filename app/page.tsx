import type { Metadata } from 'next';
import { Home } from './_components/home';

export const metadata: Metadata = {
  description:
    'Ellie Wheeler, Psy.D. is a clinical psychologist in San Diego, California. Therapy for trauma, OCD, identity, and life transitions. In person and via telehealth across California.',
};

export default function HomePage() {
  return <Home />;
}
