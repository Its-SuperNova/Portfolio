import React from 'react'
import Hero from "./components/hero"
import Grid from "./components/bentoGrid"
import FloatingDock from "@/components/dock/dock";
import Hire from "./components/Hire"
import SlidingImages from "../../components/Projects";
import Footer from "../../components/Contact copy";
const skills = () => {
  return (
    <>
      <div className="bg-black">
        <FloatingDock />
        <Hero />
        <div className="flex items-center justify-center ">
          <Grid />
        </div>
        <Hire />
        <SlidingImages />
        <Footer />
      </div>
    </>
  );
}

export default skills
