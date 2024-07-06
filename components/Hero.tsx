import React from "react";
import SpotlightBackground from "./ui/SpotlightBackground";
import BackgroundGridEffect from "./ui/BackgroundGridEffect";
import HeroMain from "./HeroMain";

const Hero = () => {
  return (
    <div className='pb-24 pt-36'>
      <SpotlightBackground />
      <BackgroundGridEffect />
      <HeroMain />
    </div>
  );
};

export default Hero;
