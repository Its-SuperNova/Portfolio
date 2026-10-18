"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import styles from "./style.module.scss";
import { signature } from "./signature";

gsap.registerPlugin(DrawSVGPlugin);

const NameDraw = ({ play }: { play: boolean }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(path, {
        drawSVG: "100%",
        fill: signature.color,
        strokeWidth: 0,
      });
      return;
    }

    if (!play) return;

    gsap.set(path, { drawSVG: "0%", fill: "transparent", strokeWidth: 8 });

    const timeline = gsap.timeline();
    timeline.to(path, {
      drawSVG: "100%",
      duration: 2.8,
      ease: "power1.inOut",
    });
    timeline.to(
      path,
      {
        fill: signature.color,
        strokeWidth: 0,
        duration: 0.55,
        ease: "power1.out",
      },
      "-=0.35"
    );

    return () => {
      timeline.kill();
    };
  }, [play]);

  return (
    <svg
      className={styles.heroSignature}
      viewBox={signature.viewBox}
      role="img"
      aria-label="ashwin"
    >
      <path
        ref={pathRef}
        d={signature.d}
        fill="transparent"
        fillRule="evenodd"
        stroke={signature.color}
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NameDraw;
