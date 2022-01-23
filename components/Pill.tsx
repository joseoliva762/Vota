import { ReactElement } from 'react';
import { Loading } from "components/SVGIcons";

interface PillProps {
    image?: string,
    title?: string
    svg?: ReactElement
}

const PillImage = ({image, title}: PillProps) => {
    return <img className='object-contain w-10 h-10' alt={title} src={image} />
}

const PillLogo = ({image, title, svg}: PillProps) => {
    if (svg) return svg;
    if (image) return <PillImage title={title} image={image} />
    return <Loading className="w-6 h-6 mr-1 animate-spin place-self-center" />
}
  
export const Pill = ({image, title, svg}: PillProps) => (
    <button className='pointer group outline-none'>
        <div className='flex flex-row items-center gap-2 px-7 py-3 border border-gray-200 rounded-xl hover:bg-gray-200'>
            <figure className='flex object-contain w-10 h-10'>
                <PillLogo image={image} title={title} svg={svg} />
            </figure>
            <div className='text-xl font-semibold text-gray-700 md:text-2xl'>
                {title}
            </div>
        </div>
    </button>
);