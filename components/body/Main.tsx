import Link from "next/link";
import React from "react";
import Videos from "./Videos";
import Slider from "../carousel/Slider";
import Sections from "./Sections";
import ReverseSection from "./ReverseSection";

const Main = () => {
    const writeUp = [
        "Barrister Akutah reports to Nigerian Shippers' Council office on 1st November 2023",
        "Barr. Pius actively involved in community service",
    ];
    const videoSource = ["./videos/office.mp4", "./videos/mkd.mp4"];
    const videoStyle = [
        "h-60 bg-[#c3c3c3] rounded-md",
        "md:w-[800px] h-70 m-auto",
    ];
    return (
        <main className="w-[90%] mx-auto md:w-[80%]">
            <div className="my-12 w-full flex justify-center items-center flex-col gap-y-8 md:gap-x-8  md:flex-row">
                {/* ***************** Introduction *************************** */}
                <div className="w-full leading-8 md:w-2/3 md:pr-8">
                    <p className="text-left w-full tracking-wide ">
                        <span className="font-bold">Pius Ukeyima Akutah</span>{" "}
                        is a Nigerian legal practitioner and public servant
                        currently serving as the Executive Secretary/Chief
                        Executive Officer (CEO) of the Nigerian Shippers'
                        Council. He assumed office on October 25, 2023,
                        succeeding Emmanuel Jime, and officially commenced his
                        duties at the Council's headquarters in Lagos on
                        November 1, 2023.
                    </p>
                </div>
                {/* ***************** FIRST DAY AT WORK VIDEO *************************** */}
                <div className="w-full md:w-1/3 ">
                    <Videos
                        vidSrc={videoSource[0]}
                        vidStyle={videoStyle[0]}
                        vidText={writeUp[0]}
                    />
                </div>
            </div>
            <ReverseSection
                title={"Previous Post Held"}
                imgUrl={"/images/hcc-4.jpeg"}
                text={
                    "Before assuming his role at the Nigerian Shippers' Council, Akutah held various positions of increasing responsibility within the Nigerian legal system. He served as an Assistant Director at the Federal Ministry of Justice, Abuja, where he headed the Central Authority Unit of the International Cooperation Department under the Office of The Honourable Attorney-General of the Federation (AGF) and Minister of Justice."
                }
            />

            <div className="mx-auto pt-10 md:hidden">
                <Link
                    href="/contact"
                    className="btn-effect px-4 py-2 text-white text-[24px] bg-bluePrimary  rounded-lg shadow-lg shadow-slate-700/70 hover:bg-blue-300 hover:transition-all "
                >
                    Contact Me
                </Link>
            </div>
            <Slider />
            {/* ***************** FOOD ITEMs DISTRIBUTION VIDEO *************************** */}
            <div className="w-full mt-[7rem]  my-[6rem] ">
                <div className="text-left w-full mb-4 md:px-40">
                    <p className="text-center w-full tracking-wide leading-8 ">
                        Relentless in his community service, Barrister Akutah
                        went all out to make the christmas festive period count
                        for the populace in his community by distributing tones
                        of food items to the people in december 2023.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <Videos
                        vidSrc={videoSource[1]}
                        vidStyle={videoStyle[1]}
                        vidText={writeUp[1]}
                    />
                </div>
            </div>
            {/* ***************** Recognitions *************************** */}
            <Sections
                title={"Recognitions"}
                text={
                    "Akutah is a member of several professional bodies, including the Nigerian Bar Association (NBA). He is an alumnus of prestigious programs such as the US Department of State's International Visitor Leadership Programme (IVLP) and the US International Law Enforcement Academy. He has been honored with various awards for his contributions to public service, including the Presidential Civil Service Merit Award and the National Honours Award as a Member of the Order of the Niger (MON)."
                }
                imgUrl={"/images/img-43.jpeg"}
            />
            {/* ***************** Recognitions *************************** */}
            <ReverseSection
                title={"Legacy"}
                text={
                    "Throughout his career, Akutah has demonstrated a commitment to excellence, professionalism, and international cooperation in the field of law and public service. His contributions to the Nigerian legal system and his efforts to promote maritime security and criminal justice have left a lasting impact on the nation's legal landscape."
                }
                imgUrl={"/images/bg-4.png"}
            />
        </main>
    );
};

export default Main;
