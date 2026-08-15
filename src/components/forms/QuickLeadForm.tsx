'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionary';
import { isValidIsraeliMobile, formatIsraeliPhone } from '@/lib/israel-phone';
import { servicesData } from '@/data/services';
import { getAllBrands } from '@/data/vehicles';
import { CheckCircle2, AlertCircle, Send, Phone, User, Car, Wrench, MapPin } from 'lucide-react';

interface Props {
  lang: Locale;
  brand?: string;
  service?: string;
  model?: string;
}

function QuickLeadFormContent({ lang, brand: initialBrand, service: initialService, model: initialModel }: Props) {
  const searchParams = useSearchParams();
  const dict = getDictionary(lang);
  const allBrands = getAllBrands();

  // Pre-cargar valores desde UTMs si existen
  const utmBrand = searchParams.get('brand') || searchParams.get('utm_term') || initialBrand || '';
  const utmService = searchParams.get('service') || initialService || 'car-key-duplication';
  const utmModel = searchParams.get('model') || initialModel || '';
  const utmCity = searchParams.get('city') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: utmBrand,
    model: utmModel,
    service: utmService,
    city: utmCity,
  });

  const [touched, setTouched] = useState<{ phone?: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    if (utmBrand && !formData.brand) {
      setFormData((prev) => ({ ...prev, brand: utmBrand }));
    }
  }, [utmBrand]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, phone: val }));
    if (touched.phone) {
      setPhoneError(!isValidIsraeliMobile(val) && val.length > 0);
    }
  };

  const handlePhoneBlur = () => {
    setTouched((prev) => ({ ...prev, phone: true }));
    if (formData.phone) {
      const isValid = isValidIsraeliMobile(formData.phone);
      setPhoneError(!isValid);
      if (isValid) {
        setFormData((prev) => ({ ...prev, phone: formatIsraeliPhone(prev.phone) }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidIsraeliMobile(formData.phone)) {
      setPhoneError(true);
      return;
    }

    setIsSubmitting(true);
    setPhoneError(false);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          lang,
          source: searchParams.get('utm_source') || 'organic',
          campaign: searchParams.get('utm_campaign') || 'direct',
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => null);

      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {lang === 'he' ? 'הפנייה התקבלה בהצלחה!' : 'Request Received Successfully!'}
        </h3>
        <p className="text-slate-600 mb-6">
          {dict.form.success}
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', phone: '', brand: '', model: '', service: 'car-key-duplication', city: '' });
          }}
          className="text-sm font-semibold text-brand-600 hover:text-brand-700 underline"
        >
          {lang === 'he' ? 'שליחת פנייה נוספת' : 'Send another request'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">{dict.form.title}</h2>
        <p className="text-slate-600 text-sm">{dict.form.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.form.name}
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute top-3.5 start-3.5" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={dict.form.namePlaceholder}
              className="w-full ps-10 pe-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
            />
          </div>
        </div>

        {/* Teléfono con Validación Israelí */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.form.phone} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute top-3.5 start-3.5" />
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              placeholder={dict.form.phonePlaceholder}
              dir="ltr"
              className={`w-full ps-10 pe-4 py-2.5 bg-slate-50 border rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 transition-colors ${
                phoneError
                  ? 'border-red-400 focus:ring-red-500 bg-red-50/50'
                  : 'border-slate-200 focus:ring-brand-500'
              }`}
            />
          </div>
          {phoneError && (
            <p className="flex items-center gap-1 text-xs text-red-600 mt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{dict.form.phoneError}</span>
            </p>
          )}
        </div>

        {/* Marca de auto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.form.brand}
            </label>
            <div className="relative">
              <Car className="w-4 h-4 text-slate-400 absolute top-3.5 start-3.5" />
              <select
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full ps-10 pe-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors appearance-none"
              >
                <option value="">{lang === 'he' ? '-- בחר יצרן --' : '-- Select Make --'}</option>
                {allBrands.map((b) => (
                  <option key={b.slug} value={b.slug}>
                    {b.names[lang] || b.names.he}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.form.model}
            </label>
            <input
              type="text"
              value={formData.model}
              onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              placeholder={dict.form.modelPlaceholder}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
            />
          </div>
        </div>

        {/* Tipo de Servicio */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.form.service}
          </label>
          <div className="relative">
            <Wrench className="w-4 h-4 text-slate-400 absolute top-3.5 start-3.5" />
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full ps-10 pe-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors appearance-none"
            >
              {servicesData.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.titles[lang]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Ciudad / Ubicación */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.form.city}
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute top-3.5 start-3.5" />
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder={dict.form.cityPlaceholder}
              className="w-full ps-10 pe-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
            />
          </div>
        </div>

        {/* Botón Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>{dict.form.submitting}</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{dict.form.submit}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default function QuickLeadForm(props: Props) {
  return (
    <Suspense fallback={<div className="h-96 rounded-3xl bg-white animate-pulse border border-slate-200 shadow-xl" />}>
      <QuickLeadFormContent {...props} />
    </Suspense>
  );
}
