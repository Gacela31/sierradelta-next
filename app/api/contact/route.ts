// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs'; // asegura Node (no Edge)

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Soporta tus campos nuevos y los antiguos
    const {
      fullName,
      company,
      role,
      email,
      service,
      message
    } = body;

    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;font-size:14px;color:#0f172a">
        <h2 style="margin:0 0 8px">Nueva consulta desde la web</h2>
        <table style="border-collapse:collapse">
          <tbody>
            <tr><td style="padding:6px 12px;background:#f8fafc">Nombre</td><td style="padding:6px 12px">${fullName}</td></tr>
            ${company ? `<tr><td style="padding:6px 12px;background:#f8fafc">Empresa</td><td style="padding:6px 12px">${company}</td></tr>` : ''}
            ${role ? `<tr><td style="padding:6px 12px;background:#f8fafc">Área/Cargo</td><td style="padding:6px 12px">${role}</td></tr>` : ''}
            ${service ? `<tr><td style="padding:6px 12px;background:#f8fafc">Servicio</td><td style="padding:6px 12px">${service}</td></tr>` : ''}
            ${email ? `<tr><td style="padding:6px 12px;background:#f8fafc">Email</td><td style="padding:6px 12px">${email}</td></tr>` : ''}
          </tbody>
        </table>
        ${message ? `<p style="margin:16px 0 0;white-space:pre-wrap">${message}</p>` : ''}
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Grupo SierraDelta <info@gruposierradelta.com>',
      to: ['info@gruposierradelta.com'], 
      bcc: 'Gimena Sánchez Villalba <gimena.sanchez@gruposierradelta.com>',// podés sumar copias acá
      subject: `[Web] Nueva consulta${service ? ` – ${service}` : ''}`,
      html,
      // al responder el mail, responde al visitante
      replyTo: email || undefined
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
