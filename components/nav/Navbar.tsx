"use client";
import Link from "next/link";
import { useState } from "react";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <div className="hidden nav-container w-full  items-center justify-center bg-grey backdrop-blur-sm  py-4 bg-opacity-10 fixed top-2 z-20 md:flex">
                <ul className="flex items-center justify-center gap-x-8 opacity-none text-[22px] text-black font-semibold ">
                    <li>
                        <Link href="/" className="hover:text-[#9D9BA7]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-[#9D9BA7]">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery" className="hover:text-[#9D9BA7]">
                            Gallery
                        </Link>
                    </li>

                    <Link
                        href="/contact"
                        className="btn-effect px-4 py-2 text-white text-[24px] bg-bluePrimary  rounded-lg shadow-lg shadow-slate-700/70 hover:bg-blue-300 hover:transition-all "
                    >
                        Contact Me
                    </Link>
                </ul>
            </div>
            {/* Mobile Navbar */}
            <div className="mobile-menu w-full flex items-center justify-end bg-grey backdrop-blur-sm py-6 bg-opacity-10 fixed -top-2 z-20 md:hidden">
                <RiMenu4Fill
                    onClick={handleClick}
                    className="mr-4 text-[20px] text-[#1F75FE] font-bold"
                />
                <ul
                    className={
                        click
                            ? "w-full h-[50vh] absolute top-0 flex flex-col items-left px-4 py-6 justify-center gap-y-4 bg-white text-[22px] text-black font-bold transition-transorm ease-linear h-0 w-0 delay-1000 duration-1000 "
                            : "hidden"
                    }
                >
                    <RiCloseFill
                        className="absolute top-6 right-6"
                        onClick={closeMobileMenu}
                    />
                    <Link
                        href="/"
                        className="relative"
                        onClick={closeMobileMenu}
                    >
                        <li>Home</li>
                    </Link>
                    <Link
                        href="/"
                        className="relative"
                        onClick={closeMobileMenu}
                    >
                        <li>About</li>
                    </Link>
                    <Link
                        href="/"
                        className="relative"
                        onClick={closeMobileMenu}
                    >
                        <li>Gallery</li>
                    </Link>

                    <Link
                        href="/contact"
                        className="px-4 py-2 mt-2 text-white text-[24px] bg-bluePrimary  rounded-lg shadow-lg shadow-slate-700/70 hover:bg-blue-300 hover:transition-all"
                        onClick={closeMobileMenu}
                    >
                        Contact Me
                    </Link>
                </ul>
            </div>
        </>
    );
};
