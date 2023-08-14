"use client";

import React, {useState} from "react";
import Image, {StaticImageData} from "next/image";
import {classNames} from "@/utils/utils";
import LoadingSpinner from "@/components/LoadingSpinner";

type LoadingImageProps = {
    src: StaticImageData | string,
    alt: string,
    imgClassName: string
};

const LoadingImage: React.FC<LoadingImageProps> = ({src, alt, imgClassName}) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    return (
        <div className="relative flex justify-center items-center">
            <Image src={src} alt={alt}
                   onLoadingComplete={(img) => setLoaded(true)}
                   className={classNames(imgClassName, loaded ? "visible" : "invisible")}/>
            <LoadingSpinner loaded={loaded}/>
        </div>
    );
};

export default LoadingImage;