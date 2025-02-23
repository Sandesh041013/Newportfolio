
import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      id="about"
      className="relative font-poppins min-h-screen text-white bg-black flex flex-col items-center justify-center px-4 py-12 lg:py-16"
      style={{ scrollMarginTop: "200px" }}
    >
      {/* Decorative blurred circles */}
      <div className="absolute top-[-100px] left-[1500px] w-80 h-80 bg-gray-500 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-100px] right-[1500px] w-80 h-80 bg-gray-500 opacity-20 rounded-full blur-3xl z-0"></div>

      {/* About Header & Description */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3">
          ABOUT ME
        </h2>
        <p className="text-lg sm:text-xl font-light opacity-80 max-w-2xl mx-auto">
          Get to know more about my journey, passion, and expertise in web
          development. Let's create something amazing together!
        </p>
      </div>

      {/* About Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl bg-gray-900 p-6 sm:p-10 rounded-lg">
        {/* Profile Image */}
        <div className="flex justify-center lg:w-1/2 mb-10 lg:mb-0">
          <div className="relative p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-300 shadow-2xl">
            <div className="w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl flex items-center justify-center">
              <img
                src="sandesh-removebg.png"
                alt="Profile Image"
                className="mt-48 lg:mt-64"
              />
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="space-y-6 text-center lg:text-left px-4 lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold text-blue-50 drop-shadow-lg">
            GET TO KNOW ME!
          </h1>
          <p className="text-base lg:text-xl font-light opacity-90 leading-relaxed">
            I'm <span className="border-b-2 border-blue-500 font-se">Sandesh Acharya</span>, a passionate
            <span className="font-medium"> web developer</span> dedicated to transforming ideas
            into interactive and responsive websites. With a strong focus on clean design and efficient coding practices,
            I craft digital experiences that truly resonate with users. Let's collaborate to bring your vision to life!
          </p>

          {/* Contact Button */}
          <div className="flex justify-center lg:justify-start">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 md:px-12 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-xl font-semibold shadow-lg opacity-90 hover:opacity-100 transition-transform hover:scale-105 cursor-pointer"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;