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
    logo: StaticImageData
}

const languages: Language[] = [
    {name: "Kotlin", logo: kotlinSvg},
    {name: "Java", logo: javaSvg},
    {name: "C#", logo: cSharpSvg},
    {name: "Javascript", logo: javascriptSvg},
    {name: "Typescript", logo: typescriptSvg},
    {name: "C/C++", logo: cplusplusSvg},
    {name: "Python", logo: pythonSvg},
    {name: "Swift", logo: swiftSvg},
    {name: "MySQL", logo: mySqlSvg}
];

const LanguagesSection: React.FC<LanguagesSectionProps> = () => {
    return (
        <section className="bg-white">
            <div className="flex justify-around px-20 py-10">
                {languages.map(language =>
                    <LanguageComponent key={language.name} name={language.name} logo={language.logo}/>)}
            </div>
            <div className="border-dashed border-2 border-tiber"></div>
        </section>
    );
};

export default LanguagesSection;