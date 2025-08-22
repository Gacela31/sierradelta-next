export const dynamic = 'force-dynamic';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Values from '@/components/Values';
import ClientsCarousel from '@/components/ClientsCarousel';


export default function Page({params}: {params: {locale: string}}) {
  const {locale} = params;
  return (
    <>
      <Hero locale={locale} />
      <Services locale={locale} />
      <Values/>
      <ClientsCarousel/>
     
      <CTA locale={locale} />
    </>
  );
}
