'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import { PhoneCall, ShieldCheck, Clock, MapPin, Zap } from 'lucide-react';

interface Props {
  lang: Locale;
  defaultBrand?: string;
  defaultService?: string;
}

function HeroBannerContent({ lang, defaultBrand, defaultService }: Props) {
  const searchParams = useSearchParams();

  // Extraer parámetros de Google Ads (UTM / Query params)
  const queryBrand = searchParams.get('brand') || searchParams.get('utm_term') || defaultBrand || '';
  const queryModel = searchParams.get('model') || '';
  const queryCity = searchParams.get('city') || searchParams.get('utm_content') || '';

  const brandName = queryBrand ? queryBrand.charAt(0).toUpperCase() + queryBrand.slice(1) : '';
  const cityName = queryCity ? queryCity.charAt(0).toUpperCase() + queryCity.slice(1) : '';

  const titles: Record<Locale, string> = {
    he: brandName
      ? `מומחה מנעולנות ושכפול מפתחות לרכבי ${brandName} בישראל`
      : `מנעולן רכב מוסמך ושכפול מפתחות 24/7 בישראל`,
    en: brandName
      ? `Expert ${brandName} Automotive Locksmith & Key Specialist in Israel`
      : `24/7 Emergency Auto Locksmith & Car Key Service in Israel`,
    es: brandName
      ? `Expertos en Cerrajería Automotriz y Llaves para ${brandName} en Israel`
      : `Cerrajería Automotriz y Duplicado de Llaves 24/7 en Israel`,
  };

  const subtitles: Record<Locale, string> = {
    he: `הגעה תוך 20-30 דקות ${cityName ? `באזור ${cityName}` : 'במרכז ובכל הארץ'} • שירות פריצה ללא נזק • קידוד מפתחות חכמים במקום`,
    en: `20-30 min arrival ${cityName ? `in ${cityName}` : 'nationwide'} • Non-destructive lockout entry • On-site smart key coding`,
    es: `Llegada en 20-30 minutos ${cityName ? `en ${cityName}` : 'en todo Israel'} • Apertura sin daños • Codificación de chip en el lugar`,
  };

  const phoneDisplay = '050-0000000';
  const phoneCallHref = 'tel:+972500000000';

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-brand-900 to-blue-950 text-white shadow-2xl p-6 sm:p-10 md:p-12 mb-10 border border-blue-800/30">
      {/* Background glow effects */}
      <div className="absolute top-0 end-0 -mt-12 -me-12 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 start-0 -mb-12 -ms-12 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        {/* Dynamic Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Zap className="w-4 h-4 text-yellow-400" />
          <span>
            {lang === 'he' ? 'זמינות מיידית 24/7 • כוננות חירום' : '24/7 Rapid Emergency Response'}
          </span>
        </div>

        {/* Dynamic Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
          {titles[lang]}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          {subtitles[lang]}
        </p>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-slate-700/60 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-400 shrink-0" />
            <span>{lang === 'he' ? 'הגעה 20-30 דק\'' : '20-30 min arrival'}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{lang === 'he' ? 'אחריות מלאה' : 'Full warranty'}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
            <MapPin className="w-4 h-4 text-red-400 shrink-0" />
            <span>{lang === 'he' ? 'פריסה ארצית' : 'Israel nationwide'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DynamicHeroBanner(props: Props) {
  return (
    <Suspense fallback={<div className="h-64 rounded-3xl bg-slate-900 animate-pulse mb-10" />}>
      <HeroBannerContent {...props} />
    </Suspense>
  );
}
