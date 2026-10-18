"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.scss";

const LINE = "#F04444";
const RING = { x: 1110, y: 292 };

const dots = Array.from({ length: 20 }, (_, index) => ({
  cx: 176 + (index % 5) * 10,
  cy: 118 + Math.floor(index / 5) * 10,
}));

function Cross({
  x,
  y,
  pulse = false,
}: {
  x: number;
  y: number;
  pulse?: boolean;
}) {
  return (
    <g
      data-fade
      data-marker
      data-pulse={pulse ? "" : undefined}
      transform={`translate(${x} ${y})`}
    >
      <line x1="-8" y1="0" x2="8" y2="0" />
      <line x1="0" y1="-8" x2="0" y2="8" />
      <circle r="1.7" fill={LINE} stroke="none" />
    </g>
  );
}

export default function HeroPattern() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = root.current;
    if (!node) return;

    const ctx = gsap.context(() => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ delay: 2.5 });

        timeline.to(
          "[data-grid]",
          { opacity: 1, duration: 0.9, ease: "power2.inOut" },
          0
        );

        timeline.to(
          "[data-curve]",
          {
            strokeDashoffset: 0,
            duration: 1.7,
            stagger: 0.22,
            ease: "sine.inOut",
          },
          0.2
        );

        timeline.to(
          "[data-ring]",
          {
            strokeDashoffset: 0,
            duration: 1.85,
            stagger: 0.16,
            ease: "power2.inOut",
          },
          0.45
        );

        timeline.to(
          "[data-connect]",
          {
            strokeDashoffset: 0,
            duration: 1.05,
            stagger: 0.14,
            ease: "sine.inOut",
          },
          1.05
        );

        timeline.to(
          "[data-marker], [data-accent]",
          {
            opacity: 1,
            duration: 0.45,
            stagger: 0.05,
            ease: "power2.out",
          },
          1.45
        );

        timeline.to(
          "[data-spin]",
          {
            rotation: 360,
            svgOrigin: `${RING.x} ${RING.y}`,
            duration: 54,
            repeat: -1,
            ease: "none",
          },
          2.15
        );

        timeline.to(
          "[data-spin-slow]",
          {
            rotation: -360,
            svgOrigin: "48 228",
            duration: 72,
            repeat: -1,
            ease: "none",
          },
          2.15
        );

        timeline.to(
          "[data-drift]",
          {
            x: 12,
            duration: 8.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          },
          2.15
        );

        timeline.to(
          "[data-pulse]",
          {
            opacity: 0.4,
            duration: 2.8,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          },
          2.15
        );
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className={styles.heroPattern} aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <g data-grid data-fade stroke={LINE} strokeOpacity="0.16" fill="none">
          {[160, 320, 480, 640, 800, 960, 1120, 1280].map((x) => (
            <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="560" />
          ))}
          {[90, 210, 330, 450, 560].map((y) => (
            <line key={`h-${y}`} x1="0" y1={y} x2="1440" y2={y} />
          ))}
          <line x1="200" y1="560" x2="200" y2="760" strokeOpacity="0.1" />
          <line x1="1240" y1="560" x2="1240" y2="740" strokeOpacity="0.1" />
        </g>

        <g
          fill="none"
          stroke={LINE}
          strokeOpacity="0.28"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          <path
            data-draw
            data-curve
            pathLength={1}
            strokeDasharray="1"
            d="M70 508 C250 470 420 392 610 404 C800 416 940 348 1110 292"
          />
          <path
            data-draw
            data-curve
            pathLength={1}
            strokeDasharray="1"
            d="M140 128 C330 96 500 176 670 154 C860 130 980 214 1110 292"
          />
          <path
            data-draw
            data-curve
            className={styles.optional}
            pathLength={1}
            strokeDasharray="1"
            d="M40 390 C220 300 520 250 760 330 C980 402 1080 250 1260 210"
          />
        </g>

        <g
          fill="none"
          stroke={LINE}
          strokeOpacity="0.24"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          <circle data-draw data-ring pathLength={1} strokeDasharray="1" cx={RING.x} cy={RING.y} r="58" />
          <circle data-draw data-ring pathLength={1} strokeDasharray="1" cx={RING.x} cy={RING.y} r="122" />
          <circle
            data-draw
            data-ring
            pathLength={1}
            strokeDasharray="0.72 1"
            cx={RING.x}
            cy={RING.y}
            r="188"
          />
          <g data-spin>
            <circle
              data-draw
              data-ring
              className={styles.optional}
              pathLength={1}
              strokeDasharray="0.38 1"
              cx={RING.x}
              cy={RING.y}
              r="258"
              strokeOpacity="0.18"
            />
          </g>
          <g data-spin-slow className={styles.optional}>
            <circle
              data-draw
              data-ring
              pathLength={1}
              strokeDasharray="0.22 1"
              cx="48"
              cy="228"
              r="168"
            />
            <circle
              data-draw
              data-ring
              pathLength={1}
              strokeDasharray="0.16 1"
              cx="48"
              cy="228"
              r="246"
              strokeOpacity="0.16"
            />
          </g>
        </g>

        <g
          fill="none"
          stroke={LINE}
          strokeOpacity="0.3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          <line data-draw data-connect pathLength={1} strokeDasharray="1" x1="480" y1="210" x2="480" y2="330" />
          <line data-draw data-connect pathLength={1} strokeDasharray="1" x1="640" y1="210" x2="760" y2="210" />
          <line data-draw data-connect pathLength={1} strokeDasharray="1" x1="800" y1="450" x2="930" y2="368" />
          <line
            data-draw
            data-connect
            className={styles.optional}
            pathLength={1}
            strokeDasharray="1"
            x1={RING.x}
            y1={RING.y}
            x2="1288"
            y2="210"
          />
        </g>

        <g
          data-accent
          data-fade
          className={styles.optional}
          fill="none"
          stroke={LINE}
          strokeOpacity="0.22"
          strokeLinecap="round"
          strokeDasharray="2.5 8"
        >
          <path d="M90 250 C280 210 460 300 620 240 C820 166 980 250 1110 170" />
          <circle cx="690" cy="168" r="36" />
        </g>

        <g
          data-drift
          data-accent
          data-fade
          className={styles.optional}
          fill={LINE}
          stroke="none"
          fillOpacity="0.28"
        >
          {dots.map((dot) => (
            <circle key={`${dot.cx}-${dot.cy}`} cx={dot.cx} cy={dot.cy} r="1.15" />
          ))}
        </g>

        <g stroke={LINE} strokeOpacity="0.4" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke">
          <Cross x={480} y={210} pulse />
          <Cross x={640} y={210} />
          <Cross x={800} y={450} pulse />
          <Cross x={320} y={330} />
          <Cross x={RING.x} y={RING.y} pulse />
          <g data-fade data-marker className={styles.optional} transform="translate(1110 170)">
            <line x1="-6" y1="0" x2="6" y2="0" />
            <line x1="0" y1="-6" x2="0" y2="6" />
            <line x1="-4" y1="-4" x2="4" y2="4" />
            <line x1="-4" y1="4" x2="4" y2="-4" />
          </g>
          <g data-fade data-marker className={styles.optional} transform="translate(960 450)">
            <line x1="-5" y1="0" x2="5" y2="0" />
            <line x1="0" y1="-5" x2="0" y2="5" />
            <line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" />
            <line x1="-3.5" y1="3.5" x2="3.5" y2="-3.5" />
          </g>
        </g>

        <g data-accent data-fade stroke={LINE} strokeOpacity="0.34" strokeLinecap="round" fill="none">
          <line x1="168" y1="292" x2="248" y2="292" strokeWidth="1.4" />
          <line x1="1180" y1="120" x2="1264" y2="120" strokeWidth="1.4" className={styles.optional} />
          <line x1="860" y1="90" x2="910" y2="90" />
        </g>
      </svg>
    </div>
  );
}
