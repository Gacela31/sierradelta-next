import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './next-intl.config.mjs';

export default createMiddleware({ locales, defaultLocale, localeDetection: true });
export const config = { matcher: ['/', '/(es|en)/:path*'] };