"use client"
import { useRef } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import styles from './style.module.scss';
import Contact from '../Contact';
const SlidingImages: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div ref={container} className={styles.slidingImages}>
      <Contact/>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
};

export default SlidingImages;
