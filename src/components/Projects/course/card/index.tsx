"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";


import SlideUpWord from "../../../TextAnimations/SlideUpWord";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import Styles from "./styles.module.css";
import { HiArrowRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

type CardProps = {
  image?: string;
  title: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ image, title, link }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null); // Reference for the image inside the container
  const [arrowSize, setArrowSize] = useState(45); // State to manage arrow size
  const [titleInView, setTitleInView] = useState(false); // Track title visibility

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false, // Allow the animation to repeat
    threshold: 0.1, // Trigger animation when 10% of the title is visible
  });

  useEffect(() => {
    setTitleInView(inView); // Update state based on visibility
  }, [inView]);

  useEffect(() => {
    const updateArrowSize = () => {
      if (window.innerWidth < 768) {
        setArrowSize(25); // Smaller arrow for screens below 768px
      } else {
        setArrowSize(45); // Default arrow size for larger screens
      }
    };

    // Initial check
    updateArrowSize();

    // Add resize event listener
    window.addEventListener("resize", updateArrowSize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateArrowSize);
  }, []);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (imageElement) {
      // Apply GSAP zoom in animation to the image inside the container
      gsap.fromTo(
        imageElement,
        { scale: 1.2 }, // Start state: zoomed in
        {
          scale: 1, // End state: original size
          duration: 1.5, // Slightly longer duration for smoother animation
          ease: "power2.out", // Smooth easing function
          scrollTrigger: {
            trigger: imageElement,
            start: "top 90%", // Animation starts when the image enters the viewport
            toggleActions: "play none none reset", // Play animation and reset when it exits
          },
        }
      );
    }
  }, []);

  return (
    <Link href={link} passHref>
      <div ref={cardRef} className={Styles.main}>
        <div className={Styles.banner}>
          {image ? (
            <div className={Styles.aspectRatio}>
              <Image
                ref={imageRef} // Attach the ref to the image
                src={image}
                alt={title}
                className={Styles.content}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ) : (
            <div
              className={Styles.aspectRatio}
              style={{ backgroundColor: "gray" }}
            ></div>
          )}
        </div>
        <div className={Styles.stats}>
          <HiArrowRight size={arrowSize} /> {/* Dynamically set arrow size */}
          {/* Apply SlideUpWord animation to the title */}
          <div ref={inViewRef}>
            <SlideUpWord
              title={[title]} // Pass the title as an array for animation
              isInView={titleInView} // Trigger animation based on visibility
              className={Styles.title}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
