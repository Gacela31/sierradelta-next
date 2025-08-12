// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  // 👇 Quitamos experimental.typedRoutes
};

export default withNextIntl(nextConfig);
