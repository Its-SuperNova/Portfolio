"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";

const Header: React.FC = () => {
  const header = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!button.current) return;

    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current!, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current!, {
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
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.dennis}>Ashwin</p>
            <p className={styles.snellenberg}>Chandrasekar</p>
          </div>
        </div>
        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a>Work</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a>About</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a>Blog</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a>Contact</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => setIsActive(!isActive)}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Header;
