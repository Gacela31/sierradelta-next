'use client';

import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

export default function NavBar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const p = (slug: string) => `/${locale}${slug}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="font-semibold tracking-tight">Grupo SierraDelta</Link>
        <nav className="hidden gap-6 md:flex text-sm">
          <Link href={p('')}>{t('home')}</Link>
          <Link href={p('/servicios')}>{t('services')}</Link>
          <Link href={p('/clientes')}>{t('clients')}</Link>
          <Link href={p('/alianzas')}>{t('alliances')}</Link>
          <Link href={p('/contacto')}>{t('contact')}</Link>
        </nav>
        <LocaleSwitcher className="text-sm underline" />
      </div>
    </header>
  );
}
