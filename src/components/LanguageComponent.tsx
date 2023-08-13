import Image from "next/image";
import React from "react";
import {Language} from "@/app/LanguagesSection";

type LanguageProps = Language;

const LanguageComponent: React.FC<LanguageProps> = (language) => {
    const {name, logo, yearsOfExp} = language;

    return (
        <div className="flex flex-col justify-center items-center gap-y-5">
            <Image src={logo} alt={name} width={50}/>
            <h4 className="text-black text-xl font-normal font-sans">{name}</h4>
            <p className="text-gray-500 text-md font-normal font-sans">{`${yearsOfExp} yrs`}</p>
        </div>
    );
};

export default LanguageComponent;
