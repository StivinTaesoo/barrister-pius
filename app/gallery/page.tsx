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
                            Gallery
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
            <div className="w-[80%] mx-auto my-[6rem] bg-[#A6A6A630] rounded-lg py-[5rem]">
                <h1 className="text-3xl font-bold text-center">Contact Me</h1>
                <form
                    action=""
                    className="w-[50%] mx-auto mt-[2rem] flex flex-col justify-center"
                >
                    <div className="w-full flex justify-center gap-x-4">
                        <div className="w-full flex flex-col">
                            <label htmlFor="firstName">First name</label>
                            <input
                                type="text"
                                className=" rounded-md bg-transparent border border-1 border-slate-600 p-2"
                            />
                        </div>
                        <div className="w-full flex flex-col">
                            <label htmlFor="lastName">Last name</label>
                            <input
                                type="text"
                                className=" rounded-md bg-transparent border border-1 border-slate-600 p-2"
                            />
                        </div>
                    </div>
                    <div className="w-full mx-auto mt-6 flex flex-col justify-center">
                        <div className="flex flex-col ">
                            <label htmlFor="email ">Email</label>
                            <input
                                type="text"
                                className="rounded-md bg-transparent border border-1 border-slate-600 p-2"
                            />
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="email ">Message</label>
                            <textarea className="rounded-md bg-transparent border border-1 border-slate-600 p-2" />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#1F75FE] mt-6 text-white py-2 rounded-md transition-all hover:bg-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default page;
