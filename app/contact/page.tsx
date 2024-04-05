import React from "react";

function page() {
    return (
        <>
            <div
                className="w-full h-[500px] bg-cover bg-center relative "
                style={{ backgroundImage: "url(./images/hcc-4.jpeg)" }}
            >
                <div className="w-full h-full  bg-transGrey absolute top-0 left-0 flex flex-col items-center justify-center">
                    <div className="absolute bottom-5 text-center">
                        <h1 className="text-5xl font-bold py-4 text-yellow-50 text-shadow md:text-8xl">
                            Contact
                        </h1>
                        <div className="w-10 h-[4px] bg-red-500 mx-auto mb-4 rounded-md"></div>
                        <h2 className="uppercase text-xl font-bold text-blue-400 text-shadow-2 md:text-3xl">
                            Barrister Pius Ukeyima Akutah, mon
                        </h2>
                        <p className="text-slate-500 px-2 text-[12px] md:text-[16px]">
                            Executive Secretary/Chief Executive Officer (CEO) of
                            the Nigerian Shippers' Council
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] h-[700px] mx-auto my-[6rem] border-1 bg-[#A6A6A630] rounded-lg"></div>
        </>
    );
}

export default page;
