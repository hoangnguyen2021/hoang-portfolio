"use client";

import React, {useState} from "react";
import Image from "next/image";
import adcLogo from "../images/alarmdotcom.jpg";
import adcLogo2 from "../images/alarmdotcom2.png";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import ChevronUpIcon from "@/components/icons/ChevronUpIcon";
import {Transition} from "@headlessui/react";
import {classNames} from "@/utils/utils";

type ADCSectionProps = {};

const ADCSection: React.FC<ADCSectionProps> = () => {
    const [showExpand, setShowExpand] = useState<boolean>(false);
    const [expanding, setExpanding] = useState<boolean>(false);

    const onMouseEnter = () => {
        setShowExpand(true);
    };

    const onMouseLeave = () => {
        setShowExpand(false);
    };

    const expandOrCollapse = () => {
        setExpanding(prevExpanding => !prevExpanding);
    };

    return (
        <section>
            <div
                className={classNames("relative w-full flex transition-height duration-1000", expanding ? "h-screen" : "h-96")}>
                <Transition
                    show={!expanding}
                    enter="transition-all duration-1000"
                    enterFrom="opacity-0 w-full absolute"
                    enterTo="opacity-100 w-[44rem] relative"
                    leave="transition-all duration-1000"
                    leaveFrom="opacity-100 w-[44rem] relative"
                    leaveTo="opacity-0 w-full absolute"
                    className="relative w-[44rem] h-full">
                    <Image src={adcLogo} alt={"Alarm.com"} className="relative w-auto h-full object-cover"/>
                </Transition>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                     className="flex flex-col h-full justify-between">
                    <div className="flex flex-col justify-center gap-y-3 px-20 py-10">
                        <div className="flex justify-between items-center">
                            <Image src={adcLogo2} alt="" className="w-auto h-8"/>
                            <div className="text-lg font-normal font-sans">
                                <span className="text-gray-500">Tysons, Virginia</span>
                                <span className="text-tiber"> | May 2023 - August 2023</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-adc-orange text-lg font-normal font-sans">Software Engineer Intern, Android</span>
                        </div>
                        <div className="text-black text-md font-normal font-sans">
                            <p>• Integrate Offline Device Status on Alarm.com Customer App&apos;s Dashboard and Device
                                Specific Screen across all Alarm.com Smart Home/Business Devices to greatly enhance user
                                experience with clear indication of Connectivity Status and options for Recovery and
                                Troubleshooting.</p>
                            <p>• Work upon ASP.NET C# application to support sending down Offline Device Status to
                                mobile
                                clients.</p>
                            <p>• Write testing for implemented features on backend .NET application and Android
                                client.</p>
                            <p>• Refactor deprecated Android Permissions API to new runtime Permissions API to request
                                media
                                storage and camera Permissions for access to various features in the app.</p>
                        </div>
                    </div>
                    <Transition
                        show={showExpand}
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
                                className="w-full bg-adc-orange border-3 border-black text-white text-md font-mono flex justify-center py-2">
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

export default ADCSection;