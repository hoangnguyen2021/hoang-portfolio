"use client";

import React, {useState} from "react";
import Image from "next/image";
import wapoLogo1 from "../images/wapo1.png";
import wapoLogo2 from "../images/wapo2.svg"
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import ChevronUpIcon from "@/components/icons/ChevronUpIcon";
import {Transition} from "@headlessui/react";

type ADCSectionProps = {};

const WapoSection: React.FC<ADCSectionProps> = () => {
    const [showExpandButton, setShowExpandButton] = useState<boolean>(false);
    const [expanding, setExpanding] = useState<boolean>(false);
    const onMouseEnter = () => {
        setShowExpandButton(true);
    };

    const onMouseLeave = () => {
        setShowExpandButton(false);
    };

    const expandOrCollapse = () => {
        setExpanding(prevExpanding => !prevExpanding);
    };

    return (
        <section>
            <div className="w-full h-[28rem] flex flex-row-reverse">
                <Image src={wapoLogo1} alt={"The Washington Post"}
                       className="top-0 right-0 w-auto h-full object-cover"/>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                     className="flex flex-col h-full justify-between">
                    <div className="flex flex-col justify-center gap-y-3 px-20 py-10">
                        <div className="flex justify-between items-center">
                            <Image src={wapoLogo2} alt="" className="w-auto h-14"/>
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
                            <p>• Contribute to the continued development of the Washington Post app on Android and
                                Amazon
                                devices.</p>
                            <p>• Implement video countdown timer and auto-advancing for the app’s Vertical Video feature
                                to
                                deliver compelling visual storytelling content and appeal to younger subscribers who are
                                used to this experience on other platforms.</p>
                            <p>• Build CTA links for the app’s Immersion Carousel that delivers the breath of news
                                coverage by providing the immersive experience to the users. The project increases
                                overall Top Stories CTR from 62% to 67% and increase the percentage of users who have
                                seen half of the headlines on Top Stories from 30% to 40%.
                            </p>
                            <p>• Integrate in-app tracking and send user-related tracking metrics to analytics.</p>
                        </div>
                    </div>
                    <Transition
                        show={showExpandButton}
                        enter="transition-opacity duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-75"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="flex">
                            <button
                                onClick={expandOrCollapse}
                                className="w-full bg-black border-3 border-red-600 text-white text-md font-mono flex justify-center py-2">
                                {expanding ? <ChevronUpIcon className="h-5" aria-hidden="true"/> :
                                    <ChevronDownIcon className="h-5" aria-hidden="true"/>}
                            </button>
                        </div>
                    </Transition>
                </div>
            </div>

        </section>
    );
};

export default WapoSection;