import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Vedanta Systems | Privacy', template: '%s | Vedanta Systems' },
  description: 'Privacy information for Vedanta Systems Admin and Vedanta Systems Staff.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
