'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Values() {
  const t = useTranslations('values');
  const locale = useLocale();

  const items = [
    { k: 'sustain',   title: t('items.sustain.title'),   desc: t('items.sustain.desc') },
    { k: 'quality',   title: t('items.quality.title'),   desc: t('items.quality.desc') },
    { k: 'innov',     title: t('items.innov.title'),     desc: t('items.innov.desc') },
  ];

  return (
    <section id="valores" aria-labelledby="values-title" className="relative bg-slate-50/70 py-16 sm:py-24">
      <div className="container max-w-7xl px-6">
        {/* Título + bajada centrados */}
        <div className="text-center">
          <h2 id="values-title" className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {t('heading')}
          </h2>
          <p className="mt-3 max-w-4xl mx-auto text-slate-600">
            {t('subheading')}
          </p>
        </div>

        {/* Grid centrado y con ancho contenido */}
        <ol className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
          {items.map((it, i) => (
            <li key={it.k} className="w-full max-w-md mx-auto">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{it.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Divisor sutil */}
        <div className="mt-12 mx-auto h-px w-40 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Closing destacado */}

        {/* Closing destacado */}
        <div className="mt-6 text-center">
          <p className="mx-auto max-w-3xl text-lg md:text-xl font-medium text-slate-800 leading-relaxed">
            {t('closing')}
          </p>
        </div>

        {/* Botón centrado (igual que antes) */}
        <div className="mt-8 flex justify-center">
          <Link
            href={`/${locale}/empresa`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow ring-1 ring-black/5 hover:shadow-md transition"
          >
            {t('cta')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-80">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
