import React from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionary';
import { servicesData } from '@/data/services';
import { getPopularBrands } from '@/data/vehicles';
import { KeyRound, Phone, MapPin, Clock, ShieldCheck, Calendar } from 'lucide-react';

interface Props {
  lang: Locale;
}

export default function Footer({ lang }: Props) {
  const dict = getDictionary(lang);
  const popularBrands = getPopularBrands();
  const isHebrew = lang === 'he';

  return (
    <footer className="bg-slate-950 text-slate-400 pt-14 pb-10 border-t border-slate-800" itemScope itemType="https://schema.org/Locksmith">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: Brand & NAP (Name, Address, Phone) */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight" itemProp="name">
                  KEYS<span className="text-brand-500">2</span>CARS
                </span>
                <p className="text-[11px] text-slate-400 font-medium">
                  {isHebrew ? 'לשעבר "מפתח לרכב"' : 'Formerly "מפתח לרכב"'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {isHebrew
                ? 'שירותי מנעולנות רכב מתקדמים בבית שמש: שכפול מפתחות חכמים, שחזור מאובדן מוחלט ופריצת רכב ללא נזק.'
                : 'Advanced automotive locksmith services in Bet Shemesh: smart key duplication, all-keys-lost recovery, and damage-free vehicle lockout entry.'}
            </p>

            {/* Direct NAP block */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">
                    {isHebrew ? 'כתובת העסק:' : 'Address:'}
                  </span>{' '}
                  <span itemProp="streetAddress">שדרות האמורים 84</span>,{' '}
                  <span itemProp="addressLocality">Bet Shemesh</span>,{' '}
                  <span itemProp="addressCountry">Israel</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">
                    {isHebrew ? 'טלפון ישיר:' : 'Phone:'}
                  </span>{' '}
                  <a
                    href="tel:0533393170"
                    dir="ltr"
                    className="text-amber-400 hover:text-amber-300 font-bold hover:underline"
                    itemProp="telephone"
                  >
                    053-339-3170
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Operating Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {isHebrew ? 'שעות פעילות' : 'Operating Hours'}
              </h3>
            </div>

            <div className="bg-slate-900/80 rounded-2xl p-3.5 border border-slate-800 text-xs space-y-2">
              <div className="flex justify-between items-center text-slate-300">
                <span>{isHebrew ? 'ב׳, ג׳, ו׳' : 'Mon, Tue, Fri'}:</span>
                <span className="font-mono font-bold text-white">07:00 - 23:30</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>{isHebrew ? 'יום ד׳' : 'Wednesday'}:</span>
                <span className="font-mono font-bold text-white">04:30 - 23:30</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>{isHebrew ? 'יום ה׳' : 'Thursday'}:</span>
                <span className="font-mono font-bold text-white">06:30 - 23:30</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>{isHebrew ? 'מוצאי שבת' : 'Saturday'}:</span>
                <span className="font-mono font-bold text-white">07:30 - 23:30</span>
              </div>
              <div className="flex justify-between items-center text-rose-400 pt-1 border-t border-slate-800/80">
                <span>{isHebrew ? 'יום א׳' : 'Sunday'}:</span>
                <span className="font-semibold">{isHebrew ? 'סגור' : 'Closed'}</span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{isHebrew ? 'ניידת שירות מורשית באזור בית שמש' : 'Certified mobile unit in Bet Shemesh area'}</span>
            </div>
          </div>

          {/* Columna 3: Servicios SEO */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {dict.nav.services}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
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

          {/* Columna 4: Marcas Populares */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {dict.nav.brands}
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {popularBrands.slice(0, 8).map((b) => (
                <Link
                  key={b.slug}
                  href={`/${lang}/car-key-duplication/${b.slug}`}
                  className="hover:text-white transition-colors py-0.5 truncate"
                >
                  {b.names[lang] || b.names.he}
                </Link>
              ))}
            </div>

            <div className="mt-5 p-3 rounded-xl bg-brand-950/40 border border-brand-800/50 text-center">
              <p className="text-xs text-brand-200 mb-1 font-semibold">
                {isHebrew ? 'חירום בבית שמש? חייגו כעת' : 'Bet Shemesh Emergency? Call Now'}
              </p>
              <a
                href="tel:0533393170"
                dir="ltr"
                className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 font-extrabold text-base transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>053-339-3170</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Keys2Cars.com (מפתח לרכב). שדרות האמורים 84, בית שמש.</p>
          <div className="flex gap-4">
            <Link href={`/${lang}`} className="hover:text-slate-400">
              {isHebrew ? 'מדיניות פרטיות' : 'Privacy Policy'}
            </Link>
            <Link href={`/${lang}`} className="hover:text-slate-400">
              {isHebrew ? 'תנאי שימוש' : 'Terms of Service'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
