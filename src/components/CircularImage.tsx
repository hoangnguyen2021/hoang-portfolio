import Image, {StaticImageData} from "next/image";

const CircularImage = (
    {src, alt}: { src: string | StaticImageData, alt: string }
) => {
    return (
        <Image src={src} alt={alt} className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full border-4 md:border-6 border-tiber object-cover"/>
    )
};

export default CircularImage;