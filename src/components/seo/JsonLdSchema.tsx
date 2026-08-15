import React from 'react';
import { Locale } from '@/lib/i18n';

interface FaqItem {
  q: string;
  a: string;
}

interface SchemaProps {
  lang: Locale;
  brand?: string;
  service?: string;
  model?: string;
  faqs?: FaqItem[];
  canonicalUrl?: string;
}

export default function JsonLdSchema({ lang, brand, service, model, faqs, canonicalUrl }: SchemaProps) {
  const brandName = brand ? brand.charAt(0).toUpperCase() + brand.slice(1) : '';
  const modelName = model ? model.charAt(0).toUpperCase() + model.slice(1) : '';
  const businessName = brandName
    ? `Keys2Cars Israel - ${brandName} Auto Locksmith`
    : `Keys2Cars Israel - מנעולן רכב ושכפול מפתחות 24/7`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness', 'Locksmith'],
    name: businessName,
    image: 'https://keys2cars.com/images/logo.png',
    telephone: '+972-50-0000000',
    url: canonicalUrl || 'https://keys2cars.com',
    priceRange: '₪₪',
    currenciesAccepted: 'ILS',
    paymentAccepted: 'Cash, Credit Card, Bit, PayBox',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IL',
      addressLocality: 'Tel Aviv',
      addressRegion: 'Center',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.0853,
      longitude: 34.7818,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      { '@type': 'Country', name: 'Israel' },
      { '@type': 'City', name: 'Tel Aviv-Yafo' },
      { '@type': 'City', name: 'Rishon LeZion' },
      { '@type': 'City', name: 'Petah Tikva' },
      { '@type': 'City', name: 'Netanya' },
      { '@type': 'City', name: 'Holon' },
      { '@type': 'City', name: 'Ramat Gan' },
      { '@type': 'City', name: 'Jerusalem' },
      { '@type': 'City', name: 'Haifa' },
      { '@type': 'City', name: 'Ashdod' },
    ],
    serviceArea: 'Israel',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '342',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const faqSchema = faqs && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
