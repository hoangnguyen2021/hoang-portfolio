import CircularImage from "@/components/CircularImage";
import profilePic from "../images/profile-pic.jpeg";

const IntroSection = () => {
    return (
        <section className="bg-white">
            <div className="max-w-3xl mx-auto py-10 flex flex-col items-center gap-y-5">
                <CircularImage src={profilePic} alt="Profile pic"/>
                <h2 className="text-3xl font-semibold text-tiber text-center font-mono">About me</h2>
                <p className="text-xl font-normal text-black text-center font-sans">My name is Hoang. I am a senior CS student at the University of Georgia.</p>
                <p className="text-xl font-normal text-black text-center font-sans">I am a dedicated Android software engineer, passionate about crafting exceptional mobile experiences that seamlessly blend innovation and user-centric design.</p>
            </div>
        </section>
    );
};

export default IntroSection;