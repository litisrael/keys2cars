'use client';

import React from 'react';
import { Locale } from '@/lib/i18n';
import { GooglePlaceReviewsData, GoogleReview } from '@/app/actions/getReviews';
import { Star, CheckCircle2, ExternalLink } from 'lucide-react';

interface ReviewGridProps {
  lang: Locale;
  reviewsData: GooglePlaceReviewsData;
}

export default function ReviewGrid({ lang, reviewsData }: ReviewGridProps) {
  const isHebrew = lang === 'he';

  const formatInitial = (name: string) => {
    return name ? name.trim().charAt(0).toUpperCase() : 'U';
  };

  return (
    <section className="mb-14">
      {/* Header section with Google summary badge */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white mb-8 border border-slate-700/60 shadow-xl relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold mb-3 border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>
                {isHebrew
                  ? 'ביקורות מאומתות מ-Google Maps'
                  : 'Verified Google Maps Reviews'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {isHebrew
                ? 'מה הלקוחות שלנו בבית שמש אומרים עלינו'
                : 'What Our Bet Shemesh Clients Say'}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              {isHebrew
                ? 'שירות מנעולנות רכב ברמה הגבוהה ביותר עם 100% שביעות רצון ואחריות מלאה על כל עבודה.'
                : 'Top-tier automotive locksmith service with 100% customer satisfaction and full warranty.'}
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/15 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md shrink-0">
              {/* Google G Logo */}
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.66-5.17 3.66-9.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.1C3.26 21.36 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.32c-.25-.72-.38-1.49-.38-2.32s.13-1.6.38-2.32V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.1z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.1c.95-2.83 3.6-4.93 6.72-4.93z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white leading-none">
                  {reviewsData.rating.toFixed(1)}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {isHebrew
                  ? `על בסיס ${reviewsData.user_ratings_total}+ דירוגים בגוגל`
                  : `Based on ${reviewsData.user_ratings_total}+ Google ratings`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {reviewsData.reviews.slice(0, 4).map((review: GoogleReview, index: number) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md border border-slate-200/80 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Reviewer Meta */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  {review.profile_photo_url ? (
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-xs"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center border border-brand-200">
                      {formatInitial(review.author_name)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">
                      {review.author_name}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {review.relative_time_description || (isHebrew ? 'לקוח מאומת' : 'Verified customer')}
                    </p>
                  </div>
                </div>

                {/* Google Icon Badge */}
                <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.66-5.17 3.66-9.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.1C3.26 21.36 7.34 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.32c-.25-.72-.38-1.49-.38-2.32s.13-1.6.38-2.32V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.1z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.1c.95-2.83 3.6-4.93 6.72-4.93z"
                    />
                  </svg>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-2.5">
                {[...Array(review.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                "{review.text}"
              </p>
            </div>

            {/* Verified badge */}
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-600 font-medium">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {isHebrew ? 'ביקורת מאומתת' : 'Verified review'}
              </span>
              <span className="text-slate-400 font-normal">Google</span>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action link to Google Maps */}
      <div className="text-center">
        <a
          href={reviewsData.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-brand-600 bg-white hover:bg-slate-50 px-5 py-2.5 rounded-full border border-slate-300 shadow-xs transition-colors"
        >
          <span>
            {isHebrew
              ? 'לצפייה בכל הביקורות ב-Google Maps'
              : 'View all reviews on Google Maps'}
          </span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
