export const dynamic = 'force-dynamic';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, Factory, Leaf, Store, Truck } from 'lucide-react';
import CTA from '@/components/CTA';

export default function FoodProjectsPage() {
  const t = useTranslations('alimentos');

  const steps = [
    {
      icon: <Leaf className="h-5 w-5" />,
      title: t('valueChain.steps.0.title'),
      desc: t('valueChain.steps.0.desc'),
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: t('valueChain.steps.1.title'),
      desc: t('valueChain.steps.1.desc'),
    },
    {
      icon: <Store className="h-5 w-5" />,
      title: t('valueChain.steps.2.title'),
      desc: t('valueChain.steps.2.desc'),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="container px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <Factory className="h-4 w-4" />
            <span>{t('hero.badge')}</span>
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t('hero.title')}
          </h1>
          <p className="mt-3 text-slate-600">{t('hero.desc')}</p>
        </div>
      </section>

      {/* Cadena de Valor */}
      <section className="container px-6 pb-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
          <h2 className="text-xl font-semibold text-slate-900">{t('valueChain.title')}</h2>

          <div className="mt-6 grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {steps.map((s, i) => (
              <div key={i} className="contents">
                <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 text-slate-700">
                    {s.icon}
                    <p className="font-semibold">{s.title}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="mx-auto hidden h-6 w-6 text-slate-400 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyecto: Casa Díaz */}
      <section className="container px-6 py-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
            <Image
              src="/alimentos/casa-diaz.jpg"
              alt={t('casa.alt')}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
            />
          </div>
          <div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {t('casa.kicker')}
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
              {t('casa.title')}
            </h3>
            <p className="mt-3 text-slate-600">{t('casa.desc')}</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-2"><span>•</span><span>{t('casa.points.0')}</span></li>
              <li className="flex gap-2"><span>•</span><span>{t('casa.points.1')}</span></li>
              <li className="flex gap-2"><span>•</span><span>{t('casa.points.2')}</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proyecto: Bacoña */}
      <section className="container px-6 py-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="md:order-2 relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
            <Image
              src="/alimentos/bacona.jpg"
              alt={t('bacona.alt')}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </div>
          <div className="md:order-1">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {t('bacona.kicker')}
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
              {t('bacona.title')}
            </h3>
            <p className="mt-3 text-slate-600">{t('bacona.desc')}</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-2"><span>•</span><span>{t('bacona.points.0')}</span></li>
              <li className="flex gap-2"><span>•</span><span>{t('bacona.points.1')}</span></li>
              <li className="flex gap-2"><span>•</span><span>{t('bacona.points.2')}</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impacto + CTA 
      <section className="container px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900">{t('impact.entrepreneurs.value')}</p>
            <p className="mt-1 text-sm text-slate-600">{t('impact.entrepreneurs.label')}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900">{t('impact.local.value')}</p>
            <p className="mt-1 text-sm text-slate-600">{t('impact.local.label')}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900">{t('impact.nodes.value')}</p>
            <p className="mt-1 text-sm text-slate-600">{t('impact.nodes.label')}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={`/${t('localePrefix')}/contacto`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800"
          >
            {t('cta')}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>*/}

      {/* Reutilizamos tu CTA con formulario en modo brand */}
      <CTA theme="brand" />
    </main>
  );
}
