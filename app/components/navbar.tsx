import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-center bg-grey  py-4 bg-opacity-50  fixed top-4 z-20">
            <div className="flex items-center justify-center gap-x-8 opacity-none text-black font-semibold ">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/gallery">Gallery</Link>
                <Link
                    href="/contact"
                    className="px-4 py-2 text-white bg-bluePrimary rounded-lg shadow-2xl"
                >
                    Contact Me
                </Link>
            </div>
        </div>
    );
};
