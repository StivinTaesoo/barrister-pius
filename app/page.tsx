import Image from "next/image";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="text-center relative">
            <HeroSection />
            <main className="w-[90%] mx-auto flex justify-center items-center flex-col md:w-[80%] md:flex-row">
                <p className="text-left ">
                    Barrister Pius Ukeyima Akutah is the Executive Secretary/
                    Chief Executive Officer (CEO), Nigerian Shippers' Council.
                    He was appointed to the headship of the Council on 25th
                    October, 2023, and assumed duties at its Lagos Headquarters
                    on 1st November, 2023.
                </p>
            </main>
            <h1>Welcome to my bio page</h1>
        </div>
    );
}
