import Image from "next/image";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="text-center relative w-full">
            <HeroSection />
            <main className="w-[90%] mx-auto my-12 flex justify-center items-center flex-col gap-y-8 gap-x-8 md:w-[80%] md:flex-row">
                <p className="text-left w-full  leading-8 lg:w-2/3 lg:pr-8">
                    Barrister Pius Ukeyima Akutah is the Executive Secretary/
                    Chief Executive Officer (CEO), Nigerian Shippers' Council.
                    He was appointed to the headship of the Council on 25th
                    October, 2023, and assumed duties at its Lagos Headquarters
                    on 1st November, 2023. He came to the job as Assistant
                    Director at the Federal Ministry of Justice, Abuja and Head
                    of the Central Authority Unit of the International
                    Cooperation Department, Office of The Honourable
                    Attorney-General of the Federation (AGF) and Minister of
                    Justice
                </p>
                <div className="w-full lg:w-1/3  ">
                    <div className="h-60 bg-[#c3c3c3]">
                        <video
                            autoPlay
                            controls
                            muted
                            loop
                            className="w-full h-full"
                        >
                            <source src="/videos/office.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <p className="italic">
                        Barrister Akutah reports to Nigerian Shippers' Council
                        office on 1st Noveember 2023
                    </p>
                </div>
            </main>
        </div>
    );
}
