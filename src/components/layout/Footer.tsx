import React from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionary';
import { servicesData } from '@/data/services';
import { getPopularBrands } from '@/data/vehicles';
import { KeyRound, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface Props {
  lang: Locale;
}

export default function Footer({ lang }: Props) {
  const dict = getDictionary(lang);
  const popularBrands = getPopularBrands();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-14 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Columna 1: Brand & Bio */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                <KeyRound className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                KEYS<span className="text-brand-500">2</span>CARS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              {lang === 'he'
                ? 'שירותי מנעולנות רכב מתקדמים, שכפול מפתחות חכמים, ופריצה ללא נזק בכל רחבי ישראל 24 שעות ביממה.'
                : 'Advanced automotive locksmith services, smart key duplication, and damage-free lockout entry across Israel 24/7.'}
            </p>
            <div className="flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>24/7 Available Emergency Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <span>Tel Aviv, Center & Nationwide Israel</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Servicios SEO */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {dict.nav.services}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${lang}/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.titles[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Marcas Populares SEO */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {dict.nav.brands}
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {popularBrands.slice(0, 10).map((b) => (
                <Link
                  key={b.slug}
                  href={`/${lang}/car-key-duplication/${b.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {b.names[lang] || b.names.he}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna 4: Contacto Inmediato */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {dict.nav.contact}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <p className="text-slate-300">
                {lang === 'he' ? 'זקוק למנעולן רכב עכשיו?' : 'Need an emergency auto locksmith now?'}
              </p>
              <a
                href="tel:+972500000000"
                dir="ltr"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-extrabold text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>050-0000000</span>
              </a>
              <div className="pt-2 text-xs text-slate-500">
                {lang === 'he' ? 'שירות מקצועי באחריות מלאה' : 'Licensed & Certified in Israel'}
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Keys2Cars.com. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href={`/${lang}`} className="hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href={`/${lang}`} className="hover:text-slate-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
