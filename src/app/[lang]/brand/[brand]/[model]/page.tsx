import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Locale, locales } from '@/lib/i18n';
import { getBrandBySlug, getModelBySlug } from '@/data/vehicles';
import { servicesData } from '@/data/services';
import DynamicHeroBanner from '@/components/ads/DynamicHeroBanner';
import QuickLeadForm from '@/components/forms/QuickLeadForm';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import { ShieldCheck, Clock, Award, Key, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{
    lang: string;
    brand: string;
    model: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, brand: brandSlug, model: modelSlug } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'he') as Locale;
  const brand = getBrandBySlug(brandSlug);
  const model = getModelBySlug(brandSlug, modelSlug);

  if (!brand || !model) return {};

  const brandName = brand.names[locale] || brand.names.he;
  const modelName = locale === 'he' ? model.nameHe : model.nameEn;

  const title = locale === 'he'
    ? `שכפול מפתח ופריצה ל-${brandName} ${modelName} בישראל 24/7 | Keys2Cars`
    : `Key Replacement & Lockout for ${brandName} ${modelName} in Israel | Keys2Cars`;

  const description = locale === 'he'
    ? `שירותי מנעולנות רכב מקצועיים עבור ${brandName} ${modelName}: שכפול מפתח חכם, פריצה עדינה ללא שריטות ושחזור מפתח מאובדן מוחלט. הגעה מהירה 20-30 דקות.`
    : `Professional automotive locksmith services for ${brandName} ${modelName} in Israel: smart key duplication, emergency lockout, and transponder coding in 20-30 min.`;

  const baseUrl = 'https://keys2cars.com';

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/brand/${brandSlug}/${modelSlug}`,
      languages: {
        'he-IL': `${baseUrl}/he/brand/${brandSlug}/${modelSlug}`,
        'en-IL': `${baseUrl}/en/brand/${brandSlug}/${modelSlug}`,
        'es-IL': `${baseUrl}/es/brand/${brandSlug}/${modelSlug}`,
        'x-default': `${baseUrl}/he/brand/${brandSlug}/${modelSlug}`,
      },
    },
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { lang, brand: brandSlug, model: modelSlug } = await params;
  const locale = lang as Locale;
  const brand = getBrandBySlug(brandSlug);
  const model = getModelBySlug(brandSlug, modelSlug);

  if (!brand || !model) {
    notFound();
  }

  const brandName = brand.names[locale] || brand.names.he;
  const modelName = locale === 'he' ? model.nameHe : model.nameEn;
  const isRTL = locale === 'he';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const faqs = [
    {
      q: locale === 'he' ? `איזה סוג מפתח יש לרכב ${brandName} ${modelName}?` : `What key type does ${brandName} ${modelName} use?`,
      a: locale === 'he'
        ? `דגמי ${brandName} ${modelName} משתמשים במפתחות חכמים (Keyless Smart Key) או מפתחות אימובילייזר מקודדים בהתאם לשנתון הרכב. יש לנו במלאי את כל השלטים המקוריים.`
        : `${brandName} ${modelName} vehicles utilize smart proximity fobs or transponder chipped keys depending on production year. We carry all OEM fobs in stock.`,
    },
  ];

  return (
    <>
      <JsonLdSchema
        lang={locale}
        brand={brand.slug}
        model={model.slug}
        faqs={faqs}
        canonicalUrl={`https://keys2cars.com/${locale}/brand/${brand.slug}/${model.slug}`}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <DynamicHeroBanner lang={locale} defaultBrand={`${brandName} ${modelName}`} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80 mb-6">
              <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-lg mb-3">
                {brandName} • {modelName}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                {locale === 'he'
                  ? `שירותי מנעולן רכב מוסמך עבור ${brandName} ${modelName}`
                  : `Certified Auto Locksmith for ${brandName} ${modelName}`}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {locale === 'he'
                  ? `אנו מעניקים שירות מלא לדגם ${brandName} ${modelName} עד מיקום הרכב. קידוד מפתחות מקוריים, שכפול שלטי נוחות, שחזור מאובדן מלא ופתיחת דלתות נעולות ללא נזק.`
                  : `We provide complete mobile locksmith support for ${brandName} ${modelName} anywhere in Israel. Smart key coding, emergency opening, and ECU replacement on-site.`}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                {servicesData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${locale}/${s.slug}/${brand.slug}`}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200/70 hover:border-brand-200 text-xs font-bold text-slate-800 transition-colors flex items-center justify-between"
                  >
                    <span>{s.titles[locale]}</span>
                    <ArrowIcon className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuickLeadForm lang={locale} brand={brand.slug} model={modelName} />
          </div>
        </div>
      </div>
    </>
  );
}
