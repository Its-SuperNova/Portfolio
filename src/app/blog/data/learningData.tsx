export interface Resource {
  title: string;
  description: string;
  url: string;
}

export interface LearningPath {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  objectives: string[];
  prerequisites?: string[];
  resources?: Resource[];
}

export const learningPaths: LearningPath[] = [
  {
    id: "1",
    title: "HTML & CSS Fundamentals",
    imageUrl: "/images/blog/learning/Html-CSS.png",
    description:
      "Master the building blocks of web development with comprehensive HTML and CSS fundamentals. Learn how to create structured, semantic markup and beautiful, responsive designs that work across all devices.",
    objectives: [
      "Understand HTML document structure and semantic elements",
      "Master CSS selectors, properties, and values",
      "Create responsive layouts using Flexbox and Grid",
      "Implement modern CSS features like custom properties and animations",
      "Build accessible and SEO-friendly web pages",
    ],
    prerequisites: ["Basic computer skills", "Text editor familiarity"],
    resources: [
      {
        title: "MDN Web Docs - HTML",
        description: "Comprehensive HTML documentation and tutorials",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        title: "MDN Web Docs - CSS",
        description: "Complete CSS reference and learning materials",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        title: "CSS-Tricks",
        description: "Practical CSS tips, tricks, and techniques",
        url: "https://css-tricks.com/",
      },
    ],
  },
  {
    id: "3",
    title: "JavaScript Essentials",
    imageUrl: "/images/blog/learning/js.png",
    description:
      "Dive into the world of JavaScript programming. Learn the fundamental concepts, syntax, and techniques needed to add interactivity and dynamic behavior to your web applications.",
    objectives: [
      "Understand JavaScript syntax and core concepts",
      "Work with variables, functions, and data types",
      "Master DOM manipulation and event handling",
      "Learn asynchronous programming with promises and async/await",
      "Implement error handling and debugging techniques",
    ],
    prerequisites: [
      "HTML & CSS basics",
      "Programming fundamentals understanding",
    ],
    resources: [
      {
        title: "JavaScript.info",
        description: "Modern JavaScript tutorial from basics to advanced",
        url: "https://javascript.info/",
      },
      {
        title: "MDN JavaScript Guide",
        description: "Comprehensive JavaScript documentation",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      },
      {
        title: "Eloquent JavaScript",
        description: "Free online book about JavaScript programming",
        url: "https://eloquentjavascript.net/",
      },
    ],
  },
  {
    id: "4",
    title: "Advanced JavaScript Concepts",
    imageUrl: "/images/blog/learning/advanced-js.png",
    description:
      "Take your JavaScript skills to the next level with advanced concepts including closures, prototypes, design patterns, and modern ES6+ features. Perfect for developers ready to write more sophisticated code.",
    objectives: [
      "Master closures, scope, and the 'this' keyword",
      "Understand prototypal inheritance and object-oriented programming",
      "Implement common design patterns in JavaScript",
      "Work with ES6+ features like destructuring, modules, and classes",
      "Optimize code performance and memory management",
    ],
    prerequisites: [
      "Solid JavaScript fundamentals",
      "Understanding of functions and objects",
    ],
    resources: [
      {
        title: "You Don't Know JS",
        description:
          "Deep dive into JavaScript mechanisms and advanced concepts",
        url: "https://github.com/getify/You-Dont-Know-JS",
      },
      {
        title: "JavaScript Design Patterns",
        description: "Learn common design patterns in JavaScript",
        url: "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
      },
      {
        title: "ES6 Features",
        description: "Comprehensive guide to ES6+ features",
        url: "https://github.com/lukehoban/es6features",
      },
    ],
  },
  {
    id: "6",
    title: "React Development",
    imageUrl: "/images/blog/learning/react.png",
    description:
      "Learn React, the popular JavaScript library for building user interfaces. Master components, state management, hooks, and modern React patterns to build dynamic, interactive web applications.",
    objectives: [
      "Understand React components and JSX syntax",
      "Master state management with useState and useEffect hooks",
      "Learn React Router for single-page applications",
      "Implement form handling and validation",
      "Optimize React applications for performance",
    ],
    prerequisites: [
      "Strong JavaScript fundamentals",
      "Understanding of HTML/CSS",
      "ES6+ knowledge",
    ],
    resources: [
      {
        title: "React Official Documentation",
        description: "Official React docs with tutorials and guides",
        url: "https://react.dev/",
      },
      {
        title: "React Tutorial",
        description: "Interactive React tutorial",
        url: "https://react.dev/learn/tutorial-tic-tac-toe",
      },
      {
        title: "React Patterns",
        description: "Common React patterns and best practices",
        url: "https://reactpatterns.com/",
      },
    ],
  },
  {
    id: "8",
    title: "Next.js Mastery",
    imageUrl: "/images/blog/learning/nextJs.png",
    description:
      "Master Next.js, the React framework for production. Learn server-side rendering, static site generation, API routes, and deployment strategies to build full-stack React applications.",
    objectives: [
      "Set up and configure Next.js applications",
      "Implement static generation and server-side rendering",
      "Create API routes and handle backend logic",
      "Optimize performance with Image and Link components",
      "Deploy Next.js applications to production",
    ],
    prerequisites: [
      "React proficiency",
      "Node.js basics",
      "Understanding of web development concepts",
    ],
    resources: [
      {
        title: "Next.js Documentation",
        description: "Official Next.js documentation and tutorials",
        url: "https://nextjs.org/docs",
      },
      {
        title: "Next.js Learn",
        description: "Interactive Next.js tutorial course",
        url: "https://nextjs.org/learn",
      },
      {
        title: "Vercel Next.js Examples",
        description: "Collection of Next.js example projects",
        url: "https://github.com/vercel/next.js/tree/canary/examples",
      },
    ],
  },
];
