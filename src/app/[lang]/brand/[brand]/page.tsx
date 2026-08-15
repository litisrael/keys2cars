import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Locale, locales } from '@/lib/i18n';
import { getBrandBySlug, getPopularBrands } from '@/data/vehicles';
import { servicesData } from '@/data/services';
import DynamicHeroBanner from '@/components/ads/DynamicHeroBanner';
import QuickLeadForm from '@/components/forms/QuickLeadForm';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import { Car, Wrench, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const popularBrands = getPopularBrands();
  const params: Array<{ lang: string; brand: string }> = [];

  for (const lang of locales) {
    for (const brand of popularBrands) {
      params.push({ lang, brand: brand.slug });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{
    lang: string;
    brand: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, brand: brandSlug } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'he') as Locale;
  const brand = getBrandBySlug(brandSlug);

  if (!brand) return {};

  const brandName = brand.names[locale] || brand.names.he;

  const titles: Record<Locale, string> = {
    he: `מנעולן רכב ושכפול מפתחות לרכבי ${brandName} בישראל | Keys2Cars`,
    en: `${brandName} Auto Locksmith & Car Key Programming in Israel | Keys2Cars`,
    es: `Cerrajería y Llaves para Autos ${brandName} en Israel | Keys2Cars`,
  };

  const descriptions: Record<Locale, string> = {
    he: `שירותי מנעולנות מוסמכים לרכבי ${brandName}: שכפול מפתחות חכמים, פריצה ללא נזק ושחזור מפתחות מאובדן בכל חלקי הארץ 24/7.`,
    en: `Certified auto locksmith for ${brandName} in Israel: smart key cutting, emergency lockout, and all keys lost programming 24/7.`,
    es: `Cerrajería automotriz certificada para ${brandName} en Israel: duplicado de llaves inteligentes, apertura de emergencia y programación 24/7.`,
  };

  const baseUrl = 'https://keys2cars.com';

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${baseUrl}/${locale}/brand/${brandSlug}`,
      languages: {
        'he-IL': `${baseUrl}/he/brand/${brandSlug}`,
        'en-IL': `${baseUrl}/en/brand/${brandSlug}`,
        'es-IL': `${baseUrl}/es/brand/${brandSlug}`,
        'x-default': `${baseUrl}/he/brand/${brandSlug}`,
      },
    },
  };
}

export default async function BrandHubPage({ params }: PageProps) {
  const { lang, brand: brandSlug } = await params;
  const locale = lang as Locale;
  const brand = getBrandBySlug(brandSlug);

  if (!brand) {
    notFound();
  }

  const brandName = brand.names[locale] || brand.names.he;
  const isRTL = locale === 'he';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      <JsonLdSchema lang={locale} brand={brand.slug} canonicalUrl={`https://keys2cars.com/${locale}/brand/${brand.slug}`} />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <DynamicHeroBanner lang={locale} defaultBrand={brand.slug} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-7">
            {/* Services for this brand */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80 mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                {locale === 'he' ? `שירותי מנעולנות נפוצים לרכבי ${brandName}` : `Locksmith Services for ${brandName}`}
              </h2>
              <div className="space-y-3">
                {servicesData.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${locale}/${service.slug}/${brand.slug}`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-brand-50 border border-slate-200/70 hover:border-brand-200 transition-colors"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{service.titles[locale]}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{service.shortDescriptions[locale]}</p>
                    </div>
                    <ArrowIcon className="w-4 h-4 text-brand-600 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Model List */}
            {brand.models.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {locale === 'he' ? `דגמי ${brandName} בישראל` : `${brandName} Models in Israel`}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {brand.models.map((model) => (
                    <Link
                      key={model.slug}
                      href={`/${locale}/brand/${brand.slug}/${model.slug}`}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200/70 hover:border-brand-200 text-xs font-semibold text-slate-800 transition-colors flex items-center justify-between"
                    >
                      <span className="truncate">{locale === 'he' ? model.nameHe : model.nameEn}</span>
                      <ArrowIcon className="w-3 h-3 text-slate-400 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <QuickLeadForm lang={locale} brand={brand.slug} />
          </div>
        </div>
      </div>
    </>
  );
}
