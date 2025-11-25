
import HeroText from '@/constant/HeroText';
import React from 'react';

const Hero = () => {
    return (
        <div className='flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space'>
           <HeroText></HeroText>
        </div>
    );
};

export default Hero;