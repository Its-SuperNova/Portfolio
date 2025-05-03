"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

interface HeaderProps {
  textColor?: "white" | "black";
}

const Index: React.FC<HeaderProps> = ({ textColor = "white" }) => {
  const header = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsActive(false); // ✅ Fixed: No unnecessary re-renders
  }, [pathname]);

  useLayoutEffect(() => {
    if (!button.current) return;

    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "0",
        end: `${window.innerHeight}`,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
          setIsActive(false);
        },
      },
    });
  }, []);

  return (
    <>
      <div
        ref={header}
        className={styles.header}
        style={{ color: textColor === "white" ? "#fff" : "#000" }}
      >
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.dennis}>Ashwin&nbsp;</p>
            <p className={styles.snellenberg}>&nbsp;Chandrasekar</p>
          </div>
        </div>
        <div className={styles.nav}>
          <p>
            Passionate Creative Designer and Developer, dedicated to crafting
            innovative solutions and exceptional digital experiences through
            modern technologies
          </p>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Index;
