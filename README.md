# Grupo SierraDelta – Sitio Next.js (ES/EN)

Sitio corporativo con **Next.js (App Router) + TypeScript + Tailwind + next-intl**. Incluye:
- ES/EN con detección automática de idioma (middleware)
- Rutas: `/[locale]`, `/[locale]/servicios`, `/[locale]/clientes`, `/[locale]/alianzas`, `/[locale]/contacto`
- SEO básico, `robots` y `sitemap`
- Formulario de contacto con **API Route** y envío opcional vía **Resend** (o log en consola)
- Estilos con Tailwind

---

## 1) Requisitos (Windows)
1. Instalar **Node.js LTS** (https://nodejs.org) – reiniciar terminal tras instalar.
2. (Opcional) Instalar **Git** (https://git-scm.com) para versionar y desplegar.

## 2) Correr en local
```bash
cd sierradelta-next
npm install
# copiar .env.example -> .env.local y completar (ver abajo)
npm run dev
```
Abrir http://localhost:3000 — el middleware te redirige a `/es` o `/en` según tu navegador.

## 3) Variables de entorno
Crear **.env.local** en la raíz con:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Opcional (para enviar emails con Resend)
RESEND_API_KEY=
EMAIL_TO=tu-correo@dominio.com
```

## 4) Enviar emails (opcional)
- Crear cuenta en https://resend.com/ y generar **API Key**.
- Poner `RESEND_API_KEY` y `EMAIL_TO` en **Vercel → Project → Settings → Environment Variables** y en `.env.local` si querés probar con tu key local.
- Si no configurás nada, el formulario **no falla**: guarda en log del servidor.

## 5) Deploy a Vercel
**Opción A – Vía GitHub** (recomendada)
1. Inicializar repo:
   ```bash
   git init
   git add .
   git commit -m "Init Grupo SierraDelta site"
   ```
2. Crear repo en GitHub y hacer `git remote add origin ...` + `git push`.
3. Ir a **https://vercel.com → Add New Project → Importar** tu repo.
4. En **Environment Variables**, setear `NEXT_PUBLIC_SITE_URL=https://gruposierradelta.com` (cuando tengas dominio) y si usás email, `RESEND_API_KEY` + `EMAIL_TO`.
5. Deploy.

**Opción B – Vercel CLI**
```bash
npm i -g vercel
vercel
vercel --prod
```

## 6) Dominio gruposierradelta.com
Tenés dos caminos:

**A) Comprar el dominio en Vercel (fácil):**
- En tu proyecto Vercel → **Domains** → **Buy Domain** → buscá `gruposierradelta.com` y compralo.
- Vercel configura DNS automáticamente.

**B) Comprar en registrador externo (Namecheap, GoDaddy, etc.):**
- Comprás `gruposierradelta.com` en el registrador.
- En Vercel → **Domains** → **Add** → `gruposierradelta.com`.
- Te mostrará **registros DNS**. Podés:
  - **Delegar nameservers a Vercel** (más simple), o
  - Crear **A** y **CNAME** como te indique Vercel.
- Esperar propagación DNS (puede tardar hasta algunas horas).

**Después de apuntar el dominio:**
- En Vercel → Project → Settings → **Domains**, define `gruposierradelta.com` como **Primary**.
- En **Environment Variables**, actualizar `NEXT_PUBLIC_SITE_URL=https://gruposierradelta.com` y hacer **Redeploy**.
- HTTPS se emite automáticamente (Let's Encrypt).

## 7) Contenidos y marca
- Reemplazar `public/logo.png` por tu logo real.
- Editar textos en `messages/es.json` y `messages/en.json`.
- Ajustar dirección/teléfono en `app/[locale]/layout.tsx` (JSON-LD LocalBusiness) y en `contacto/page.tsx`.
- Agregar imágenes reales (usa `next/image`).

## 8) Estructura
```
app/
  [locale]/
    page.tsx
    servicios/page.tsx
    clientes/page.tsx
    alianzas/page.tsx
    contacto/page.tsx
    layout.tsx
  api/contact/route.ts
  globals.css
  robots.ts
  sitemap.ts
components/
  NavBar.tsx
  Footer.tsx
  Hero.tsx
  Services.tsx
  CTA.tsx
messages/
  es.json
  en.json
```

## 9) Notas
- La detección de idioma se maneja en `middleware.ts`. También podés fijar idioma por defecto en `i18n.ts`.
- Si querés URLs traducidas (p.ej. `/en/services` en vez de `/en/servicios`) podemos habilitarlas con mapeo usando next-intl; en este starter dejamos idénticas para simplicidad.
- Para blog/noticias, agregamos una carpeta `app/[locale]/noticias` con MDX y RSS cuando lo pidas.
