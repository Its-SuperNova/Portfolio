"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "@/components/TextAnimations/SlideUpWord";
import FadeTransition from "@/components/TextAnimations/textFade";
import { motion } from "framer-motion";
import {
  gridSlideUp,
  gridFadeIn,
} from "@/components/TextAnimations/animation";
export default function GetToKnow() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: gridRef, inView: isGridInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["The Creative Developer", "You Wish You Hired Sooner!"];
  const description =
    "I don’t just build websites—I create high-energy digital experiences that look stunning, feel seamless, and perform like a dream. Whether it's designing sleek, user-first interfaces or developing high-performance applications, I bring bold creativity, technical mastery, and a touch of magic to every project.";

  return (
    <div ref={descriptionRef} className="w-full h-full  py-12">
      <div className="max-w-[1400px] flex flex-col items-start gap-6">
        <SlideUpWord
          title={title}
          isInView={isInView}
          className="text-3xl leading-tight"
        />
        <div className="text-2xl font-thin text-[#AAAAAA]">
          <FadeTransition description={description} isInView={isInView} />
        </div>

        {/* Grid Section */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12"
        >
          {[
            {
              number: "01",
              title: "Designing",
              text: "I craft visually striking, immersive interfaces that don’t just look good—they feel alive. Think smooth animations, intuitive layouts, and razor-sharp attention to detail that captivate users and keep them hooked.",
            },
            {
              number: "02",
              title: "Developing",
              text: "I don’t just write code—I engineer powerful, high-speed applications that are as smooth as butter. From next-level frontend magic to rock-solid backend systems, I make sure everything runs blazing fast, bug-free, and future-ready.",
            },
            {
              number: "03",
              title: "The Ultimate Blend",
              text: "Why choose between design and development when you can have both at peak performance? I merge UI/UX brilliance with technical mastery, ensuring every project is visually iconic, functionally flawless, and insanely engaging.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative pt-10"
              variants={gridSlideUp}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              {/* Numbering (01, 02, 03) */}
              <span className="absolute top-[-20px] left-0 text-lg text-gray-400 font-light">
                {item.number}
              </span>

              {/* Border Line */}
              <div className="border-t border-gray-600"></div>

              {/* Title & Description */}
              <motion.h2
                className="text-[30px] font-normal pt-[33px]"
                variants={gridSlideUp}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
              >
                {item.title}
              </motion.h2>
              <motion.p
                className="text-lg text-[#AAAAAA] pt-[15px]"
                variants={gridFadeIn}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
