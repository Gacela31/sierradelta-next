import {useTranslations} from 'next-intl';
import {BadgeInfo, CheckCircle, HardHat} from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

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
          <Link className="btn-primary" href={`/${locale}/servicios`}>{t('ctaServices')}</Link>
          <Link className="btn-outline" href={`/${locale}/contacto`}>{t('ctaContact')}</Link>
         </div>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {b('altitude')}</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {b('quality')}</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {b('partners')}</li>
          </ul>
        </div>
        <div className="relative rounded-xl overflow-hidden w-full h-full">
          <Image
            src="/parador-bacona.jpg"
            alt="Parador Bacoña"
            fill
            className="object-cover"
          />
          {/*
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <p className="text-white text-lg font-medium">
              Parador Bacoña / Operaciones mineras
            </p>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
