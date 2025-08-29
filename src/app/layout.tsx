import "./globals.css";
import { DM_Sans } from "next/font/google";
import { ReactNode } from "react";
import SmoothScroll from "../components/hooks/smoothscroll";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: {
    default:
      "Ashwin Chandrasekar (Ashhhh) - Creative Developer & Designer Portfolio",
    template: "%s | Ashwin Chandrasekar (Ashhhh)",
  },
  description:
    "Ashwin Chandrasekar (Ashhhh) - Passionate Creative Designer and Developer. Expert in Next.js, React, Framer Motion, and modern web technologies. View portfolio, projects, and case studies.",
  keywords: [
    "Ashwin Chandrasekar",
    "Ashhhh",
    "Ashhhh portfolio",
    "Creative Developer",
    "Web Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Framer Motion",
    "Portfolio",
    "Web Development",
    "UI/UX Designer",
    "Full Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "GSAP",
    "Lenis",
    "Creative Design",
    "Digital Experience",
  ],
  authors: [
    { name: "Ashwin Chandrasekar", url: "https://ashhhh-portfolio.vercel.app" },
  ],
  creator: "Ashwin Chandrasekar",
  publisher: "Ashwin Chandrasekar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ashhhh-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashhhh-portfolio.vercel.app",
    siteName: "Ashwin Chandrasekar Portfolio",
    title: "Ashwin Chandrasekar (Ashhhh) - Creative Developer & Designer",
    description:
      "Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies.",
    images: [
      {
        url: "/images/ashh.jpeg",
        width: 1200,
        height: 630,
        alt: "Ashwin Chandrasekar - Creative Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Chandrasekar (Ashhhh) - Creative Developer & Designer",
    description:
      "Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences.",
    images: ["/images/ashh.jpeg"],
    creator: "@ashwin_chandrasekar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual Google verification code
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashwin Chandrasekar",
    alternateName: "Ashhhh",
    url: "https://ashhhh-portfolio.vercel.app",
    image: "https://ashhhh-portfolio.vercel.app/images/ashh.jpeg",
    sameAs: [
      "https://github.com/Its-SuperNova",
      "https://linkedin.com/in/ashwin-chandrasekar",
      "https://twitter.com/ashwin_chandrasekar",
    ],
    jobTitle: "Creative Developer & Designer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description:
      "Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies",
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "Framer Motion",
      "UI/UX Design",
      "Frontend Development",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8248669086",
      contactType: "customer service",
      email: "its.ashwin.23@gmail.com",
    },
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={dmSans.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
