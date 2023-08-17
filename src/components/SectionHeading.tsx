import React from "react";
import {classNames} from "@/utils/utils";

type SectionHeadingProps = {
    title: string,
    primary?: boolean
}
const SectionHeading: React.FC<SectionHeadingProps> = ({title, primary = true}) => {
    return (<section className={classNames(primary ? "bg-tiber" : "bg-eucalyptus", "mx-auto flex justify-center p-10")}>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center font-mono">{title}</h2>
    </section>);
};

export default SectionHeading;