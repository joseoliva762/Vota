import { useRouter } from 'next/router';
import { en, es } from 'translation';

export const useTranslations = () => {
    const { locale } = useRouter();
    console.log({ locale, en, es})
    return locale === 'es' ? es : en;
}