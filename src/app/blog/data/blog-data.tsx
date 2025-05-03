export interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Not to Design Modern UI",
    date: "Aug 15, 2024",
    readTime: "11 minutes read",
    image:
      "",
    slug: "how-not-to-design-modern-ui",
  },
  {
    id: 2,
    title: "Building Modern Web Applications with Next.js",
    date: "Dec 15, 2024",
    readTime: "8 minutes read",
    image: "/placeholder.svg?height=300&width=600",
    slug: "building-modern-web-apps-nextjs",
  },
  {
    id: 3,
    title: "The Art of Minimalist Design",
    date: "Dec 12, 2024",
    readTime: "5 minutes read",
    image: "/placeholder.svg?height=300&width=600",
    slug: "art-of-minimalist-design",
  },
  {
    id: 4,
    title: "TypeScript Best Practices for 2024",
    date: "Dec 10, 2024",
    readTime: "12 minutes read",
    image: "/placeholder.svg?height=300&width=600",
    slug: "typescript-best-practices-2024",
  },
  {
    id: 5,
    title: "Optimizing React Performance",
    date: "Dec 8, 2024",
    readTime: "10 minutes read",
    image: "/placeholder.svg?height=300&width=600",
    slug: "optimizing-react-performance",
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox: When to Use What",
    date: "Dec 5, 2024",
    readTime: "7 minutes read",
    image: "/placeholder.svg?height=300&width=600",
    slug: "css-grid-vs-flexbox",
  },
];
