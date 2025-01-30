import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

interface SliderItem {
  color: string;
  src: string;
}

const slider1: SliderItem[] = [
  {
    color: '#e3e5e7',
    src: 'c2.jpg',
  },
  {
    color: '#d6d7dc',
    src: 'decimal.jpg',
  },
  {
    color: '#e3e3e3',
    src: 'funny.jpg',
  },
  {
    color: '#21242b',
    src: 'google.jpg',
  },
];

const slider2: SliderItem[] = [
  {
    color: '#d4e3ec',
    src: 'maven.jpg',
  },
  {
    color: '#e5e0e1',
    src: 'panda.jpg',
  },
  {
    color: '#d7d4cf',
    src: 'powell.jpg',
  },
  {
    color: '#e1dad6',
    src: 'wix.jpg',
  },
];

const SlidingImages: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
};

export default SlidingImages;
