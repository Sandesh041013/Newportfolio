
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
  { name: "Figma", icon: <FiFigma />, color: "text-[#0053CB]" },
];

const Skill = () => {
  return (
    <div className="h-auto min-h-screen bg-gradient-to-b bg-black flex justify-center items-center flex-col p-6 lg:w-screen" id="skill">
      <div className="flex flex-col justify-center items-center mb-16 mt-20 text-center">
        <h1 className="text-5xl sm:text-5xl md:text-6xl text-blue-600 font-bold pb-6">SKILLS</h1>
        <p className="text-2xl font-light opacity-80 max-w-2xl mx-auto text-neutral-300">
          These are the core technologies and tools I use to build modern, responsive web applications.
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex flex-col bg-gray-800 rounded-lg items-center justify-center w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 text-white transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(0,0,255,0.8)]"
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

export default Skill;
