// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// export const projects = [
//   {
//     title: "Uncensored!",
//     photo:"s.jpg",
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },
//   {
//     title: "Not published yet!",
//     photo:'sau.jpg',
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },
//   {
//     title: "No project yet :(",
//     photo:'saurav.jpg',
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },
//   {
//     title: "Just a demo :)",
//     photo:'bgBlack.avif',
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },
//   {
//     title: "wait for my projects!",
//     photo:'background.png',
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },
//   {
//     title: "Not yet!",
//     photo:'background.avif',
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },

// ];

// export const HoverEffect = () => {
//   let [hoveredIndex, setHoveredIndex] = useState(null); 

//   return (
//     <div className="max-w-5xl mx-auto px-8">
//       <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-14">
//         {projects.map((project, idx) => (
//           <div
//             key={idx}
//             className="relative group block p-2 h-full w-full"
//             onMouseEnter={() => setHoveredIndex(idx)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <AnimatePresence>
//               {hoveredIndex === idx && (
//                 <motion.span
//                   className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
//                   layoutId="hoverBackground"
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                     transition: { duration: 0.15 },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     transition: { duration: 0.15, delay: 0.2 },
//                   }}
//                 />
//               )}
//             </AnimatePresence>
//             <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-40">
//               <div className="relative z-40">
//                 <div className="p-4">
//                   <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
//                     {project.title}
//                   </h4>
//                   <a href={`${project.link}`} className="">
//                   <img src={`${project.photo}`} alt="project screenshots" className="rounded-lg h-52 w-72 object-cover object-center pt-1"/>
//                   </a>
//                   <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default HoverEffect;
// import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiAdobephotoshop, SiTailwindcss } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-[#DD4D26]" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-[#2962E9]" },
  { name: "JavaScript", icon: <FaJs />, color: "text-[#EFD81D]" },
  { name: "React", icon: <FaReact />, color: "text-[#5ED4F3]" },
  { name: "Photoshop", icon: <SiAdobephotoshop />, color: "text-[#2EA3F7]" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#36B7F0]" },
  { name: "UI/UX", icon: <FiFigma />, color: "text-[#0053CB]" },
];

const HoverEffect = () => {
  return (
    <div className="h-auto min-h-screen bg-gradient-to-b from-black to-gray-900 flex justify-center items-center flex-col p-6 lg:w-screen">
      <div className="flex flex-col justify-center items-center mb-16 mt-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#9D00FF] font-bold pb-6">SKILLS</h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300">
          These are the core technologies and tools I use to build modern, responsive web applications.
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex flex-col bg-gray-800 rounded-lg items-center justify-center w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 text-white transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(128,0,128,0.8)]"
          >
            <span className={`text-5xl sm:text-6xl md:text-7xl ${skill.color} mb-2`}>
              {skill.icon}
            </span>
            <span className="text-lg sm:text-xl font-medium">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HoverEffect;
