
import HeroText from '@/constant/HeroText';
import ParallaxBg from '@/constant/ParallaxBg';


const Hero = () => {
    return (
        <div className='flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space'>
           <HeroText></HeroText>
           <ParallaxBg></ParallaxBg>
        </div>
    );
};

export default Hero;