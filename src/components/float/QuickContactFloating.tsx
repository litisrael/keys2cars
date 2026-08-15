'use client';

import React from 'react';
import { Locale } from '@/lib/i18n';
import { Phone, MessageCircle } from 'lucide-react';

interface Props {
  lang: Locale;
}

export default function QuickContactFloating({ lang }: Props) {
  const phoneNumber = '0500000000'; // Configurar teléfono real
  const whatsappNumber = '972500000000';

  const messages: Record<Locale, string> = {
    he: 'שלום, אני צריך שירות מנעולן רכב דחוף',
    en: 'Hello, I need urgent car locksmith service',
    es: 'Hola, necesito servicio de cerrajería de auto de emergencia',
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages[lang])}`;

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col gap-3 print:hidden">
      {/* Botón WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2.5]" />
        <span className="absolute end-full me-3 px-3 py-1 bg-slate-900/90 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          {lang === 'he' ? 'וואטסאפ מהיר' : 'WhatsApp'}
        </span>
      </a>

      {/* Botón Llamada Telefónica Directa */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Emergency Locksmith"
        className="group relative flex items-center justify-center w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300 animate-pulse hover:animate-none"
      >
        <Phone className="w-6 h-6 fill-white stroke-[2.5]" />
        <span className="absolute end-full me-3 px-3 py-1 bg-slate-900/90 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          {lang === 'he' ? 'חיוג חירום 24/7' : 'Call 24/7'}
        </span>
      </a>
    </div>
  );
}
