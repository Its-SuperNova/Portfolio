"use client"
import styles from "./style.module.scss";
import { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
const Index: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [-500, 0]
  );

  return (
    <motion.div ref={container} style={{ y }} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.header}>
          <div className="text-[70px] ml-5">
            Your friendly chaos creator</div>
          <div className={styles.arrow}>
            <Image
              src="/icons/arrow-curve.svg"
              alt="Home"
              width={45}
              height={45}
            />
          </div>
        </div>
        <div className={styles.name}>
          <h2>Ashhhhhh </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
