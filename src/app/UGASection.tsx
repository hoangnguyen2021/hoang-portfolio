import React from "react";
import Image from "next/image";
import ugaLogo from "../images/uga.jpg";
import ugaLogo2 from "../images/uga2.png";

type ADCSectionProps = {};

const UGASection: React.FC<ADCSectionProps> = () => {
    return (
        <section>
            <div
                className="relative w-full h-96 bg-gradient-to-r from-uga-red from-20% to-white to-45% grid grid-cols-2 px-20 py-10">
                <Image src={ugaLogo} alt={"University of Georgia"}
                       className="absolute top-0 left-0 w-auto h-full object-cover"/>
                <div className="col-start-2 col-end-3 flex flex-col gap-y-3">
                    <div className="flex justify-between items-center">
                        <Image src={ugaLogo2} alt="" className="h-24 w-auto"/>
                        <div className="text-lg font-normal font-sans">
                            <span className="text-gray-500">Athens, Georgia</span>
                            <span className="text-tiber"> | August 2021 - December 2023</span>
                        </div>
                    </div>
                    <div>
                        <span
                            className="text-uga-red text-lg font-normal font-sans">CS Student, Senior Year</span>
                    </div>
                    <div className="text-black text-md font-normal font-sans">
                        <p>• Relevant coursework: Software Engineering, Data Structure, Algorithms, Database Management.</p>
                        <p>• Work on UGA Pre-Professional Planner that is used by pre-professional students applying to law school and health programs.</p>
                        <p>• Assist the Coordinator of the PPAO to develop an android version of the Professional Dawgs App.</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default UGASection;