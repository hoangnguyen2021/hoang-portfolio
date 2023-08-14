import React from "react";
import linkedinSvg from "../../public/images/linkedin.svg";
import githubSvg from "../../public/images/github.svg";
import emailSvg from "../../public/images/email.svg";
import devpostSvg from "../../public/images/devpost.svg";
import Image from "next/image";

type FooterSectionProps = {};

const FooterSection: React.FC<FooterSectionProps> = () => {
    return (
        <section>
            <div className="bg-deep-space flex flex-col">
                <div className="flex justify-evenly items-center px-20 py-6">
                    <a href="https://www.linkedin.com/in/hn83378/" target="_blank">
                        <Image src={linkedinSvg} alt="Linkedin" className="w-auto h-8"/>
                    </a>
                    <a href="https://github.com/hoangnguyen2021/" target="_blank">
                        <Image src={githubSvg} alt="Github" className="w-auto h-8"/>
                    </a>
                    <a href="mailto: vuhoangnguyenga@gmail.com" target="_blank">
                        <Image src={emailSvg} alt="Email" className="w-auto h-8"/>
                    </a>
                    <a href="https://devpost.com/hoangnguyen2021/" target="_blank">
                        <Image src={devpostSvg} alt="Devpost" className="w-auto h-8"/>
                    </a>
                </div>
                <div className="bg-tiber py-6">
                    <p className="text-white text-lg font-normal font-sans text-center">Hoang Nguyen © 2023</p>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;