import Image from "next/image";
import { Navbar } from "./components/navbar";
import HeroSection from "./components/hero";

export default function Home() {
    return (
        <div className="text-center relative">
            <Navbar />
            <HeroSection />
            <h1>Welcome to my bio page</h1>
        </div>
    );
}
