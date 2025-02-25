"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Record<string, string | number>;
  easing?: [number, number, number, number];
  onAnimationComplete?: () => void;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = [0.25, 0.1, 0.25, 1], // Default easing
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Default animations based on direction
  const defaultFrom =
    direction === "top"
      ? { opacity: 0, filter: "blur(10px)", y: -50 }
      : { opacity: 0, filter: "blur(10px)", y: 50 };

  const defaultTo = { opacity: 1, filter: "blur(0px)", y: 0 };

  return (
    <p
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {elements.map((char, index) => (
        <motion.span
          key={index}
          initial={animationFrom || defaultFrom}
          animate={
            inView ? animationTo || defaultTo : animationFrom || defaultFrom
          }
          transition={{
            duration: 0.5,
            delay: (index * delay) / 1000,
            ease: easing,
          }}
          style={{
            display: "inline-block",
            willChange: "transform, filter, opacity",
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
        >
          {char === " " ? "\u00A0" : char}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
