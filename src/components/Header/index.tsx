"use client";
import { useRef } from "react";
import styles from "./style.module.scss";

interface HeaderProps {
  textColor?: "white" | "black";
}

const Index: React.FC<HeaderProps> = ({ textColor = "white" }) => {
  const header = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={header}
      className={styles.header}
      style={{ color: textColor === "white" ? "#fff" : "#000" }}
    >
      <div className={styles.logo}>
        <p className={styles.copyright}>©</p>
        <div className={styles.name}>
          <p className={styles.codeBy}>Code by</p>
          <p className={styles.dennis}>Ashwin&nbsp;</p>
          <p className={styles.snellenberg}>&nbsp;Chandrasekar</p>
        </div>
      </div>
      <div className={styles.nav}>
        <p>
          Passionate Creative Designer and Developer, dedicated to crafting
          innovative solutions and exceptional digital experiences through
          modern technologies
        </p>
      </div>
    </div>
  );
};

export default Index;
