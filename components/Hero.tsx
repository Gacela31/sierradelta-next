import {useTranslations} from 'next-intl';
import {BadgeInfo, CheckCircle, HardHat} from 'lucide-react';
import Link from 'next/link';

export default function Hero({locale}:{locale: string}) {
  const t = useTranslations('hero');
  const b = useTranslations('bullets');
  return (
    <section className="relative overflow-hidden">
      <div className="container py-16 sm:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <span className="badge-accent">{t('badge')}</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t('title')}</h1>
          <p className="mt-4 text-slate-600">{t('desc')}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="rounded-xl bg-slate-900 px-4 py-2 text-white" href={`/${locale}/servicios`}>{t('ctaServices')}</Link>
            <Link className="rounded-xl border px-4 py-2" href={`/${locale}/contacto`}>{t('ctaContact')}</Link>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {b('altitude')}</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {b('quality')}</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {b('partners')}</li>
          </ul>
        </div>
        <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl border bg-slate-50 shadow-sm grid place-items-center">
          <div className="text-center">
            <HardHat className="mx-auto mb-3 h-10 w-10 opacity-80" />
            <p className="text-sm text-slate-500">Parador Bacoña / Operaciones mineras</p>
          </div>
        </div>
      </div>
    </section>
  );
}
