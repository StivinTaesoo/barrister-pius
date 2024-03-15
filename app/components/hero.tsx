import Image from "next/image";

export default function HeroSection() {
    return (
        <div
            className="w-full h-[800px] bg-cover bg-center relative"
            style={{ backgroundImage: "url(/images/bg-2.png)" }}
        >
            <div className="w-full h-full bg-transGrey absolute top-0 left-0"></div>
            hero
        </div>
    );
}
