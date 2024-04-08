import React from "react";

type Props = {
    title: any;
    text: any;
};

const TextContent = ({ title, text }: Props) => {
    return (
        <div className="my-12 px-2 w-full flex justify-center items-center flex-col gap-y-8 md:gap-x-8  md:flex-row">
            <div className="w-full leading-8 md:w-2/3">
                <h2 className="text-2xl text-left text-white bg-blue-300 mb-2 px-2 py-4 rounded-r-full">
                    {title}
                </h2>

                <p className="text-left w-full tracking-wide ">{text}</p>
            </div>
            {/* ***************** FIRST DAY AT WORK VIDEO *************************** */}
        </div>
    );
};

export default TextContent;
