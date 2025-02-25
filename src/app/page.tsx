"use client";

import { useEffect, useState } from "react";
import  FloatingDock  from "../components/dock/dock";
import Landing from "../components/Landing";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import Description from "../components/Description";
import SlidingImages from "../components/Projects";
import Image from "next/image"; // Import next/image
import { motion } from "framer-motion";
import Footer from "../components/Contact copy";
import { FaFigma } from "react-icons/fa6";
import Course from "../components/course";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);



  return (
    <main className="main overflow-hidden m-0">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <FloatingDock/>
      <Landing />
      <Description />
      <Course />
      <SlidingImages />
      <Footer />
    </main>
  );
}
