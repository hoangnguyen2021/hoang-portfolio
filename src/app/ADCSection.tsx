import React from "react";
import Image from "next/image";
import adcLogo from "../images/alarmdotcom.jpg"

type ADCSectionProps = {};

const ADCSection: React.FC<ADCSectionProps> = () => {
    return (
        <section>
            <div
                className="relative w-full h-96 bg-gradient-to-r from-adc-orange from-30% to-white to-55% grid grid-cols-2 px-20 py-10">
                <Image src={adcLogo} alt={"Alarm.com"}
                       className="absolute top-0 left-0 w-auto h-full object-cover"/>
                <div className="col-start-2 col-end-3 flex flex-col gap-y-3">
                    <div className="flex justify-between items-center">
                        <span className="bg-white rounded-md px-2 py-1 mr-3 text-4xl font-semibold font-montserrat">
                            <span className="text-black">ALARM</span>
                            <span className="text-adc-orange">.</span>
                            <span className="text-black">COM</span>
                        </span>
                        <span className="text-tiber text-lg font-normal font-sans">Tysons, Virginia | May 2023 - August 2023</span>
                    </div>
                    <div>
                        <span className="text-adc-orange text-lg font-normal font-sans">Software Engineer, Android</span>
                    </div>
                    <div className="text-black text-lg font-normal font-sans">
                        <p>• Integrate Offline Device Status on Alarm.com Customer App&apos;s Dashboard and Device Specific Screen across all Alarm.com Smart Home/Business Devices to greatly enhance user experience with clear indication of Connectivity Status and options for Recovery and Troubleshooting.</p>
                        <p>• Work upon ASP.NET C# application to support sending down Offline Device Status to mobile clients.</p>
                        <p>• Write testing for implemented features on backend .NET application and Android client.</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default ADCSection;