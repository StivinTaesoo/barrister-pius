export default function HeroSection() {
    return (
        <div
            className="w-full h-[600px] bg-cover bg-center relative "
            style={{ backgroundImage: "url(./images/bg-2.png)" }}
        >
            <div className="w-full h-full  bg-transGrey absolute top-0 left-0 flex flex-col items-center justify-center">
                <div className="absolute bottom-5 text-center">
                    <h3 className="font-bold">Barrister</h3>
                    <h2 className="uppercase text-xl font-bold text-blue-400 text-shadow-2 md:text-3xl">
                        Pius Ukeyima Akutah, mon
                    </h2>
                    <p className="text-slate-500 px-2 text-[12px] md:text-[16px]">
                        Executive Secretary/Chief Executive Officer (CEO) of the
                        Nigerian Shippers' Council
                    </p>
                </div>
            </div>
        </div>
    );
}
