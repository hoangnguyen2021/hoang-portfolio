"use client";

import React, {useState} from 'react';
import {Tab} from '@headlessui/react';
import SkillsSection, {Skill} from "@/app/SkillsSection";
import {classNames} from "@/utils/utils";
import jetpackSvg from "../images/jetpack.svg";
import jetpackComposeSvg from "../images/jetpack-compose.svg";
import androidSdkSvg from "../images/android-sdk.svg";
import reactivePng from "../images/reactive.png";
import espressoPng from "../images/espresso.png";
import reactSvg from "../images/react.svg";
import nextSvg from "../images/next.svg";
import angularSvg from "../images/angular.svg";
import tailwindSvg from "../images/tailwind.svg";
import nodeJsSvg from "../images/nodejs.svg";
import expressJsSvg from "../images/expressjs.svg";
import dotNetSvg from "../images/dotnet.svg";
import springBootSvg from "../images/springboot.svg";
import ktorSvg from "../images/ktor.svg";

type SkillTabsProps = {};

type Categories = {
    Android: Skill[],
    Frontend: Skill[],
    Backend: Skill[]
};

const SkillTabs: React.FC<SkillTabsProps> = () => {
    let [categories] = useState<Categories>({
        Android: [
            {
                id: 1,
                name: "Jetpack Libraries",
                logo: jetpackSvg,
                yearsOfExp: "3+"
            },
            {
                id: 2,
                name: "Jetpack Compose",
                logo: jetpackComposeSvg,
                yearsOfExp: "2+"
            },
            {
                id: 3,
                name: "Android SDK",
                logo: androidSdkSvg,
                yearsOfExp: "2+"
            },
            {
                id: 4,
                name: "Reactive (RxJava)",
                logo: reactivePng,
                yearsOfExp: "2+"
            },
            {
                id: 5,
                name: "Automated Testing",
                logo: espressoPng,
                yearsOfExp: "1+"
            },
        ],
        Frontend: [
            {
                id: 1,
                name: "React",
                logo: reactSvg,
                yearsOfExp: "3+"
            },
            {
                id: 2,
                name: "NextJS",
                logo: nextSvg,
                yearsOfExp: "3+"
            },
            {
                id: 3,
                name: "Angular",
                logo: angularSvg,
                yearsOfExp: "~0.5"
            },
            {
                id: 4,
                name: "Tailwind",
                logo: tailwindSvg,
                yearsOfExp: "3+"
            }
        ],
        Backend: [
            {
                id: 1,
                name: "NodeJS",
                logo: nodeJsSvg,
                yearsOfExp: "3+"
            },
            {
                id: 2,
                name: "ExpressJS",
                logo: expressJsSvg,
                yearsOfExp: "3+"
            },
            {
                id: 3,
                name: ".NET",
                logo: dotNetSvg,
                yearsOfExp: "<1"
            },
            {
                id: 4,
                name: "Spring Boot",
                logo: springBootSvg,
                yearsOfExp: "<1"
            },
            {
                id: 5,
                name: "Ktor",
                logo: ktorSvg,
                yearsOfExp: "~1"
            }
        ],
    })

    return (
        <div className="bg-tusk w-full py-10 sm:px-0">
            <div className="max-w-5xl mx-auto">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-md bg-pattens-blue p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({selected}) =>
                                    classNames(
                                        "w-full rounded-lg py-2.5 text-lg font-medium font-sans leading-5",
                                        "ring-eucalyptus ring-offset-2 ring-offset-eucalyptus focus:outline-none focus:ring-2",
                                        selected
                                            ? "text-eucalyptus bg-white shadow"
                                            : "text-tiber hover:bg-tiber/[0.12] hover:text-black"
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((skills, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <SkillsSection skills={skills}/>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
};

export default SkillTabs;