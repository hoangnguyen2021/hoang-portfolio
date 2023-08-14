"use client";

import React, {useState} from "react";
import Image from "next/image";
import wapoLogo1 from "../../public/images/wapo1.png";
import wapoLogo2 from "../../public/images/wapo2.svg";
import ctaLinkGif from "../../public/gifs/cta-link.gif";
import nudgeGif from "../../public/gifs/nudge.gif";
import liveReporterInsightJpg from "../../public/images/live-reporter-insight.jpg";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import ChevronUpIcon from "@/components/icons/ChevronUpIcon";
import {Transition} from "@headlessui/react";
import {classNames} from "@/utils/utils";
import VideoPlayer from "@/components/VideoPlayer";

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
            <div
                className={classNames("relative w-full flex flex-row-reverse transition-height duration-1000", expanding ? "h-[76rem]" : "h-[28rem]")}>
                <Transition
                    show={!expanding}
                    enter="transition-all duration-1000"
                    enterFrom="opacity-0 w-full absolute right-0"
                    enterTo="opacity-100 w-[56rem] relative"
                    leave="transition-all duration-1000"
                    leaveFrom="opacity-100 w-[56rem] relative"
                    leaveTo="opacity-0 w-full absolute right-0"
                    className="relative w-[56rem] h-full">
                    <Image src={wapoLogo1} alt={"The Washington Post"}
                           className="absolute right-0 w-auto h-full object-cover"/>
                </Transition>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                     className="relative flex flex-col h-full justify-between">
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
                        {expanding &&
                            <div className="max-w-7xl mx-auto mt-10 flex flex-col gap-y-5">
                                <div className="flex justify-center">
                                    <div className="flex justify-center mr-10">
                                        <VideoPlayer path="videos/countdown-timer.mp4" width={300} height={650}/>
                                    </div>
                                    <div
                                        className="flex justify-center">
                                        <span className="border-l border-black h-full"></span>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex justify-center ml-10 mb-10">
                                            <Image src={ctaLinkGif} alt="Wapo cta link" className="w-auto h-72"/>
                                        </div>
                                        <div
                                            className="flex justify-center">
                                            <span className="border-t border-black w-full"></span>
                                        </div>
                                        <div className="flex">
                                            <Image src={liveReporterInsightJpg} alt="Wapo live reporter insight"
                                                   className="w-auto h-64 mx-10 mt-10"/>
                                            <div
                                                className="flex justify-center">
                                                <span className="border-l border-black h-full"></span>
                                            </div>
                                            <Image src={nudgeGif} alt="Wapo discovery section"
                                                   className="w-auto h-64 mx-10 mt-10"/>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-5 text-black text-md font-normal font-sans text-center">From left to
                                    right, top to bottom: Countdown timer and auto-advancing of Vertical Videos, CTA
                                    link of
                                    Immersion Article Carousel, Live Reporter Insight, Nudge animation in Discovery</p>
                            </div>
                        }
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
                                {expanding ? <ChevronUpIcon className="h-5"/> :
                                    <ChevronDownIcon className="h-5"/>}
                            </button>
                        </div>
                    </Transition>
                </div>
            </div>

        </section>
    );
};

export default WapoSection;