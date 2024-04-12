import ReadMore from "@/components/body/ReadMore";
import Headings from "@/components/body/Sections";
import TextContent from "@/components/body/TextContent";
import React from "react";

function page() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative "
                style={{ backgroundImage: "url(./images/bg-1.jpg)" }}
            >
                <div className="w-full h-full  bg-transGrey absolute top-0 left-0 flex flex-col items-center justify-center">
                    <div className="absolute bottom-5 text-center">
                        <h1 className="text-5xl font-bold py-4 text-yellow-300 text-shadow md:text-8xl">
                            About
                        </h1>
                        <div className="w-10 h-[4px] bg-red-500 mx-auto mb-4 rounded-md"></div>
                        <h3 className="font-bold">Barrister</h3>
                        <h2 className="uppercase text-xl font-bold text-blue-400 text-shadow-2 md:text-3xl">
                            Pius Ukeyima Akutah, mon
                        </h2>
                        <p className="text-slate-500 px-2 text-[12px] md:text-[16px]">
                            Executive Secretary/Chief Executive Officer (CEO) of
                            the Nigerian Shippers' Council
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[95%] md:w-[80%] mx-auto "></div>
            <TextContent
                title={"Background"}
                text={
                    "Barr. Akutah was born on June 7th, 1970 in Ushongo Local Government Area, Benue State, Nigeria"
                }
            />
            <div className="w-full h-[400px] mx-auto md:h-[600px] md:w-[40%]">
                <img
                    src="/images/Pius-Akutah.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <TextContent
                title={"Education"}
                text={
                    "Barr Akutah obtained his Senior School Certificate Exam (SSCE) at Adikpo Comprehensive College, Adikpo - Benue State. He pursued his legal education at the University of Abuja, where he obtained his Bachelor of Laws (LLB) degree in 2006. He later attended the Nigeria Law School in Bwari, Abuja, and was called to the Nigerian Bar as a Barrister at Law (BL) in May 2007. Subsequently, he obtained a Master of Laws (LL.M) degree in Public International Law from Ahmadu Bello University, Zaria, in 2016. Currently, he is pursuing a Ph.D. in International Cooperation in Criminal Matters at Nassarawa State University, Keffi."
                }
            />
            {/* <TextContent
                title={"Professional Experience"}
                text={
                    "Before assuming his role at the Nigerian Shippers' Council, Akutah held various positions of increasing responsibility within the Nigerian legal system. He served as an Assistant Director at the Federal Ministry of Justice, Abuja, where he headed the Central Authority Unit of the International Cooperation Department under the Office of The Honourable Attorney-General of the Federation (AGF) and Minister of Justice. Akutah's expertise in international legal cooperation led him to represent the Nigerian government in several high-profile criminal cases and to participate in the preparation, vetting, and negotiation of bilateral agreements on mutual legal assistance and extradition. Notably, he was involved in a landmark extradition case at the Supreme Court of Nigeria in 2022. Throughout his career, Akutah has been actively engaged in training, career enhancement, and international cooperation initiatives. He has attended numerous workshops, training programs, and conferences both domestically and internationally, focusing on topics such as criminal justice reform, maritime security, and judicial integrity."
                }
            /> */}
            <div className="w-full mx-auto leading-loose">
                <ReadMore
                    title="Professional Experience"
                    summary="Before assuming his role at the Nigerian Shippers' Council, Akutah held various positions of increasing responsibility within the Nigerian legal system. He served as an Assistant Director at the Federal Ministry of Justice, Abuja, where he headed the Central Authority Unit of the International Cooperation Department under the Office of The Honourable Attorney-General of the Federation (AGF) and Minister of Justice. Akutah's expertise in international legal cooperation led him to represent the Nigerian government in several high-profile criminal cases and to participate in the preparation, vetting, and negotiation of bilateral agreements on mutual legal assistance and extradition."
                    fullText="Notably, he was involved in a landmark extradition case at the Supreme Court of Nigeria in 2022. Throughout his career, Akutah has been actively engaged in training, career enhancement, and international cooperation initiatives. He has attended numerous workshops, training programs, and conferences both domestically and internationally, focusing on topics such as criminal justice reform, maritime security, and judicial integrity."
                />
            </div>

            <div className="w-full h-[250px] md:h-[600px]">
                <img
                    src="/images/bg-6.jpeg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <TextContent
                title={"Professional Affiliations and Training"}
                text={
                    "Alumnus of the US Department of States' International Visitor's Leadership Programme (IVLP). Member, Nigerian Bar Association (NBA) Attended numerous training programs and workshops on criminal justice, international cooperation, and legal reforms"
                }
            />
            <TextContent
                title={"Contributions and Recognition"}
                text={
                    "Contributed to drafting committees and represented Nigeria in various legal capacities Recipient of prestigious awards including the National Honours Award (MON) and Presidential Civil Service Merit Award acknowledged for contributions to drafting the African Charter for Maritime Safety and Security"
                }
            />
            <TextContent
                title={"Personal Attributes"}
                text={
                    "Proficient in drafting, negotiation, legal advocacy, and conflict resolution. Possesses strong computer literacy and information technology skills. Hobbies include swimming, reading, making friends, and extensive traveling"
                }
            />
        </>
    );
}

export default page;
