import Image from 'next/image'
import madHeaderGif from '@/images/mad-header.gif'
import IntroSection from "@/app/IntroSection";
import SectionHeading from "@/components/SectionHeading";
import LanguagesSection from "@/app/LanguagesSection";
import ADCSection from "@/app/ADCSection";
import WapoSection from "@/app/WapoSection";
import UGASection from "@/app/UGASection";
import React from "react";

const Home = () => {
    return (
        <main>
            <div className="bg-tiber h-screen grid grid-cols-12 gap-5">
                <section className="col-span-8 flex flex-col gap-y-20 justify-center bg-android-developers bg-contain">
                    <h1 className="text-6xl font-semibold text-white text-center font-mono">Hoang Nguyen</h1>
                    <h2 className="text-3xl font-semibold text-white text-center font-mono">Welcome to my portfolio
                        website!</h2>
                </section>
                <section className="flex justify-center items-center col-span-4">
                    <div className="flex justify-center items-center">
                        <Image src={madHeaderGif} alt="" width={400}/>
                    </div>
                </section>
            </div>
            <IntroSection/>
            <div>
                <SectionHeading title="Languages"/>
                <LanguagesSection/>
            </div>
            <div className="border-dashed border-2 border-tiber"></div>
            <div>
                <SectionHeading title="Education" primary={false}/>
                <UGASection />
            </div>
            <div className="border-dashed border-2 border-tiber"></div>
            <div>
                <SectionHeading title="Experiences"/>
                <ADCSection />
                <WapoSection />
            </div>
        </main>
    )
}

export default Home;
