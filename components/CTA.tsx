import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function CTA({locale}:{locale: string}) {
  const t = useTranslations('cta');
  return (
    <section>
      <div className="container py-16 sm:py-20">
        <div className="grid items-center gap-8 rounded-2xl border bg-gradient-to-br from-white to-slate-50 p-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{t('title')}</h3>
            <p className="mt-2 max-w-xl text-slate-600">{t('desc')}</p>
          </div>
          <div className="flex justify-end">
            <Link href={`/${locale}/contacto`} className="rounded-xl bg-slate-900 px-5 py-3 text-white">{t('button')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
