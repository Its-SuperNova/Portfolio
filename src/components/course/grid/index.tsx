"use client";

import React from "react";
import Card from "@/app/works/components/ProjectCard";
import { projects } from "@/app/works/data/projects";

// Process projects to ensure correct image paths
const processedProjects = projects.map((project) => ({
  ...project,
  image: project.image.startsWith("/") ? project.image : `/${project.image}`,
}));

export default function ProjectGrid() {
  // Only show the first 4 projects on the home page
  const limitedProjects = processedProjects.slice(0, 4);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {limitedProjects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}
