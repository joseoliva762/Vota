interface MainTitleProps {
    title?: string
}

export default function MainTitle({ title }: MainTitleProps) {
    return (
        <h1 className='font-bold text-center text-black text-6xl md:text-8xl cursor-default px-2 py-0'>
          {title}
        </h1>
    );
}