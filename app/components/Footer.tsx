import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="w-full py-10 bg-bluePrimary flex items-center justify-center text-center gap-x-24">
            <div className="text-slate-300">
                <p>&copy;2024 Barrister Pius Akutah</p>
                <p>emailaddress@gmail.com</p>
                <p>+2348122344556</p>
            </div>
            <div className="text-white">
                <p className="font-semibold">Quick Links</p>
                <ul className="flex items-center justify-center gap-x-8 opacity-none text-[16px] text-white font-normal ">
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
                    className="px-4 py-2 text-black text-[24px] rounded-lg shadow-lg shadow-slate-700/70 bg-blue-300"
                >
                    Contact Me
                </Link>
            </div>
        </div>
    );
};

export default Footer;
