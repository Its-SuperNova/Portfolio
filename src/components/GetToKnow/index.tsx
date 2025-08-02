"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "@/components/TextAnimations/SlideUpWord";
import FadeTransition from "@/components/TextAnimations/textFade";
import { motion } from "framer-motion";
import { gridSlideUp, gridFadeIn } from "@/components/TextAnimations/animation";
import { useState, useEffect } from "react";

export default function GetToKnow() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: gridRef, inView: isGridInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["The Creative Developer", "You Wish You Hired Sooner!"];
  const title2 = ["The Creative Developer You Wish You Hired Sooner!"];
  const description =
    "I don’t just build websites—I create high-energy digital experiences that look stunning, feel seamless, and perform like a dream. Whether it's designing sleek, user-first interfaces or developing high-performance applications, I bring bold creativity, technical mastery, and a touch of magic to every project.";

  return (
    <div ref={descriptionRef} className="w-full py-8 md:py-12 px-5 md:px-0">
      <div className="max-w-[1400px] mx-auto flex flex-col items-start gap-4 md:gap-6">
        <SlideUpWord
          title={isMobile ? title2 : title}
          isInView={isInView}
          className="text-[24px] md:text-3xl leading-tight"
        />
        <div className="text-lg md:text-2xl font-thin text-[#535353]">
          <FadeTransition description={description} isInView={isInView} />
        </div>

        {/* Grid Section */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12 w-full"
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
              className="relative pt-8 md:pt-10"
              variants={gridSlideUp}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              {/* Numbering (01, 02, 03) */}
              <span className="absolute top-[-20px] left-0 text-base md:text-lg text-gray-400 font-light">
                {item.number}
              </span>

              {/* Border Line */}
              <div className="border-t border-gray-600"></div>

              {/* Title & Description */}
              <motion.h2
                className="text-2xl md:text-[30px] font-normal pt-6 md:pt-[33px]"
                variants={gridSlideUp}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
              >
                {item.title}
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-[#535353] pt-3 md:pt-[15px] leading-relaxed"
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
