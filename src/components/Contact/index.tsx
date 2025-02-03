import styles from "./style.module.scss";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

const Index: React.FC = () => {
  // Correctly type the ref as RefObject<HTMLDivElement>
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  );
  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [-500, 0]
  );
  const rotate: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [120, 90]
  );

  return (
    
      <motion.div  ref={container} className={styles.contact}>
        <div className={styles.body}>
          <div className={styles.subtitle}>That's all for now.</div>
          <div className={styles.title}>
            <h2>Got a project in mind?</h2>

            <h2>Let's Talk</h2>
            <motion.div style={{ x }} className={styles.buttonContainer}>
              <Rounded backgroundColor="#334BD3" className={styles.button}>
                <p>Get in touch</p>
              </Rounded>
            </motion.div>
          </div>
          <div className={styles.nav}>
            <div className={styles.info}>
              <div>
                <span>
                  <h3>Email</h3>
                  <p>its.ashwin.23@gmail.com</p>
                </span>
                <span>
                  <h3>Phone</h3>
                  <p>(+91) 8248669086</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    
  );
};

export default Index;
