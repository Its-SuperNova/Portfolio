"use client";
import React from "react";
import { FloatingDock } from "../dock";

import Image from "next/image"; // Import next/image
import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa6";
const dock = () => {
  const items = [
    {
      title: "Home",
      icon: (
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{ stiffness: 200 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/icons/home.svg"
            alt="Home"
            width={24}
            height={24}
            className="invert"
          />
        </motion.div>
      ),
      href: "/",
    },
    {
      title: "Skills",
      icon: (
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{ stiffness: 200 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/icons/skill.svg"
            alt="Work"
            width={24}
            height={24}
            className="text-white"
          />
        </motion.div>
      ),
      href: "/skills",
    },
    {
      title: "Projects",
      icon: (
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{ stiffness: 200 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/icons/cube.svg"
            alt="About"
            width={24}
            height={24}
            className="text-white"
          />
        </motion.div>
      ),
      href: "/about",
    },
    {
      title: "Asshhh",
      icon: (
        <Image
          src="/images/ashh.jpeg"
          alt="Blog"
          fill
          className="object-cover rounded-full"
        />
      ),
      href: "/blog",
    },
    {
      title: "Blog",
      icon: (
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{ stiffness: 200 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/icons/File.svg"
            alt="About"
            width={24}
            height={24}
            className="text-white"
          />
        </motion.div>
      ),
      href: "/contact",
    },
    {
      title: "Github",
      icon: (
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{ stiffness: 200 }}
          className="flex items-center justify-center"
        >
          <FaFigma size={20} />
        </motion.div>
      ),
      href: "/figma",
    },
    {
      title: "Contact",
      icon: (
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.5 }}
          transition={{ stiffness: 200 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/icons/arrow-up.svg"
            alt="About"
            width={24}
            height={24}
            className="text-white"
          />
        </motion.div>
      ),
      href: "/contact",
    },
  ];
  return (
    <div>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={items} />
      </div>
    </div>
  );
};

export default dock;
