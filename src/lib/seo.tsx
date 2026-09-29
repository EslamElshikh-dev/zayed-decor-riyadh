import type { Metadata } from 'next';
import { business, origin } from './business';
import { services } from './services';

export function pageMetadata(title: string, description: string, path: string, image?: string): Metadata {
  const url = `${origin}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'ar_SA', siteName: business.name, title, description, url, images: [{ url: `${origin}${image || '/og.jpg'}`, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [`${origin}${image || '/og.jpg'}`] },
  };
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HousePainter',
  '@id': `${origin}/#business`,
  name: business.name,
  description: business.description,
  url: origin,
  telephone: business.phoneE164,
  image: `${origin}/og.jpg`,
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }],
  areaServed: { '@type': 'City', name: business.city },
  availableLanguage: 'ar',
  makesOffer: services.map(service => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.title, url: `${origin}/services/${service.slug}` } })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: `${origin}${item.path}` })) };
}

export function JsonLd({ value }: { value: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, '\\u003c') }} />;
}
