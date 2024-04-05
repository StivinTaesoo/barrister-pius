import Headings from "@/components/body/Sections";
import TextContent from "@/components/body/TextContent";
import React from "react";

function page() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="w-full h-[500px] bg-cover bg-center relative "
                style={{ backgroundImage: "url(./images/bg-1.jpg)" }}
            >
                <div className="w-full h-full  bg-transGrey absolute top-0 left-0 flex flex-col items-center justify-center">
                    <div className="absolute bottom-5 text-center">
                        <h1 className="text-8xl font-bold py-4 text-yellow-50 text-shadow">
                            About
                        </h1>
                        <h2 className="uppercase text-xl font-bold text-blue-400 text-shadow-2">
                            Barrister Pius Ukeyima Akutah, mon
                        </h2>
                        <p className="text-slate-500">
                            Executive Secretary/Chief Executive Officer (CEO) of
                            the Nigerian Shippers' Council
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[95%] md:w-[80%] mx-auto "></div>;
            <TextContent
                title={"Background"}
                text={
                    "Barr. Akutah was born on June 7th, 1970 in Ushongo Local Government Area, Benue State, Nigeria"
                }
            />
            <TextContent
                title={"Education"}
                text={
                    "Barr Akutah obtained his Senior School Certificate Exam (SSCE) at Adikpo Comprehensive College, Adikpo - Benue State. He pursued his legal education at the University of Abuja, where he obtained his Bachelor of Laws (LLB) degree in 2006. He later attended the Nigeria Law School in Bwari, Abuja, and was called to the Nigerian Bar as a Barrister at Law (BL) in May 2007. Subsequently, he obtained a Master of Laws (LL.M) degree in Public International Law from Ahmadu Bello University, Zaria, in 2016. Currently, he is pursuing a Ph.D. in International Cooperation in Criminal Matters at Nassarawa State University, Keffi."
                }
            />
            <TextContent
                title={"Professional Experience"}
                text={
                    "Before assuming his role at the Nigerian Shippers' Council, Akutah held various positions of increasing responsibility within the Nigerian legal system. He served as an Assistant Director at the Federal Ministry of Justice, Abuja, where he headed the Central Authority Unit of the International Cooperation Department under the Office of The Honourable Attorney-General of the Federation (AGF) and Minister of Justice. Akutah's expertise in international legal cooperation led him to represent the Nigerian government in several high-profile criminal cases and to participate in the preparation, vetting, and negotiation of bilateral agreements on mutual legal assistance and extradition. Notably, he was involved in a landmark extradition case at the Supreme Court of Nigeria in 2022. Throughout his career, Akutah has been actively engaged in training, career enhancement, and international cooperation initiatives. He has attended numerous workshops, training programs, and conferences both domestically and internationally, focusing on topics such as criminal justice reform, maritime security, and judicial integrity."
                }
            />
        </>
    );
}

export default page;
