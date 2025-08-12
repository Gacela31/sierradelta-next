export const dynamic = 'force-dynamic';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CTA from '@/components/CTA';

export default function Page({params}: {params: {locale: string}}) {
  const {locale} = params;
  return (
    <>
      <Hero locale={locale} />
      <Services />
      <CTA locale={locale} />
    </>
  );
}
