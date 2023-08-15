import Image from "next/image";
import React from "react";
import {Skill} from "@/app/SkillsSection";

type SkillComponentProps = Skill;

const SkillComponent: React.FC<SkillComponentProps> = (skill) => {
    const {name, logo, yearsOfExp} = skill;

    return (
        <div className="flex flex-col justify-center items-center gap-y-3 md:gap-y-4 lg:gap-y-5">
            <Image src={logo} alt={name} width={50}/>
            <h4 className="text-black text-base md:text-lg lg:text-xl font-normal font-sans text-center">{name}</h4>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg font-normal font-sans text-center">{yearsOfExp} yrs</p>
        </div>
    );
};

export default SkillComponent;
