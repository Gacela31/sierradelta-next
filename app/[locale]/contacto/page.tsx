import {useTranslations} from 'next-intl';
import ContactForm from '@/components/ContactForm';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <section style={{ backgroundColor: "#1F3B49" }} className="text-white py-16">
      <div className="container py-16 sm:py-20 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{t('title')}</h2>
          <p className="mt-2 max-w-xl text-slate-300">{t('desc')}</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            <li>San Antonio de los Cobres · Salta</li>
            <li>+54 9 387 ...</li>
            <li>contacto@gruposierradelta.com</li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
