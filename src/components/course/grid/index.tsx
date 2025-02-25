"use client";

import React from "react";
import Styles from "./styles.module.css";
import Card from "../card";

const CardGrid = () => {
  const cardData = [
    {
      image: "/images/courseCover/Learnlogicify.png",
      title: "Learnlogicify Landing Page",
      link: "https://learnlogicify-rebuild-beta.vercel.app/",
    },
    {
      image: "/images/courseCover/spotify.png",
      title: "Spotify Clone",
      link: "https://spotify-clone-frontend-jy0d.onrender.com/",
    },
    {
      image: "/images/courseCover/winzee.png",
      title: "WinZee Chatting app",
      link: "/course/pages/web-dev",
    },
  ];

  return (
    <div className={Styles.grid}>
      {cardData.map((data, index) => (
        <div key={index} className={Styles.row}>
          <Card image={data.image} title={data.title} link={data.link} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
