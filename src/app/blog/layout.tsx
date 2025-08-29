import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Resources - Ashwin Chandrasekar (Ashhhh) Creative Developer",
  description:
    "Explore Ashwin Chandrasekar's blog featuring web development tutorials, learning resources, and insights into modern web technologies. Discover guides on React, Next.js, Framer Motion, and creative development techniques.",
  keywords: [
    "Ashwin Chandrasekar blog",
    "Ashhhh blog",
    "Web development blog",
    "React tutorials",
    "Next.js tutorials",
    "Framer Motion tutorials",
    "Creative developer blog",
    "Web development resources",
    "Frontend development blog",
    "UI/UX design blog",
    "Coding tutorials",
    "Learning resources",
    "Web development guides",
  ],
  openGraph: {
    title: "Blog & Resources - Ashwin Chandrasekar (Ashhhh) Creative Developer",
    description:
      "Explore Ashwin Chandrasekar's blog featuring web development tutorials, learning resources, and insights into modern web technologies.",
    url: "https://ashhhh-portfolio.vercel.app/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
