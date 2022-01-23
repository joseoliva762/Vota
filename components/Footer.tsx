// import { useTranslations } from 'hooks/useTranslation';

export default function Footer() {
    // const { DEVELOPED_BY } = useTranslations();
    const DEVELOPED_BY = 'Desarrollado por'
    return (
        <footer className="flex flex-col items-center justify-center w-full">
            <img src="images/livcode.jpg" alt="Livcodes" className='w-20 rounded-full border-2 border-black' />
            <div className="px-8 pt-0 pb-12 w-full flex justify-center items-center gap-1 text-lg text-black opacity-80 font-semibold cursor-default">
                {DEVELOPED_BY}
                <a
                    className="opacity-100 font-bold hover:underline"
                    href="https://github.com/joseoliva762"
                    target="_blank"
                    rel="noreferrer">
                    {'Jose Oliva'}
                </a>
            </div>
        </footer>
    );
}