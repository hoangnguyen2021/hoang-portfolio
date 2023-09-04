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
import LoadingImage from "@/components/LoadingImage";

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
                className={classNames("relative w-full flex flex-col 2xl:flex-row-reverse items-center transition-height duration-1000", expanding ? "2xl:h-[76rem]" : "2xl:h-[30rem]")}>
                <Transition
                    show={!expanding}
                    enter="transition-all duration-1000"
                    enterFrom="opacity-0 w-full absolute right-0"
                    enterTo="opacity-100 w-full 2xl:w-[30rem] relative"
                    leave="transition-all duration-1000"
                    leaveFrom="opacity-100 w-full 2xl:w-[30rem] relative"
                    leaveTo="opacity-0 w-full absolute right-0"
                    className="relative w-full 2xl:min-w-[30rem] 2xl:w-[30rem] h-24 md:h-36 2xl:h-full">
                    <Image src={wapoLogo1} alt={"The Washington Post"}
                           className="absolute right-0 w-auto h-full object-cover"/>
                </Transition>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                     className="relative flex flex-col h-full justify-between">
                    <div className="flex flex-col justify-center gap-y-3 px-5 sm:px-10 md:px-20 py-5 sm:py-10">
                        <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 justify-between items-center">
                            <Image src={wapoLogo2} alt="" className="w-auto h-10 sm:h-12 lg:h-14"/>
                            <div className="text-xs sm:text-sm md:text-base lg:text-lg font-normal font-sans">
                                <span className="text-gray-500">Washington, D.C.</span>
                                <span className="text-tiber"> | May 2022 - Dec 2022</span>
                            </div>
                        </div>
                        <div>
                        <span
                            className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-normal font-sans">Software Engineer Intern, Android</span>
                        </div>
                        <div className="text-black text-xs sm:text-sm md:text-base lg:text-md font-normal font-sans">
                            <p>• Spearheaded the development of the Washington Post Wear App on Wear OS, bringing
                                feature-rich experience including article browsing, article text-to-speech, podcast
                                playback, paywall integration, push notifications, watch face complications, and
                                mobile-wear intercommunication.</p>
                            <p>• Collaborated in the continuous evolution of the Washington Post app, contributing
                                expertise to enhance its features and performance on both Android and Amazon
                                devices.</p>
                            <p>• Engineered and integrated a video countdown timer and auto-advancing capabilities into
                                the app&apos;s Vertical Video feature, delivering captivating visual storytelling content.
                                This innovation catered to younger subscribers familiar with similar experiences on
                                alternate platforms.</p>
                            <p>• Designed and implemented Call-to-Action links in the project Immersion Carousel,
                                providing users with an immersive news coverage experience. This initiative resulted in
                                a notable increase in the Click-Through Rate (CTR) for Top Stories, surging from 62% to
                                an impressive 67%, and raised the percentage of users exposed to at least half of the
                                Top Stories headlines from 30% to a significant 40%.
                            </p>
                        </div>
                        {expanding &&
                            <div className="max-w-7xl mx-auto mt-5 sm:mt-10 flex flex-col items-center gap-y-5">
                                <div
                                    className="grid grid-cols-1 gap-y-5 lg:gap-y-0 lg:flex lg:justify-center lg:items-stretch">
                                    <div className="flex justify-center lg:mr-5 xl:mr-10">
                                        <VideoPlayer path="videos/countdown-timer.mp4" width={300} height={650}/>
                                    </div>
                                    <div
                                        className="flex justify-center">
                                        <span className="border-l border-black"></span>
                                    </div>
                                    <div className="w-full flex flex-col items-stretch gap-y-5 lg:gap-y-0">
                                        <LoadingImage src={ctaLinkGif} alt="Wapo cta link"
                                                      imgClassName="w-auto h-36 md:h-56 xl:h-72 lg:ml-5 xl:ml-10 lg:mb-5 xl:mb-10"/>
                                        <div
                                            className="flex justify-center w-0 lg:w-full">
                                            <span className="border-t border-black w-full"></span>
                                        </div>
                                        <div
                                            className="h-full flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-center md:gap-x-5">
                                            <LoadingImage src={liveReporterInsightJpg} alt="Wapo live reporter insight"
                                                          imgClassName="w-auto h-56 xl:h-64 lg:mx-5 xl:mx-10 lg:mt-5 xl:mt-10"/>
                                            <div
                                                className="flex justify-center h-0 lg:h-full">
                                                <span className="border-l border-black lg:h-full"></span>
                                            </div>
                                            <LoadingImage src={nudgeGif} alt="Wapo discovery section"
                                                          imgClassName="w-auto h-56 xl:h-64 lg:ml-5 xl:mx-10 lg:mt-5 xl:mt-10"/>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-5 text-black text-xs sm:text-sm md:text-base lg:text-md font-normal font-sans text-center">From
                                    left to right, top to bottom: Countdown timer and auto-advancing of Vertical Videos,
                                    CTA
                                    link of Immersion Article Carousel, Live Reporter Insight, Nudge animation in
                                    Discovery.</p>
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
                                className="w-full bg-black border-3 border-red-600 text-white text-md font-mono flex justify-center py-1 sm:py-2">
                                {expanding ? <ChevronUpIcon/> :
                                    <ChevronDownIcon/>}
                            </button>
                        </div>
                    </Transition>
                </div>
            </div>

        </section>
    );
};

export default WapoSection;