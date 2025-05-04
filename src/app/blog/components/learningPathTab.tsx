"use client";

import { LearningPathCard } from "./learningCard";
import { learningPaths } from "../data/learningData";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "@/components/TextAnimations/SlideUpWord";

export function LearningPathsContent() {
  const { ref: inViewRef, inView: titleInView } = useInView();

  return (
    <>
      <div className="mb-16">
        <div ref={inViewRef}>
          <SlideUpWord
            title={["Ashhh's Recommended - Docs,", "Videos & Tools"]}
            isInView={titleInView}
          />
        </div>
      </div>

      <div className="mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {learningPaths.map((path) => (
            <LearningPathCard key={path.id} learningPath={path} />
          ))}
        </div>
      </div>
    </>
  );
}
