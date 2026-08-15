'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionary';
import { VehicleBrand } from '@/data/vehicles';
import { Search, ChevronRight, Car, Sparkles } from 'lucide-react';

interface Props {
  lang: Locale;
  brands: VehicleBrand[];
}

export default function BrandSelector({ lang, brands }: Props) {
  const dict = getDictionary(lang);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'popular' | 'all'>('popular');

  const filteredBrands = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return brands.filter((b) => {
      const matchSearch =
        !term ||
        b.names.he.toLowerCase().includes(term) ||
        b.names.en.toLowerCase().includes(term) ||
        b.slug.toLowerCase().includes(term) ||
        b.models.some((m) => m.nameHe.toLowerCase().includes(term) || m.nameEn.toLowerCase().includes(term));

      if (activeTab === 'popular' && !term) {
        return matchSearch && b.popular;
      }
      return matchSearch;
    });
  }, [brands, searchTerm, activeTab]);

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/80 mb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
            {dict.search.title}
          </h2>
          <p className="text-slate-500 text-sm">
            {lang === 'he'
              ? 'בחר יצרן כדי לצפות במגוון שירותי שכפול מפתח וקידוד שלטים'
              : 'Select your make for key duplication and transponder programming'}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute top-3.5 start-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={dict.search.placeholder}
            className="w-full ps-10 pe-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
          />
        </div>
      </div>

      {/* Tabs */}
      {!searchTerm && (
        <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
          <button
            onClick={() => setActiveTab('popular')}
            className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center gap-1.5 ${
              activeTab === 'popular'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'he' ? 'מותגים מובילים' : 'Popular Brands'}</span>
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
              activeTab === 'all'
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'he' ? `כל היצרנים (${brands.length})` : `All Makes (${brands.length})`}
          </button>
        </div>
      )}

      {/* Grid de Marcas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {filteredBrands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/${lang}/car-key-duplication/${brand.slug}`}
            className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-brand-50/70 border border-slate-200/80 hover:border-brand-300 transition-all hover:shadow-md hover:-translate-y-0.5 text-center"
          >
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 group-hover:text-brand-600 mb-2.5 transition-colors">
              <Car className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-900 text-sm group-hover:text-brand-700 transition-colors">
              {brand.names[lang] || brand.names.he}
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5">
              {brand.models.length} {dict.search.viewModels}
            </span>
          </Link>
        ))}
      </div>

      {filteredBrands.length === 0 && (
        <div className="text-center py-10 text-slate-500 text-sm">
          {lang === 'he' ? 'לא נמצאו תוצאות עבור החיפוש.' : 'No makes found matching your search.'}
        </div>
      )}
    </section>
  );
}
