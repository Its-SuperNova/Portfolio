"use client";

import { useEffect, useState } from "react";
import FloatingDock from "../components/dock/dock";
import Landing from "../components/Landing";
import Preloader from "../components/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import Description from "../components/Description";
import SlidingImages from "../components/Projects";
import Footer from "../components/Footer";
import Course from "../components/course";
import GetToKnow from "@/components/GetToKnow";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import RoundButton from "@/components/buttons/roundButton";
import { GitHubContributionCard } from "@/components/GitHubContributions";
import SlideUpWord from "@/components/TextAnimations/SlideUpWord";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [titleInView, setTitleInView] = useState(false); // Track title visibility
  const [githubImageInView, setGitHubImageInView] = useState(false); // Track GitHub image visibility

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false, // Allow the animation to repeat
    threshold: 0.1, // Trigger animation when 10% of the title is visible
  });

  const { ref: githubImageRef, inView: githubImageInViewState } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Trigger animation when 20% of the image is visible
  });

  useEffect(() => {
    setTitleInView(inView); // Update state based on visibility
  }, [inView]);

  useEffect(() => {
    setGitHubImageInView(githubImageInViewState); // Update state based on visibility
  }, [githubImageInViewState]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
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
      <FloatingDock />
      <Landing />
      <Description />
      <Course />
      <div className="h-screen px-[170px] mt-[50px] mb-[100px] ">
        <GetToKnow />
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
            width={1200}
            height={1000}
          />
        </motion.div>
      </div>
      {/* GitHub Contributions Section */}
      <div className="px-[170px] py-12 bg-white w-full">
        <div className="flex justify-between items-center mb-6">
          <div ref={inViewRef}>
            <SlideUpWord
              title={["My GitHub Contributions"]} // Pass the title as an array for animation
              isInView={titleInView} // Trigger animation based on visibility
            />
          </div>
          <RoundButton
            className="h-10 border-none hover:bg-black group transition-all duration-500 hover:duration-200"
            backgroundColor="black"
            style={{
              backgroundColor: "#eaeaea",
              border: "none",
              color: "#6f6f6f",
            }}
          >
            <Link
              href="https://github.com/Its-SuperNova"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm z-10 h-fill w-fill group-hover:text-white transition-all duration-500 group-hover:duration-300"
            >
              <FiGithub />
              Its-SuperNova
            </Link>
          </RoundButton>
        </div>
        <GitHubContributionCard
          username="Its-SuperNova"
          fallbackUsername="octocat"
          className="bg-white w-full"
          forceLightMode={true}
        />
      </div>
      <SlidingImages />
      <Footer />
    </main>
  );
}
