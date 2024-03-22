import Image from "next/image";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="text-center relative">
            <HeroSection />
            <h1>Welcome to my bio page</h1>
        </div>
    );
}
