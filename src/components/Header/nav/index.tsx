import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animation";
import Link from "./Link";
import Curve from "./Curve";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "Projects",
    href: "/page-is-being-cooked",
  },
  {
    title: "About",
    href: "/page-is-being-cooked",
  },
  {
    title: "Blog",
    href: "/page-is-being-cooked",
  },
  {
    title: "Figma",
    href: "https://www.figma.com/@ashhhh",
  },
  {
    title: "Contact",
    href: "/page-is-being-cooked",
  },
];

const Index: React.FC = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Link
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === `${data.href}-${index}`} // Ensure uniqueness
              setSelectedIndicator={() =>
                setSelectedIndicator(`${data.href}-${index}`)
              } 
            />
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Index;
