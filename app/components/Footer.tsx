import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="w-full py-12 bg-bluePrimary flex flex-col items-center justify-center text-center gap-y-10  md:flex-row md:gap-x-32">
            <div className="text-[#C3C3C3]">
                <p>&copy;2024 Barrister Pius Akutah</p>
                <p>emailaddress@gmail.com</p>
                <p>+2348122344556</p>
            </div>
            <div className="text-white">
                <p className="font-semibold text-[24px]">Quick Links</p>
                <ul className="flex items-center justify-center gap-x-8 opacity-none text-[22px] text-white font-normal ">
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
                </ul>
            </div>
            <div className="text-slate-300">
                <Link
                    href="/contact"
                    className="px-4 py-2 text-black text-[24px] font-semibold rounded-lg shadow-lg shadow-slate-700/70 bg-[#C3C3C3]"
                >
                    Contact Me
                </Link>
            </div>
        </div>
    );
};

export default Footer;
