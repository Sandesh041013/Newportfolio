
// // import React from "react";
// // import {
// //   FaGithub,
// //   FaLinkedin,
// //   FaInstagram,
// //   FaRegEnvelope,
// // } from "react-icons/fa";
// // import { FaXTwitter } from "react-icons/fa6";
// // import About from "./About";
// // import Project from "./Project";
// // import Contact from "./Contact";
// // import Footer from "../../Navigation/Footer";
// // import { useNavigate } from "react-router-dom";
// // import SpotlightNewDemo from "../AnimationPages/SpotlightComponent";

// // const Home = () => {
// //   const logo = [
// //     {
// //       id: 0,
// //       icon: <FaGithub />,
// //       name: "Github",
// //       color: "white",
// //       to: "https://github.com/Saurav433",
// //     },
// //     {
// //       id: 1,
// //       icon: <FaLinkedin />,
// //       name: "LinkedIN",
// //       color: "blue-600",
// //       to: "https://linkedin.com/in/saurav-g-c-885964324",
// //     },
// //     {
// //       id: 2,
// //       icon: <FaInstagram />,
// //       name: "Instagram",
// //       color: "pink-500",
// //       to: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
// //     },
// //     {
// //       id: 3,
// //       icon: <FaXTwitter />,
// //       name: "Twitter",
// //       color: "white",
// //       to: "https://x.com/S4URAVgc",
// //     },
// //     {
// //       id: 4,
// //       icon: <FaRegEnvelope />,
// //       name: "Email",
// //       color: "[#EB493B]",
// //       to: "mailto:Sauravgc2060@gmail.com",
// //     },
// //   ];

// //   return (
// //     // Outer wrapper to prevent horizontal overflow on small/medium devices
// //     <div className="overflow-x-hidden">
// //       <div
// //         className="font-poppins text-white w-full h-screen relative flex items-center justify-center"
// //         id="home"
// //       >
// //         {/* Main Section with Spotlight Effect */}
// //         <div className="w-full h-full flex flex-col items-center justify-center bg-black/[0.96] bg-grid-white/[0.02] relative">
// //           <SpotlightNewDemo />
// //           {/* Sidebar icons for large screens */}
// //           <div className="absolute hidden lg:grid top-1/3 left-0 z-40 space-y-2">
// //             {logo.map((item, index) => (
// //               <a
// //                 href={item.to}
// //                 key={index}
// //                 className={`flex items-center justify-end gap-6 p-2 transform -translate-x-28 hover:translate-x-0 hover:rounded-r-lg transition-transform duration-700 cursor-pointer bg-gradient-to-l from-slate-800 to-blue-300 opacity-90
// //                   ${
// //                     item.name === "Email"
// //                       ? "border-b rounded-br-lg shadow border-[#EB493B]"
// //                       : ""
// //                   }
// //                   ${
// //                     item.name === "Github"
// //                       ? "border-t rounded-tr-lg shadow-md"
// //                       : ""
// //                   }
// //                 `}
// //               >
// //                 <h1 className="text-lg font-medium text-black">{item.name}</h1>
// //                 <p className={`text-${item.color} text-3xl`}>{item.icon}</p>
// //               </a>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex lg:hidden space-x-4 bg-gray-900 px-4 py-2 rounded-lg shadow-lg">
// //         {logo.map((item, index) => (
// //           <a href={item.to} key={index} className="flex items-center gap-2">
// //             <p className="text-3xl">{item.icon}</p>
// //           </a>
// //         ))}
// //       </div>
// //       </div>

// //       <div>
// //         <About />
// //         <Project />
// //         <Contact />
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useState, useEffect } from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaRegEnvelope,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import About from "./About";
// import Project from "./Project";
// import Contact from "./Contact";
// import Footer from "../../Navigation/Footer";
// import SpotlightNewDemo from "../AnimationPages/SpotlightComponent";

// const Home = () => {
//   const [showIcons, setShowIcons] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Get the home section
//       const homeSection = document.getElementById("home");
//       if (homeSection) {
//         const rect = homeSection.getBoundingClientRect();
//         setShowIcons(rect.top >= 0 && rect.bottom <= window.innerHeight);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logo = [
//     {
//       id: 0,
//       icon: <FaGithub />,
//       name: "Github",
//       color: "white",
//       to: "https://github.com/Saurav433",
//     },
//     {
//       id: 1,
//       icon: <FaLinkedin />,
//       name: "LinkedIN",
//       color: "blue-600",
//       to: "https://linkedin.com/in/saurav-g-c-885964324",
//     },
//     {
//       id: 2,
//       icon: <FaInstagram />,
//       name: "Instagram",
//       color: "pink-500",
//       to: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//     },
//     {
//       id: 3,
//       icon: <FaXTwitter />,
//       name: "Twitter",
//       color: "white",
//       to: "https://x.com/S4URAVgc",
//     },
//     {
//       id: 4,
//       icon: <FaRegEnvelope />,
//       name: "Email",
//       color: "[#EB493B]",
//       to: "mailto:Sauravgc2060@gmail.com",
//     },
//   ];

//   return (
//     <div className="overflow-x-hidden">
//       <div
//         className="font-poppins text-white w-full h-screen relative flex items-center justify-center"
//         id="home"
//       >
//         <div className="w-full h-full flex flex-col items-center justify-center bg-black/[0.96] bg-grid-white/[0.02] relative">
//           <SpotlightNewDemo />

//           {/* Sidebar icons for large screens */}
//           <div className="absolute hidden lg:grid top-1/3 left-0 z-40 space-y-2">
//             {logo.map((item, index) => (
//               <a
//                 href={item.to}
//                 key={index}
//                 className={`flex items-center justify-end gap-6 p-2 transform -translate-x-28 hover:translate-x-0 hover:rounded-r-lg transition-transform duration-700 cursor-pointer bg-gradient-to-l from-slate-800 to-blue-300 opacity-90
//                   ${
//                     item.name === "Email"
//                       ? "border-b rounded-br-lg shadow border-[#EB493B]"
//                       : ""
//                   }
//                   ${
//                     item.name === "Github"
//                       ? "border-t rounded-tr-lg shadow-md"
//                       : ""
//                   }
//                 `}
//               >
//                 <h1 className="text-lg font-medium text-black">{item.name}</h1>
//                 <p className={`text-${item.color} text-3xl`}>{item.icon}</p>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Floating Icons (Visible Only in Home Section) */}
//       {showIcons && (
//         <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex lg:hidden space-x-4 bg-gray-700 px-4 py-2 rounded-lg shadow-lg z-50">
//           {logo.map((item, index) => (
//             <a href={item.to} key={index} className="flex items-center gap-2">
//               <p className="text-3xl">{item.icon}</p>
//             </a>
//           ))}
//         </div>
//       )}

//       <div>
//         <About />
//         <Project />
//         <Contact />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
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
import SpotlightNewDemo from "../AnimationPages/SpotlightComponent";

const Home = () => {
  const [showFloatingIcons, setShowFloatingIcons] = useState(true);

  useEffect(() => {
    const homeSection = document.getElementById("home");

    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingIcons(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(homeSection);

    return () => observer.disconnect();
  }, []);

  const logo = [
    {
      id: 0,
      icon: <FaGithub />,
      name: "Github",
      color: "white",
      to: "https://github.com/Sandesh041013",
    },
    {
      id: 1,
      icon: <FaLinkedin />,
      name: "LinkedIN",
      color: "blue-600",
      to: "https://linkedin.com/in/sandesh-acharya-7baa31295",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      name: "Instagram",
      color: "pink-500",
      to: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_u%2Fsandeshh232%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR32itdl4-Ae4PywI4e3SRCLn1fsWpyZh1OZ4VMc8kqleOhdveYuaT6S0D8_aem_tZA6gQXVVCE4XigKaB7nBw&h=AT1aFZWjHH0R6gAE3kXyDL1etmrQnpI1mREn9evqzgTDx9U3x2jrpaLyh8jiFfxP5DBhmMl_0OarQbkBet14r3w6W_2-dNPEe9nAxKSUBer01wsgoxSC6Hnbk6sNEuIXdX5PE48M6CjKeSb7",
    },
    {
      id: 3,
      icon: <FaXTwitter />,
      name: "Twitter",
      color: "white",
      to: "https://x.com/San_desh_07",
    },
    {
      id: 4,
      icon: <FaRegEnvelope />,
      name: "Email",
      color: "[#EB493B]",
      to: "mailto:sandeshacharya2003@gmail.com",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <div
        className="font-poppins text-white w-full h-screen relative flex items-center justify-center"
        id="home"
      >
        <div className="w-full h-full flex flex-col items-center justify-center bg-black/[0.96] bg-grid-white/[0.02] relative">
          <SpotlightNewDemo />

          {/* Sidebar icons for large screens */}
          {showFloatingIcons && (
            <div className="absolute hidden lg:grid top-1/3 left-0 z-40 space-y-2">
              {logo.map((item, index) => (
                <a
                  href={item.to}
                  key={index}
                  className={`flex items-center justify-end gap-6 p-2 transform -translate-x-28 hover:translate-x-0 hover:rounded-r-lg transition-transform duration-700 cursor-pointer bg-gradient-to-l from-slate-800 to-blue-300 opacity-90
                  ${
                    item.name === "Email"
                      ? "border-b rounded-br-lg shadow border-[#EB493B]"
                      : ""
                  }
                  ${
                    item.name === "Github"
                      ? "border-t rounded-tr-lg shadow-md"
                      : ""
                  }
                `}
                >
                  <h1 className="text-lg font-medium text-black">{item.name}</h1>
                  <p className={`text-${item.color} text-3xl`}>{item.icon}</p>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Floating icons for mobile */}
        {showFloatingIcons && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex lg:hidden space-x-4 bg-gray-900 px-4 py-2 rounded-lg shadow-lg">
            {logo.map((item, index) => (
              <a href={item.to} key={index} className="flex items-center gap-2">
                <p className="text-3xl">{item.icon}</p>
              </a>
            ))}
          </div>
        )}
      </div>

      <div>
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
