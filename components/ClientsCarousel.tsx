'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

/**
 * Carrusel infinito de logos (CSS-only).
 * - Duplica la fila para scroll continuo
 * - Pausa al hover
 * - Soporta prefers-reduced-motion
 */
export default function ClientsCarousel() {
  const t = useTranslations('clients'); // usa tu namespace existente (clients.title, clients.desc)

  // ⚠️ Colocá estos archivos en /public/logos/
  const logos = [
    { src: '/logos/ecco sau.svg', alt: 'Ecco SAU' },
    { src: '/logos/pecom chediak huasi.svg', alt: 'Pecomo Chediak Huasi' },
    { src: '/logos/dinatec.svg', alt: 'Dinatec' },
    { src: '/logos/posco sau.svg', alt: 'Posco SAU' },
    { src: '/logos/socompa.svg', alt: 'Socompa' },
    { src: '/logos/mva.svg', alt: 'MVA' },
    { src: '/logos/poco enc.svg', alt: 'Posco EnC' },
    { src: '/logos/tastil.svg', alt: 'Tastil' },
  ];

  // hacemos dos filas iguales para efecto “infinite”
  const track = [...logos, ...logos, ...logos];

  return (
    <section aria-labelledby="clients-title" className="bg-slate-50 py-16 sm:py-24">
      <div className="container max-w-7xl px-6">
        <div className="text-center">
          <h2 id="clients-title" className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {t('title')}
          </h2>
          {/** opcional si tenés clients.desc en tus JSON */}
          <p className="mt-3 max-w-3xl mx-auto text-slate-600">{t('desc') ?? ''}</p>
        </div>

        {/* Carrusel */}
        <div className="relative mt-10 overflow-hidden">
          {/* fades laterales */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent" />

          <div className="group">
            <div className="flex items-center gap-8 animate-[scroll_18s_linear_infinite] group-hover:[animation-play-state:paused] will-change-transform">
              {track.map((l, i) => (
                <div key={i} className="relative h-12 w-40 md:h-14 md:w-48 flex-none opacity-80 hover:opacity-100 transition">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    fill
                    sizes="(min-width: 768px) 12vw, 40vw"
                    className="object-contain grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS del carrusel (styled-jsx) */}
      <style jsx>{`
        /* Si duplicás el array 3×:
          const track = [...logos, ...logos, ...logos]
          animamos hasta -66.666% para que SIEMPRE se vea el último logo completo */
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-66.666%); } /* antes era -50% */
        }

        /* Si usás la clase Tailwind arbitraria:
          className="flex ... animate-[scroll_18s_linear_infinite] ..."
          este keyframe se llama 'scroll' y la clase la utiliza. */

        /* Respeta reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-[scroll_18s_linear_infinite] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
