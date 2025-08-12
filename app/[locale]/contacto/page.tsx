export const dynamic = 'force-dynamic';
import {useTranslations} from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  async function send(data: FormData) {
    'use server';
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');

    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/contact`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, message})
    });
  }

  return (
    <section className="bg-slate-900 text-white">
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
        <form action={send} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4">
            <div>
              <label className="mb-2 block text-sm">{t('name')}</label>
              <input name="name" className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="Ej: Ana · Constructora XYZ" />
            </div>
            <div>
              <label className="mb-2 block text-sm">{t('email')}</label>
              <input name="email" type="email" className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm">{t('message')}</label>
              <textarea name="message" rows={4} className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="Contanos sobre tu proyecto..." />
            </div>
            <button type="submit" className="w-full rounded-xl bg-white px-4 py-3 text-slate-900">{t('send')}</button>
            <p className="text-xs text-slate-300">{t('disclaimer')}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
