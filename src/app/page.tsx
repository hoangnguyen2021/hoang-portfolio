import React from "react";
import HeroSection from "@/app/HeroSection";
import IntroSection from "@/app/IntroSection";
import SectionHeading from "@/components/SectionHeading";
import SkillsSection, {Skill} from "@/app/SkillsSection";
import ADCSection from "@/app/ADCSection";
import WapoSection from "@/app/WapoSection";
import UGASection from "@/app/UGASection";
import FooterSection from "@/app/FooterSection";
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
    {id: 3, name: "C#", logo: cSharpSvg, yearsOfExp: "3+"},
    {id: 4, name: "Javascript", logo: javascriptSvg, yearsOfExp: "3+"},
    {id: 5, name: "Typescript", logo: typescriptSvg, yearsOfExp: "3+"},
    {id: 6, name: "C/C++", logo: cplusplusSvg, yearsOfExp: "1+"},
    {id: 7, name: "Python", logo: pythonSvg, yearsOfExp: "1+"},
    {id: 8, name: "Swift", logo: swiftSvg, yearsOfExp: "1+"},
    {id: 9, name: "MySQL", logo: mySqlSvg, yearsOfExp: "2+"}
];

const Home = () => {
    return (
        <main>
            <HeroSection/>
            <IntroSection/>
            <div className="border-dashed border-2 border-tiber"></div>
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
            <FooterSection/>
        </main>
    )
}

export default Home;
