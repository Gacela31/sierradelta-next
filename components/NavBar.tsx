'use client';

import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import Image from 'next/image';

export default function NavBar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const p = (slug: string) => `/${locale}${slug}`;

  return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo: ocupa todo el alto de la barra */}
          <Link href={`/${locale}`} className="flex items-center h-full ">
            <Image
              src="/logo-sd.svg"          // o /images/logo-sd.svg si lo moviste
              alt="Grupo SierraDelta"
              width={160}
              height={64}
              className="h-full w-auto"   // llena el alto de la barra
              priority
            />
          </Link>

          {/* Menú */}
          <nav className="hidden md:flex gap-6 text-sm text-slate-700 items-center">
            <Link href={p('')}>{t('home')}</Link>
            <Link href={p('/servicios')}>{t('services')}</Link>
            <Link href={p('/clientes')}>{t('clients')}</Link>
            <Link href={p('/alianzas')}>{t('alliances')}</Link>
            <Link href={p('/contacto')}>{t('contact')}</Link>
          </nav>

          {/* Idioma */}
          <div className="flex items-center">
            <LocaleSwitcher />
          </div>
        </div>
      </header>

  );
}
