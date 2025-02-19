'use client';
import { motion } from 'framer-motion';
import Spotlight from './Spotlight';



export default function SpotlightNewDemo() {
  return (
<div className="w-screen h-screen flex flex-col items-center justify-center bg-black/[0.96] bg-grid-white/[0.02] overflow-hidden relative">
  <Spotlight />
  {/* Main Heading */}
  <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
    Hey, I'm <span className='text-blue-600'>Sandesh Acharya</span>
  </h1>
  {/* Description */}
  <p className="mt-4 md:text-xl text-xl text-neutral-300 max-w-lg text-center mx-auto">
    I'm a dynamic{" "}
    <span className="border-b border-blue-500 border-opacity-70">
      Web Developer
    </span>{" "}
    building and managing Websites and Web Applications that lead to
    impactful designs that enhance user engagement.
  </p>
</div>

  );
}
