interface MainSubtitleProps {
    subtitle?: string
}

export default function MainSubtitle({ subtitle }: MainSubtitleProps) {
    return (
        <p className='max-w-lg mx-auto mt-10 text-lg text-center text-black opacity-80 font-semibold cursor-default px-2 py-0'>
          {subtitle}
        </p>
    );
}