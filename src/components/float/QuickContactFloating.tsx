'use client';

import React, { Suspense, useMemo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import { getBrandBySlug, getModelBySlug } from '@/data/vehicles';
import { getServiceBySlug } from '@/data/services';
import { Phone, MessageCircle } from 'lucide-react';

interface Props {
  lang: Locale;
}

const ISRAEL_PHONE_LOCAL = '0533393170';
const ISRAEL_PHONE_INTL = '+972533393170';
const ISRAEL_WHATSAPP_NUMBER = '972533393170';

function QuickContactFloatingContent({ lang }: Props) {
  const pathname = usePathname() || '';
  const searchParams = useSearchParams();

  // Generar mensaje contextual dinámico para WhatsApp según la URL actual
  const dynamicMessage = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    // Posibles estructuras:
    // /[lang]
    // /[lang]/[service]
    // /[lang]/[service]/[brand]
    // /[lang]/brand/[brand]
    // /[lang]/brand/[brand]/[model]
    
    let brandSlug = searchParams.get('brand') || '';
    let modelSlug = searchParams.get('model') || '';
    let serviceSlug = searchParams.get('service') || '';

    if (segments.length >= 3) {
      if (segments[1] === 'brand') {
        brandSlug = segments[2];
        if (segments[3]) modelSlug = segments[3];
      } else {
        serviceSlug = segments[1];
        brandSlug = segments[2];
      }
    } else if (segments.length === 2) {
      if (segments[1] !== 'brand' && segments[1] !== 'about' && segments[1] !== 'contact') {
        serviceSlug = segments[1];
      }
    }

    const brandData = brandSlug ? getBrandBySlug(brandSlug) : undefined;
    const modelData = brandSlug && modelSlug ? getModelBySlug(brandSlug, modelSlug) : undefined;
    const serviceData = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

    const brandName = brandData ? brandData.names[lang] || brandData.names.he : brandSlug;
    const modelName = modelData ? (lang === 'he' ? modelData.nameHe : modelData.nameEn) : modelSlug;
    const serviceName = serviceData ? serviceData.titles[lang] : '';

    const carDescription = [brandName, modelName].filter(Boolean).join(' ');

    if (lang === 'he') {
      if (carDescription && serviceName) {
        return `שלום, אני צריך שירות ${serviceName} עבור רכב ${carDescription}. אשמח לקבל הצעת מחיר וזמן הגעה.`;
      }
      if (carDescription) {
        return `שלום, נתקעתי בלי מפתח לרכב ${carDescription} ואני צריך עזרה דחופה. אשמח להצעת מחיר וזמן הגעה.`;
      }
      if (serviceName) {
        return `שלום, אני מעוניין בפרטים והצעת מחיר לגבי ${serviceName}.`;
      }
      return 'שלום, אני צריך שירות מנעולן רכב דחוף בישראל. אפשר עזרה?';
    }

    if (lang === 'es') {
      if (carDescription && serviceName) {
        return `Hola, necesito el servicio de ${serviceName} para un ${carDescription}. ¿Me podrían dar cotización y tiempo de llegada?`;
      }
      if (carDescription) {
        return `Hola, me quedé sin llave para mi ${carDescription} y necesito ayuda urgente. ¿Me pueden dar cotización?`;
      }
      if (serviceName) {
        return `Hola, me gustaría solicitar información y cotización para ${serviceName}.`;
      }
      return 'Hola, necesito servicio urgente de cerrajería de autos en Israel. ¿Me pueden ayudar?';
    }

    // Inglés por defecto
    if (carDescription && serviceName) {
      return `Hello, I need ${serviceName} for my ${carDescription}. Could I get a quote and arrival time estimate?`;
    }
    if (carDescription) {
      return `Hello, I lost my keys for my ${carDescription} and need emergency locksmith assistance. Can you help?`;
    }
    if (serviceName) {
      return `Hello, I would like to get information and a quote for ${serviceName}.`;
    }
    return 'Hello, I need emergency car locksmith service in Israel. Can you help?';
  }, [pathname, searchParams, lang]);

  const whatsappUrl = `https://wa.me/${ISRAEL_WHATSAPP_NUMBER}?text=${encodeURIComponent(dynamicMessage)}`;

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col gap-3 print:hidden">
      {/* Botón Flotante de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2.5]" />
        
        {/* Tooltip contextual */}
        <span className="absolute end-full me-3 px-3 py-1.5 bg-slate-900/95 text-white text-xs font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-xl border border-slate-800">
          {lang === 'he' ? 'וואטסאפ מהיר (053-3393170)' : 'WhatsApp (053-3393170)'}
        </span>
      </a>

      {/* Botón Flotante de Llamada Directa 24/7 */}
      <a
        href={`tel:${ISRAEL_PHONE_INTL}`}
        aria-label="Call 24/7 Emergency Locksmith"
        className="group relative flex items-center justify-center w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300 animate-pulse hover:animate-none"
      >
        <Phone className="w-6 h-6 fill-white stroke-[2.5]" />
        
        {/* Tooltip contextual */}
        <span className="absolute end-full me-3 px-3 py-1.5 bg-slate-900/95 text-white text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-xl border border-slate-800">
          {lang === 'he' ? 'חיוג חירום 24/7 • 053-339-3170' : 'Emergency Call • 053-339-3170'}
        </span>
      </a>
    </div>
  );
}

export default function QuickContactFloating(props: Props) {
  return (
    <Suspense fallback={null}>
      <QuickContactFloatingContent {...props} />
    </Suspense>
  );
}
