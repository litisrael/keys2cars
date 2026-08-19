import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Metadata, Viewport } from 'next';
import { locales, Locale, isRTL } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuickContactFloating from '@/components/float/QuickContactFloating';
import GoogleAnalytics from '@/components/seo/GoogleAnalytics';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import '../globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0284c7' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (locales.includes(lang as Locale) ? lang : 'he') as Locale;

  const titles: Record<Locale, string> = {
    he: 'Keys2Cars | מנעולן רכב בבית שמש ושכפול מפתחות לרכב 24/7',
    en: 'Keys2Cars | Automotive Locksmith in Bet Shemesh & Car Key Duplication',
    es: 'Keys2Cars | Cerrajería Automotriz en Bet Shemesh y Duplicado de Llaves',
  };

  const descriptions: Record<Locale, string> = {
    he: 'שירותי מנעולנות רכב מקצועיים בבית שמש: שכפול מפתחות לרכב, קידוד מפתח חכם ושלטים, ופריצת רכבים בחירום ללא נזק. הגעה מהירה ואחריות מלאה.',
    en: 'Professional automotive locksmith in Bet Shemesh: Car key copying, smart key reprogramming, and emergency vehicle lockouts. Fast mobile response and OEM keys.',
    es: 'Cerrajería automotriz en Bet Shemesh: duplicado de llaves de auto, reprogramación de llaves inteligentes y apertura de emergencia de vehículos sin daños.',
  };

  const keywordsMap: Record<Locale, string[]> = {
    he: [
      'מנעולן רכב בית שמש',
      'שכפול מפתחות לרכב בית שמש',
      'פריצת רכב בית שמש',
      'קידוד מפתח חכם לרכב',
      'שחזור מפתחות רכב בית שמש',
      'מנעולן רכב 24 שעות בית שמש',
      'שכפול שלט לרכב בית שמש',
      'מפתח לרכב',
    ],
    en: [
      'automotive locksmith bet shemesh',
      'car locksmith bet shemesh',
      'car key copying bet shemesh',
      'smart key reprogramming',
      'emergency vehicle lockout bet shemesh',
      'car key replacement israel',
    ],
    es: [
      'cerrajero de autos bet shemesh',
      'duplicado de llaves de auto bet shemesh',
      'reprogramacion llaves inteligentes',
      'apertura de vehiculos de emergencia',
      'cerrajeria automotriz israel',
    ],
  };

  const baseUrl = 'https://keys2cars.com';
  const ogImageUrl = `${baseUrl}/og-image.jpg`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: titles[currentLang],
      template: `%s | Keys2Cars Israel`,
    },
    description: descriptions[currentLang],
    keywords: keywordsMap[currentLang],
    authors: [{ name: 'Keys2Cars Israel', url: baseUrl }],
    creator: 'Keys2Cars',
    publisher: 'Keys2Cars Israel',
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.png', type: 'image/png', sizes: '32x32' },
        { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: ['/favicon.ico'],
    },
    manifest: '/manifest.webmanifest',
    alternates: {
      canonical: `${baseUrl}/${currentLang}`,
      languages: {
        'he-IL': `${baseUrl}/he`,
        'en-IL': `${baseUrl}/en`,
        'es-IL': `${baseUrl}/es`,
        'x-default': `${baseUrl}/he`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Keys2Cars Israel',
      title: titles[currentLang],
      description: descriptions[currentLang],
      url: `${baseUrl}/${currentLang}`,
      locale: currentLang === 'he' ? 'he_IL' : currentLang === 'es' ? 'es_IL' : 'en_US',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: titles[currentLang],
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[currentLang],
      description: descriptions[currentLang],
      images: [ogImageUrl],
      creator: '@keys2cars',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const rtl = isRTL(locale);

  return (
    <html lang={locale} dir={rtl ? 'rtl' : 'ltr'}>
      <head>
        <LocalBusinessSchema lang={locale} canonicalUrl={`https://www.keys2cars.com/${locale}`} />
      </head>
      <body className={`min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 ${rtl ? 'font-hebrew' : 'font-sans'}`}>
        <GoogleAnalytics />
        <Header lang={locale} />
        <main className="flex-grow">{children}</main>
        <Footer lang={locale} />
        <QuickContactFloating lang={locale} />
      </body>
    </html>
  );
}
