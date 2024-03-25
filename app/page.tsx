import Image from "next/image";
import HeroSection from "../components/body/Hero";
import Slider from "@/components/carousel/Slider";
import { motion } from "framer-motion";
import Main from "@/components/body/Main";
import Videos from "@/components/body/Videos";

export default function Home() {
    return (
        <div className="text-center relative w-full">
            <HeroSection />
            <Main />
        </div>
    );
}
