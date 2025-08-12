import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import '../globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// Detectar si estamos en el dominio final o en el provisional
const IS_PROD_DOMAIN =
  (process.env.NEXT_PUBLIC_SITE_URL || '').includes('gruposierradelta.com');

export const metadata: Metadata = {
  title: {
    default: 'Grupo SierraDelta – Soluciones para minería y gastronomía en altura',
    template: '%s · Grupo SierraDelta'
  },
  description:
    'Proveeduría técnica, alianzas estratégicas y gastronomía para operaciones mineras en Salta y NOA.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  openGraph: {
    title: 'Grupo SierraDelta',
    description:
      'Soluciones para el ecosistema minero y gastronómico en altura',
    type: 'website'
  },
  alternates: {
    languages: { es: '/es', en: '/en' }
  },
  robots: IS_PROD_DOMAIN
    ? { index: true, follow: true }
    : { index: false, follow: false }
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="bg-white text-slate-900 antialiased">
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}