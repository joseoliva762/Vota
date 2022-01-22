import Image from "next/image";
import { NavUserOutlet } from "components/NavUserOutlet";
import logo from 'public/icons/logo.svg';

export default function Header () {
    return (
        <>
            <header className="bg-js z-20 flex justify-between w-full max-w-4xl mx-auto px-4 py-2 items-center sticky top-0 cursor-default border-b-0 border-black md:border-b-2">
                {/* <h1 className="text-xl font-bold">🗳️ Vota.Dev</h1> */}
                <Image src={logo} height={40} width={115}/>
                <div>
                    <NavUserOutlet />
                </div>
            </header>
        </>
    );
}