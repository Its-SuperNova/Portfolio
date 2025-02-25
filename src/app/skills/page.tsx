import React from 'react'
import Hero from "./components/hero"
import Grid from "./components/bentoGrid"
import FloatingDock from "@/components/dock/dock";
import Hire from "./components/Hire"
const skills = () => {
  return (
    <div className="bg-black">
      <FloatingDock />
      <Hero />
      <Grid />
      <Hire/>
    </div>
  );
}

export default skills
