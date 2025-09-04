'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ClientsCarousel() {
  const t = useTranslations('clients');

  const logos = [
    { src: '/logos/ecco-sau.svg', alt: 'Ecco SAU' },
    { src: '/logos/pecom.svg', alt: 'Pecom' },
    { src: '/logos/dinatec.svg', alt: 'Dinatec' },
    { src: '/logos/posco-sau.svg', alt: 'Posco SAU' },
    { src: '/logos/socompa.svg', alt: 'Socompa' },
    { src: '/logos/mva.svg', alt: 'MVA' },
    { src: '/logos/posco-enc.svg', alt: 'Posco EnC' },
    { src: '/logos/huasi.svg', alt: 'Huasi' },
    { src: '/logos/chediak.svg', alt: 'Chediak' },
    { src: '/logos/tastil.svg', alt: 'Tastil' },
  ];

  // duplicamos 2× para marquee perfecto
  const track = [...logos, ...logos];

  return (
    <section id="clientes" aria-labelledby="clients-title" className="bg-slate-50 py-16 sm:py-24">
      <div className="container max-w-7xl px-6">
        <div className="text-center">
          <h2 id="clients-title" className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-slate-600">{t('desc') ?? ''}</p>
        </div>

        {/* Carrusel */}
        <div className="relative mt-10 overflow-hidden">
          {/* fades laterales */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent" />

          <div className="group">
            <ul className="flex items-center gap-8 w-max animate-[marquee_36s_linear_infinite] group-hover:[animation-play-state:paused] will-change-transform">
              {track.map((l, i) => (
                <li
                  key={`${l.alt}-${i}`}
                  className="relative h-12 w-40 md:h-14 md:w-48 flex-none opacity-80 hover:opacity-100 transition"
                >
                  <Image
                    src={l.src}
                    alt={l.alt}
                    fill
                    sizes="(min-width: 768px) 12vw, 40vw"
                    className="object-contain grayscale"
                    priority={i < 4} // un toque de perf
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CSS del carrusel (styled-jsx) */}
      <style jsx>{`
        /* Con 2 copias, movemos exactamente -50% para loop perfecto */
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[marquee_22s_linear_infinite] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
