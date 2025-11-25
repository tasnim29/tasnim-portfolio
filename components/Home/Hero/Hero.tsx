
import HeroText from '@/constant/HeroText';
import ParallaxBg from '@/constant/ParallaxBg';
import ThreeDModel from '@/constant/ThreeDModel';


const Hero = () => {
    return (
        <div className='flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start  w-[80%] mx-auto'>
           <HeroText></HeroText>
           <ParallaxBg></ParallaxBg>
           <ThreeDModel></ThreeDModel>
        </div>
    );
};

export default Hero;