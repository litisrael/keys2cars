import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const locales = ['he', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'he'; // Hebreo es el idioma principal por defecto

function getLocale(request: NextRequest): string {
  // 1. Verificar si el usuario ya tiene guardada una preferencia de idioma en cookies
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Negociar con las cabeceras Accept-Language del navegador
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  try {
    return match(languages, locales as unknown as string[], defaultLocale);
  } catch {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignorar archivos internos de Next.js, API, imágenes y archivos estáticos
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // Verificar si la URL ya tiene el prefijo de idioma (/he, /en, /es)
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Si no tiene idioma (ejemplo: acceso a / o /contacto), redirigir por defecto a /he o idioma negociado
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    
    // Preservar siempre los parámetros de búsqueda (UTM de Google Ads, gclid, etc.)
    const redirectUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);
    redirectUrl.search = request.nextUrl.search;

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set('NEXT_LOCALE', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  // Si ya tiene idioma, persistir el idioma en la cookie para futuras visitas
  const currentLocale = pathname.split('/')[1] as Locale;
  const response = NextResponse.next();
  if (locales.includes(currentLocale)) {
    response.cookies.set('NEXT_LOCALE', currentLocale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  }
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
