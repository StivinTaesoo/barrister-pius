import React from "react";

type Props = {
    title: any;
    text: any;
    imgUrl: any;
};

const Sections = ({ title, text, imgUrl }: Props) => {
    return (
        <div className="my-12 w-full flex justify-center items-center flex-col gap-y-8 md:gap-x-8  md:flex-row">
            <div className="w-full leading-8 md:w-2/3 md:pr-8">
                <div className="w-20 h-2 bg-[#e6e2d5] rounded-tr-md md:w-[200px]"></div>

                <h2 className="text-2xl text-left text-white bg-blue-300 px-2 mb-2 py-4 rounded-r-full">
                    {title}
                </h2>

                <p className="text-left w-full tracking-wide ">{text}</p>
            </div>
            {/* ***************** FIRST DAY AT WORK VIDEO *************************** */}
            <div className="w-full md:w-1/2">
                <img
                    src={imgUrl}
                    alt=""
                    className="w-full rounded-md shadow-xl transition-all hover:scale-110"
                />
            </div>
        </div>
    );
};

export default Sections;
