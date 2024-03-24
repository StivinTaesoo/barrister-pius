"use client";
import { slideImages } from "@/utils/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Description from "./Description";

function Slider() {
    const [activeImage, setActiveImage] = useState(0);

    const next = () => {
        activeImage === slideImages.length - 1
            ? setActiveImage(0)
            : setActiveImage(activeImage + 1);
    };
    const prev = () => {
        activeImage === 0
            ? setActiveImage(slideImages.length - 1)
            : setActiveImage(activeImage - 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            next();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImage]);

    return (
        <div className="grid place-items-center grid-row-2 w-full mx-auto my-20 md:w-[80%] shadow-2xl rounded-2xl">
            <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl">
                {slideImages.map((img, index) => (
                    <div
                        className={
                            index === activeImage
                                ? `block w-full h-[30vh] md:h-[70vh] object-contain object-center transition-all duration-500 ease-in-out`
                                : `hidden`
                        }
                        key={index}
                    >
                        <Image
                            src={img.src}
                            alt={img.desc}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl"
                        />
                    </div>
                ))}
            </div>
            <Description
                next={next}
                prev={prev}
                activeImageIndex={activeImage}
            />
        </div>
    );
}

export default Slider;
