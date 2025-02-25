"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./animation";

// Define the types for props
interface FadeTransitionProps {
  description: string;
  isInView: boolean;
  className?: string; // Optional className prop
}

export default function FadeTransition({
  description,
  isInView,
  className,
}: FadeTransitionProps) {
  return (
    <motion.p
      variants={fadeIn}
      initial="initial"
      animate={isInView ? "open" : "initial"} 
    >
      {description}
    </motion.p>
  );
}
