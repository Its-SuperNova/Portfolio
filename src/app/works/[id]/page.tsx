"use client";

import { useParams } from "next/navigation";
import { projects } from "../data/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FiGithub } from "react-icons/fi";
import RoundButton from "@/components/buttons/roundButton";
import SlidingImages from "@/components/Projects";
import Footer from "@/components/Contact copy";
// import Footer from "@/components/Contact copy";
// import SlidingImages from "@/components/Projects";
export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();

  const project = projects.find((p) => p.url === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => router.push("/works")}
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
          >
            <IoArrowBack /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-[20px] py-12 max-w-[1200px]"
      >
        <button
          onClick={() => router.push("/works")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <IoArrowBack /> Back to Projects
        </button>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between mb-4">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <div className="flex gap-3">
              {project.sourceCode && (
                <RoundButton
                  className="h-10 border-none hover:bg-black group transition-all duration-500 hover:duration-200"
                  backgroundColor="black"
                  style={{
                    backgroundColor: "#eaeaea",
                    border: "none",
                    color: "#6f6f6f",
                  }}
                >
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm z-10 h-fill w-fill group-hover:text-white transition-all duration-500 group-hover:duration-300"
                  >
                    <FiGithub />
                    Source Code
                  </a>
                </RoundButton>
              )}
              {project.livePreview && (
                <RoundButton
                  className="h-10 border-none hover:bg-black group transition-all duration-500 hover:duration-200"
                  backgroundColor="blue"
                  style={{
                    backgroundColor: "#f1f1ff",
                    border: "none",
                    color: "#5454fe",
                  }}
                >
                  <a
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm z-10 h-fill w-fill group-hover:text-white transition-all duration-500 group-hover:duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Preview
                  </a>
                </RoundButton>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative aspect-[16/9] mb-8 rounded-[24px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>

          {project.technologies && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-black/90">
              Why I Built This
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {project.whyIBuiltThis.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.whyIBuiltThis.cards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-8 transition-all duration-300 hover:scale-[101%]"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <h3
                    className="font-medium text-xl mb-4"
                    style={{ color: card.textColor }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: card.textColor + "cc" }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-black/90">
              What I Learned
            </h2>
            <div className="space-y-12">
              {project.whatILearned.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-medium text-[#000000] mb-3">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-black/90">
              Design Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.designPrinciples.map((principle, index) => (
                <div key={index} className="bg-[#f7f7f7] p-8 rounded-2xl">
                  <div className="mb-4" style={{ color: principle.iconColor }}>
                    <Image
                      src={principle.icon}
                      alt={`${principle.title} icon`}
                      width={24}
                      height={24}
                      className="h-8 w-8"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {project.videoUrl && (
            <div className="relative mt-16 aspect-[1920/1080] my-12 rounded-[24px] overflow-hidden">
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </div>
      </motion.div>
      <SlidingImages />
      <Footer />
    </div>
  );
}
