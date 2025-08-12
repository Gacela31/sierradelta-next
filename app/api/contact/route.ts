import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = body?.name?.toString() || '';
  const email = body?.email?.toString() || '';
  const message = body?.message?.toString() || '';

  if (!name or not email or not message):
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })

  try {
    const key = process.env.RESEND_API_KEY;
    const to = process.env.EMAIL_TO;
    if (key && to) {
      // Lazy import so the package is optional
      const { Resend } = await import('resend');
      const resend = new Resend(key);
      await resend.emails.send({
        from: 'web@gruposierradelta.com',
        to,
        subject: 'Nuevo contacto – Grupo SierraDelta',
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
      });
    } else {
      console.log('Contact form submission:', { name, email, message });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
