import Image from "next/image";
import HeroSection from "../components/Hero";
import Slider from "@/components/Slider";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="text-center relative w-full">
            <HeroSection />
            <main className="w-[90%] mx-auto my-12 flex justify-center items-center flex-col gap-y-8 md:gap-x-8 md:w-[80%] md:flex-row">
                <p className="text-left w-full tracking-wide leading-8 md:w-2/3 md:pr-8">
                    Pius Ukeyima Akutah (born June 7, 1970) is a Nigerian legal
                    practitioner and public servant currently serving as the
                    Executive Secretary/Chief Executive Officer (CEO) of the
                    Nigerian Shippers' Council. He assumed office on October 25,
                    2023, succeeding Emmanuel Jime, and officially commenced his
                    duties at the Council's headquarters in Lagos on November 1,
                    2023.
                </p>

                <div className="w-full md:w-1/3  ">
                    <div className="h-60 bg-[#c3c3c3]">
                        <video
                            autoPlay
                            controls
                            muted
                            loop
                            className="w-full h-full"
                        >
                            <source
                                src="./videos/office.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>

                    <p className="italic">
                        Barrister Akutah reports to Nigerian Shippers' Council
                        office on 1st November 2023
                    </p>
                </div>
            </main>
            <Slider />
        </div>
    );
}
