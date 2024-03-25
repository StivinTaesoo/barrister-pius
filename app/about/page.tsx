import Headings from "@/components/body/Sections";
import React from "react";

function page() {
    return (
        <div className="w-[95%] md:w-[80%] mx-auto ">
            <h1 className="uppercase text-3xl">About</h1>
            <div className="w-full md:w-1/2 text-left ">
                <input id="check" type="checkbox " />
                <Headings text={"Previous Post Held"} />

                <p className="text-left w-full tracking-wide leading-8 ">
                    Before assuming his role at the Nigerian Shippers' Council,
                    Akutah held various positions of increasing responsibility
                    within the Nigerian legal system.
                </p>
                <div className="content">
                    <p>
                        He served as an Assistant Director at the Federal
                        Ministry of Justice, Abuja, where he headed the Central
                        Authority Unit of the International Cooperation
                        Department under the Office of The Honourable
                        Attorney-General of the Federation (AGF) and Minister of
                        Justice.
                    </p>
                    <label htmlFor="check">show less</label>
                </div>
                <label htmlFor="check">read more</label>
            </div>
        </div>
    );
}

export default page;
