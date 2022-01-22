interface SectionTitleProps {
    children?: string
}

export default function SectionTitle({ children }: SectionTitleProps) {
    return <h2 className='mb-6 text-3xl font-bold text-center cursor-default md:text-4xl'>{children}</h2>
}