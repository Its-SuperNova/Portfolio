"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

export interface Project {
  id: number;
  url: string;
  title: string;
  tags: string[];
  category: "Frontend" | "Full Stack" | "Design";
  image: string;
  link?: string;
  description?: string;
  technologies?: string[];
  features?: string[];
  challenges?: string;
  solution?: string;
  sourceCode?: string;
  livePreview?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (project.link) {
      if (project.link.startsWith("http")) {
        window.open(project.link, "_blank");
      } else {
        router.push(project.link);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="overflow-hidden shadow-lg rounded-2xl mb-5 relative aspect-[16/9]">
        {!imageError ? (
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
            priority
            quality={90}
            loading="eager"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Image not available</span>
          </div>
        )}

        {/* Freelancing Project Tag - Only for LearnLogicify (id: 2) */}
        {project.id === 2 && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-full shadow-lg">
              <svg
                className="w-3 h-3 mr-1.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Freelancing Project
            </span>
          </div>
        )}
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
        <div className="relative">
          <h3 className="text-2xl font-medium transition-all duration-300 group-hover:translate-x-8">
            {project.title}
          </h3>
          <IoArrowForwardSharp className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
      </div>
    </motion.div>
  );
}
