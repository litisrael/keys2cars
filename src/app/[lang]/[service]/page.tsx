import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Locale, locales } from '@/lib/i18n';
import { servicesData, getServiceBySlug } from '@/data/services';
import { getPopularBrands, getAllBrands } from '@/data/vehicles';
import DynamicHeroBanner from '@/components/ads/DynamicHeroBanner';
import QuickLeadForm from '@/components/forms/QuickLeadForm';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import { Award, ArrowLeft, ArrowRight, Car, Check } from 'lucide-react';

export async function generateStaticParams() {
  const params: Array<{ lang: string; service: string }> = [];
  for (const lang of locales) {
    for (const service of servicesData) {
      params.push({ lang, service: service.slug });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{
    lang: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, service: serviceSlug } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'he') as Locale;
  const service = getServiceBySlug(serviceSlug);

  if (!service) return {};

  const title = `${service.titles[locale]} בישראל 24/7 | Keys2Cars`;
  const description = service.descriptions[locale];
  const baseUrl = 'https://keys2cars.com';

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${serviceSlug}`,
      languages: {
        'he-IL': `${baseUrl}/he/${serviceSlug}`,
        'en-IL': `${baseUrl}/en/${serviceSlug}`,
        'es-IL': `${baseUrl}/es/${serviceSlug}`,
        'x-default': `${baseUrl}/he/${serviceSlug}`,
      },
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { lang, service: serviceSlug } = await params;
  const locale = lang as Locale;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const brands = getAllBrands();
  const popularBrands = getPopularBrands();
  const isRTL = locale === 'he';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const faqs = [
    {
      q: locale === 'he' ? `כמה עולה ${service.titles.he}?` : `What is the price for ${service.titles[locale]} in Israel?`,
      a: locale === 'he'
        ? `המחיר לשירות מתחיל מ-₪${service.startingPrice}. המחיר הסופי נקבע בהתאם לדגם הרכב, שנת הייצור וסוג המפתח.`
        : `Pricing starts from ₪${service.startingPrice} depending on vehicle make, year, and key mechanism.`,
    },
  ];

  return (
    <>
      <JsonLdSchema lang={locale} service={service.slug} faqs={faqs} canonicalUrl={`https://keys2cars.com/${locale}/${service.slug}`} />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <DynamicHeroBanner lang={locale} defaultService={service.slug} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80 mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                {service.titles[locale]}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.descriptions[locale]}
              </p>

              <div className="p-4 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-brand-700 font-bold block">
                    {locale === 'he' ? 'מחיר התחלתי משוער' : 'Estimated Starting Price'}
                  </span>
                  <span className="text-2xl font-black text-brand-900">
                    ₪{service.startingPrice}
                  </span>
                </div>
                <span className="text-xs font-semibold text-brand-700 bg-white px-3 py-1.5 rounded-xl shadow-sm">
                  {locale === 'he' ? 'כולל הגעה וקידוד' : 'Includes Mobile Service'}
                </span>
              </div>
            </div>

            {/* Popular Makes for this Service */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {locale === 'he' ? `בחר יצרן רכב עבור ${service.titles.he}` : `Select make for ${service.titles[locale]}`}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {popularBrands.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/${locale}/${service.slug}/${b.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200/80 hover:border-brand-200 text-xs font-bold text-slate-800 transition-colors"
                  >
                    <span>{b.names[locale] || b.names.he}</span>
                    <ArrowIcon className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuickLeadForm lang={locale} service={service.slug} />
          </div>
        </div>
      </div>
    </>
  );
}
