import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 👉 Definimos acá para evitar el import de .mjs
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localeDetection: true
});

export const config = {
  matcher: ['/', '/(es|en)/:path*']
};
