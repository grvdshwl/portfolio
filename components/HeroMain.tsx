import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const HeroMain = () => {
  return (
    <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <TextGenerateEffect
          className='text-center text-[40px] md:text-5xl lg:text-6xl '
          words='Transforming Concepts into Seamless User Experiences'
        />
        <p className='text-center md:tracking-wider mb-4  text-sm md:text-lg lg:text-2xl'>
          Hi I&apos;m Gaurav, a software developer based out of New Delhi.
        </p>
        <a href='#about'>
          <MagicButton
            title='Show my work'
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
    </div>
  );
};

export default HeroMain;
