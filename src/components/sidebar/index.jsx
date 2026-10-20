'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
    <div className={styles.main}>

      <div className={styles.header}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.trigger}>
          <div className={styles.button}>
            <Image
              src="/svg/AI-Star.svg"
              alt=""
              width={15}
              height={16}
              className={`${styles.star} ${isActive ? styles.starActive : ""}`}
            />
          </div>
          <div className={styles.label}>
            <div className={styles.labelInner}>
              <p>Ashwin LLM</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}
