export const dynamic = 'force-dynamic';
import {useTranslations} from 'next-intl';

export const metadata = {
  title: 'Services'
};

export default function Page() {
  const t = useTranslations('services');
  return (
    <section>
      <div className="container py-16 sm:py-20">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="max-w-2xl text-slate-600">Detalle de servicios, catálogos y alcance técnico.</p>
      </div>
    </section>
  );
}
