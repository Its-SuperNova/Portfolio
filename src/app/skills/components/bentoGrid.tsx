"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Card from "./card";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import Image from "next/image";
const BentoGrid = () => {
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
  const program = [
    { src: "/icons/skills/program/c.svg", alt: "C" },
    { src: "/icons/skills/program/py.svg", alt: "python" },
    { src: "/icons/skills/program/cpp.png", alt: "cpp" },
  ];
  const backend = [
    { src: <FaNodeJs size={30} />, tx: "green" },
    { src: <SiExpress size={30} />, tx: "white" },
    { src: <SiDjango size={30} />, tx: "#00F599" },
    { src: <SiRubyonrails size={30} />, tx: "red" },
  ];
  const vcs = [
    { src: "/icons/skills/git.svg", alt: "C" },
    { src: "/icons/skills/github.svg", alt: "python" },
  ];
  const webAnimation = [
    { src: "/icons/skills/framer-motion.png", alt: "C" },
    { src: "/icons/skills/gsap.png", alt: "python" },
    { src: "/icons/skills/lottie.png", alt: "python" },
  ];
  const db = [
    { src: <SiMysql size={30} />, tx: "#00618A" },
    { src: <BiLogoPostgresql size={30} />, tx: "#00618A" },
    { src: <SiMongodb size={30} />, tx: "#4FAA41" },
    { src: <IoLogoFirebase size={30} />, tx: "#F58220" },
  ];
  const cloud = [
    { src: "/icons/skills/docker.svg", alt: "CSS" },
    { src: "/icons/skills/aws.png", alt: "JavaScript" },
    { src: "/icons/skills/azure.png", alt: "TypeScript" },
  ];
  const cloud2 = [
    { src: "/icons/skills/gl.png", alt: "react" },
    { src: "/icons/skills/vercel.png", alt: "Redux" },
  ];
  const mobile = [{ src: "/icons/skills/react-native.png", alt: "react" }];
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const databaseRef = useRef(null);
  const uiuxRef = useRef(null);
  const stylingRef = useRef(null);
  const programmingRef = useRef(null);
  const versionControlRef = useRef(null);
  const webAnimationsRef = useRef(null);
  const cloudRef = useRef(null);
  const coreCSRef = useRef(null);
  const personalDevRef = useRef(null);
  const mobileDevRef = useRef(null);
  const testingRef = useRef(null);
  const graphicDesignRef = useRef(null);

  // **Track Scroll Direction (true = scrolling down, false = scrolling up)**
  const [scrollDirection, setScrollDirection] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      setScrollDirection(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  // **Dynamic Animation Variants based on Scroll Direction**
  const getAnimationVariants = (scrollingDown: boolean) => ({
    hidden: scrollingDown ? { opacity: 0, y: 50 } : { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: scrollingDown
      ? {
          opacity: 0,
          y: 50,
          transition: { duration: 0.4, ease: "easeIn" },
        }
      : {
          opacity: 0,
          y: -50,
          transition: { duration: 0.4, ease: "easeIn" },
        },
  });

  // **Detect when each component is in view**
  const frontendInView = useInView(frontendRef, {
    once: false,
    margin: "-10% 0px",
  });
  const backendInView = useInView(backendRef, {
    once: false,
    margin: "-10% 0px",
  });
  const databaseInView = useInView(databaseRef, {
    once: false,
    margin: "-10% 0px",
  });
  const uiuxInView = useInView(uiuxRef, {
    once: false,
    margin: "-10% 0px",
  });
  const stylingInView = useInView(stylingRef, {
    once: false,
    margin: "-10% 0px",
  });
  const programmingInView = useInView(programmingRef, {
    once: false,
    margin: "-10% 0px",
  });
  const versionControlInView = useInView(versionControlRef, {
    once: false,
    margin: "-10% 0px",
  });
  const webAnimationsInView = useInView(webAnimationsRef, {
    once: false,
    margin: "-10% 0px",
  });
  const cloudInView = useInView(cloudRef, {
    once: false,
    margin: "-10% 0px",
  });
  const coreCSInView = useInView(coreCSRef, {
    once: false,
    margin: "-10% 0px",
  });
  const personalDevInView = useInView(personalDevRef, {
    once: false,
    margin: "-10% 0px",
  });
  const mobileDevInView = useInView(mobileDevRef, {
    once: false,
    margin: "-10% 0px",
  });
  const testingInView = useInView(testingRef, {
    once: false,
    margin: "-10% 0px",
  });
  const graphicDesignInView = useInView(graphicDesignRef, {
    once: false,
    margin: "-10% 0px",
  });
  return (
    <div className="w-full max-w-[1536px] max-h-[1552px] ">
      <div className="h-full  w-full flex items-center justify-center">
        <div className="hidden md:grid grid-cols-12 grid-rows-[repeat(20,minmax(0,1fr))] gap-5 h-full w-full p-20">
          <motion.div
            ref={uiuxRef}
            initial="hidden"
            animate={uiuxInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-5 row-span-5 rounded-[20px] bg-[#1E1E1E]  text-white "
          >
            <Card />
          </motion.div>
          <motion.div
            ref={frontendRef}
            initial="hidden"
            animate={frontendInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-4 row-span-5 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2 px-2">
              <div className="grid grid-cols-[70px_70px_70px] justify-between grid-rows-1 items-center pr-[60px]  ">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
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
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
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
                frameworks and technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={stylingRef}
            initial="hidden"
            animate={stylingInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-3 row-span-6 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2 px-2">
              <div className="grid grid-cols-[70px_70px_70px] justify-between grid-rows-1 items-center">
                {styleSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
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
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
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
                tools and frameworks, ensuring a smooth user experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={backendRef}
            initial="hidden"
            animate={backendInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-4 row-span-4 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[70px_70px_70px_70px] justify-between grid-rows-1 items-center">
                {backend.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <div style={{ color: skill.tx }}>{skill.src}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-xl font-semibold">Back-End Development</h3>
              {/* Description */}
              <p className="text-gray-400 text-md font-light">
                Developing robust server-side logic and APIs to efficiently
                power dynamic and scalable web applications.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={databaseRef}
            initial="hidden"
            animate={databaseInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-3 row-span-4 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[70px_70px_70px] justify-between grid-rows-1 items-center">
                {program.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-xl font-semibold">Programming Languages</h3>
              {/* Description */}
              <p className="text-gray-400 text-md font-light">
                Proficient in problem-solving and applying languages to
                implement data structures and algorithms.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={programmingRef}
            initial="hidden"
            animate={programmingInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-2 row-span-5 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[70px_70px] justify-between grid-rows-1 items-center">
                {vcs.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-xl font-semibold">
                Version Control & Collaboration
              </h3>
              {/* Description */}
              <p className="text-gray-400 text-md font-light">
                Effectively managing code and collaborating on projects to
                ensure seamless teamwork.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={versionControlRef}
            initial="hidden"
            animate={versionControlInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-3 row-span-4 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[70px_70px_70px] justify-between grid-rows-1 items-center">
                {webAnimation.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-xl font-semibold">Web Animations</h3>
              {/* Description */}
              <p className="text-gray-400 text-md font-light">
                Creating seamless animations and transitions to enhance user
                engagement and interactivity.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={webAnimationsRef}
            initial="hidden"
            animate={webAnimationsInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-4 row-span-4 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[70px_70px_70px_70px] justify-between grid-rows-1 items-center">
                {db.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <div style={{ color: skill.tx }}>{skill.src}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-xl font-semibold">Database Management</h3>
              {/* Description */}
              <p className="text-gray-400 text-md font-light">
                Designing and managing databases to ensure secure, reliable, and
                efficient data storage, retrieval, and optimization.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={cloudRef}
            initial="hidden"
            animate={cloudInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-3 row-span-5 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2 px-2">
              <div className="grid grid-cols-[70px_70px_70px] justify-between grid-rows-1 items-center">
                {cloud.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-[70px_70px] gap-4 grid-rows-1 justify-center items-center  mt-2">
                {cloud2.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-xl font-semibold">Cloud & Deployment</h3>
              {/* Description */}
              <p className="text-gray-400 text-md font-light">
                Experienced in deploying and managing applications using modern
                cloud platforms and tools.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={coreCSRef}
            initial="hidden"
            animate={coreCSInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-5 row-span-4 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="rounded-full text-md font-thin py-2 px-5 bg-[#141414]">
                  Operating System
                </div>
                <div className="rounded-full text-md font-thin py-2 px-5 bg-[#141414]">
                  Object-Oriented Programming
                </div>
              </div>
              <div className="flex gap-2">
                <div className="rounded-full text-md font-thin py-2 px-5 bg-[#141414]">
                  Computer Networks
                </div>
                <div className="rounded-full text-md font-thin py-2 px-5 bg-[#141414]">
                  DSA
                </div>
                <div className="rounded-full text-md font-thin py-2 px-5 bg-[#141414]">
                  System Design
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-xl font-semibold">
                Core Computer Science Concepts
              </h3>
              {/* Description */}
              <p className="text-gray-400 text-md font-light">
                Strong foundation in computer science, including
                problem-solving, system design, and efficient computing for
                scalable solutions.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={personalDevRef}
            initial="hidden"
            animate={personalDevInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-4 row-span-5 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex gap-3">
                <div className="rounded-full text-md font-thin py-2 px-5 bg-[#141414]">
                  Time Management
                </div>
                <div className="rounded-full text-md font-thin py-2 px-5 bg-[#141414]">
                  Leadership
                </div>
              </div>
              <div className="flex gap-2">
                <div className="rounded-full text-md font-thin py-2 px-5 bg-[#141414]">
                  Communication
                </div>
                <div className="rounded-full text-md font-thin py-2 px-5 bg-[#141414]">
                  Problem Solving
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-xl font-semibold">Personal Development</h3>
              {/* Description */}
              <p className="text-gray-400 text-md font-light">
                Committed to continuous learning and personal growth by
                exploring new technologies, enhancing problem-solving skills,
                and adapting to industry trends to excel in both professional
                and collaborative environments.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={mobileDevRef}
            initial="hidden"
            animate={mobileDevInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-3 row-span-4 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[70px] justify-between grid-rows-1 items-center">
                {mobile.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-xl font-semibold">Mobile App Development</h3>
              {/* Description */}
              <p className="text-gray-400 text-md font-light">
                Creating cross-platform mobile apps with sleek designs and
                robust functionality.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={testingRef}
            initial="hidden"
            animate={testingInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-3 row-span-4 rounded-[20px] bg-[#1E1E1E] text-white p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[70px_70px_70px] justify-between grid-rows-1 items-center">
                {webAnimation.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[70px] h-[70px]"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      className="w-9 h-9"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Title */}
              <h3 className="text-xl font-semibold">Testing & Debugging</h3>
              {/* Description */}
              <p className="text-gray-400 text-md font-light">
                Ensuring code quality and reliability through rigorous testing
                and debugging processes.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={graphicDesignRef}
            initial="hidden"
            animate={graphicDesignInView ? "visible" : "hidden"}
            exit="exit"
            variants={getAnimationVariants(scrollDirection)}
            className="col-span-2 row-span-4 rounded-[20px] text-white flex flex-col justify-between relative overflow-hidden"
          >
            <Image
              src="/images/ashh.jpeg"
              alt="Graphic Design"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover -z-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
