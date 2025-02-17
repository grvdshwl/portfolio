import React from "react";

const BackgroundGridEffect = () => {
  return (
    <div
      className='h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] 
   flex items-center justify-center absolute top-0 left-0 '
    >
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
    </div>
  );
};

export default BackgroundGridEffect;
