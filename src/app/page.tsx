"use client";

import { useEffect, useState } from "react";
import FloatingDock from "../components/dock/dock";
import Landing from "../components/Landing";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import Description from "../components/Description";
import SlidingImages from "../components/Projects";
import Footer from "../components/Contact copy";
import Course from "../components/course";
import GetToKnow from "@/components/GetToKnow";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import RoundButton from "@/components/buttons/roundButton";
import { GitHubContributionCard } from "@/components/GitHubContributions";
import SlideUpWord from "@/components/TextAnimations/SlideUpWord";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [titleInView, setTitleInView] = useState(false); // Track title visibility
    const { ref: inViewRef, inView } = useInView({
      triggerOnce: false, // Allow the animation to repeat
      threshold: 0.1, // Trigger animation when 10% of the title is visible
    });

    useEffect(() => {
      setTitleInView(inView); // Update state based on visibility
    }, [inView]);
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
      <FloatingDock />
      <Landing />
      <Description />
      <Course />
      <div className="h-screen px-[170px] mt-[50px] mb-[100px] ">
        <GetToKnow />
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
          showThemeToggle={false}
          className="bg-white w-full"
          forceLightMode={true}
          githubUrl="https://github.com/Its-SuperNova"
        />
      </div>
      <SlidingImages />
      <Footer />
    </main>
  );
}
