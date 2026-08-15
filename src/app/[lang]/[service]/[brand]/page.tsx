import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Locale, locales } from '@/lib/i18n';
import { servicesData, getServiceBySlug } from '@/data/services';
import { vehicleBrands, getBrandBySlug, getPopularBrands } from '@/data/vehicles';
import DynamicHeroBanner from '@/components/ads/DynamicHeroBanner';
import QuickLeadForm from '@/components/forms/QuickLeadForm';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import { ShieldCheck, Clock, Award, Key, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  const params: Array<{ lang: string; service: string; brand: string }> = [];
  const popularBrands = getPopularBrands();

  for (const lang of locales) {
    for (const service of servicesData) {
      for (const brand of popularBrands) {
        params.push({
          lang,
          service: service.slug,
          brand: brand.slug,
        });
      }
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{
    lang: string;
    service: string;
    brand: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, service: serviceSlug, brand: brandSlug } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'he') as Locale;
  const service = getServiceBySlug(serviceSlug);
  const brand = getBrandBySlug(brandSlug);

  if (!service || !brand) return {};

  const brandName = brand.names[locale] || brand.names.he;

  const titles: Record<Locale, string> = {
    he: `${service.titles.he} לרכב ${brandName} בישראל 24/7 | Keys2Cars`,
    en: `${service.titles.en} for ${brandName} in Israel 24/7 | Keys2Cars`,
    es: `${service.titles.es} para ${brandName} en Israel 24/7 | Keys2Cars`,
  };

  const descriptions: Record<Locale, string> = {
    he: `שירות ${service.titles.he} מקצועי ומהיר לכל דגמי ${brandName} בכל רחבי הארץ. מנעולן רכב מוסמך מגיע תוך 20-30 דקות עם ציוד קידוד מקורי.`,
    en: `Professional ${service.titles.en} for all ${brandName} models across Israel. Fast 20-30 min response time with certified OEM coding tools.`,
    es: `Servicio profesional de ${service.titles.es} para modelos ${brandName} en todo Israel. Llegada rápida en 20-30 min con equipo de diagnóstico original.`,
  };

  const baseUrl = 'https://keys2cars.com';

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${baseUrl}/${locale}/${serviceSlug}/${brandSlug}`,
      languages: {
        'he-IL': `${baseUrl}/he/${serviceSlug}/${brandSlug}`,
        'en-IL': `${baseUrl}/en/${serviceSlug}/${brandSlug}`,
        'es-IL': `${baseUrl}/es/${serviceSlug}/${brandSlug}`,
        'x-default': `${baseUrl}/he/${serviceSlug}/${brandSlug}`,
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `${baseUrl}/${locale}/${serviceSlug}/${brandSlug}`,
      locale: locale === 'he' ? 'he_IL' : locale === 'es' ? 'es_IL' : 'en_US',
    },
  };
}

export default async function ServiceBrandPage({ params }: PageProps) {
  const { lang, service: serviceSlug, brand: brandSlug } = await params;
  const locale = lang as Locale;
  const service = getServiceBySlug(serviceSlug);
  const brand = getBrandBySlug(brandSlug);

  if (!service || !brand) {
    notFound();
  }

  const brandName = brand.names[locale] || brand.names.he;
  const isRTL = locale === 'he';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const faqs = [
    {
      q: locale === 'he'
        ? `כמה זמן לוקח ${service.titles.he} לרכבי ${brandName}?`
        : `How long does ${service.titles[locale]} take for ${brandName}?`,
      a: locale === 'he'
        ? `משך העבודה הממוצע עבור ${brandName} הוא בין 15 ל-35 דקות בלבד, כולל חיתוך המפתח וקידוד הצ'יפ לאימובילייזר.`
        : `Average service time for ${brandName} is 15 to 35 minutes, including precision key cutting and transponder programming.`,
    },
    {
      q: locale === 'he'
        ? `האם המפתח החדש לרכב ${brandName} כולל אחריות?`
        : `Does the new key for ${brandName} come with a warranty?`,
      a: locale === 'he'
        ? `כן, כל מפתח ושלט חכם לרכבי ${brandName} מסופק עם אחריות מלאה על הקידוד ועל השלט.`
        : `Yes, all keys and smart fobs for ${brandName} come with a comprehensive warranty on coding and hardware.`,
    },
  ];

  return (
    <>
      <JsonLdSchema
        lang={locale}
        brand={brand.slug}
        service={service.slug}
        faqs={faqs}
        canonicalUrl={`https://keys2cars.com/${locale}/${service.slug}/${brand.slug}`}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Dynamic Hero Banner */}
        <DynamicHeroBanner lang={locale} defaultBrand={brand.slug} defaultService={service.slug} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-7">
            {/* Information Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80 mb-6">
              <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-lg mb-3">
                {brandName} • {service.titles[locale]}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                {locale === 'he'
                  ? `פתרונות מנעולנות מתקדמים עבור רכבי ${brandName}`
                  : `Advanced Locksmith & Key Solutions for ${brandName}`}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {locale === 'he'
                  ? `אנו מתמחים במתן שירות מהיר ומקצועי לרכבי ${brandName} מכל השנתונים. הניידות שלנו מצוידות במחשבי דיאגנוסטיקה מקוריים המאפשרים קידוד מפתחות חכמים (Smart Keys), פריצה ללא שריטות ושחזור מפתחות מאובדן מלא ללא צורך בגרירת הרכב למוסך.`
                  : `We specialize in rapid locksmith services for all ${brandName} vehicle generations in Israel. Our service vans are equipped with certified diagnostic tools for smart keys, damage-free entry, and all keys lost programming on-site.`}
              </p>

              <div className="space-y-3 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {locale === 'he' ? `קידוד שלטים ומפתחות קרבה מקוריים ל-${brandName}` : `OEM smart key & proximity fob coding for ${brandName}`}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {locale === 'he' ? 'חיתוך להב בלייזר בדיוק מרבי לפי קוד יצרן' : 'Laser key blade cutting by VIN/key code'}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {locale === 'he' ? 'הגעה תוך 20-30 דקות באזור המרכז, השרון וכל הארץ' : '20-30 min arrival anywhere in Israel'}
                  </span>
                </div>
              </div>
            </div>

            {/* Model List Hub */}
            {brand.models.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80 mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {locale === 'he' ? `דגמי ${brandName} נתמכים לשירות` : `Supported ${brandName} Models`}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {brand.models.map((model) => (
                    <Link
                      key={model.slug}
                      href={`/${locale}/brand/${brand.slug}/${model.slug}`}
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200/70 hover:border-brand-200 text-xs font-semibold text-slate-800 transition-colors flex items-center justify-between"
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
            <QuickLeadForm lang={locale} brand={brand.slug} service={service.slug} />
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80 mb-10">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {locale === 'he' ? `שאלות נפוצות לגבי רכבי ${brandName}` : `Frequently Asked Questions for ${brandName}`}
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                <h4 className="font-bold text-slate-900 text-sm mb-1">{faq.q}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
