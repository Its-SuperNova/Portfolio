"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Hero from "./components/hero";
import Grid from "./components/bentoGrid";
import FloatingDock from "@/components/dock/dock";
import Hire from "./components/Hire";
import SlidingImages from "../../components/Projects";
import Footer from "../../components/Contact copy";
import Image from "next/image";

const Skills = () => {
  const githubImageRef = useRef(null);
  const githubImageInView = useInView(githubImageRef, { once: true });

  return (
    <>
      <div className="bg-black overflow-hidden">
        <FloatingDock />
        <Hero />
        <div className="flex items-center justify-center ">
          <Grid />
        </div>
        <div
          className="w-full flex justify-center items-center mb-[100px]"
          ref={githubImageRef}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={
              githubImageInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
            }
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.8, ease: "easeOut" },
            }}
          >
            <Image
              src="/images/github-bg.png"
              alt="GitHub"
              width={1325}
              height={1000}
            />
          </motion.div>
        </div>
        <Hire />
        <SlidingImages />
        <Footer />
      </div>
    </>
  );
};

export default Skills;
