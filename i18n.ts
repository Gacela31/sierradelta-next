// i18n.ts
import {getRequestConfig} from 'next-intl/server';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

// Le dice a next-intl cómo cargar los mensajes por locale
export default getRequestConfig(async ({locale}) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

