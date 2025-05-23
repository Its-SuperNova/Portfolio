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

// Import Inter Tight font with specific weights
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400"],
});

type Category = "Frontend" | "Full Stack" | "Design";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<Category>("Frontend");

  // Filter projects based on category
  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <div className="min-h-screen">
      <Header textColor="black" />
      <div className="flex flex-col justify-center max-w-[1200px] mx-auto pt-32 mt-32">
        {/* First line */}
        <BlurText
          text="Projects that bring "
          delay={150}
          animateBy="words"
          direction="top"
          className={`text-[100px] text-black leading-none text-center ${interTight.className}`}
        />

        {/* Second line */}
        <BlurText
          text="my vision to life"
          delay={150}
          animateBy="words"
          direction="top"
          className={`text-[100px] text-black leading-none text-center ${interTight.className}`}
        />

        {/* Tab buttons */}
        <div className="flex gap-4 mt-12 items-center w-full">
          <RoundButton
            className="w-[130px] h-[56px] transition-all duration-300"
            style={{
              backgroundColor: activeTab === "Frontend" ? "black" : "white",
              color: activeTab === "Frontend" ? "white" : "black",
            }}
            onClick={() => setActiveTab("Frontend")}
          >
            <p className="z-10">Frontend</p>
          </RoundButton>
          <RoundButton
            className="w-[130px] h-[56px] transition-all duration-300"
            style={{
              backgroundColor: activeTab === "Full Stack" ? "black" : "white",
              color: activeTab === "Full Stack" ? "white" : "black",
            }}
            onClick={() => setActiveTab("Full Stack")}
          >
            <p className="z-10">Full Stack</p>
          </RoundButton>
          <RoundButton
            className="w-[100px] h-[56px] transition-all duration-300"
            style={{
              backgroundColor: activeTab === "Design" ? "black" : "white",
              color: activeTab === "Design" ? "white" : "black",
            }}
            onClick={() => setActiveTab("Design")}
          >
            <p className="z-10">Design</p>
          </RoundButton>
          <div className="flex-1" />
          <RoundButton className="w-[56px] h-[56px]">
            <LuListFilter className="z-10" />
          </RoundButton>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 mb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;
