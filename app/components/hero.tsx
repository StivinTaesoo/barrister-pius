import Image from "next/image";

export default function HeroSection() {
    return (
        <div
            className="w-full h-[700px] bg-cover bg-center relative "
            style={{ backgroundImage: "url(/images/bg-2.png)" }}
        >
            <div className="w-full h-full  bg-transGrey absolute top-0 left-0 flex flex-col items-center justify-center">
                <div className="absolute bottom-5 text-center">
                    <h1 className="uppercase text-3xl font-bold">
                        Barrister Pius Ukeyima Akutah, mon
                    </h1>
                    <p>
                        Executive Secretary/Chief Executive Officer (CEO) of the
                        Nigerian Shippers' Council
                    </p>
                </div>
            </div>
            hero
        </div>
    );
}
