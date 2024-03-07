import Link from "next/link";
import React from "react";

export const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-center bg-grey  py-8 opacity-30 bg-blend-multiply">
            <div className="flex items-center justify-center gap-x-4 opacity-100 text-black ">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact Me</Link>
            </div>
        </div>
    );
};
