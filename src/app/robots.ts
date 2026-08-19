import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.keys2cars.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/he/',
          '/en/',
          '/es/',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*?*utm_*', // Evitar indexación duplicada de variantes con UTM
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
