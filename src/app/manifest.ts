import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Keys2Cars Israel - מנעולן רכב ושכפול מפתחות 24/7',
    short_name: 'Keys2Cars',
    description: 'שירותי מנעולנות רכב מקצועיים, שכפול מפתחות ופריצה ללא נזק בישראל 24/7',
    start_url: '/he',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0284c7',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
