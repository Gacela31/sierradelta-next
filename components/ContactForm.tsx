'use client';

import { useState } from 'react';


export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="grid gap-4">
        <div>
          <label className="mb-2 block text-sm text-white/90">Nombre y empresa</label>
          <input name="name" className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="Ej: Ana · Constructora XYZ" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/90">Email</label>
          <input name="email" type="email" className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="tu@email.com" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/90">Consulta</label>
          <textarea name="message" rows={4} className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="Contanos sobre tu proyecto..." />
        </div>
        <button type="submit" className="w-full rounded-xl bg-white px-4 py-3 text-slate-900" disabled={status==='sending'}>
          {status==='sending' ? 'Enviando…' : 'Enviar'}
        </button>
        {status==='ok' && <p className="text-xs text-green-300">¡Gracias! Te contactamos a la brevedad.</p>}
        {status==='error' && <p className="text-xs text-red-300">Hubo un problema. Probá de nuevo.</p>}
        <p className="text-xs text-slate-300">Al enviar aceptás ser contactad@ por nuestro equipo.</p>
      </div>
    </form>
  );
}
