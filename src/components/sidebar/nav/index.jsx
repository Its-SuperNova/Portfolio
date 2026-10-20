import React from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from '../anim';
import Curve from './Curve';

export default function index() {
  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
        <div className={styles.body}></div>
        <Curve />
    </motion.div>
  )
}
