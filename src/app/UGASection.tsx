import React from "react";
import Image from "next/image";
import ugaLogo from "../../public/images/uga.jpg";
import ugaLogo2 from "../../public/images/uga2.png";

type ADCSectionProps = {};

const UGASection: React.FC<ADCSectionProps> = () => {
    return (
        <section>
            <div className="relative w-full xl:h-96 flex flex-col xl:flex-row items-center">
                <Image src={ugaLogo} alt={"University of Georgia"} className="w-auto h-24 md:h-36 xl:h-96 object-cover"/>
                <div className="flex flex-col gap-y-3 w-full px-10 sm:px-20 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <Image src={ugaLogo2} alt="" className="h-20 md:h-24 w-auto"/>
                        <div className="text-sm md:text-base lg:text-lg font-normal font-sans">
                            <span className="text-gray-500">Athens, Georgia</span>
                            <span className="text-tiber"> | August 2021 - December 2023</span>
                        </div>
                    </div>
                    <div>
                        <span
                            className="text-uga-red text-sm md:text-base lg:text-lg font-normal font-sans">CS Student, Senior Year</span>
                    </div>
                    <div className="text-black text-sm md:text-base lg:text-md font-normal font-sans">
                        <p>• Relevant coursework: Software Engineering, Data Structure, Algorithms, Database
                            Management.</p>
                        <p>• Work on UGA Pre-Professional Planner that is used by pre-professional students applying to
                            law school and health programs.</p>
                        <p>• Assist the Coordinator of the PPAO to develop an android version of the Professional Dawgs
                            App.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UGASection;