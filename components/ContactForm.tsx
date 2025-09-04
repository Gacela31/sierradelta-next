'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;

    const fullName = (form.elements.namedItem('fullName') as HTMLInputElement).value;
    const email    = (form.elements.namedItem('email') as HTMLInputElement).value;
    const company  = (form.elements.namedItem('company') as HTMLInputElement).value;
    const role     = (form.elements.namedItem('role') as HTMLInputElement).value;
    const service  = (form.elements.namedItem('service') as HTMLSelectElement).value;
    const message  = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    // Compatibilidad con tu API actual: seguimos mandando 'name'
    const data = {
      name: fullName,
      email,
      message,
      // Campos extra (tu /api/contact puede incluirlos en el correo si querés)
      company,
      role,
      service,
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
        {/* Nombre y Apellido */}
        <div>
          <label className="mb-2 block text-sm text-white/90">Nombre y Apellido</label>
          <input
            name="fullName"
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none"
            placeholder="Ej: Ana Pérez"
            required
          />
        </div>

        {/* Empresa */}
        <div>
          <label className="mb-2 block text-sm text-white/90">Empresa</label>
          <input
            name="company"
            autoComplete="organization"
            className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none"
            placeholder="Ej: Constructora XYZ"
          />
        </div>

        {/* Área / Cargo */}
        <div>
          <label className="mb-2 block text-sm text-white/90">Área / Cargo</label>
          <input
            name="role"
            className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none"
            placeholder="Ej: Compras · Jefe de Obra"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm text-white/90">Email</label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none"
            placeholder="tu@email.com"
            required
          />
        </div>

        {/* Servicio (dropdown) */}
        <div>
          <label className="mb-2 block text-sm text-white/90">Servicio</label>
          <select
            name="service"
            className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white outline-none
                       [color-scheme:dark]" /* mejora contraste del desplegable */
            defaultValue="alimentos"
            required
          >
            <option value="alimentos">Alimentos y Producción</option>
            <option value="infraestructura">Infraestructura e Innovación</option>
          </select>
        </div>

        {/* Consulta */}
        <div>
          <label className="mb-2 block text-sm text-white/90">Consulta</label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none"
            placeholder="Contanos sobre tu proyecto…"
            required
          />
        </div>

        {/* Submit */}
        <button type="submit" className="w-full rounded-xl bg-white px-4 py-3 text-slate-900" disabled={status==='sending'}>
          {status==='sending' ? 'Enviando…' : 'Enviar'}
        </button>

        {/* Estados */}
        {status==='ok' && <p className="text-xs text-green-300">¡Gracias! Te contactamos a la brevedad.</p>}
        {status==='error' && <p className="text-xs text-red-300">Hubo un problema. Probá de nuevo.</p>}
        <p className="text-xs text-slate-300">Al enviar aceptás ser contactad@ por nuestro equipo.</p>
      </div>
    </form>
  );
}
