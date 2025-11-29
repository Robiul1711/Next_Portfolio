"use client";

import Banner from '@/component/home/Banner'
import { HeroParallaxDemo } from '@/component/others/HeroParallaxDemo'
import LightRays from '@/components/LightRays'
import React from 'react'

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">

      {/* Light Rays Background */}
      <div className="absolute top-0 left-0 w-full h-screen -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <Banner />

      <div className="mt-20">
        <HeroParallaxDemo />
      </div>

    </div>
  );
}

export default Home;
