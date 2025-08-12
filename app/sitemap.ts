import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    { url: `${base}/es`, alternates: { languages: { en: `${base}/en` } } },
    { url: `${base}/es/servicios`, alternates: { languages: { en: `${base}/en/servicios` } } },
    { url: `${base}/es/clientes`, alternates: { languages: { en: `${base}/en/clientes` } } },
    { url: `${base}/es/alianzas`, alternates: { languages: { en: `${base}/en/alianzas` } } },
    { url: `${base}/es/contacto`, alternates: { languages: { en: `${base}/en/contacto` } } }
  ];
}
