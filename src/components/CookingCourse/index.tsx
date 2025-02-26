"use client";
import React, { useEffect, useState } from "react";
import animationData from "../json/Fried Egg.json";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("react-lottie-player"), { ssr: false });

const CourseNotFound = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start w-full mt-[-30px]">
      <div className="w-full flex justify-center mb-5">
        {isClient && (
          <Player
            play
            loop
            animationData={animationData}
            className="w-full max-w-[500px] h-auto md:max-w-[350px] md:max-h-[350px] sm:max-w-[250px] sm:max-h-[250px] sm:mt-24"
          />
        )}
      </div>
      <h2 className="text-[26px] text-gray-400 text-center px-5 mt-[-50px] w-[800px]">
        I&apos;m cooking up something awesome—stay tuned while these pages get
        prepped, seasoned, and served fresh!
      </h2>
    </div>
  );
};

export default CourseNotFound;
