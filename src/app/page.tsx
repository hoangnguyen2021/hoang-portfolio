import Image from 'next/image'
import madHeaderGif from '../../public/gifs/mad-header.gif'
import IntroSection from "@/app/IntroSection";
import SectionHeading from "@/components/SectionHeading";
import SkillsSection, {Skill} from "@/app/SkillsSection";
import ADCSection from "@/app/ADCSection";
import WapoSection from "@/app/WapoSection";
import UGASection from "@/app/UGASection";
import React from "react";
import SkillTabs from "@/components/SkillTabs";
import kotlinSvg from "../../public/images/kotlin.svg";
import javaSvg from "../../public/images/java.svg";
import cSharpSvg from "../../public/images/csharp.svg";
import javascriptSvg from "../../public/images/javascript.svg";
import typescriptSvg from "../../public/images/typescript.svg";
import cplusplusSvg from "../../public/images/cplusplus.svg";
import pythonSvg from "../../public/images/python.svg";
import swiftSvg from "../../public/images/swift.svg";
import mySqlSvg from "../../public/images/mysql.svg";

const skills: Skill[] = [
    {id: 1, name: "Kotlin", logo: kotlinSvg, yearsOfExp: "3+"},
    {id: 2, name: "Java", logo: javaSvg, yearsOfExp: "4+"},
    {id: 3, name: "C#", logo: cSharpSvg, yearsOfExp: "1+"},
    {id: 4, name: "Javascript", logo: javascriptSvg, yearsOfExp: "3+"},
    {id: 5, name: "Typescript", logo: typescriptSvg, yearsOfExp: "3+"},
    {id: 6, name: "C/C++", logo: cplusplusSvg, yearsOfExp: "4+"},
    {id: 7, name: "Python", logo: pythonSvg, yearsOfExp: "1+"},
    {id: 8, name: "Swift", logo: swiftSvg, yearsOfExp: "1+"},
    {id: 9, name: "MySQL", logo: mySqlSvg, yearsOfExp: "2+"}
];

const Home = () => {
    return (
        <main>
            <div className="bg-tiber h-screen grid grid-cols-12 gap-5">
                <section className="col-span-8 flex flex-col gap-y-20 justify-center bg-android-developers bg-contain">
                    <h1 className="text-6xl font-semibold text-white text-center font-mono">Hoang Nguyen</h1>
                    <h2 className="text-3xl font-semibold text-white text-center font-mono">Welcome to my portfolio
                        website!</h2>
                </section>
                <section className="flex justify-center items-center col-span-4">
                    <div className="flex justify-center items-center">
                        <Image src={madHeaderGif} alt="" width={400}/>
                    </div>
                </section>
            </div>
            <IntroSection/>
            <div>
                <SectionHeading title="Skills"/>
                <SkillsSection skills={skills}/>
                <SkillTabs/>
            </div>
            <div className="border-dashed border-2 border-tiber"></div>
            <div>
                <SectionHeading title="Education" primary={false}/>
                <UGASection/>
            </div>
            <div className="border-dashed border-2 border-tiber"></div>
            <div>
                <SectionHeading title="Experiences"/>
                <ADCSection/>
                <div className="grid grid-cols-2">
                    <div className="col-span-1 border-3 border-adc-orange"></div>
                    <div className="col-span-1 border-3 border-black"></div>
                </div>
                <WapoSection/>
            </div>
        </main>
    )
}

export default Home;
