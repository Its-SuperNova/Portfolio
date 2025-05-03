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
];
