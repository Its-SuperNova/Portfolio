"use client";

import React from "react";
import Card from "@/app/works/components/ProjectCard";
import { projects } from "@/app/works/data/projects";
import { caseStudies } from "@/app/works/data/case-studies";

// Process projects to ensure correct image paths
const processedProjects = projects.map((project) => ({
  ...project,
  image: project.image.startsWith("/") ? project.image : `/${project.image}`,
}));

export default function ProjectGrid() {
  // Manually specify which frontend project IDs to show (excluding the first case study)
  const selectedProjectIds = [1, 3, 4]; // Change these IDs to show different frontend projects

  // Get the first case study
  const firstCaseStudy = caseStudies[0];

  // Get selected frontend projects
  const selectedFrontendProjects = processedProjects.filter((project) =>
    selectedProjectIds.includes(project.id)
  );

  // Combine case study first, then frontend projects
  const allProjects = [firstCaseStudy, ...selectedFrontendProjects];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
      {allProjects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}
