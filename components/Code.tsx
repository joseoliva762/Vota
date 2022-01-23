import Image from 'next/image';
import { Loading } from 'components/SVGIcons';

interface CodeProps {
    title: string; 
    image: string;
}

const CodeBody = ({ title, image }: CodeProps) => (
    <button className='pointer group outline-none'>
        <div className='flex flex-col items-center gap-2 px-7 py-3 rounded-xl hover:bg-gray-200'>
            <figure className='relative flex object-contain w-full max-w-sm overflow-hidden rounded-xl'>
            {/* <Image
                className='object-contain w-full'
                alt={title}
                src={image ?? ''}
                layout='fill'
            /> */}
                <img src={image ?? ''} alt={title} className='object-contain w-full' />
            </figure>
            <div className='text-xl font-semibold text-gray-700 md:text-2xl'>
                {title}
            </div>
        </div>
    </button>
);
  
export const Code = ({ title, image }: CodeProps) => (
    image 
        ? <CodeBody title={title} image={image} />
        : <Loading className='w-6 h-6 mr-1 animate-spin place-self-center' />
);