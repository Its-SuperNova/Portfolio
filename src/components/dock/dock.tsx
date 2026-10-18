"use client";
import React from "react";
import { FloatingDock } from "../dock";

import Image from "next/image"; // Import next/image
import { motion } from "framer-motion";
import {
  SolarBox,
  SolarCode,
  SolarDocument,
  SolarFigma,
  SolarHome,
  SolarLetter,
} from "./solarIcons";

const iconMotion = {
  initial: { scale: 1 },
  whileHover: { scale: 1.5 },
  transition: { stiffness: 200 },
};

const dock = () => {
  const items = [
    {
      title: "Home",
      icon: (
        <motion.div
          {...iconMotion}
          className="flex items-center justify-center"
        >
          <SolarHome className="h-6 w-6" />
        </motion.div>
      ),
      href: "/",
    },
    {
      title: "Skills",
      icon: (
        <motion.div
          {...iconMotion}
          className="flex items-center justify-center"
        >
          <SolarCode className="h-6 w-6" />
        </motion.div>
      ),
      href: "/skills",
    },
    {
      title: "Projects",
      icon: (
        <motion.div
          {...iconMotion}
          className="flex items-center justify-center"
        >
          <SolarBox className="h-6 w-6" />
        </motion.div>
      ),
      href: "/works",
    },
    {
      title: "Asshhh",
      icon: (
        <div className="relative w-full h-full">
          <Image
            src="/images/ashh.jpeg"
            alt="Blog"
            fill
            sizes="(max-width: 768px) 40px, 48px"
            className="object-cover rounded-full"
          />
        </div>
      ),
      href: "/page-is-being-cooked",
    },
    {
      title: "Blog",
      icon: (
        <motion.div
          {...iconMotion}
          className="flex items-center justify-center"
        >
          <SolarDocument className="h-6 w-6" />
        </motion.div>
      ),
      href: "/blog",
    },
    {
      title: "Figma",
      icon: (
        <motion.div
          {...iconMotion}
          className="flex items-center justify-center"
        >
          <SolarFigma className="h-6 w-6" />
        </motion.div>
      ),
      href: "https://www.figma.com/@ashhhh",
    },
    {
      title: "Contact",
      icon: (
        <motion.div
          {...iconMotion}
          className="flex items-center justify-center"
        >
          <SolarLetter className="h-6 w-6" />
        </motion.div>
      ),
      href: "/contact",
    },
  ];
  return (
    <div>
      <div className="fixed bottom-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto z-50">
        <FloatingDock items={items} />
      </div>
    </div>
  );
};

export default dock;
