import React from "react";

type Props = {
    title: any;
    text: any;
    imgUrl: any;
};

const ReverseSection = ({ title, text, imgUrl }: Props) => {
    return (
        <div className="w-full flex flex-col-reverse items-center justify-center gap-10 md:flex-row md:my-[7rem]">
            <div className="w-full md:w-1/2">
                <img
                    src={imgUrl}
                    alt=""
                    className="w-full rounded-md shadow-xl transition-all hover:scale-110"
                />
            </div>
            <div className="w-full md:w-1/2 text-left ">
                <div className="text-left w-full ">
                    <h2 className="text-2xl text-left text-white bg-blue-300 px-2 mb-2 py-4 rounded-r-full">
                        {title}
                    </h2>
                    <p className=" tracking-wide leading-8 ">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default ReverseSection;
