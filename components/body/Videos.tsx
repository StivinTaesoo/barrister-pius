import React from "react";

type Props = {
    vidSrc: any;
    vidStyle: any;
    vidText: any;
};
// "h-60 bg-[#c3c3c3] rounded-md"
// "./videos/office.mp4"
// Barrister Akutah reports to Nigerian Shippers' Council office on 1st November 2023

const Videos = ({ vidSrc, vidStyle, vidText }: Props) => {
    return (
        <div>
            <div className={vidStyle}>
                <video autoPlay controls muted loop className="w-full h-full">
                    <source src={vidSrc} type="video/mp4" />
                </video>
            </div>

            <p className="mt-2">
                <em>{vidText}</em>
            </p>
        </div>
    );
};

export default Videos;
