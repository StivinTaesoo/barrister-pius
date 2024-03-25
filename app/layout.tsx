import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Barrister Pius Akutah",
    description: "Barrister Pius Ukeyima Akutah bio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Navbar />
            <body className={`${inter.className} relative`}>{children}</body>
            <Footer />
        </html>
    );
}
