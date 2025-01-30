import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import { BsArrowUpRight } from "react-icons/bs";
import GsapMagnetic from "../buttons/magnetic/gsap";
import Magnetic from "../../common/Magnetic";

const Description: React.FC = () => {
  const phrase =
    "Driven by curiosity and a love for design, I create simple, functional, and visually striking digital experiences. As a student, I’m always learning and exploring new ideas.";

  const description = useRef<HTMLDivElement>(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p className={styles.mainPara}>
          {phrase.split(" ").map((word, index) => (
            <span key={index} className={styles.mask}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <div className={styles.right}>
          <motion.p
            className={styles.subPara}
            variants={opacity}
            animate={isInView ? "open" : "closed"}
          >
            The fusion of my passion for design, development, and seamless user
            experiences places me at the intersection of creativity and
            technology in the digital world.
          </motion.p>
          <div className={styles.about}>
            <Magnetic>
              <p className={styles.hoverEffect}>More about Ashhh</p>
            </Magnetic>
            <GsapMagnetic>
              <div className={styles.button}>
                <BsArrowUpRight />
              </div>
            </GsapMagnetic>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
