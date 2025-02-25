"use client"
import React from "react";
import Player from "react-lottie-player";
import animationData from "../json/Fried Egg.json"; 
import ShinyText from "../ui/shinyText";

const CourseNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full mt-[-30px]">
      <div className="w-full flex justify-center mb-5">
        <Player
          play
          loop
          animationData={animationData}
          className="w-full max-w-[500px] h-auto  sm:mt-24"
        />
      </div>
      <h2 className="text-[26px] text-center px-5 mt-[-50px] w-[800px]">
        <ShinyText
          colors={["black", "#616161", "#B6B6B6", "#616161", "black"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          I'm cooking up something awesome—stay tuned while these pages get
          prepped, seasoned, and served fresh!
        </ShinyText>
      </h2>
    </div>
  );
};

export default CourseNotFound;
