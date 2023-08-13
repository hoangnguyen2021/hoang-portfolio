import React from "react";
import {StaticImageData} from "next/image";
import SkillComponent from "@/components/SkillComponent";

export type Skill = {
    id: number,
    name: string,
    logo: StaticImageData,
    yearsOfExp: string
}

type SkillsSectionProps = {
    skills: Skill[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({skills}) => {
    return (
        <section className="bg-white">
            <div className="flex justify-around px-10 py-10">
                {skills.map(skill =>
                    <SkillComponent key={skill.id} id={skill.id} name={skill.name} logo={skill.logo}
                                    yearsOfExp={skill.yearsOfExp}/>)}
            </div>
        </section>
    );
};

export default SkillsSection;