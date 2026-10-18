"use client";

import styles from "./style.module.scss";
import { useRef, useLayoutEffect, useCallback, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";
import GridDistortion from "../GridDistortion";

const COLUMN_LINES = [20, 40, 60, 80];

const HERO_FACE_LOGOS = [
  "/images/ashhh-logos/Ashwin.png",
  "/images/ashhh-logos/artist.png",
  "/images/ashhh-logos/cap.png",
  "/images/ashhh-logos/glass.png",
  "/images/ashhh-logos/ashwin-music.png",
] as const;

const LOGO_CYCLE_MS = 3500;

const settleEase = (progress: number) => {
  const tension = 5.5;
  return 1 - Math.exp(-tension * progress) * (1 + tension * progress);
};

const Home: React.FC<{ introReady?: boolean }> = ({ introReady = false }) => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const columnLines = useRef<Array<HTMLSpanElement | null>>([]);
  const heroNameBackdrop = useRef<HTMLImageElement>(null);
  const heroLogo = useRef<HTMLImageElement>(null);
  const xPercent = useRef(0);
  const direction = useRef(-1);
  const [landed, setLanded] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);
  const isFirstLogoRender = useRef(true);

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
    if (typeof window === "undefined") return;

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

  useLayoutEffect(() => {
    if (!landed) return;

    const lines = columnLines.current.filter(Boolean);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(lines, { scaleY: 1 });
      return;
    }

    const timeline = gsap.timeline();
    lines.forEach((line, index) => {
      timeline.to(
        line,
        {
          scaleY: 1,
          duration: 3.6,
          ease: settleEase,
        },
        index * 0.95
      );
    });

    return () => {
      timeline.kill();
    };
  }, [landed]);

  useLayoutEffect(() => {
    const el = heroNameBackdrop.current;
    if (!el || typeof window === "undefined") return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finalY = window.matchMedia("(max-width: 768px)").matches
      ? "-5%"
      : "-8%";

    if (!introReady) {
      gsap.set(el, { y: "52vh", force3D: true });
      return;
    }

    if (reduceMotion) {
      gsap.set(el, { y: finalY });
      return;
    }

    const tween = gsap.fromTo(
      el,
      { y: "52vh" },
      {
        y: finalY,
        duration: 1.75,
        ease: "power3.out",
        delay: 0.4,
      }
    );

    return () => {
      tween.kill();
    };
  }, [introReady]);

  useEffect(() => {
    HERO_FACE_LOGOS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (!introReady) return;

    const interval = window.setInterval(() => {
      setLogoIndex((current) => (current + 1) % HERO_FACE_LOGOS.length);
    }, LOGO_CYCLE_MS);

    return () => window.clearInterval(interval);
  }, [introReady]);

  useLayoutEffect(() => {
    const el = heroLogo.current;
    if (!el || typeof window === "undefined") return;

    if (isFirstLogoRender.current) {
      isFirstLogoRender.current = false;
      gsap.set(el, { opacity: 1, scale: 1 });
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(el, { opacity: 1, scale: 1 });
      return;
    }

    const tween = gsap.fromTo(
      el,
      { opacity: 0, scale: 0.88 },
      { opacity: 1, scale: 1, duration: 0.55, ease: "power2.out" }
    );

    return () => {
      tween.kill();
    };
  }, [logoIndex]);

  return (
    <>
      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        className={styles.landing}
        onAnimationComplete={(definition) => {
          if (definition === "enter") setLanded(true);
        }}
      >
        <div className={styles.heroBrand}>
          <div className={styles.heroLogoWrap}>
            <img
              ref={heroLogo}
              className={styles.heroLogo}
              src={HERO_FACE_LOGOS[logoIndex]}
              alt="Ashwin"
            />
          </div>
          <img
            className={styles.heroName}
            src="/images/logos/ashwin-name.png"
            alt=""
          />
        </div>
        <div className={styles.columnLines} aria-hidden="true">
          {COLUMN_LINES.map((x, index) => (
            <span
              key={x}
              ref={(node) => {
                columnLines.current[index] = node;
              }}
              className={styles.columnLine}
              style={{ left: `${x}%` }}
            />
          ))}
        </div>
        <div className={styles.heroNameBackdrop} aria-hidden="true">
          <img
            ref={heroNameBackdrop}
            className={styles.heroNameBackdropImg}
            src="/images/logos/ashwin-name.png"
            alt=""
          />
        </div>
        <div className={styles.heroMountain}>
          <GridDistortion
            imageSrc="/images/hero/bg-mountain.png"
            grid={47}
            radius={0.05}
            strength={0.06}
            relaxation={0.96}
            mode="drag"
            softness={0.2}
            chroma={0.3}
            idle={0.3}
            clickRipple
            intro={introReady}
          />
        </div>
        <div className={styles.heroCliff}>
          <GridDistortion
            imageSrc="/images/hero/Golden%20Cliffside%20Reflection.png"
            grid={47}
            radius={0.05}
            strength={0.06}
            relaxation={0.96}
            mode="drag"
            softness={0.2}
            chroma={0.3}
            idle={0.3}
            clickRipple
            intro={introReady}
          />
        </div>
        <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>Creative Developer & Designer-</p>
            <p ref={secondText}>Creative Developer & Designer-</p>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Home;
