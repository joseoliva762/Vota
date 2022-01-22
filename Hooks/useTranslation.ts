import { useRouter } from 'next/router';
import { en, es } from 'translation';



export const useTranslations = () => {
    const { locale } = useRouter();
    return locale === 'es' ? es : en;
}