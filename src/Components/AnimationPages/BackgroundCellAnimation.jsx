import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import classNames from "classnames";

// Utility function to combine classNames
export const cn = (...classes) => {
  return classNames(...classes);
};

// Main BackgroundCellAnimation Component
export const BackgroundCellAnimation = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 flex justify-center overflow-hidden">
      <BackgroundCellCore/>
    </div>
  );
};

// Core Logic for Animating the Background Cells
const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const size = 300;

  const handleMouseMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="h-full absolute -inset-[55px]">
      <div className="absolute h-[20rem] inset-y-16 overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-purple-600 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
      </div>
    </div>
  );
};

// Function for Generating the Pattern of Cells
const Pattern = ({ className, cellClassName }) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState(null);

  return (
    <div className={cn("flex flex-row relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div key={`matrix-row-${rowIdx}`} className="flex flex-col relative z-20 border-b">
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) + Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.02, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);



            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn("bg-transparent border-l border-b border-neutral-700", cellClassName)}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: [0, 1, 0.5] }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  animate={controls}
                  className="bg-blue-600 h-12 w-12"
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
export default BackgroundCellAnimation;
 
