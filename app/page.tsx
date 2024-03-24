import Image from "next/image";
import HeroSection from "../components/Hero";
import Slider from "@/components/Slider";
import { motion } from "framer-motion";
import Main from "@/components/Main";
import Videos from "@/components/Videos";

export default function Home() {
    return (
        <div className="text-center relative w-full">
            <HeroSection />
            <Main />
        </div>
    );
}
