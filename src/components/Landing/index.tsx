"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";
import Header from "../Header"
const Home: React.FC = () => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const xPercent = useRef(0);
  const direction = useRef(-1);

  // ✅ Move animate ABOVE useLayoutEffect to prevent "used before declaration" error
  const animate = useCallback(() => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });

    requestAnimationFrame(animate);
    xPercent.current += 0.1 * direction.current;
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-500px",
    });

    requestAnimationFrame(animate); // ✅ No more "used before declaration" error
  }, [animate]);

  return (
    <>
      <Header/>
      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        className={styles.landing}
      >
        <Image src="/images/kkk.png" fill={true} alt="background" />
        <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>Creative Developer & Designer-</p>
            <p ref={secondText}>Creative Developer & Designer-</p>
          </div>
        </div>
        <div data-scroll data-scroll-speed={0.1} className={styles.description}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
          <p>Creative</p>
          <p>Designer & Developer</p>
        </div>
      </motion.main>
    </>
  );
};

export default Home;
