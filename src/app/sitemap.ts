import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { servicesData } from '@/data/services';
import { getPopularBrands } from '@/data/vehicles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://keys2cars.com';
  const routes: MetadataRoute.Sitemap = [];
  const popularBrands = getPopularBrands();

  // 1. Homepages
  for (const lang of locales) {
    routes.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          'he-IL': `${baseUrl}/he`,
          'en-IL': `${baseUrl}/en`,
          'es-IL': `${baseUrl}/es`,
        },
      },
    });
  }

  // 2. Services
  for (const service of servicesData) {
    for (const lang of locales) {
      routes.push({
        url: `${baseUrl}/${lang}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
        alternates: {
          languages: {
            'he-IL': `${baseUrl}/he/${service.slug}`,
            'en-IL': `${baseUrl}/en/${service.slug}`,
            'es-IL': `${baseUrl}/es/${service.slug}`,
          },
        },
      });
    }
  }

  // 3. Service + Brand Programmatic Pages
  for (const service of servicesData) {
    for (const brand of popularBrands) {
      for (const lang of locales) {
        routes.push({
          url: `${baseUrl}/${lang}/${service.slug}/${brand.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8,
          alternates: {
            languages: {
              'he-IL': `${baseUrl}/he/${service.slug}/${brand.slug}`,
              'en-IL': `${baseUrl}/en/${service.slug}/${brand.slug}`,
              'es-IL': `${baseUrl}/es/${service.slug}/${brand.slug}`,
            },
          },
        });
      }
    }
  }

  // 4. Brand Hubs
  for (const brand of popularBrands) {
    for (const lang of locales) {
      routes.push({
        url: `${baseUrl}/${lang}/brand/${brand.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            'he-IL': `${baseUrl}/he/brand/${brand.slug}`,
            'en-IL': `${baseUrl}/en/brand/${brand.slug}`,
            'es-IL': `${baseUrl}/es/brand/${brand.slug}`,
          },
        },
      });
    }
  }

  return routes;
}
