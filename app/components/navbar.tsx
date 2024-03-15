import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="nav-container w-full flex items-center justify-center bg-grey backdrop-blur-sm  py-4 bg-opacity-10  fixed top-4 z-20">
            <ul className="flex items-center justify-center gap-x-8 opacity-none text-[22px] text-black font-semibold ">
                <li>
                    <Link href="/" className="relative">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/gallery">Gallery</Link>
                </li>

                <Link
                    href="/contact"
                    className="px-4 py-2 text-white text-[24px] bg-bluePrimary rounded-lg shadow-lg shadow-slate-700/70 hover:bg-blue-300"
                >
                    Contact Me
                </Link>
            </ul>
        </div>
    );
};
