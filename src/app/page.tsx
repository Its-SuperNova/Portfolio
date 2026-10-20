"use client";

import { useEffect, useState } from "react";
import FloatingDock from "../dock/dock";
import Landing from "../components/Landing";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import Description from "../components/Description";
import SlidingImages from "../components/Projects";
import Footer from "../components/Footer";
import Course from "../components/course";
import GetToKnow from "@/components/GetToKnow";
import Sidebar from "../components/sidebar";
export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [introReady, setIntroReady] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setIntroReady(true);
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="main overflow-hidden m-0">
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>
          Ashwin Chandrasekar (Ashhhh) - Creative Developer & Designer Portfolio
        </h1>
        <p>
          Welcome to Ashwin Chandrasekar&apos;s portfolio. I&apos;m a passionate
          Creative Designer and Developer, dedicated to crafting innovative
          solutions and exceptional digital experiences through modern
          technologies like Next.js, React, Framer Motion, and Tailwind CSS.
        </p>
        <p>
          Ashhhh portfolio showcases my work in web development, UI/UX design,
          and creative digital solutions. View my projects, case studies, and
          learn about my expertise in frontend development, React development,
          and modern web technologies.
        </p>
        <p>
          Contact Ashwin Chandrasekar for freelance web development, design
          projects, and creative digital solutions.
        </p>
      </div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Sidebar />
      <FloatingDock />
      <Landing introReady={introReady} />
      <Description />
      <Course />
      <div className="min-h-screen md:px-[170px] mt-[50px] mb-16 md:mb-[100px] relative z-10">
        <GetToKnow />
      </div>
      <SlidingImages />
      <Footer />
    </main>
  );
}
