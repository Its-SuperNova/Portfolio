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

  const project = projects.find((p) => p.id === parseInt(id as string));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => router.push("/projects")}
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
          >
            <IoArrowBack /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12 max-w-[1200px]"
      >
        <button
          onClick={() => router.push("/projects")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <IoArrowBack /> Back to Projects
        </button>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
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

        <div className="relative aspect-[16/9] mb-8 rounded-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            quality={90}
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

          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="bg-[#e3ffdf] rounded-2xl p-8 col-span-2 transition-all duration-300 hover:scale-[102%] min-h-[420px] flex flex-col">
              <h3 className="text-[#1aa811] font-medium text-xl mb-4">
                Tech Stack
              </h3>
              <p className="text-[#1aa811]/80 text-lg">
                Next.js · React · TypeScript · Tailwind CSS · Framer Motion
              </p>
            </div>

            <div className="bg-[#ffefd6] rounded-2xl p-8 col-span-1 transition-all duration-300 hover:scale-[102%] min-h-[420px] flex flex-col">
              <h3 className="text-[#ff8303] font-medium text-xl mb-4">
                Project Type
              </h3>
              <p className="text-[#ff8303]/80 text-lg">{project.category}</p>
            </div>

            <div className="bg-[#ffe1f9] rounded-2xl p-8 col-span-1 transition-all duration-300 hover:scale-[102%] min-h-[420px] flex flex-col">
              <h3 className="text-[#d800b6] font-medium text-xl mb-4">
                Timeline
              </h3>
              <p className="text-[#d800b6]/80 text-lg">2 Months</p>
            </div>

            <div className="bg-[#ddf7ff] rounded-2xl p-8 col-span-1 transition-all duration-300 hover:scale-[102%] min-h-[420px] flex flex-col">
              <h3 className="text-[#0098cc] font-medium text-xl mb-4">Role</h3>
              <p className="text-[#0098cc]/80 text-lg">Full Stack Developer</p>
            </div>

            <div className="bg-[#fff2d9] rounded-2xl p-8 col-span-1 transition-all duration-300 hover:scale-[102%] min-h-[420px] flex flex-col">
              <h3 className="text-[#e69500] font-medium text-xl mb-4">
                Status
              </h3>
              <p className="text-[#e69500]/80 text-lg">Completed</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-black/90">
              Why I Built This
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Apple&apos;s website is widely recognized for its clean,
              minimalist design, meticulous attention to detail, and
              exceptionally smooth user experience. Inspired by this benchmark
              of quality, I set out to challenge myself by recreating a similar
              standard of excellence. This project became an opportunity not
              only to push my design and development skills but also to deepen
              my understanding of modern frontend techniques, best practices,
              and the principles that drive world-class user interfaces.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f0f0ff] rounded-2xl p-8 transition-all duration-300 hover:scale-[101%]">
                <h3 className="text-[#4b4bce] font-medium text-xl mb-4">
                  Design Excellence
                </h3>
                <p className="text-[#4b4bce]/80 text-lg leading-relaxed">
                  Apple sets the gold standard for digital design. Recreating
                  their website allowed me to study and implement their design
                  principles firsthand.
                </p>
              </div>
              <div className="bg-[#fff0f9] rounded-2xl p-8 transition-all duration-300 hover:scale-[101%]">
                <h3 className="text-[#cc4ba6] font-medium text-xl mb-4">
                  Technical Challenge
                </h3>
                <p className="text-[#cc4ba6]/80 text-lg leading-relaxed">
                  The Apple website incorporates subtle animations, responsive
                  layouts, and performance optimizations that presented an
                  excellent learning opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-black/90">
              What I Learned
            </h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium text-[#0077cc] mb-3">
                  1. Responsive Design Techniques
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I learned how to create truly responsive designs that maintain
                  visual integrity across all device sizes, using modern CSS
                  techniques like clamp() and container queries.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#ff8800] mb-3">
                  2. Performance Optimization
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I implemented various performance optimizations including
                  image lazy loading, code splitting, and efficient animations
                  to achieve a high Lighthouse score.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#9333ea] mb-3">
                  3. Animation Timing
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I gained a deeper understanding of how subtle timing
                  differences in animations can dramatically impact the
                  perceived smoothness and quality of a user interface.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-black/90">
              Design Principles
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#f7f7f7] p-8 rounded-2xl">
                <div className="text-[#ff6b00] mb-4">
                  <Image
                    src="/svg/design-priciple/minimalism.svg"
                    alt="Minimalism icon"
                    width={24}
                    height={24}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">Minimalism</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Embracing Apple&apos;s philosophy of &apos;less is more&apos;
                  by removing unnecessary elements and focusing on what truly
                  matters. Clean interfaces with purposeful design choices
                  create a more focused user experience.
                </p>
              </div>

              <div className="bg-[#f7f7f7] p-8 rounded-2xl">
                <div className="text-[#00bfff] mb-4">
                  <Image
                    src="/svg/design-priciple/white-space.svg"
                    alt="White Space icon"
                    width={24}
                    height={24}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">White Space</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Strategic use of negative space to create visual hierarchy,
                  improve readability, and give content room to breathe. White
                  space isn&apos;t empty space—it&apos;s a powerful design
                  element that guides the user&apos;s eye.
                </p>
              </div>

              <div className="bg-[#f7f7f7] p-8 rounded-2xl">
                <div className="text-[#9333ea] mb-4">
                  <Image
                    src="/svg/design-priciple/smooth-scroll.svg"
                    alt="Smooth Scroll icon"
                    width={24}
                    height={24}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">Smooth Scroll</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Implementing physics-based scrolling that feels natural and
                  responsive. Smooth scrolling creates a sense of fluidity and
                  control, making navigation feel like an extension of the
                  user&apos;s intentions.
                </p>
              </div>

              <div className="bg-[#f7f7f7] p-8 rounded-2xl">
                <div className="text-[#ff3366] mb-4">
                  <Image
                    src="/svg/design-priciple/animation.svg"
                    alt="Subtle Animations icon"
                    width={24}
                    height={24}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">Subtle Animations</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Thoughtful micro-interactions and smooth transitions that
                  enhance the user experience without being distracting.
                  Animations serve a purpose—they provide feedback, guide
                  attention, and add delight.
                </p>
              </div>

              <div className="bg-[#f7f7f7] p-8 rounded-2xl">
                <div className="text-[#00cc88] mb-4">
                  <Image
                    src="/svg/design-priciple/typo.svg"
                    alt="Typography Hierarchy icon"
                    width={24}
                    height={24}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">
                  Typography Hierarchy
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Careful attention to font sizes, weights, and spacing to
                  create clear visual hierarchy. Typography isn&apos;t just
                  about readability—it&apos;s about creating structure and
                  guiding users through content.
                </p>
              </div>

              <div className="bg-[#f7f7f7] p-8 rounded-2xl">
                <div className="text-[#ffaa00] mb-4">
                  <Image
                    src="/svg/design-priciple/user-experience.svg"
                    alt="Smooth User Experience icon"
                    width={24}
                    height={24}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">
                  Smooth User Experience
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Creating a frictionless journey through thoughtful interaction
                  design and performance optimization. Every element is designed
                  to work together harmoniously, ensuring users can accomplish
                  their goals with ease and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <SlidingImages />
      <Footer />
    </div>
  );
}
