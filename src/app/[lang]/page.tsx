import React from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionary';
import { servicesData } from '@/data/services';
import { getAllBrands } from '@/data/vehicles';
import DynamicHeroBanner from '@/components/ads/DynamicHeroBanner';
import QuickLeadForm from '@/components/forms/QuickLeadForm';
import BrandSelector from '@/components/home/BrandSelector';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import ReviewGrid from '@/components/reviews/ReviewGrid';
import { getGooglePlaceReviews } from '@/app/actions/getReviews';
import { ShieldCheck, Clock, Award, PhoneCall, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const brands = getAllBrands();
  const reviewsData = await getGooglePlaceReviews(locale);

  const isRTL = locale === 'he';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const faqs = [
    {
      q: locale === 'he' ? 'תוך כמה זמן מגיע מנעולן רכב למיקום שלי?' : 'How fast does an auto locksmith arrive in Israel?',
      a: locale === 'he' ? 'זמן ההגעה הממוצע באזור המרכז, השרון וירושלים הוא 20 עד 30 דקות בלבד מרגע הקריאה.' : 'Our average arrival time in Tel Aviv, Gush Dan, and central Israel is 20 to 30 minutes from your call.',
    },
    {
      q: locale === 'he' ? 'האם ניתן לשכפל מפתח לרכב גם אם כל המפתחות אבדו?' : 'Can you duplicate a car key if all keys are lost?',
      a: locale === 'he' ? 'כן, אנו מגיעים עם ניידת שירות ומייצרים מפתח מקודד חדש ישירות למחשב הרכב גם במצב של אובדן מוחלט (All Keys Lost).' : 'Yes, our mobile locksmith units generate and code a new original transponder/smart key on-site even when no spare key exists.',
    },
    {
      q: locale === 'he' ? 'האם פריצת הרכב גורמת לנזק לרכב או לחלון?' : 'Does emergency lockout cause any damage to the car?',
      a: locale === 'he' ? 'לא. אנו משתמשים בציוד ייעודי של כריות אוויר ומוטות פריצה ייעודיים לפריצה נקייה ללא שריטה או פגיעה בגומיות.' : 'No. We use professional non-destructive automotive entry tools ensuring zero scratches or damage to doors, glass, and seals.',
    },
  ];

  return (
    <>
      <JsonLdSchema lang={locale} faqs={faqs} canonicalUrl={`https://keys2cars.com/${locale}`} />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Dynamic Hero Banner for Google Ads UTMs */}
        <DynamicHeroBanner lang={locale} />

        {/* Lead Form & Trust Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80 mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                {locale === 'he'
                  ? 'שירותי פריצה ושכפול מפתחות רכב בפריסה ארצית'
                  : 'Automotive Locksmith & Key Services Across Israel'}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {locale === 'he'
                  ? 'Keys2Cars מספקת פתרון מיידי לכל בעיית מנעולנות רכב בישראל. בין אם ננעלת מחוץ לרכב, איבדת את המפתח האחרון, או אתה זקוק לשכפול מפתח חכם נוסף לביטוח, המומחים שלנו בדרך אליך עם ציוד הקידוד המתקדם בעולם.'
                  : 'Keys2Cars delivers immediate professional automotive locksmith solutions across Israel. Whether you are locked out, lost all keys, or need a smart key duplicate, our mobile units arrive with state-of-the-art diagnostic programming equipment.'}
              </p>

              {/* Trust highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Clock className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{dict.trust.arrival}</h4>
                    <p className="text-[11px] text-slate-500">{locale === 'he' ? 'זמינות מסביב לשעון' : '24/7 round the clock'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{dict.trust.warranty}</h4>
                    <p className="text-[11px] text-slate-500">{locale === 'he' ? 'מפתחות ושלטים מקוריים' : 'OEM quality keys'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuickLeadForm lang={locale} />
          </div>
        </div>

        {/* Brand Selector */}
        <BrandSelector lang={locale} brands={brands} />

        {/* Services Grid */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-2">
              {dict.services.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {dict.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-slate-200/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.titles[locale]}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.shortDescriptions[locale]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">
                    {dict.services.fromPrice} <span className="text-base text-slate-900 font-black">₪{service.startingPrice}</span>
                  </span>
                  <Link
                    href={`/${locale}/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    <span>{dict.services.orderService}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Google Maps Customer Reviews Grid */}
        <ReviewGrid lang={locale} reviewsData={reviewsData} />

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/80 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 text-center">
            {locale === 'he' ? 'שאלות ותשובות נפוצות' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
