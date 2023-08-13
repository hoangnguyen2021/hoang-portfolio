import React from "react";
import {StaticImageData} from "next/image";
import kotlinSvg from "../images/kotlin.svg";
import javaSvg from "../images/java.svg";
import cSharpSvg from "../images/csharp.svg";
import javascriptSvg from "../images/javascript.svg";
import typescriptSvg from "../images/typescript.svg";
import cplusplusSvg from "../images/cplusplus.svg";
import pythonSvg from "../images/python.svg";
import swiftSvg from "../images/swift.svg";
import mySqlSvg from "../images/mysql.svg";
import LanguageComponent from "@/components/LanguageComponent";

type LanguagesSectionProps = {}

export type Language = {
    name: string,
    logo: StaticImageData,
    yearsOfExp: string
}

const languages: Language[] = [
    {name: "Kotlin", logo: kotlinSvg, yearsOfExp: "3+"},
    {name: "Java", logo: javaSvg, yearsOfExp: "4+"},
    {name: "C#", logo: cSharpSvg, yearsOfExp: "1+"},
    {name: "Javascript", logo: javascriptSvg, yearsOfExp: "3+"},
    {name: "Typescript", logo: typescriptSvg, yearsOfExp: "3+"},
    {name: "C/C++", logo: cplusplusSvg, yearsOfExp: "4+"},
    {name: "Python", logo: pythonSvg, yearsOfExp: "1+"},
    {name: "Swift", logo: swiftSvg, yearsOfExp: "1+"},
    {name: "MySQL", logo: mySqlSvg, yearsOfExp: "2+"}
];

const LanguagesSection: React.FC<LanguagesSectionProps> = () => {
    return (
        <section className="bg-white">
            <div className="flex justify-around px-20 py-10">
                {languages.map(language =>
                    <LanguageComponent key={language.name} name={language.name} logo={language.logo}
                                       yearsOfExp={language.yearsOfExp}/>)}
            </div>
        </section>
    );
};

export default LanguagesSection;