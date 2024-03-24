import React from "react";

type Props = {
    text: any;
};

const Headings = ({ text }: Props) => {
    return (
        <div className="pb-4">
            <h2 className="text-2xl text-left bg-blue-300 px-2 py-4 rounded-r-full">
                {text}
            </h2>
        </div>
    );
};

export default Headings;
