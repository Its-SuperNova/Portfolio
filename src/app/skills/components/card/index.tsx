import React from 'react'
import styles from "./styles.module.css"

import { motion } from "framer-motion";
const index = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__border}></div>
      <div className="flex h-full flex-col justify-between">
        <div className="flex w-full justify-between gap-2 ">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center items-center bg-[#141414] rounded-full p-3 w-[80px] h-[80px] shadow-[0_0_15px_#D4B0FF,0_0_30px_#C940FF]"
          >
            <img src="/icons/skills/figma.svg" className="w-10 h-10" />
          </motion.div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div className="bg-white/5 backdrop-blur backdrop-opacity-50 text-white px-5 py-2 rounded-full flex items-center justify-center">
                Prototyping
              </div>
              <div className="bg-white/5 backdrop-blur backdrop-opacity-50 text-white px-5 py-2 rounded-full flex items-center justify-center">
                Wireframing
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-white/5 backdrop-blur backdrop-opacity-50 text-white px-5 py-2 rounded-full flex items-center justify-center">
                User Research
              </div>
              <div className="bg-white/5 backdrop-blur backdrop-opacity-50 text-white px-5 py-2 rounded-full flex items-center justify-center">
                Minimalist
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {/* Title */}
          <h3 className="text-xl font-semibold">
            UI/UX Design & User Experience
          </h3>
          {/* Description */}
          <p className="text-md font-light">
            Designing user-centric, intuitive interfaces with a focus on
            accessibility, responsiveness, and seamless navigation. Skilled in
            wireframing, prototyping, and design systems to enhance user
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index
