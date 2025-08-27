export const dynamic = 'force-dynamic';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';

export default function AlliancesPage() {
  const t = useTranslations('alliances');

  const cards = [
    {
      key: 'civil',
      title: t('cards.civil.title'),
      bullets: [
        t('cards.civil.bullets.0'),
        t('cards.civil.bullets.1'),
        t('cards.civil.bullets.2'),
      ],
      img: '/alliances/civil.jpg',
      alt: t('cards.civil.alt'),
    },
    {
      key: 'solar',
      title: t('cards.solar.title'),
      bullets: [
        t('cards.solar.bullets.0'),
        t('cards.solar.bullets.1'),
        t('cards.solar.bullets.2'),
      ],
      img: '/alliances/solar.jpg',
      alt: t('cards.solar.alt'),
    },
    {
      key: 'cables',
      title: t('cards.cables.title'),
      bullets: [
        t('cards.cables.bullets.0'),
        t('cards.cables.bullets.1'),
        t('cards.cables.bullets.2'),
      ],
      img: '/alliances/cables.jpg',
      alt: t('cards.cables.alt'),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Encabezado */}
      <section className="container py-14 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <span>{t('chip.label')}</span>
            <span className="opacity-60">•</span>
            <span>{t('chip.partner')}</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t('title')}
          </h1>

          <p className="mt-3 text-slate-600">{t('subtitle')}</p>
        </div>

        {/* Logo del partner oficial: GPI */}
        <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center opacity-80">
          <div className="relative h-14 w-48">
            <Image
              src="/logos/gpi.svg"
              alt={t('partners.gpiAlt')}
              width={260}   // probá 220–320
              height={80}
              className="h-auto w-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Tres cards (sin botón, solo bullets) */}
      <section className="container pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.key}
              className="group relative block overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-sm"
            >
              <div className="relative h-[320px] w-full">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              </div>

              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-extrabold drop-shadow-md">{c.title}</h3>
                <ul className="mt-2 space-y-1 text-white/90">
                  {c.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="opacity-70">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA con formulario — MODO OSCURO con color de marca */}
      <CTA theme="brand" />

    </main>
  );
}
