import { slideImages } from "@/utils/constants";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {
    prev: any;
    next: any;
    activeImageIndex: any;
};

const Description = ({ prev, next, activeImageIndex }: Props) => {
    return (
        <div className="flex  w-full text-center items-center justify-center relative rounded-bl-3xl rounded-br-3xl">
            {slideImages.map((element, index) => (
                <div
                    className={
                        index === activeImageIndex
                            ? `block w-full h-[25vh] py-3 fade-in ease-in-out md:h-[15vh]`
                            : `hidden`
                    }
                    key={index}
                >
                    <motion.div
                        initial={{
                            opacity: index === activeImageIndex ? 0 : 0.5,
                            scale: index === activeImageIndex ? 0.5 : 0.3,
                        }}
                        animate={{
                            opacity: index === activeImageIndex ? 1 : 0.5,
                            scale: index === activeImageIndex ? 1 : 0.3,
                        }}
                        transition={{
                            ease: "linear",
                            duration: 2,
                            x: { duration: 1 },
                        }}
                        className="w-full"
                    >
                        <p className="text-[14px] px-2 leading-relaxed font-medium text-base tracking-wide h-40 text-gray-600">
                            {element.desc}
                        </p>
                    </motion.div>
                </div>
            ))}
            <div className="w-full absolute -bottom-14 flex justify-center items-center gap-4 ">
                <div
                    onClick={prev}
                    className="w-10 h-10 bg-blue-300 text-white flex items-center justify-center rounded-md cursor-pointer hover:bg-bluePrimary"
                >
                    <FaChevronLeft />
                </div>
                <div
                    onClick={next}
                    className="w-10 h-10 bg-blue-300 text-white flex items-center justify-center rounded-md cursor-pointer hover:bg-bluePrimary"
                >
                    <FaChevronRight />
                </div>
            </div>
        </div>
    );
};

export default Description;
