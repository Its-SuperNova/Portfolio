import React from 'react'
import Hero from "./components/hero"
import Grid from "./components/bentoGrid"
import FloatingDock from "@/components/dock/dock";
const skills = () => {
  return (
    <div className="bg-black">
      <FloatingDock />
      <Hero />
      <Grid />
    </div>
  );
}

export default skills
