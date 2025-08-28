export interface CaseStudy {
  id: number;
  url: string;
  title: string;
  tags: string[];
  category: "Case Study";
  image: string;
  slideImages?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    url: "carlic-case-study",
    title: "Carlic - A Taxi & Food Delivery Mobile App",
    tags: ["UX Research", "UI Design", "User Journey", "Prototyping", "Figma"],
    category: "Case Study",
    image: "/images/project/carlic.png",
    slideImages: [
      "/images/case-studies/carlic/slide-1.webp",
      "/images/case-studies/carlic/slide-2.webp",
      "/images/case-studies/carlic/slide-3.webp",
      "/images/case-studies/carlic/slide-4.webp",
      "/images/case-studies/carlic/slide-5.webp",
      "/images/case-studies/carlic/slide-6.webp",
      "/images/case-studies/carlic/slide-7.webp",
      "/images/case-studies/carlic/slide-8.webp",
      "/images/case-studies/carlic/slide-9.webp",
      "/images/case-studies/carlic/slide-10.webp",
      "/images/case-studies/carlic/slide-11.webp",
      "/images/case-studies/carlic/slide-12.webp",
      "/images/case-studies/carlic/slide-13.webp",
      "/images/case-studies/carlic/slide-14.webp",
      "/images/case-studies/carlic/slide-15.webp",
      "/images/case-studies/carlic/slide-16.webp",
      "/images/case-studies/carlic/slide-17.webp",
      "/images/case-studies/carlic/slide-18.webp",
      "/images/case-studies/carlic/slide-19.webp",
      "/images/case-studies/carlic/slide-20.webp",
    ],
  },
];
