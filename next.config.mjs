// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

// Conecta next-intl con tu config de mensajes
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  }
};

export default withNextIntl(nextConfig);
