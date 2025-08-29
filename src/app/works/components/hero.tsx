"use client";
import React, { useState } from "react";
import Header from "../../../components/Header";
import BlurText from "@/components/ui/blurtext";
import { Inter_Tight } from "next/font/google";
import { LuListFilter } from "react-icons/lu";
import RoundButton from "@/components/buttons/roundButton";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { caseStudies } from "../data/case-studies";

// Import Inter Tight font with specific weights
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400"],
});

type Category = "Frontend" | "Full Stack" | "Case Study";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<Category>("Frontend");

  // Filter projects and case studies based on category
  const getFilteredItems = () => {
    if (activeTab === "Case Study") {
      return caseStudies;
    }
    return projects.filter((project) => project.category === activeTab);
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="min-h-screen">
      <Header textColor="black" />
      <div className="md:mx-[60px]">
        <div className="flex flex-col justify-center max-w-[1200px] mx-auto md:pt-32 mt-24 md:mt-32">
          {/* First line */}
          <BlurText
            text="Projects that bring "
            delay={150}
            animateBy="words"
            direction="top"
            className={`text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-black leading-none text-center md:mx-0 mx-[20px] ${interTight.className}`}
          />

          {/* Second line */}
          <BlurText
            text="my vision to life"
            delay={150}
            animateBy="words"
            direction="top"
            className={`text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-black leading-none text-center md:mx-0 mx-[20px] ${interTight.className}`}
          />

          {/* Tab buttons */}
          <motion.div
            className="flex gap-2 md:gap-4 md:mt-12 mt-8 items-center w-full overflow-x-auto md:overflow-visible scrollbar-hide md:px-0 "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <RoundButton
                className="w-[130px] text-[14px] md:text-[16px] h-[44px] md:h-[56px] transition-all duration-300 ml-[20px] md:ml-0"
                style={{
                  backgroundColor: activeTab === "Frontend" ? "black" : "white",
                  color: activeTab === "Frontend" ? "white" : "black",
                }}
                onClick={() => setActiveTab("Frontend")}
              >
                <p className="z-10">Frontend</p>
              </RoundButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <RoundButton
                className="w-[130px] text-[14px] md:text-[16px] h-[44px] md:h-[56px] transition-all duration-300"
                style={{
                  backgroundColor:
                    activeTab === "Full Stack" ? "black" : "white",
                  color: activeTab === "Full Stack" ? "white" : "black",
                }}
                onClick={() => setActiveTab("Full Stack")}
              >
                <p className="z-10">Full Stack</p>
              </RoundButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <RoundButton
                className="w-[140px] text-[14px] md:text-[16px] h-[44px] md:h-[56px] transition-all duration-300"
                style={{
                  backgroundColor:
                    activeTab === "Case Study" ? "black" : "white",
                  color: activeTab === "Case Study" ? "white" : "black",
                }}
                onClick={() => setActiveTab("Case Study")}
              >
                <p className="z-10">Case Study</p>
              </RoundButton>
            </motion.div>
            <div className="flex-1" />
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <RoundButton className="w-[56px] h-[56px]">
                <LuListFilter className="z-10" />
              </RoundButton>
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <div className="mt-16 mb-32 md:mx-0 mx-[20px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
              >
                {filteredItems.map((item) => (
                  <ProjectCard key={item.id} project={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
