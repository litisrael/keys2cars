'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, locales, localeNames } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionary';
import { KeyRound, PhoneCall, Globe, Menu, X, ShieldAlert } from 'lucide-react';

interface Props {
  lang: Locale;
}

export default function Header({ lang }: Props) {
  const pathname = usePathname();
  const dict = getDictionary(lang);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper para cambiar idioma preservando la ruta
  const getLanguageSwitchUrl = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      {/* Barra de emergencia superior */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium">
              {lang === 'he' ? 'מוקד חירום ארצי פעיל 24/7' : 'National 24/7 Emergency Dispatch Active'}
            </span>
          </div>
          <a
            href="tel:+972500000000"
            className="flex items-center gap-1.5 text-yellow-400 font-bold hover:text-yellow-300 transition-colors"
            dir="ltr"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>050-0000000</span>
          </a>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-600 group-hover:bg-brand-700 text-white flex items-center justify-center shadow-md transition-colors">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900 block leading-none">
                KEYS<span className="text-brand-600">2</span>CARS
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block">
                Israel Locksmith
              </span>
            </div>
          </Link>

          {/* Enlaces de escritorio */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <Link href={`/${lang}`} className="hover:text-brand-600 transition-colors">
              {dict.nav.home}
            </Link>
            <Link href={`/${lang}/car-key-duplication`} className="hover:text-brand-600 transition-colors">
              {dict.nav.services}
            </Link>
            <Link href={`/${lang}/car-lockout-emergency`} className="hover:text-brand-600 transition-colors text-red-600 flex items-center gap-1">
              <ShieldAlert className="w-4 h-4" />
              <span>{dict.nav.emergency}</span>
            </Link>
          </nav>

          {/* Acciones y Switcher de Idiomas */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-bold">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={getLanguageSwitchUrl(l)}
                  className={`px-2 py-1 rounded-lg transition-colors ${
                    lang === l
                      ? 'bg-white text-brand-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* CTA Llamar */}
            <a
              href="tel:+972500000000"
              className="hidden sm:inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition-all hover:scale-105"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{dict.hero.ctaCall}</span>
            </a>

            {/* Botón menú móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-100 space-y-2 pb-2">
            <Link
              href={`/${lang}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              {dict.nav.home}
            </Link>
            <Link
              href={`/${lang}/car-key-duplication`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              {dict.nav.services}
            </Link>
            <Link
              href={`/${lang}/car-lockout-emergency`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-bold text-red-600 hover:bg-red-50"
            >
              {dict.nav.emergency}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
