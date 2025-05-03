export interface ResourceItem {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  slug: string;
}

export const resourceItems: ResourceItem[] = [
  {
    id: 1,
    title: "Resume Kit for UI/UX Designers",
    subtitle: "10 Templates for $5",
    badge: "600+ bought",
    image:
      "",
    slug: "resume-kit-ui-ux-designers",
  },
  {
    id: 2,
    title: "Design System Components",
    subtitle: "50+ Components for $12",
    badge: "300+ bought",
    image: "/placeholder.svg?height=240&width=200",
    slug: "design-system-components",
  },
  {
    id: 3,
    title: "Icon Pack Collection",
    subtitle: "500+ Icons for $8",
    badge: "1.2k+ bought",
    image: "/placeholder.svg?height=240&width=200",
    slug: "icon-pack-collection",
  },
  {
    id: 4,
    title: "Landing Page Templates",
    subtitle: "15 Templates for $15",
    badge: "450+ bought",
    image: "/placeholder.svg?height=240&width=200",
    slug: "landing-page-templates",
  },
  {
    id: 5,
    title: "Mobile App UI Kit",
    subtitle: "30 Screens for $10",
    badge: "800+ bought",
    image: "/placeholder.svg?height=240&width=200",
    slug: "mobile-app-ui-kit",
  },
  {
    id: 6,
    title: "Typography Guide",
    subtitle: "Complete Guide for $6",
    badge: "200+ bought",
    image: "/placeholder.svg?height=240&width=200",
    slug: "typography-guide",
  },
];
