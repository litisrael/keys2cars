import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Metadata, Viewport } from 'next';
import { locales, Locale, isRTL } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuickContactFloating from '@/components/float/QuickContactFloating';
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
    he: 'Keys2Cars | מנעולן רכב ושכפול מפתחות בישראל 24/7',
    en: 'Keys2Cars | 24/7 Car Locksmith & Key Replacement in Israel',
    es: 'Keys2Cars | Cerrajería Automotriz y Duplicado de Llaves en Israel 24/7',
  };

  const descriptions: Record<Locale, string> = {
    he: 'שירותי מנעולנות רכב מקצועיים בפריסה ארצית: פריצה ללא נזק, שכפול מפתחות חכמים, שחזור מאובדן מוחלט וקידוד אימובילייזר במקום תוך 20-30 דקות.',
    en: 'Professional automotive locksmith services across Israel: non-destructive car opening, smart key duplication, all keys lost recovery, and ECU programming on-site in 20-30 min.',
    es: 'Servicios de cerrajería automotriz en todo Israel: apertura de autos sin daños, duplicado de llaves con chip, recuperación por pérdida total y programación en 20-30 min.',
  };

  const keywordsMap: Record<Locale, string[]> = {
    he: [
      'מנעולן רכב',
      'שכפול מפתחות לרכב',
      'פריצת רכב ללא נזק',
      'שחזור מפתחות רכב',
      'קידוד שלטים לרכב',
      'מנעולן רכב תל אביב',
      'מנעולן רכב 24 שעות',
      'שכפול מפתח חכם',
    ],
    en: [
      'car locksmith israel',
      'auto locksmith tel aviv',
      'car key duplication israel',
      'emergency car lockout israel',
      'smart key programming',
      'all keys lost replacement',
    ],
    es: [
      'cerrajero de autos israel',
      'duplicado de llaves de auto israel',
      'apertura de autos de emergencia',
      'llaves con chip automotriz',
      'cerrajería móvil 24 horas',
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
      <body className={`min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 ${rtl ? 'font-hebrew' : 'font-sans'}`}>
        <Header lang={locale} />
        <main className="flex-grow">{children}</main>
        <Footer lang={locale} />
        <QuickContactFloating lang={locale} />
      </body>
    </html>
  );
}
