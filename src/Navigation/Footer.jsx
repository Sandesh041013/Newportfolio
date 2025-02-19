import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t-2 border-slate-900 font-poppins w-full">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start justify-center">
          {/* Logo */}
          <div className="mb-4 flex justify-center items-center lg:ml-36">
            <img
              src="logo.jpg"
              alt="Logo"
              className="w-24 h-auto object-contain"
            />
          </div>
          {/* Designed & Developed by */}
          <p className="text-xl text-center md:text-left">
            Designed & Developed by{" "}
            <span className="font-bold text-blue-600 text-3xl font-Sacramento">
              Sandesh Acharya
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold mb-4 text-blue-600">Let's Connect!</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Saurav433" aria-label="GitHub">
              <div className="p-3 border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:text-black">
                <FaGithub className="text-2xl" />
              </div>
            </a>
            <a href="https://linkedin.com/in/saurav-g-c-885964324" aria-label="LinkedIn">
              <div className="p-3 border-2 border-white rounded-full transition-all duration-300 hover:bg-[#1469C7] hover:text-white">
                <FaLinkedin className="text-2xl" />
              </div>
            </a>
            <a href="mailto:Sauravgc2060@gmail.com" aria-label="Gmail">
              <div className="p-3 border-2 border-white rounded-full transition-all duration-300 hover:bg-[#EB493B] hover:text-white">
                <SiGmail className="text-2xl" />
              </div>
            </a>
            <a href="https://x.com/S4URAVgc" aria-label="X (Twitter)">
              <div className="p-3 border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:text-black">
                <FaXTwitter className="text-2xl" />
              </div>
            </a>
            <a href="https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv" aria-label="Instagram">
              <div className="p-3 border-2 border-white rounded-full transition-all duration-300 hover:bg-pink-500 hover:text-white">
                <FaInstagram className="text-2xl" />
              </div>
            </a>
          </div>
          <p className="text-md text-white mt-6  flex justify-center items-center text-center">
            &copy; {new Date().getFullYear()} Sandesh Acharya. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
