import React from "react";
import Header from "../../../components/Header";
import BlurText from "@/components/ui/blurtext";

const Hero = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-screen w-full flex-col justify-center items-center">
        {/* First line */}
        <BlurText
          text="Skills that fuel my"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[100px] text-white text-center"
        />

        {/* Second line - "passion" */}
        <BlurText
          text="passion"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[100px] text-white text-center"
        />
      </div>
    </div>
  );
};

export default Hero;
