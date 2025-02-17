
import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-scroll";

const Nav = () => {
  const navitems = [
    { id: 0, name: "Home", target: "home" },
    { id: 1, name: "About", target: "about" },
    { id: 2, name: "Project", target: "project" },
    { id: 3, name: "Contact", target: "contact" },
  ];

  const [selectedLink, setSelectedLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const activeItem = navitems.find((item) => item.target === id);
          if (activeItem) {
            setSelectedLink(activeItem.name);
          }
        }
      });
    }, options);

    // Observe each section by id
    navitems.forEach((item) => {
      const section = document.getElementById(item.target);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navitems.forEach((item) => {
        const section = document.getElementById(item.target);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navitems]);

  return (
    <>
      <div className="fixed flex w-full z-50">
        <div className="fixed flex w-full justify-between text-white h-[3.9rem] items-center bg-black shadow-black p-3 z-50 shadow-lg">
          {/* Logo */}
          <div className="mx-4 md:mx-20 flex gap-4 items-center h-[3.9rem] mt-2">
            <img
              src="logo.jpg"
              alt="Logo"
              className="h-[3.6rem] w-18 cursor-pointer"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-4xl"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Navigation Items */}
          <div
            className={`flex-col md:flex-row md:flex items-center absolute md:static top-14 left-0 w-full bg-slate-800 md:bg-transparent md:w-auto transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "translate-y-[-200%]"
            } md:translate-y-0`}
          >
            <div className="mx-4 md:mx-20 space-y-2 md:space-y-0 md:space-x-10 flex md:flex-row flex-col relative">
              {navitems.map((item) => {
                const isActive = item.name === selectedLink;
                return (
                  <Link
                    key={item.id}
                    to={item.target}
                    smooth={true}
                    duration={800}
                    offset={-70} // adjust if you have a fixed header
                    onClick={() => setIsMenuOpen(false)}
                    onSetActive={() => setSelectedLink(item.name)}
                    className="relative text-xl font-semibold leading-10 no-underline cursor-pointer px-2"
                  >
                    {item.name}
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="z-50 rounded-r-3xl bg-gradient-to-r from-purple-500 to-pink-500 lg:h-[1.5px] h-[1px]"
          style={{
            scaleX,
            transformOrigin: "left",
            width: "100%",
            transition: { duration: 1, delay: 0.5 },
          }}
        />
      </div>
    </>
  );
};

export default Nav;
