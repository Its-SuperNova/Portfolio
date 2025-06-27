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
  freelance: boolean;
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
    sourceCode: "https://github.com/Its-SuperNova/apple-clone",
    livePreview: "https://ashhhh-apple.vercel.app/",
    freelance: false,
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
        title: "Pixel Perfect Clone",
        description:
          "Achieved precise replication of Apple's design system with meticulous attention to spacing, typography, color palettes, and visual hierarchy to create an authentic Apple experience.",
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
    freelance: true,
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
          "A clean, minimalist design was adopted to maintain focus on the content and brand message. Thoughtful use of white space, modern typography, and consistent color palettes contributed to a sleek and professional interface that aligns with LearnLogicify's branding.",
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
  {
    id: 3,
    url: "quarto",
    title: "Quarto",
    tags: ["Next.js", "React", "TailwindCSS", "E-commerce UI"],
    category: "Frontend",
    image: "/images/project/quarto.png",
    link: "/works/quarto",
    description:
      "Quarto is a modern e-commerce front-end platform designed for a dress shop. It features a premium and minimalistic user interface that beautifully showcases clothing collections. Focused on delivering the best user experience, Quarto emphasizes smooth interactions, responsive design, and elegant visual presentation across all devices.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    sourceCode: "https://github.com/Its-SuperNova/quarto",
    livePreview: "https://quarto-theta.vercel.app/",
    freelance: false,
    whyIBuiltThis: {
      description:
        "I built Quarto to improve my front-end development skills while designing a modern, elegant shopping interface. Fashion-based UIs need to feel luxurious and clean, so I took this as an opportunity to focus on premium design aesthetics, animation, responsiveness, and user experience.",
      cards: [
        {
          title: "Design Showcase",
          description:
            "I wanted to create a visually pleasing layout that highlights fashion items in a premium way, similar to high-end e-commerce stores.",
          bgColor: "#f0f7ff",
          textColor: "#0066cc",
        },
        {
          title: "Front-end Skills",
          description:
            "This project helped me strengthen my skills in React, Next.js, TailwindCSS, and animations using Framer Motion, especially for crafting smooth, responsive user experiences.",
          bgColor: "#fff0f0",
          textColor: "#cc3366",
        },
      ],
    },
    whatILearned: [
      {
        title: "Responsive UI Design",
        description:
          "I learned how to craft layouts that adapt beautifully across desktop, tablet, and mobile devices using TailwindCSS and modern CSS techniques.",
      },
      {
        title: "Framer Motion",
        description:
          "I explored how to use Framer Motion to create subtle animations and micro-interactions that enhance the feel of the app without overwhelming the user.",
      },
      {
        title: "Component Reusability",
        description:
          "Creating reusable and clean components improved the maintainability of the code and made the project scalable for future features like filtering or cart.",
      },
    ],
    designPrinciples: [
      {
        title: "Visual Hierarchy",
        description:
          "Carefully designed product displays with strategic use of typography and spacing to guide the user's attention to key elements and calls-to-action.",
        icon: "/svg/design-priciple/typo.svg",
        iconColor: "#ff4757",
      },
      {
        title: "Whitespace Utilization",
        description:
          "Generous use of whitespace creates a clean, uncluttered shopping environment that emphasizes quality and allows each product to stand out.",
        icon: "/svg/design-priciple/white-space.svg",
        iconColor: "#2ed573",
      },
      {
        title: "Responsive Product Displays",
        description:
          "Adaptive product layouts that retain visual balance and clarity across all devices — from widescreen monitors to compact mobile screens.",
        icon: "/svg/design-priciple/minimalism.svg",
        iconColor: "#1e90ff",
      },
      {
        title: "Micro-interactions",
        description:
          "Smooth hover effects, animated transitions, and scroll-based interactions that make the UI feel dynamic and polished.",
        icon: "/svg/design-priciple/animation.svg",
        iconColor: "#ffa502",
      },
      {
        title: "Color Psychology",
        description:
          "A soft, neutral palette with accent colors used purposefully to evoke trust, luxury, and guide user attention toward key actions.",
        icon: "/svg/design-priciple/performance.svg",
        iconColor: "#7bed9f",
      },
      {
        title: "Intuitive Navigation",
        description:
          "Simple and clean navigation structure to help users effortlessly explore collections without any distractions.",
        icon: "/svg/design-priciple/user-experience.svg",
        iconColor: "#a29bfe",
      },
    ],
    videoUrl: "/videos/project/quarto.mp4",
  },
  {
    id: 4,
    url: "cineflex",
    title: "Cineflex",
    tags: ["Next.js", "React", "TailwindCSS", "Dark Theme", "Movie Booking"],
    category: "Frontend",
    image: "/images/project/cineflex.png",
    link: "/works/cineflex",
    description:
      "Cineflex is a modern movie booking application built with React and Next.js, featuring a sleek dark theme design. The app provides an immersive cinematic experience with intuitive seat selection, movie browsing, and ticket booking functionality. Designed with a focus on user experience, it offers smooth animations, responsive layouts, and an elegant interface that makes movie booking effortless and enjoyable.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    sourceCode: "https://github.com/Its-SuperNova/Cineflex",
    livePreview: "https://ashhhh-cineflex.vercel.app/",
    freelance: false,
    whyIBuiltThis: {
      description:
        "I built Cineflex to explore the complexities of creating a real-world booking system interface while experimenting with dark theme design principles. Movie booking apps require careful consideration of user flow, state management, and visual hierarchy. This project allowed me to combine my passion for cinema with frontend development, creating an interface that feels both modern and intuitive.",
      cards: [
        {
          title: "Complex UI Interactions",
          description:
            "Movie booking involves multiple steps - browsing, selecting seats, choosing showtimes, and payment flow. This complexity challenged me to create smooth, logical user journeys.",
          bgColor: "#f8f9ff",
          textColor: "#4338ca",
        },
        {
          title: "Dark Theme Mastery",
          description:
            "Dark themes require careful attention to contrast, readability, and visual hierarchy. This project helped me understand how to create elegant dark interfaces that reduce eye strain.",
          bgColor: "#f0fdf4",
          textColor: "#166534",
        },
      ],
    },
    whatILearned: [
      {
        title: "Dark Theme Design Principles",
        description:
          "Learned how to implement effective dark themes with proper contrast ratios, subtle gradients, and appropriate color palettes that enhance readability and user comfort during extended use.",
      },
      {
        title: "Complex State Management",
        description:
          "Managed complex booking states including seat selection, showtime scheduling, and user preferences while maintaining smooth performance and preventing booking conflicts.",
      },
      {
        title: "Responsive Cinema Layouts",
        description:
          "Created responsive seat selection interfaces and movie grids that work seamlessly across devices, adapting cinema layouts for mobile, tablet, and desktop experiences.",
      },
    ],
    designPrinciples: [
      {
        title: "Dark Theme Excellence",
        description:
          "Implemented a sophisticated dark theme with carefully chosen color palettes, proper contrast ratios, and subtle accent colors that create a premium cinematic atmosphere while ensuring accessibility.",
        icon: "/svg/design-priciple/minimalism.svg",
        iconColor: "#6366f1",
      },
      {
        title: "Intuitive Booking Flow",
        description:
          "Designed a logical, step-by-step booking process that guides users naturally from movie selection to seat choice to payment, minimizing confusion and abandoned bookings.",
        icon: "/svg/design-priciple/user-experience.svg",
        iconColor: "#8b5cf6",
      },
      {
        title: "Cinematic Animations",
        description:
          "Incorporated smooth transitions and micro-animations that evoke the excitement of cinema - from movie card hovers to seat selection feedback and loading states.",
        icon: "/svg/design-priciple/animation.svg",
        iconColor: "#f59e0b",
      },
      {
        title: "Mobile-First Booking",
        description:
          "Prioritized mobile experience since many users book tickets on-the-go, ensuring seat selection and navigation work perfectly on touch devices.",
        icon: "/svg/design-priciple/white-space.svg",
        iconColor: "#10b981",
      },
      {
        title: "Visual Hierarchy",
        description:
          "Used strategic typography, spacing, and color to guide users' attention to important information like showtimes, prices, and available seats.",
        icon: "/svg/design-priciple/typo.svg",
        iconColor: "#ef4444",
      },
      {
        title: "Performance Optimization",
        description:
          "Optimized image loading for movie posters, implemented efficient seat map rendering, and used lazy loading to ensure fast performance even with large datasets.",
        icon: "/svg/design-priciple/performance.svg",
        iconColor: "#06b6d4",
      },
    ],
    videoUrl: "/videos/project/cineflex.mp4",
  },
  {
    id: 5,
    url: "gemini-clone",
    title: "Gemini Clone",
    tags: ["React", "Vite", "TailwindCSS", "Google Gemini API", "AI Chat"],
    category: "Frontend",
    image: "/images/project/gemini.png",
    link: "/works/gemini-clone",
    description:
      "A modern AI chat application built with React and Vite, powered by Google's Gemini API. This project features a clean, intuitive interface for conversational AI interactions with real-time responses, code highlighting, and a responsive design. The app demonstrates integration with external AI APIs while maintaining excellent user experience and performance.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "Google Gemini API",
      "React Markdown",
    ],
    sourceCode: "https://github.com/Its-SuperNova/gemini-clone",
    livePreview: "https://ashhhh-gemini.vercel.app/",
    freelance: false,
    whyIBuiltThis: {
      description:
        "I built this Gemini Clone to explore AI integration in modern web applications and understand how to work with large language model APIs. The project was an opportunity to learn about real-time chat interfaces, API integration, and creating responsive AI-powered applications. It also helped me understand the challenges and best practices of building conversational AI interfaces.",
      cards: [
        {
          title: "AI Integration Learning",
          description:
            "This project taught me how to integrate external AI APIs into web applications, handle real-time responses, and manage conversation state effectively.",
          bgColor: "#f0f8ff",
          textColor: "#0066cc",
        },
        {
          title: "Modern Tech Stack",
          description:
            "Used Vite for fast development, React for UI, and TailwindCSS for styling to create a performant and maintainable codebase.",
          bgColor: "#fff0f0",
          textColor: "#cc3366",
        },
      ],
    },
    whatILearned: [
      {
        title: "API Integration & Error Handling",
        description:
          "Learned how to properly integrate external APIs, handle authentication, manage rate limits, and implement robust error handling for AI services.",
      },
      {
        title: "Real-time Chat Interface",
        description:
          "Built a responsive chat interface with message threading, loading states, and smooth animations that provide excellent user feedback during AI interactions.",
      },
      {
        title: "Code Highlighting & Markdown",
        description:
          "Implemented syntax highlighting for code responses and markdown rendering to properly display AI-generated content including code snippets and formatted text.",
      },
    ],
    designPrinciples: [
      {
        title: "Conversational Design",
        description:
          "Designed the interface to feel like a natural conversation, with clear message bubbles, proper spacing, and intuitive input areas that make AI interactions feel seamless and engaging.",
        icon: "/svg/design-priciple/user-experience.svg",
        iconColor: "#00bcd4",
      },
      {
        title: "Responsive Chat Layout",
        description:
          "Created a mobile-first chat interface that adapts beautifully across devices, ensuring the AI conversation experience remains optimal whether on desktop, tablet, or mobile.",
        icon: "/svg/design-priciple/white-space.svg",
        iconColor: "#4caf50",
      },
      {
        title: "Loading States & Feedback",
        description:
          "Implemented thoughtful loading animations and progress indicators to keep users informed during AI processing, creating a sense of responsiveness and reliability.",
        icon: "/svg/design-priciple/animation.svg",
        iconColor: "#ff9800",
      },
      {
        title: "Code Presentation",
        description:
          "Carefully designed code block displays with proper syntax highlighting, copy functionality, and clear visual separation to make AI-generated code easily readable and usable.",
        icon: "/svg/design-priciple/typo.svg",
        iconColor: "#9c27b0",
      },
      {
        title: "Minimalist Interface",
        description:
          "Adopted a clean, distraction-free design that puts focus on the conversation, using subtle colors and ample whitespace to create a calm, focused environment for AI interactions.",
        icon: "/svg/design-priciple/minimalism.svg",
        iconColor: "#607d8b",
      },
      {
        title: "Pixel Perfect Clone",
        description:
          "Meticulously recreated Google's Gemini interface with precise attention to spacing, typography, colors, and UI elements to achieve a faithful reproduction of the original design.",
        icon: "/svg/design-priciple/performance.svg",
        iconColor: "#ff5722",
      },
    ],
    videoUrl: "/videos/project/gemini.mp4",
  },
];
