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
        id: 1,
        title: "Lordicon",
        subtitle: "Check it out",
        badge: "Limited Free, Mostly Paid",
        image: "/images/blog/resourses/Lordicon.png",
        slug: "lordicon",
        link: "https://lordicon.com/",
      },
      {
        id: 2,
        title: "Creattie",
        subtitle: "Check it out",
        badge: "Limited Free, Mostly Paid",
        image: "/images/blog/resourses/Creattie.png",
        slug: "creattie",
        link: "https://creattie.com/",
      },
      {
        id: 3,
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
        id: 1,
        title: "React Bits",
        subtitle: "Check it out",
        badge: "Open Source & Free",
        image: "/images/blog/resourses/ReactBits.png",
        slug: "react-bits",
        link: "https://reactbits.com/",
      },
      {
        id: 2,
        title: "ShadCN UI",
        subtitle: "Check it out",
        badge: "Open Source & Free",
        image: "/images/blog/resourses/ShadCN.png",
        slug: "shadcn-ui",
        link: "https://ui.shadcn.com/",
      },
      {
        id: 3,
        title: "Aceternity UI",
        subtitle: "Check it out",
        badge: "Open Source & Free",
        image: "/images/blog/resourses/Aceternity.png",
        slug: "aceternity-ui",
        link: "https://aceternity.com/",
      },
      {
        id: 4,
        title: "DaisyUI",
        subtitle: "Check it out",
        badge: "Tailwind CSS Components",
        image: "/images/blog/resourses/DaisyUI.png",
        slug: "daisyui",
        link: "https://daisyui.com/",
      },
      {
        id: 5,
        title: "Layout Components",
        subtitle: "Check it out",
        badge: "Open Source & Free",
        image: "/images/blog/resourses/Layout.png",
        slug: "layout-components",
        link: "https://layout.com/",
      },
      {
        id: 6,
        title: "Hero UI",
        subtitle: "Check it out",
        badge: "Open Source & Free",
        image: "/images/blog/resourses/HeroUI.png",
        slug: "hero-ui",
        link: "https://hero-ui.com/",
      },
    ],
  },
];
