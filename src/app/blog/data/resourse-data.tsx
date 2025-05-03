export interface ResourceItem {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  slug: string;
  link: string;
}

export interface ResourceCategory {
  categoryTitle: string;
  items: ResourceItem[];
}

// ✅ Used in <ResourceCard />
export const resourceData: ResourceCategory[] = [
  {
    categoryTitle: "Icon Libraries",
    items: [
      {
        id: 1,
        title: "Lucide Icons",
        subtitle: "Check it out",
        badge: "Free & Open Source",
        image: "/images/blog/resourses/Lucid.png",
        slug: "lucide-icons",
        link: "https://lucide.dev/",
      },
      {
        id: 2,
        title: "Boxicons",
        subtitle: "Check it out",
        badge: "Free & Open Source",
        image: "/images/blog/resourses/Boxicons.png",
        slug: "boxicons",
        link: "https://boxicons.com/",
      },
      {
        id: 3,
        title: "React Icons",
        subtitle: "Check it out",
        badge: "Free & Open Source",
        image: "/images/blog/resourses/Reacticons.png",
        slug: "react-icons",
        link: "https://react-icons.github.io/react-icons/",
      },
    ],
  },
  {
    categoryTitle: "Animated Icons & Lottie Files",
    items: [
      {
        id: 4,
        title: "Lordicon",
        subtitle: "Check it out",
        badge: "Limited Free, Mostly Paid",
        image: "/images/blog/resourses/Lordicon.png",
        slug: "lordicon",
        link: "https://lordicon.com/",
      },
      {
        id: 5,
        title: "Creattie",
        subtitle: "Check it out",
        badge: "Limited Free, Mostly Paid",
        image: "/images/blog/resourses/Creattie.png",
        slug: "creattie",
        link: "https://creattie.com/",
      },
      {
        id: 6,
        title: "LottieFiles",
        subtitle: "Check it out",
        badge: "Large Resource – Mostly Free, Some Paid",
        image: "/images/blog/resourses/Lottie.png",
        slug: "lottiefiles",
        link: "https://lottiefiles.com/",
      },
    ],
  },
  {
    categoryTitle: "React Component Libraries",
    items: [
      {
        id: 7,
        title: "React Bits",
        subtitle: "Check it out",
        badge: "Open Source & Free",
        image: "/images/blog/resourses/ReactBits.png",
        slug: "react-bits",
        link: "https://reactbits.com/",
      },
      {
        id: 8,
        title: "ShadCN UI",
        subtitle: "Check it out",
        badge: "Open Source & Free",
        image: "/images/blog/resourses/ShadCN.png",
        slug: "shadcn-ui",
        link: "https://ui.shadcn.com/",
      },
      {
        id: 9,
        title: "Aceternity UI",
        subtitle: "Check it out",
        badge: "Open Source & Free",
        image: "/images/blog/resourses/Aceternity.png",
        slug: "aceternity-ui",
        link: "https://aceternity.com/",
      },
      {
        id: 10,
        title: "DaisyUI",
        subtitle: "Check it out",
        badge: "Tailwind CSS Components",
        image: "/images/blog/resourses/DaisyUI.png",
        slug: "daisyui",
        link: "https://daisyui.com/",
      },
      {
        id: 11,
        title: "Layout Components",
        subtitle: "Check it out",
        badge: "Open Source & Free",
        image: "/images/blog/resourses/Layout.png",
        slug: "layout-components",
        link: "https://layout.com/",
      },
      {
        id: 12,
        title: "Hero UI",
        subtitle: "Check it out",
        badge: "Open Source & Free",
        image: "/images/blog/resourses/HeroUI.png",
        slug: "hero-ui",
        link: "https://hero-ui.com/",
      },
    ],
  },
  {
    categoryTitle: "Figma Components",
    items: [
      {
        id: 13,
        title: "Figcomponents",
        subtitle: "Check it out",
        badge: "Free & Curated Library",
        image: "/images/blog/resourses/FigComponents.png",
        slug: "figcomponents",
        link: "https://figcomponents.com/",
      },
      {
        id: 14,
        title: "FigmaElements",
        subtitle: "Check it out",
        badge: "Free & Paid Templates",
        image: "/images/blog/resourses/FigmaElements.png",
        slug: "figmaelements",
        link: "https://figmaelements.com/",
      },
    ],
  },
];

// ✅ Used in <ResourceCard2 /> (image-only section)
export const imageOnlyResources: ResourceItem[] = [
  {
    id: 101,
    title: "Pinterest",
    subtitle: "Visual discovery engine",
    badge: "Inspiration Platform",
    image: "/images/blog/resourses/pinterest.png",
    slug: "pinterest",
    link: "https://www.pinterest.com/",
  },
  {
    id: 102,
    title: "Dribbble",
    subtitle: "Showcase your work",
    badge: "Design Showcase",
    image: "/images/blog/resourses/dribble.png",
    slug: "dribbble",
    link: "https://dribbble.com/",
  },
  {
    id: 103,
    title: "Behance",
    subtitle: "Creative portfolio site",
    badge: "Design Community",
    image: "/images/blog/resourses/behance.png",
    slug: "behance",
    link: "https://www.behance.net/",
  },
  {
    id: 104,
    title: "Mobbin",
    subtitle: "Design pattern inspiration",
    badge: "UI Patterns",
    image: "/images/blog/resourses/mobbin.png",
    slug: "mobbin",
    link: "https://mobbin.design/",
  },
  {
    id: 105,
    title: "Pttrns",
    subtitle: "Mobile design patterns",
    badge: "iOS & Android",
    image: "/images/blog/resourses/pttrns.png",
    slug: "pttrns",
    link: "https://pttrns.com/",
  },
];

