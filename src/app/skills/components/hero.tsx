import React from 'react'
import Header from "../../../components/Header";
import BlurText from "@/components/ui/blurtext"
const hero = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className='flex h-screen w-full justify-center items-center'>
        <BlurText
          text="Isn't this so cool?!"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[100px] mb-8 text-white"
        />
      </div>
    </div>
  );
}

export default hero
