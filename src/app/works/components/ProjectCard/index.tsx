"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export interface Project {
  id: number;
  url: string;
  title: string;
  tags: string[];
  category: "Frontend" | "Full Stack";
  image: string;
  link?: string;
  description?: string;
  technologies?: string[];
  features?: string[];
  challenges?: string;
  solution?: string;
  sourceCode?: string;
  livePreview?: string;
  freelance?: boolean;
}

export interface CaseStudy {
  id: number;
  url: string;
  title: string;
  tags: string[];
  category: "Case Study";
  image: string;
}

const StyledFreelanceTag = styled.div`
  .freelance-tag {
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: #8b5cf6;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    font-size: 12px;
    font-weight: 600;
    color: white;
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
    min-width: 120px;
  }

  .freelance-tag:hover {
    background: #7c3aed;
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
    transform: translateY(-1px);
  }

  .freelance-tag svg {
    fill: white;
    transition: all 300ms ease;
    width: 14px;
    height: 14px;
  }

  .freelance-tag:hover svg {
    transform: scale(1.1);
  }
`;

export default function ProjectCard({
  project,
}: {
  project: Project | CaseStudy;
}) {
  const [imageError, setImageError] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if ("link" in project && project.link) {
      if (project.link.startsWith("http")) {
        window.open(project.link, "_blank");
      } else {
        router.push(project.link);
      }
    } else if ("url" in project) {
      // For case studies, navigate to the case study page
      router.push(`/works/case-studies/${project.url}`);
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

        {/* Freelancing Project Tag */}
        {"freelance" in project && project.freelance && (
          <div className="absolute top-4 left-4 z-10">
            <StyledFreelanceTag>
              <button className="freelance-tag">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
                </svg>
                Freelance
              </button>
            </StyledFreelanceTag>
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
