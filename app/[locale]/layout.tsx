import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import '../globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Grupo SierraDelta – Soluciones para minería y gastronomía en altura',
    template: '%s · Grupo SierraDelta'
  },
  description: 'Proveeduría técnica, alianzas estratégicas y gastronomía para operaciones mineras en Salta y NOA.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Grupo SierraDelta',
    description: 'Soluciones para el ecosistema minero y gastronómico en altura',
    type: 'website'
  },
  alternates: {
    languages: {
      'es': '/es',
      'en': '/en'
    }
  }
};

export function generateStaticParams() {
  return [{locale: 'es'}, {locale: 'en'}];
}

export default async function LocaleLayout({children, params}: {children: ReactNode; params: {locale: string}}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Grupo SierraDelta SRL',
    'url': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'logo': `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/logo.png`,
    'sameAs': []
  };

  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Parador Bacoña',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'San Antonio de los Cobres',
      'addressRegion': 'Salta',
      'addressCountry': 'AR'
    },
    'areaServed': 'Salta, Argentina',
    'url': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'telephone': '+54 9 387 000 0000'
  };

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdOrganization)}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdLocalBusiness)}} />
      </body>
    </html>
  );
}
