import {Quicksand} from 'next/font/google';
const quicksand = Quicksand({subsets: ['latin'], weight: ['400','500','600']});

import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import '../globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

// ¿Estamos en el dominio final?
const IS_PROD_DOMAIN =
  (process.env.NEXT_PUBLIC_SITE_URL || '').includes('gruposierradelta.com');

export const metadata: Metadata = {
  title: {
    default: 'Grupo SierraDelta – Soluciones para minería y gastronomía en altura',
    template: '%s · Grupo SierraDelta'
  },
  description:
    'Proveeduría técnica, alianzas estratégicas y gastronomía para operaciones mineras en Salta y NOA.',
  icons: {
    icon: '/favicon.ico', // aquí tu favicon
  },
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


export default async function LocaleLayout({children, params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="antialiased">
      {/* 👇 Aplicamos Quicksand a TODO el sitio */}
      <body className={`${quicksand.className} flex min-h-screen flex-col bg-white text-slate-900 pt-16`}>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
