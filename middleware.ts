import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const locales = ["en", "ua", "de", "pl", "ru"];
  const defaultLocale = "en";

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const localeFromCookie = req.cookies.get('NEXT_LOCALE')?.value;
    const locale = locales.includes(localeFromCookie || '') 
      ? localeFromCookie 
      : defaultLocale;

    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, req.url)
    );
  }
}
