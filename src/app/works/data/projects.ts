export interface Project {
  id: number;
  url: string;
  title: string;
  tags: string[];
  category: "Frontend" | "Full Stack" | "Design";
  image: string;
  link: string;
  description: string;
  technologies: string[];
  sourceCode?: string;
  livePreview?: string;
  whyIBuiltThis: {
    description: string;
    cards: {
      title: string;
      description: string;
      bgColor: string;
      textColor: string;
    }[];
  };
  whatILearned: {
    title: string;
    description: string;
  }[];
  designPrinciples: {
    title: string;
    description: string;
    icon: string;
    iconColor: string;
  }[];
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    url: "apple-clone",
    title: "Apple Clone",
    tags: ["Next.js", "React", "Framer Motion", "TailwindCSS"],
    category: "Frontend",
    image: "/images/project/apple.png",
    link: "/works/apple-clone",
    description:
      "This project is a meticulous recreation of Apple's official website, with a focus on capturing the distinctive minimalist aesthetic, smooth animations, and responsive design that Apple is known for. I challenged myself to replicate not just the visual elements, but also the subtle interactions and performance optimizations that make Apple's site feel so polished.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion",
      "TailwindCSS",
    ],
    sourceCode: "https://github.com/yourusername/apple-clone",
    livePreview: "https://apple-clone.vercel.app",
    whyIBuiltThis: {
      description:
        "Apple's website is widely recognized for its clean, minimalist design, meticulous attention to detail, and exceptionally smooth user experience. Inspired by this benchmark of quality, I set out to challenge myself by recreating a similar standard of excellence. This project became an opportunity not only to push my design and development skills but also to deepen my understanding of modern frontend techniques, best practices, and the principles that drive world-class user interfaces.",
      cards: [
        {
          title: "Design Excellence",
          description:
            "Apple sets the gold standard for digital design. Recreating their website allowed me to study and implement their design principles firsthand.",
          bgColor: "#f0f0ff",
          textColor: "#4b4bce",
        },
        {
          title: "Technical Challenge",
          description:
            "The Apple website incorporates subtle animations, responsive layouts, and performance optimizations that presented an excellent learning opportunity.",
          bgColor: "#fff0f9",
          textColor: "#cc4ba6",
        },
      ],
    },
    whatILearned: [
      {
        title: "Responsive Design Techniques",
        description:
          "I learned how to create truly responsive designs that maintain visual integrity across all device sizes, using modern CSS techniques like clamp() and container queries.",
      },
      {
        title: "Performance Optimization",
        description:
          "I implemented various performance optimizations including image lazy loading, code splitting, and efficient animations to achieve a high Lighthouse score.",
      },
      {
        title: "Animation Timing",
        description:
          "I gained a deeper understanding of how subtle timing differences in animations can dramatically impact the perceived smoothness and quality of a user interface.",
      },
    ],
    designPrinciples: [
      {
        title: "Minimalism",
        description:
          "Embracing Apple's philosophy of 'less is more' by removing unnecessary elements and focusing on what truly matters. Clean interfaces with purposeful design choices create a more focused user experience.",
        icon: "/svg/design-priciple/minimalism.svg",
        iconColor: "#ff6b00",
      },
      {
        title: "White Space",
        description:
          "Strategic use of negative space to create visual hierarchy, improve readability, and give content room to breathe. White space isn't empty space—it's a powerful design element that guides the user's eye.",
        icon: "/svg/design-priciple/white-space.svg",
        iconColor: "#00bfff",
      },
      {
        title: "Smooth Scroll",
        description:
          "Implementing physics-based scrolling that feels natural and responsive. Smooth scrolling creates a sense of fluidity and control, making navigation feel like an extension of the user's intentions.",
        icon: "/svg/design-priciple/smooth-scroll.svg",
        iconColor: "#9333ea",
      },
      {
        title: "Subtle Animations",
        description:
          "Thoughtful micro-interactions and smooth transitions that enhance the user experience without being distracting. Animations serve a purpose—they provide feedback, guide attention, and add delight.",
        icon: "/svg/design-priciple/animation.svg",
        iconColor: "#ff3366",
      },
      {
        title: "Typography Hierarchy",
        description:
          "Careful attention to font sizes, weights, and spacing to create clear visual hierarchy. Typography isn't just about readability—it's about creating structure and guiding users through content.",
        icon: "/svg/design-priciple/typo.svg",
        iconColor: "#00cc88",
      },
      {
        title: "Smooth User Experience",
        description:
          "Creating a frictionless journey through thoughtful interaction design and performance optimization. Every element is designed to work together harmoniously, ensuring users can accomplish their goals with ease and satisfaction.",
        icon: "/svg/design-priciple/user-experience.svg",
        iconColor: "#ffaa00",
      },
    ],
    videoUrl: "/videos/project/apple.mp4",
  },
  {
    id: 2,
    url: "learnlogicify-landing-lms",
    title: "LearnLogicify Landing & LMS",
    tags: ["Next.js", "React", "TailwindCSS", "Framer Motion", "GSAP", "Lenis"],
    category: "Frontend",
    image: "/images/project/Learnlogicify.png",
    link: "/works/learnlogicify-landing-lms",
    description:
      "This project is a full-fledged company website built for LearnLogicify Technologies during my frontend development internship. It includes multiple dynamic pages like Home, About, Team, Courses, Contact, and more — with a strong focus on clean UI, interactivity, and smooth UX. The courses page features 50+ course cards with filtering and dynamic content rendering for each course, making it an end-to-end functional and scalable LMS frontend.",
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Framer Motion",
      "GSAP",
      "Lenis",
    ],
    sourceCode: "Private (Internship Project)",
    livePreview: "https://learnlogicify.com",
    whyIBuiltThis: {
      description:
        "As a frontend intern at LearnLogicify, I took ownership of building their official website from scratch. The goal was to deliver a professional, high-performance, and scalable frontend architecture that reflects the company's brand and enables users to explore courses easily. This project helped me understand how real-world production websites are designed and deployed, and taught me how to collaborate in a company environment.",
      cards: [
        {
          title: "Real-World Internship Experience",
          description:
            "This was a live project for an actual company where I was trusted with complete frontend development responsibilities. It gave me deep insight into professional workflows and communication.",
          bgColor: "#f0fff0",
          textColor: "#2e7d32",
        },
        {
          title: "Dynamic & Scalable LMS",
          description:
            "From course filtering to certificate previews, I developed a scalable structure to handle 50+ courses with dynamic routing, reusable components, and smooth transitions.",
          bgColor: "#f9f0ff",
          textColor: "#8e44ad",
        },
      ],
    },
    whatILearned: [
      {
        title: "Production-Ready Frontend Development",
        description:
          "Learned how to structure a real company site with modular components, scalable routing, and proper UI/UX architecture under real deadlines.",
      },
      {
        title: "Smooth Scroll & Advanced Animations",
        description:
          "Worked with Lenis and GSAP to create buttery-smooth scrolling effects and engaging animations to enhance user engagement and polish.",
      },
      {
        title: "Dynamic Routing & Filtering Logic",
        description:
          "Implemented dynamic routes for each course and built reusable filtering components to make the LMS intuitive and user-friendly.",
      },
    ],
    designPrinciples: [
      {
        title: "User-Friendly Navigation",
        description:
          "The website was designed with an intuitive navigation structure to ensure a seamless browsing experience. Sticky headers, clearly defined sections, and smooth page transitions guide the user effortlessly through the site, making it easy to find relevant information without confusion.",
        icon: "/svg/design-priciple/user-experience.svg",
        iconColor: "#00bcd4",
      },
      {
        title: "Minimalist Aesthetic",
        description:
          "A clean, minimalist design was adopted to maintain focus on the content and brand message. Thoughtful use of white space, modern typography, and consistent color palettes contributed to a sleek and professional interface that aligns with LearnLogicify’s branding.",
        icon: "/svg/design-priciple/minimalism.svg",
        iconColor: "#9c27b0",
      },
      {
        title: "Lottie Animations",
        description:
          "Lottie animations were strategically integrated across key sections of the site to create interactive and visually appealing moments. These animations enhance user engagement by bringing static content to life while maintaining performance and responsiveness.",
        icon: "/svg/design-priciple/animation.svg",
        iconColor: "#ff7043",
      },
      {
        title: "Smooth Scrolling",
        description:
          "Using GSAP in combination with Lenis, smooth scrolling and scroll-based animations were implemented to elevate the user experience. These subtle but powerful effects ensure a fluid and immersive interaction as users move through the site.",
        icon: "/svg/design-priciple/smooth-scroll.svg",
        iconColor: "#ff9800",
      },
      {
        title: "Responsive",
        description:
          "The layout was crafted with a mobile-first approach to ensure optimal usability across all devices. From large desktops to small smartphones, every element adjusts gracefully, preserving visual consistency and functionality regardless of screen size.",
        icon: "/svg/design-priciple/white-space.svg",
        iconColor: "#00bfa5",
      },
      {
        title: "Performance-Focused",
        description:
          "Performance optimization was prioritized from the beginning — leveraging Next.js image optimization, efficient animations, and modular component structures to ensure fast load times, reduced layout shifts, and a smooth browsing experience for all users.",
        icon: "/svg/design-priciple/performance.svg",
        iconColor: "#4caf50",
      },
    ],

    videoUrl: "/videos/project/apple.mp4",
  },
];
