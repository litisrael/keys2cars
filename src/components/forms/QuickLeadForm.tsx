'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionary';
import { isValidIsraeliMobile, formatIsraeliPhone } from '@/lib/israel-phone';
import { servicesData } from '@/data/services';
import { getAllBrands } from '@/data/vehicles';
import { CheckCircle2, AlertCircle, Send, Phone, User, Car, Wrench, MapPin, MessageSquare, Loader2 } from 'lucide-react';

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
  const utmCity = searchParams.get('city') || searchParams.get('utm_content') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: utmBrand,
    model: utmModel,
    service: utmService,
    city: utmCity,
    description: '',
  });

  const [touched, setTouched] = useState<{ phone?: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
    setErrorMessage(null);

    // Validación de teléfono israelí
    if (!isValidIsraeliMobile(formData.phone)) {
      setPhoneError(true);
      return;
    }

    setIsSubmitting(true);
    setPhoneError(false);

    try {
      const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
      const selectedServiceObj = servicesData.find((s) => s.slug === formData.service);
      const serviceTitle = selectedServiceObj ? selectedServiceObj.titles[lang] : formData.service;

      const selectedBrandObj = allBrands.find((b) => b.slug === formData.brand);
      const brandName = selectedBrandObj ? selectedBrandObj.names[lang] || selectedBrandObj.names.he : formData.brand;

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          brand: brandName,
          model: formData.model.trim(),
          service: serviceTitle,
          city: formData.city.trim(),
          description: formData.description.trim(),
          lang,
          source: searchParams.get('utm_source') || 'organic_web',
          campaign: searchParams.get('utm_campaign') || 'direct',
          pageUrl: currentUrl,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al procesar la solicitud');
      }

      setIsSuccess(true);
    } catch (err: any) {
      setErrorMessage(
        lang === 'he'
          ? 'חלה שגיאה בשליחת הבקשה. אנא נסה שוב או התקשר אלינו ישירות.'
          : err.message || 'Error sending request. Please try again or call us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mensaje de éxito
  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100 text-center animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {lang === 'he' ? 'ההודעה נשלחה בהצלחה!' : '¡Mensaje enviado con éxito!'}
        </h3>
        <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">
          {lang === 'he'
            ? 'פרטי הבקשה התקבלו ונשלחו למנעולן התורן. ניצור איתך קשר טלפוני תוך מספר דקות עם הצעת מחיר מדויקת.'
            : 'Nos pondremos en contacto contigo a la brevedad con tu cotización y tiempo de llegada.'}
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', phone: '', brand: '', model: '', service: 'car-key-duplication', city: '', description: '' });
          }}
          className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 underline"
        >
          {lang === 'he' ? 'שליחת בקשה נוספת' : 'Enviar otra solicitud'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-1">{dict.form.title}</h2>
        <p className="text-slate-600 text-sm">{dict.form.subtitle}</p>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.form.name} <span className="text-red-500">*</span>
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

        {/* Marca y Modelo */}
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
                <option value="">{lang === 'he' ? '-- בחר יצרן --' : '-- Seleccionar Marca --'}</option>
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

        {/* Descripción del problema o consulta */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {lang === 'he' ? 'פירוט התקלה / הודעה נוספת' : lang === 'es' ? 'Descripción del problema o consulta' : 'Problem description / notes'}
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-slate-400 absolute top-3.5 start-3.5" />
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder={
                lang === 'he'
                  ? 'ננעל המפתח בתוך הבגאז\', מפתח אחרון אבד, מפתח לא מסתובב...'
                  : lang === 'es'
                  ? 'Ej: Se quedaron las llaves dentro del baúl, perdí la única copia, no gira la llave...'
                  : 'E.g., Keys locked inside trunk, all keys lost, ignition not turning...'
              }
              className="w-full ps-10 pe-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors resize-none"
            />
          </div>
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{lang === 'he' ? 'שולח...' : 'Enviando...'}</span>
            </>
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
