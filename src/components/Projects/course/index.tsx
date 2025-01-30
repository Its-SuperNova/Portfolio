"use client"
import React from 'react'
import styles from "./styles.module.css"
import Description from "./Description"
import Grid from "./grid"
 
const CoursePage: React.FC = () => {
  return (
    <div>
      <div className={styles.main}>
        <Description />
        <Grid />
      </div>
    </div>
  );
};

export default CoursePage
