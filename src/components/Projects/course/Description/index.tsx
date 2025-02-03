"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../TextAnimations/SlideUpWord";
import { DM_Sans } from "next/font/google"; // Correct import name
import styles from "./styles.module.css";

// Load DM Sans with Latin subset and swap display
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Optional: Load specific font weights
  display: "swap",
});

export default function Index() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const buttonParallaxRef = useRef<HTMLDivElement>(null);
  const [offsetMultiplier, setOffsetMultiplier] = useState(0.2); // Default for larger screens

  useEffect(() => {
    // Update the offsetMultiplier based on window size
    const updateOffsetMultiplier = () => {
      if (window.innerWidth < 730) {
        setOffsetMultiplier(0.1); // Mild parallax effect on mobile
      } else {
        setOffsetMultiplier(0.2); // Original effect for larger screens
      }
    };

    // Initial check
    updateOffsetMultiplier();

    // Event listener for window resize
    window.addEventListener("resize", updateOffsetMultiplier);
    return () => {
      window.removeEventListener("resize", updateOffsetMultiplier);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const buttonElement = buttonParallaxRef.current;
      if (buttonElement) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * offsetMultiplier;
        buttonElement.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetMultiplier]);

  const title = ["Impressive Works"];
  const subTitle = [
    "HERE’S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.",
  ];

  return (
    <div ref={descriptionRef} className={styles.description}>
      {/* Apply DM Sans font to title only */}
      <SlideUpWord
        title={title}
        isInView={isInView}
        className={`${styles.title} ${dmSans.className}`}
      />
      {/* Subtitle without DM Sans font */}
      <SlideUpWord
        title={subTitle}
        isInView={isInView}
        className={styles.subTitle}
      />
    </div>
  );
}
