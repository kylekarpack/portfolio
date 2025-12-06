import { MetadataRoute } from 'next';
import { BASE_URL } from '@/config/settings.server';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/api',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
