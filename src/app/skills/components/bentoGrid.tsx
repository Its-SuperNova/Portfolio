"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "./card"
const bentoGrid = () => {
  const frontendSkills = [
    { src: "/icons/skills/frontend/html.svg", alt: "HTML" },
    { src: "/icons/skills/frontend/js.svg", alt: "JavaScript" },
    { src: "/icons/skills/frontend/ts.svg", alt: "TypeScript" },
  ];
  const frontendSkill2 = [
    { src: "/icons/skills/frontend/react.svg", alt: "react" },
    { src: "/icons/skills/frontend/redux.svg", alt: "Redux" },
    { src: "/icons/skills/frontend/nextjs.svg", alt: "next js" },
  ];
  const styleSkills = [
    { src: "/icons/skills/styles/css.svg", alt: "CSS" },
    { src: "/icons/skills/styles/tailwind.svg", alt: "JavaScript" },
    { src: "/icons/skills/styles/bootstrap.svg", alt: "TypeScript" },
  ];
  const styleSkill2 = [
    { src: "/icons/skills/styles/sass.svg", alt: "react" },
    { src: "/icons/skills/styles/materialui.svg", alt: "Redux" },
  ];
  return (
    <div className="h-full  w-full flex items-center justify-center">
      <div className="hidden md:grid grid-cols-12 grid-rows-[repeat(20,minmax(0,1fr))] gap-5 h-full w-full p-20">
        <div className="col-span-4 row-span-6 rounded-xl bg-[#1E1E1E] text-white p-7 flex flex-col justify-between">
          <div className="flex flex-col gap-2 px-2">
            <div className="grid grid-cols-[70px_70px_70px] justify-between grid-rows-1 items-center pr-[60px]  ">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                >
                  <img src={skill.src} alt={skill.alt} className="w-9 h-9" />
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-[70px_70px_70px] grid-rows-1 justify-between pl-[60px] items-center mt-2">
              {frontendSkill2.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                >
                  <img src={skill.src} alt={skill.alt} className="w-9 h-9" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {/* Title */}
            <h3 className="text-xl font-semibold">Front-End Development</h3>
            {/* Description */}
            <p className="text-gray-400 text-md font-light">
              Building engaging and user-friendly web interfaces using modern
              frameworks and technologies with expertise.
            </p>
          </div>
        </div>
        <div className="col-span-3 row-span-6 rounded-xl bg-[#1E1E1E] text-white p-7 flex flex-col justify-between">
          <div className="flex flex-col gap-2 px-2">
            <div className="grid grid-cols-[70px_70px_70px] justify-between grid-rows-1 items-center">
              {styleSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                >
                  <img src={skill.src} alt={skill.alt} className="w-9 h-9" />
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-[70px_70px] gap-4 grid-rows-1 justify-center items-center  mt-2">
              {styleSkill2.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                >
                  <img src={skill.src} alt={skill.alt} className="w-9 h-9" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {/* Title */}
            <h3 className="text-xl font-semibold">Styling & Design</h3>
            {/* Description */}
            <p className="text-gray-400 text-md font-light">
              Crafting visually appealing, responsive designs using styling
              tools and frameworks, ensuring a smooth user experience with
              attention to typography, color, and layout.
            </p>
          </div>
        </div>
        <div className="col-span-5 row-span-5 rounded-xl bg-[#1E1E1E]  text-white ">
          <Card/>
        </div>
        <div className="col-span-5 row-span-4 rounded-xl bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"></div>
        <div className="col-span-4 row-span-4 rounded-xl bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"></div>
        <div className="col-span-3 row-span-4 rounded-xl bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"></div>
        <div className="col-span-2 row-span-5 rounded-xl bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"></div>
        <div className="col-span-3 row-span-5 rounded-xl bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"></div>
        <div className="col-span-4 row-span-6 rounded-xl bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"></div>
        <div className="col-span-3 row-span-6 rounded-xl bg-[#1E1E1E]"></div>
        <div className="col-span-5 row-span-3 rounded-xl bg-[#1E1E1E]"></div>
        <div className="col-span-4 row-span-5 rounded-xl bg-[#1E1E1E]"></div>
        <div className="col-span-3 row-span-4 rounded-xl bg-[#1E1E1E]"></div>
        <div className="col-span-5 row-span-4 rounded-xl bg-[#1E1E1E]"></div>
      </div>
    </div>
  );
};

export default bentoGrid;
