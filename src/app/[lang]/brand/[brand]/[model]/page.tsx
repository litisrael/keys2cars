import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Locale, locales } from '@/lib/i18n';
import { getBrandBySlug, getModelBySlug, getPopularBrands } from '@/data/vehicles';
import { servicesData } from '@/data/services';
import DynamicHeroBanner from '@/components/ads/DynamicHeroBanner';
import QuickLeadForm from '@/components/forms/QuickLeadForm';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export async function generateStaticParams() {
  const popularBrands = getPopularBrands();
  const params: Array<{ lang: string; brand: string; model: string }> = [];

  for (const lang of locales) {
    for (const brand of popularBrands) {
      for (const model of brand.models.slice(0, 10)) {
        // Generar ruta con slug limpio en inglés (ej: /he/brand/kia/picanto)
        params.push({
          lang,
          brand: brand.slug,
          model: model.slug,
        });
      }
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{
    lang: string;
    brand: string;
    model: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, brand: rawBrand, model: rawModel } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'he') as Locale;
  
  const brand = getBrandBySlug(rawBrand);
  const model = getModelBySlug(rawBrand, rawModel);

  if (!brand || !model) return {};

  const brandName = brand.names[locale] || brand.names.he;
  const modelName = locale === 'he' ? model.nameHe : model.nameEn;

  const titles: Record<Locale, string> = {
    he: `שכפול מפתחות ופריצה ל-${brandName} ${modelName} בישראל 24/7 | Keys2Cars`,
    en: `Key Replacement & Lockout for ${brandName} ${modelName} in Israel 24/7 | Keys2Cars`,
    es: `Cerrajería y Llaves para ${brandName} ${modelName} en Israel 24/7 | Keys2Cars`,
  };

  const descriptions: Record<Locale, string> = {
    he: `שירותי מנעולנות רכב מקצועיים עבור ${brandName} ${modelName}: שכפול מפתח חכם, פריצה עדינה ללא שריטות ושחזור מפתח מאובדן מוחלט. הגעה מהירה 20-30 דקות.`,
    en: `Professional auto locksmith for ${brandName} ${modelName} in Israel: smart key duplication, emergency lockout, and all keys lost programming in 20-30 min.`,
    es: `Servicio profesional de cerrajería para ${brandName} ${modelName} en Israel: duplicado de llaves inteligentes, apertura de emergencia y programación en 20-30 min.`,
  };

  const baseUrl = 'https://keys2cars.com';
  // Canonical estandarizado con el slug limpio del modelo
  const canonicalModelSlug = model.slug;

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${baseUrl}/${locale}/brand/${brand.slug}/${canonicalModelSlug}`,
      languages: {
        'he-IL': `${baseUrl}/he/brand/${brand.slug}/${canonicalModelSlug}`,
        'en-IL': `${baseUrl}/en/brand/${brand.slug}/${canonicalModelSlug}`,
        'es-IL': `${baseUrl}/es/brand/${brand.slug}/${canonicalModelSlug}`,
        'x-default': `${baseUrl}/he/brand/${brand.slug}/${canonicalModelSlug}`,
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `${baseUrl}/${locale}/brand/${brand.slug}/${canonicalModelSlug}`,
      locale: locale === 'he' ? 'he_IL' : locale === 'es' ? 'es_IL' : 'en_US',
    },
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { lang, brand: rawBrand, model: rawModel } = await params;
  const locale = lang as Locale;
  
  const brand = getBrandBySlug(rawBrand);
  const model = getModelBySlug(rawBrand, rawModel);

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
    {
      q: locale === 'he' ? `כמה זמן לוקח לשכפל מפתח לרכב ${brandName} ${modelName}?` : `How long does key duplication take for ${brandName} ${modelName}?`,
      a: locale === 'he'
        ? `זמן העבודה הממוצע עבור ${brandName} ${modelName} הוא 20 עד 30 דקות בלבד ישירות אצלך במיקום הרכב.`
        : `Average service time for ${brandName} ${modelName} is 20 to 30 minutes on-site at your location.`,
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-lg mb-3">
                <span>{brandName}</span>
                <span>•</span>
                <span>{modelName}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                {locale === 'he'
                  ? `שירותי מנעולן רכב מוסמך עבור ${brandName} ${modelName}`
                  : `Certified Auto Locksmith for ${brandName} ${modelName}`}
              </h1>
              <p className="text-slate-600 leading-relaxed mb-6">
                {locale === 'he'
                  ? `אנו מעניקים שירות מלא לדגם ${brandName} ${modelName} עד מיקום הרכב בכל רחבי ישראל. קידוד מפתחות מקוריים, שכפול שלטי נוחות, שחזור מאובדן מלא ופתיחת דלתות נעולות ללא נזק תוך 20-30 דקות.`
                  : `We provide complete mobile locksmith support for ${brandName} ${modelName} anywhere in Israel. Smart key coding, emergency opening, and ECU replacement on-site in 20-30 minutes.`}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100 mb-6">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{locale === 'he' ? `מפתחות ושלטים מקוריים עבור ${brandName} ${modelName}` : `OEM smart keys and remotes for ${brandName} ${modelName}`}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{locale === 'he' ? 'הגעה מהירה 20-30 דקות בכל הארץ' : 'Rapid 20-30 min arrival across Israel'}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>{locale === 'he' ? 'אחריות מלאה על חיתוך וקידוד' : 'Full warranty on cutting & programming'}</span>
                </div>
              </div>

              {/* Lista de Servicios para este modelo */}
              <h3 className="text-base font-bold text-slate-900 mb-3">
                {locale === 'he' ? `שירותים זמינים עבור ${brandName} ${modelName}` : `Available Services for ${brandName} ${modelName}`}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

            {/* Otros modelos de la misma marca */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80">
              <h3 className="text-base font-bold text-slate-900 mb-3">
                {locale === 'he' ? `דגמים נוספים של ${brandName}` : `Other ${brandName} Models`}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {brand.models.filter(m => m.slug !== model.slug).slice(0, 9).map((otherModel) => (
                  <Link
                    key={otherModel.slug}
                    href={`/${locale}/brand/${brand.slug}/${otherModel.slug}`}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200/70 hover:border-brand-200 text-xs font-medium text-slate-700 transition-colors flex items-center justify-between"
                  >
                    <span className="truncate">{locale === 'he' ? otherModel.nameHe : otherModel.nameEn}</span>
                    <ArrowIcon className="w-3 h-3 text-slate-400 shrink-0" />
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
