'use client';

import {useLocale} from 'next-intl';
import Link from 'next/link';

export default function LocaleSwitcher({className}:{className?: string}) {
  const locale = useLocale();
  const other = locale === 'es' ? 'en' : 'es';
  return (
    <Link href={`/${other}`} className={className}>
      {other.toUpperCase()}
    </Link>
  );
}
