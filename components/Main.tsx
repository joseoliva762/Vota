import { ReactNode } from "react";

interface MainProps {
    children: ReactNode
}

export default function Main ({ children }: MainProps) {
    return (
        <>
            <main className='mt-16 w-full max-w-4xl md:mt-28'>
                { children }
            </main>
        </>
    );
}