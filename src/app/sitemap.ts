import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { servicesData } from '@/data/services';
import { getAllBrands } from '@/data/vehicles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://keys2cars.com';
  const routes: MetadataRoute.Sitemap = [];
  const allBrands = getAllBrands();

  // 1. Homepages multi-idioma con hreflang internacional
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
          'x-default': `${baseUrl}/he`,
        },
      },
    });
  }

  // 2. Páginas principales de Servicios
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
            'x-default': `${baseUrl}/he/${service.slug}`,
          },
        },
      });
    }
  }

  // 3. Páginas de SEO Programático: Servicio + Marca (ej: /he/car-key-duplication/toyota)
  for (const service of servicesData) {
    for (const brand of allBrands) {
      for (const lang of locales) {
        routes.push({
          url: `${baseUrl}/${lang}/${service.slug}/${brand.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: brand.popular ? 0.85 : 0.75,
          alternates: {
            languages: {
              'he-IL': `${baseUrl}/he/${service.slug}/${brand.slug}`,
              'en-IL': `${baseUrl}/en/${service.slug}/${brand.slug}`,
              'es-IL': `${baseUrl}/es/${service.slug}/${brand.slug}`,
              'x-default': `${baseUrl}/he/${service.slug}/${brand.slug}`,
            },
          },
        });
      }
    }
  }

  // 4. Hubs de Marca (ej: /he/brand/toyota)
  for (const brand of allBrands) {
    for (const lang of locales) {
      routes.push({
        url: `${baseUrl}/${lang}/brand/${brand.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: brand.popular ? 0.8 : 0.7,
        alternates: {
          languages: {
            'he-IL': `${baseUrl}/he/brand/${brand.slug}`,
            'en-IL': `${baseUrl}/en/brand/${brand.slug}`,
            'es-IL': `${baseUrl}/es/brand/${brand.slug}`,
            'x-default': `${baseUrl}/he/brand/${brand.slug}`,
          },
        },
      });
    }
  }

  // 5. Páginas específicas de Modelo con slugs limpios (ej: /he/brand/kia/picanto)
  for (const brand of allBrands.filter((b) => b.popular)) {
    for (const model of brand.models.slice(0, 10)) {
      for (const lang of locales) {
        routes.push({
          url: `${baseUrl}/${lang}/brand/${brand.slug}/${model.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
          alternates: {
            languages: {
              'he-IL': `${baseUrl}/he/brand/${brand.slug}/${model.slug}`,
              'en-IL': `${baseUrl}/en/brand/${brand.slug}/${model.slug}`,
              'es-IL': `${baseUrl}/es/brand/${brand.slug}/${model.slug}`,
              'x-default': `${baseUrl}/he/brand/${brand.slug}/${model.slug}`,
            },
          },
        });
      }
    }
  }

  return routes;
}
