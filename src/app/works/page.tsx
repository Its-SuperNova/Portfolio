import React from "react";
import FloatingDock from "@/components/dock/dock";
import Hero from "./components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Portfolio & Projects - Ashwin Chandrasekar (Ashhhh) Creative Developer",
  description:
    "Explore Ashwin Chandrasekar's (Ashhhh) impressive portfolio of web development projects, case studies, and creative digital solutions. View Apple Clone, LearnLogicify, Quarto, Cineflex and more.",
  keywords: [
    "Ashwin Chandrasekar portfolio",
    "Ashhhh projects",
    "Web development projects",
    "React projects",
    "Next.js projects",
    "Creative developer portfolio",
    "UI/UX design projects",
    "Frontend development",
    "Apple Clone project",
    "LearnLogicify",
    "Quarto project",
    "Cineflex project",
    "Case studies",
    "Web design portfolio",
  ],
  openGraph: {
    title:
      "Portfolio & Projects - Ashwin Chandrasekar (Ashhhh) Creative Developer",
    description:
      "Explore Ashwin Chandrasekar's (Ashhhh) impressive portfolio of web development projects, case studies, and creative digital solutions.",
    url: "https://ashhhh-portfolio.vercel.app/works",
  },
};

const WorksPage = () => {
  return (
    <div>
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>
          Portfolio & Projects - Ashwin Chandrasekar (Ashhhh) Creative Developer
        </h1>
        <p>
          Explore my impressive collection of web development projects and
          creative digital solutions. From Apple Clone to LearnLogicify, Quarto,
          and Cineflex - each project showcases my expertise in modern web
          technologies including Next.js, React, Framer Motion, and Tailwind
          CSS.
        </p>
        <p>
          My portfolio demonstrates creative development and design work,
          featuring responsive web applications, e-commerce solutions, movie
          booking platforms, and innovative digital experiences. View case
          studies and project details to understand my approach to web
          development and design.
        </p>
        <p>
          Ashhhh portfolio projects include frontend development, UI/UX design,
          and full-stack solutions that combine beautiful design with powerful
          functionality.
        </p>
      </div>

      <FloatingDock />
      <Hero />
    </div>
  );
};

export default WorksPage;
