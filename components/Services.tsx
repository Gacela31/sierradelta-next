// components/Services.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// ✅ Import estático (más robusto y optimizado por Next)
import valueChainJpg from '@/public/images/sv-value-chain.jpg';
import techInnovationJpg from '@/public/images/sv-tech-innovation.jpg';

type Props = { locale: string };

export default function Services({ locale }: Props) {
  const t = useTranslations('services');

  const cards = [
    {
      key: 's1',
      title: t('s1Title'),
      desc: t('s1Desc'),
      img: valueChainJpg, // ← import estático
      cta: locale === 'es' ? 'Ver proyectos' : 'See projects',
      href: `/${locale}/contacto`, // o `/${locale}/servicios#cadena`
      alt: 'Proyectos de Cadena de Valor Productiva',
      priority: true, // prioriza la primera imagen
    },
    {
      key: 's2',
      title: t('s2Title'),
      desc: t('s2Desc'),
      img: techInnovationJpg,
      cta: locale === 'es' ? 'Ver proyectos' : 'See projects',
      href: `/${locale}/contacto`, // o `/${locale}/servicios#tecnologia`
      alt: 'Proyectos de Tecnología e Innovación',
      priority: false,
    },
  ];

  return (
    <section id="servicios" className="bg-slate-50 py-20">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Título + bajada */}
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">{t('desc')}</p>
        </header>

        {/* Grid de 2 cards estilo Showcase */}
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((c) => (
            <Link
              key={c.key}
              href={c.href}
              className="group relative block overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5"
              aria-label={c.title}
            >
              {/* Imagen de fondo */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-72 md:h-80">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  priority={c.priority}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                {/* Degradé tipo vignette para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>

              {/* Texto superpuesto */}
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="text-white/95 text-2xl sm:text-3xl font-extrabold drop-shadow">
                  {c.title}
                </h3>
                <p className="mt-2 text-white/85 max-w-xl drop-shadow">{c.desc}</p>

                <span
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 shadow
                             transition-all group-hover:bg-white group-hover:scale-[1.02]"
                >
                  {c.cta}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-80">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
