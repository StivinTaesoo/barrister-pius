import React from "react";

type Props = {
    summary: string;
    fullText: string;
    title: string;
};

function ReadMore({ summary, fullText, title }: Props) {
    return (
        <>
            
            <div className="my-12 px-2 w-full flex justify-center items-center flex-col gap-y-8 md:gap-x-8  md:flex-row">
                <div className="w-full leading-8 md:w-2/3">
                    <div className="w-20 h-2 bg-[#e6e2d5] rounded-tr-md md:w-[200px]"></div>

                    <h2 className="text-2xl text-left text-white bg-blue-300 mb-2 px-2 py-4 rounded-r-full">
                        {title}
                    </h2>

                    <div className="text-left w-full tracking-wide ">
                        <input id="ch" type="checkbox" />
                        <p>{summary}</p>
                        <div className="content">
                            <p>{fullText}</p>
                            <label
                                htmlFor="ch"
                                className="inline-block bg-blue-200 px-4 py-2 mt-4 rounded-md cursor-pointer"
                            >
                                Show less
                            </label>
                        </div>

                        <label
                            htmlFor="ch"
                            className="inline-block bg-blue-200 px-4 py-2 mt-4 rounded-md cursor-pointer"
                        >
                            Read more
                        </label>
                    </div>
                </div>
                {/* ***************** FIRST DAY AT WORK VIDEO *************************** */}
            </div>
        </>
    );
}

export default ReadMore;
