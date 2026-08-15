import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { locales, Locale, isRTL } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuickContactFloating from '@/components/float/QuickContactFloating';
import '../globals.css';

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
    en: 'Professional automotive locksmith services across Israel: non-destructive car opening, smart key duplication, all keys lost recovery and ECU programming on-site in 20-30 min.',
    es: 'Servicios de cerrajería automotriz en todo Israel: apertura de autos sin daños, duplicado de llaves con chip, recuperación por pérdida total y programación en 20-30 min.',
  };

  const baseUrl = 'https://keys2cars.com';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: titles[currentLang],
      template: `%s | Keys2Cars Israel`,
    },
    description: descriptions[currentLang],
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
      locale: currentLang === 'he' ? 'he_IL' : currentLang === 'es' ? 'es_IL' : 'en_US',
      url: `${baseUrl}/${currentLang}`,
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
