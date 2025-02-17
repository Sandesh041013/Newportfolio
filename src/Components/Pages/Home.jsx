import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../../Navigation/Footer";
import { useNavigate } from "react-router-dom";
import Spotlight from "../AnimationPages/Spotlight";
import SpotlightNewDemo from "../AnimationPages/SpotlightComponent";
const Home = () => {
  const logo = [
    {
      id: 0,
      icon: <FaGithub />,
      name: "Github",
      color: "white",
      to: "https://github.com/Saurav433",
    },
    {
      id: 1,
      icon: <FaLinkedin />,
      name: "LinkedIN",
      color: "blue-600",
      to: "https://linkedin.com/in/saurav-g-c-885964324",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      name: "Instagram",
      color: "pink-500",
      to: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
    },
    {
      id: 3,
      icon: <FaXTwitter />,
      name: "Twitter",
      color: "white",
      to: "https://x.com/S4URAVgc",
    },
    {
      id: 4,
      icon: <FaRegEnvelope />,
      name: "Email",
      color: "[#EB493B]",
      to: "mailto:Sauravgc2060@gmail.com",
    },
  ];
  const navigate = useNavigate();
  const gotoproject = () => {
    navigate("/project");
  };
  return (
    <>
    <div className="font-poppins text-white w-full h-screen overflow-hidden relative flex items-center justify-center" id="home">
      {/* Main Section with Spotlight Effect */}
      <div className="w-full h-full flex flex-col items-center justify-center bg-black/[0.96] bg-grid-white/[0.02] relative">
        <SpotlightNewDemo />
        <div className="absolute hidden lg:grid top-1/3 left-0 z-40">
          {logo.map((item, index) => {
            return (
              <a
                href={`${item.to}`}
                key={index}
                className={`flex flex-cols-2 p-2 gap-6 -translate-x-28  hover:translate-x-[0.1px] hover:rounded-r-lg duration-700 delay-0  text-center items-center justify-end   bg-gradient-to-l from-slate-800 to-blue-300 opacity-90 cursor-pointer 
                 ${
                   item.name === "Email"
                     ? `border-b  rounded-br-lg shadow border-[#EB493B]`
                     : `shadow-none`
                 }
                 ${
                   item.name === "Github"
                     ? ` border-t rounded-tr-lg shadow-t-md `
                     : `shadow-none`
                 }
                  `}
              >
                <h1 className="text-lg font-poppins text-black font-medium ">
                  {item.name}
                </h1>
                <p className={`text-${item.color} text-3xl text-center`}>
                  {item.icon}
                </p>
              </a>
            );
          })}
        </div>
        {/* Sidebar Icons - Inside the Same Section */}
        {/* <div className="absolute hidden lg:flex flex-col space-y-4 top-1/2 -translate-y-1/2 left-0 z-40">
          {logo.map((item, index) => (
            <a
              href={item.to}
              key={index}
              className="flex items-center gap-4 px-4 py-2 rounded-r-lg transition-all duration-500 bg-gradient-to-l from-gray-800 to-blue-400 opacity-90 hover:translate-x-2 shadow-lg"
            >
              <h1 className="text-lg font-medium text-white">{item.name}</h1>
              <p className="text-3xl">{item.icon}</p>
            </a>
          ))}
        </div> */}
      </div>

      {/* Mobile Floating Icons */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex lg:hidden space-x-4 bg-gray-900 px-4 py-2 rounded-lg shadow-lg">
        {logo.map((item, index) => (
          <a href={item.to} key={index} className="flex items-center gap-2">
            <p className="text-3xl">{item.icon}</p>
          </a>
        ))}
      </div>
    </div>

      <div>
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
};
export default Home;
