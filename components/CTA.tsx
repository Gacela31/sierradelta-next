'use client';

import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';

type Props = {
  /** color de fondo del bloque */
  theme?: 'brand' | 'dark' | 'light';
};

export default function CTA({ theme = 'brand' }: Props) {
  const t = useTranslations('cta');

  // Fondo del section
  const sectionBg =
    theme === 'brand'
      ? 'bg-corporativo'
      : theme === 'dark'
      ? 'bg-slate-900'
      : 'bg-slate-50';

  // Apariencia de la tarjeta y tipografías
  const isDark = theme !== 'light';
  const card =
    isDark
      ? 'rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur p-6 md:p-10'
      : 'rounded-3xl ring-1 ring-slate-200 bg-white p-6 md:p-10';

  const titleCls = isDark ? 'text-white' : 'text-slate-900';
  const subCls   = isDark ? 'text-slate-300' : 'text-slate-600';
  const formVariant = isDark ? 'dark' : 'light';

  return (
    <section className={`py-16 sm:py-24 ${sectionBg}`}>
      <div className="container max-w-5xl">
        <div className={card}>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${titleCls}`}>
                {t('title')}
              </h2>
              <p className={`mt-3 ${subCls}`}>{t('desc')}</p>
            </div>
            <div className="md:pl-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
