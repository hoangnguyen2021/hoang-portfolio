import Image, {StaticImageData} from "next/image";

const CircularImage = (
    {src, alt}: { src: string | StaticImageData, alt: string }
) => {
    return (
        <Image src={src} alt={alt} className={`w-48 h-48 rounded-full border-6 border-tiber object-cover`}/>
    )
};

export default CircularImage;