import React from "react";
import Image from "next/image";
import madHeaderGif from "../../public/gifs/mad-header.gif";

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <div className="bg-tiber sm:h-[36rem] md:h-screen grid grid-cols-12 gap-5">
            <section className="col-span-12 md:col-span-8 flex flex-col gap-y-10 md:gap-y-16 lg:gap-y-20 justify-center bg-android-developers bg-contain py-24">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white text-center font-mono">Hoang Nguyen</h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center font-mono">Welcome to my portfolio
                    website!</h2>
            </section>
            <section className="col-span-12 md:col-span-4 flex justify-center items-center py-5">
                <div className="flex justify-center items-center">
                    <Image src={madHeaderGif} alt="" className="w-auto h-16 sm:h-20 md:h-30 lg:h-40 xl:h-48"/>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;