"use client";

import { useEffect, useState } from "react";
import { FloatingDock } from "../components/dock";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaBlog, FaEnvelope } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import Landing from "../components/Landing";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import Description from "../components/Description";
import SlidingImages from "../components/Projects";
import Contact from "../components/Contact";
import Image from "next/image"; // Import next/image
import { motion } from "framer-motion"; 
import Footer from "../components/Footer"
export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  // ✅ Updated items array with custom SVG icon inside motion.div
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
     href: "/work",
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
         src="/images/Assssshh.jpeg"
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
         <Image
           src="/icons/github.svg"
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
    <main className="main">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={items} />
      </div>
      <Landing />
      <Description />
      <SlidingImages />
      <Footer />
    </main>
  );
}
