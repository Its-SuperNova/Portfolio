import React from 'react';
import styles from './style.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.awwwards.com" target="_blank" rel="noopener noreferrer">
        Awwwards
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
        Dribble
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
};

export default Footer;
