'use client';
import { motion } from 'framer-motion';
import Spotlight from './Spotlight';

// const SpotlightComponent = ({
//   gradientFirst = 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)',
//   gradientSecond = 'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)',
//   gradientThird = 'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)',
//   translateY = -350,
//   width = 560,
//   height = 1380,
//   smallWidth = 240,
//   duration = 7,
//   xOffset = 100,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className="pointer-events-none absolute inset-0 h-full w-full"
//     >
//       {[1, -1].map((direction, index) => (
//         <motion.div
//           key={index}
//           animate={{ x: [0, direction * xOffset, 0] }}
//           transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
//           className={`absolute top-0 ${direction === 1 ? 'left-0' : 'right-0'} w-screen h-screen z-40 pointer-events-none`}
//         >
//           <div
//             style={{
//               transform: `translateY(${translateY}px) rotate(${direction * 45}deg)`,
//               background: gradientFirst,
//               width: `${width}px`,
//               height: `${height}px`,
//             }}
//             className={`absolute top-0 ${direction === 1 ? 'left-0' : 'right-0'}`}
//           />
//           <div
//             style={{
//               transform: `rotate(${direction * 45}deg) translate(${direction * -5}%, -50%)`,
//               background: gradientSecond,
//               width: `${smallWidth}px`,
//               height: `${height}px`,
//             }}
//             className={`absolute top-0 ${direction === 1 ? 'left-0' : 'right-0'} origin-${direction === 1 ? 'top-left' : 'top-right'}`}
//           />
//           <div
//             style={{
//               transform: `rotate(${direction * 45}deg) translate(${direction * 180}%, -70%)`,
//               background: gradientThird,
//               width: `${smallWidth}px`,
//               height: `${height}px`,
//             }}
//             className={`absolute top-0 ${direction === 1 ? 'left-0' : 'right-0'} origin-${direction === 1 ? 'top-left' : 'top-right'}`}
//           />
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

export default function SpotlightNewDemo() {
  return (
<div className="w-screen h-screen flex flex-col items-center justify-center bg-black/[0.96] bg-grid-white/[0.02] overflow-hidden relative">
  <Spotlight />
  {/* Main Heading */}
  <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
    Hey, I'm <span className='text-blue-600'>Sandesh Acharya</span>
  </h1>
  {/* Description */}
  <p className="mt-4 text-base md:text-lg text-neutral-300 max-w-lg text-center mx-auto">
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
