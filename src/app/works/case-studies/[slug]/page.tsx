"use client";
import React from "react";
import { caseStudies } from "../../data/case-studies";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Inter_Tight } from "next/font/google";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400"],
});

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CaseStudyPage = ({ params }: CaseStudyPageProps) => {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const caseStudy = caseStudies.find((cs) => cs.url === resolvedParams.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto pt-16 md:pt-28 ">
        {/* Back Button */}
        <div className="max-w-[1200px] md:mx-auto mx-[20px]">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <IoArrowBack />
            Back to Case Studies
          </motion.button>
        </div>

        {/* Case Study Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center flex flex-col gap-[32px] max-w-[1200px] md:mx-auto mx-[20px]">
            <h1
              className={`text-4xl md:text-6xl leading-[1.2] font-bold text-black text-left max-w-[800px] ${interTight.className}`}
            >
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap justify-start gap-2">
              {caseStudy.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Slides */}
          {caseStudy.slideImages && caseStudy.slideImages.length > 0 && (
            <div className="mt-16">
              <div className="flex flex-col space-y-0">
                {caseStudy.slideImages.map((slideImage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Image
                      src={slideImage}
                      alt={`${caseStudy.title} - Slide ${index + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      priority={index < 3} // Prioritize first 3 images
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
