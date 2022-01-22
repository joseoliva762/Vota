import { NavUserOutlet } from "components/NavUserOutlet";

export default function Header () {
    return (
        <>
            <header className="bg-js z-20 flex justify-between w-full max-w-4xl mx-auto px-4 py-2 items-center sticky top-0 cursor-default border-b-0 border-black md:border-b-2">
                <h1 className="text-xl font-bold">🗳️ Vota.Dev</h1>
                <div>
                    <NavUserOutlet />
                </div>
            </header>
        </>
    );
}