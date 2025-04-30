import { Project } from "../components/ProjectCard";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    tags: ["Next.js", "React", "Framer Motion", "TailwindCSS"],
    category: "Frontend",
    image: "/images/project/image.png",
    link: "/projects/1",
    description:
      "This project is a meticulous recreation of Apple's official website, with a focus on capturing the distinctive minimalist aesthetic, smooth animations, and responsive design that Apple is known for. I challenged myself to replicate not just the visual elements, but also the subtle interactions and performance optimizations that make Apple's site feel so polished.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion",
      "TailwindCSS",
    ],
    features: [
      "Responsive design with modern UI/UX",
      "Smooth page transitions and animations",
      "Dynamic project filtering",
      "Interactive components",
    ],
    challenges:
      "Implementing complex animations while maintaining performance and accessibility.",
    solution:
      "Utilized Framer Motion for optimized animations and implemented code splitting for better performance.",
    sourceCode: "https://github.com/yourusername/portfolio",
    livePreview: "https://your-portfolio.vercel.app",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full Stack",
    image: "/images/courseCover/winzee.png",
    link: "/projects/2",
    description:
      "A full-featured e-commerce platform with secure payment processing and real-time inventory management.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    features: [
      "Secure payment processing",
      "Real-time inventory management",
      "User authentication",
      "Order tracking",
    ],
    challenges:
      "Implementing secure payment processing and managing concurrent transactions.",
    solution:
      "Integrated Stripe for secure payments and implemented database transactions for data consistency.",
    sourceCode: "https://github.com/yourusername/ecommerce",
    livePreview: "https://your-ecommerce.vercel.app",
  },
  {
    id: 3,
    title: "UI Design System",
    tags: ["Figma", "Design System", "Components"],
    category: "Design",
    image: "/images/courseCover/spotify.png",
    link: "/projects/3",
    description:
      "A comprehensive design system with reusable components and consistent styling guidelines.",
    technologies: ["Figma", "Design System", "Component Library"],
    features: [
      "Reusable component library",
      "Consistent styling guidelines",
      "Documentation",
      "Design tokens",
    ],
    challenges:
      "Creating a scalable and maintainable design system that works across different projects.",
    solution:
      "Implemented atomic design principles and created detailed documentation for component usage.",
  },
];
