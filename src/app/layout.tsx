import type { Metadata, Viewport } from 'next';
import { FloatingActions, Footer, Header } from '@/components/ui';
import { business, origin } from '@/lib/business';
import { JsonLd, localBusinessSchema } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: `${business.name} | دهانات وديكورات في الرياض`, template: `%s | ${business.name}` },
  description: business.description,
  applicationName: business.name,
  alternates: { canonical: origin },
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' }, { url: '/favicon.ico', sizes: 'any' }], apple: '/apple-icon.png' },
  openGraph: { type: 'website', locale: 'ar_SA', siteName: business.name, title: `${business.name} | دهانات وديكورات في الرياض`, description: business.description, url: origin, images: [{ url: `${origin}/og.jpg`, width: 1200, height: 630, alt: business.name }] },
  twitter: { card: 'summary_large_image', images: [`${origin}/og.jpg`] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#243329' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body><a className="skip-link" href="#main">انتقل إلى المحتوى</a><JsonLd value={localBusinessSchema} /><Header /><main id="main">{children}</main><Footer /><FloatingActions /></body></html>;
}
