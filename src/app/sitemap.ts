import type { MetadataRoute } from 'next';
import { origin } from '@/lib/business';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/services', '/portfolio', '/about', '/faq', '/contact', ...services.map(service => `/services/${service.slug}`)];
  return pages.map(path => ({ url: `${origin}${path}`, changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : path.startsWith('/services/') ? 0.8 : 0.6 }));
}
