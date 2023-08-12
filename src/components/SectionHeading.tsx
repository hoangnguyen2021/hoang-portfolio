import React from "react";
import {classNames} from "@/utils/utils";

type SectionHeadingProps = {
    title: string,
    primary?: boolean
}
const SectionHeading: React.FC<SectionHeadingProps> = ({title, primary = true}) => {
    return (<section className={classNames(primary ? "bg-tiber" : "bg-eucalyptus", "mx-auto px-40 py-10")}>
        <h2 className="text-3xl font-semibold text-white text-center font-mono">{title}</h2>
    </section>);
};

export default SectionHeading;