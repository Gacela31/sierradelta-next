import {useTranslations} from 'next-intl';
import {Cable, Building2, Forklift} from 'lucide-react';

export default function Services() {
  const t = useTranslations('services');
  const items = [
    {icon: Forklift, title: t('s1Title'), desc: t('s1Desc')},
    {icon: Building2, title: t('s2Title'), desc: t('s2Desc')},
    {icon: Cable, title: t('s3Title'), desc: t('s3Desc')}
  ];

  return (
    <section className="bg-slate-50">
      <div className="container py-16 sm:py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">{t('title')}</h2>
          <p className="mt-2 text-slate-600">{t('desc')}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <div className="card p-6" key={i}>
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold"><it.icon className="h-5 w-5" /> {it.title}</div>
              <p className="text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
