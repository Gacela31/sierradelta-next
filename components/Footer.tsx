import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} Grupo SierraDelta SRL. {t('rights')}</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:opacity-80">Política de privacidad</a>
          <a href="#" className="hover:opacity-80">Términos</a>
        </div>
      </div>
    </footer>
  );
}
