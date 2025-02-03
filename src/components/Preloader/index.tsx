"use client";

import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import DecryptedText from "../TextAnimations/split";
import { Bricolage_Grotesque } from "next/font/google"; // ✅ Corrected Import

const bricolage = Bricolage_Grotesque({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const words = ["Ashhhh’s Creative Space"];

const Introduction: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    {
      width: 0,
      height: 0,
    }
  );

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;

    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );

    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className={`${bricolage.className} text-4xl font-semibold`} // ✅ Applied Font
          >
            {words[index]}
          </motion.p>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit" />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Introduction;
