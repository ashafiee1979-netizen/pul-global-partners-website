import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pulglobal.com'),
  title: { default: 'PUL Global Partners | Strategy. Solutions. Execution.', template: '%s | PUL Global Partners' },
  description: 'A U.S.-registered implementation partner integrating management consulting, capacity building, technology, procurement, logistics, and mission support.',
  icons: { icon: '/assets/images/pul-global-partners-horizontal.png' },
  openGraph: { type: 'website', siteName: 'PUL Global Partners', images: ['/assets/images/pul-global-strategy-hero-v1.webp'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,600&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
