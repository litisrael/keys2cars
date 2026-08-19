import React from 'react';
import { Locale } from '@/lib/i18n';

export interface LocalBusinessSchemaProps {
  lang?: Locale;
  canonicalUrl?: string;
}

export default function LocalBusinessSchema({
  lang = 'he',
  canonicalUrl = 'https://www.keys2cars.com/',
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness', 'Locksmith'],
    '@id': 'https://www.keys2cars.com/#localbusiness',
    name: 'Keys2Cars',
    alternateName: ['Keys2Cars - מפתח לרכב', 'מפתח לרכב', 'Keys2Cars Israel'],
    description:
      lang === 'he'
        ? 'שירותי מנעולנות רכב מקצועיים בבית שמש וסביבתה: שכפול מפתחות לרכב, קידוד מפתחות חכמים ושלטים, ופריצת רכבים בחירום ללא נזק.'
        : 'Professional automotive locksmith services in Bet Shemesh and surrounding areas: car key duplication, smart key & fob reprogramming, and non-destructive emergency vehicle lockouts.',
    url: canonicalUrl,
    telephone: '053-339-3170',
    priceRange: '₪₪',
    currenciesAccepted: 'ILS',
    paymentAccepted: 'Cash, Credit Card, Bit, PayBox',
    image: 'https://www.keys2cars.com/images/logo.png',
    hasMap: 'https://www.google.com/maps/place/?q=place_id:ChIJxfl4UzoBfI4Rk_exFjQH9SA',
    sameAs: [
      'https://www.keys2cars.com',
      'https://maps.google.com/?cid=ChIJxfl4UzoBfI4Rk_exFjQH9SA',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'שדרות האמורים 84',
      addressLocality: 'Bet Shemesh',
      addressRegion: 'Jerusalem District',
      addressCountry: 'IL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.747,
      longitude: 34.9881,
    },
    areaServed: [
      { '@type': 'City', name: 'Bet Shemesh' },
      { '@type': 'City', name: 'בית שמש' },
      { '@type': 'City', name: 'Jerusalem' },
      { '@type': 'City', name: 'Tzur Hadassah' },
      { '@type': 'City', name: 'Modiin' },
      { '@type': 'Country', name: 'Israel' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Friday'],
        opens: '07:00',
        closes: '23:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday'],
        opens: '04:30',
        closes: '23:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Thursday'],
        opens: '06:30',
        closes: '23:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '07:30',
        closes: '23:30',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
