import { ReactNode } from "react";

interface VotingBoxProps {
    children: ReactNode
}

export default function VotingBox ({ children }: VotingBoxProps) {
    return (
        <>
            <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
                {children}
            </ul>
        </>
    );
}