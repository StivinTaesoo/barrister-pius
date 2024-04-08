import React from "react";

function page() {
    return (
        <div>
            {/* Hero Section */}
            <div
                className="w-full h-[500px] bg-cover bg-center relative "
                style={{ backgroundImage: "url(./images/hcc-4.jpeg)" }}
            >
                <div className="w-full h-full  bg-transGrey absolute top-0 left-0 flex flex-col items-center justify-center">
                    <div className="absolute bottom-5 text-center">
                        <h1 className="text-5xl font-bold py-4 text-yellow-300 text-shadow md:text-8xl">
                            Contact
                        </h1>
                        <div className="w-10 h-[4px] bg-red-500 mx-auto mb-4 rounded-md"></div>
                        <h3 className="font-bold">Barrister</h3>
                        <h2 className="uppercase text-xl font-bold text-blue-400 text-shadow-2 md:text-3xl">
                            Pius Ukeyima Akutah, mon
                        </h2>
                        <p className="text-slate-500 px-2 text-[12px] md:text-[16px]">
                            Executive Secretary/Chief Executive Officer (CEO) of
                            the Nigerian Shippers' Council
                        </p>
                    </div>
                </div>
            </div>
            {/* Contact Form Session */}
            <div className="w-full bg-[#ededee] py-[1rem] my-0">
                <div className="w-[98%] mx-auto my-[6rem] bg-[#ededee] border border-1 border-slate-400 rounded-lg py-[5rem] px-2 md:w-[80%]">
                    <h1 className="text-3xl font-bold text-center">
                        Contact Me
                    </h1>
                    <form
                        action=""
                        className="w-full  mx-auto mt-[2rem] flex flex-col justify-center md:w-[50%]"
                    >
                        <div className="w-full flex flex-col justify-center gap-6 md:flex-row">
                            <div className="w-full flex flex-col md:1/2">
                                <label htmlFor="firstName">First name</label>
                                <input
                                    type="text"
                                    className=" rounded-md bg-transparent border border-1 border-slate-600 p-2"
                                />
                            </div>
                            <div className="w-full flex flex-col md:1/2">
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
            </div>
        </div>
    );
}

export default page;
