import React from "react";
import Image from "next/image";
import wapoLogo from "../images/wapo1.png";
import wapoName from "../images/wapo2.svg"

type ADCSectionProps = {};

const WapoSection: React.FC<ADCSectionProps> = () => {
    return (
        <section>
            <div
                className="relative w-full h-96 grid grid-cols-3 px-20 py-10">
                <Image src={wapoLogo} alt={"The Washington Post"}
                       className="absolute top-0 right-0 w-auto h-full object-cover"/>
                <div className="col-start-1 col-end-3 flex flex-col justify-center gap-y-3">
                    <div className="flex justify-between items-center">
                        <Image src={wapoName} alt="" className="w-auto h-14"/>
                        <div className="text-lg font-normal font-sans">
                            <span className="text-gray-500">Washington, D.C.</span>
                            <span className="text-tiber"> | May 2022 - December 2022</span>
                        </div>
                    </div>
                    <div>
                        <span
                            className="text-gray-500 text-lg font-normal font-sans">Software Engineer Intern, Android</span>
                    </div>
                    <div className="text-black text-md font-normal font-sans">
                        <p>• Build Washington Post Wear App on Wear OS that features browsing articles, playing
                            text-to-speech and podcasts, paywall, push notifications, watch face complications, and
                            mobile-wear communication.</p>
                        <p>• Contribute to the continued development of the Washington Post app on Android and Amazon
                            devices.</p>
                        <p>• Implement video countdown timer and auto-advancing for the app’s Vertical Video feature to
                            deliver compelling visual storytelling content and appeal to younger subscribers who are
                            used to this experience on other platforms.</p>
                        <p>• Build CTA links for the app’s Immersion Carousel that delivers the breath of news coverage
                            by providing the immersive experience to the users. The project increases overall Top
                            Stories CTR from 62% to 67% and increase the percentage of users who have seen half of the
                            headlines on Top Stories from 30% to 40%.</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default WapoSection;