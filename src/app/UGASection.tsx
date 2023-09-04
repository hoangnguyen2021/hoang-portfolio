import React from "react";
import Image from "next/image";
import ugaLogo from "../../public/images/uga.jpg";
import ugaLogo2 from "../../public/images/uga2.png";

type ADCSectionProps = {};

const UGASection: React.FC<ADCSectionProps> = () => {
    return (
        <section>
            <div className="relative w-full xl:h-96 flex flex-col xl:flex-row items-center">
                <Image src={ugaLogo} alt={"University of Georgia"}
                       className="w-auto h-16 sm:h-24 md:h-36 xl:h-96 object-cover"/>
                <div className="flex flex-col gap-y-3 w-full px-5 sm:px-10 md:px-20 py-5 sm:py-10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <Image src={ugaLogo2} alt="" className="h-16 sm:h-20 md:h-24 w-auto"/>
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-normal font-sans">
                            <span className="text-gray-500">Athens, Georgia</span>
                            <span className="text-tiber"> | August 2021 - December 2023</span>
                        </div>
                    </div>
                    <div>
                        <span
                            className="text-uga-red text-xs sm:text-sm md:text-base lg:text-lg font-normal font-sans">CS Student, Senior Year</span>
                    </div>
                    <div className="text-black text-xs sm:text-sm md:text-base lg:text-md font-normal font-sans">
                        <p>• Relevant coursework: Software Engineering, Data Structure, Algorithms, Database
                            Management.</p>
                        <p>• Developed the UGA Pre-Professional Planner app, empowering pre-health and pre-law students
                            to effortlessly manage and document their co-curricular experiences throughout their
                            application cycle.</p>
                        <p>• Crafted the creation of comprehensive development, staging, and production workflows
                            utilizing CI/CD pipelines through Bitrise. This automation seamlessly facilitated app
                            distribution to the testing team and the streamlined deployment of the app on Google
                            Play.</p>
                        <p className="italic">Play Store link: <a className="text-uga-red"
                                                                  href="https://play.google.com/store/apps/details?id=edu.uga.ppaobulldawgapp">https://play.google.com/store/apps/details?id=edu.uga.ppaobulldawgapp</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UGASection;