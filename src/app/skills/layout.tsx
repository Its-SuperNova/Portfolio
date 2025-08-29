import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise - Ashwin Chandrasekar (Ashhhh) Creative Developer",
  description:
    "Explore Ashwin Chandrasekar's comprehensive skills and expertise in web development, design, and modern technologies. Specializing in React, Next.js, Framer Motion, TypeScript, and creative digital solutions.",
  keywords: [
    "Ashwin Chandrasekar skills",
    "Ashhhh skills",
    "Creative developer skills",
    "React developer skills",
    "Next.js developer skills",
    "Framer Motion skills",
    "TypeScript skills",
    "Frontend development skills",
    "UI/UX design skills",
    "Web development expertise",
    "JavaScript skills",
    "Tailwind CSS skills",
    "GSAP skills",
    "Lenis skills",
    "Creative design skills",
  ],
  openGraph: {
    title:
      "Skills & Expertise - Ashwin Chandrasekar (Ashhhh) Creative Developer",
    description:
      "Explore Ashwin Chandrasekar's comprehensive skills and expertise in web development, design, and modern technologies.",
    url: "https://ashhhh-portfolio.vercel.app/skills",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
