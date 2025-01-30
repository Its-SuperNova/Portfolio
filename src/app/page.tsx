"use client";

import { useEffect, useState } from "react";
import { FloatingDock } from "../components/dock";
import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import { FaBlog, FaEnvelope } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import Landing from "../components/Landing";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import Description from "../components/Description";
import SlidingImages from "../components/SlidingImages";
import Contact from "../components/Contact";


export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Explicitly typing the state

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

  const items = [
    { title: "Home", icon: <AiFillHome />, href: "/" },
    { title: "Work", icon: <BsBriefcaseFill />, href: "/work" },
    { title: "About", icon: <AiOutlineInfoCircle />, href: "/about" },
    { title: "Blog", icon: <FaBlog />, href: "/blog" },
    { title: "Contact", icon: <FaEnvelope />, href: "/contact" },
  ];

  return (
    <main className="main">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={items} />
      </div>

      <Landing />
      <Description />
      <SlidingImages />
      <Contact />
    </main>
  );
}
