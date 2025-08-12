// app/api/contact/route.ts
import { NextResponse } from 'next/server';
export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = body?.name?.toString() || '';
  const email = body?.email?.toString() || '';
  const message = body?.message?.toString() || '';

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  }

  // Temporal: solo registramos el envío en logs del server (Vercel → Logs)
  console.log('Contact form submission:', { name, email, message });

  return NextResponse.json({ ok: true });
}
