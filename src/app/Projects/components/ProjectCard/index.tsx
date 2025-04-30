"use client";

import { motion } from "framer-motion";

export interface Project {
  id: number;
  title: string;
  tags: string[];
  category: "Frontend" | "Full Stack" | "Design";
  image: string;
  link?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden rounded-2xl mb-5">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="px-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-medium">{project.title}</h3>
      </div>
    </motion.div>
  );
}
