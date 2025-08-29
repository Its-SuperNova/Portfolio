"use client";
import {
  Sidebar,
  SidebarProvider,
  SidebarToggle,
  useSidebar,
} from "./components/sidebar";
import FloatingDock from "@/components/dock/dock";
import Cooking from "@/components/CookingCourse";

// Note: Since this is a client component, we'll add metadata in a separate layout file
// For now, we'll add SEO content directly in the component

function MainContent() {
  const { isOpen } = useSidebar();

  return (
    <main
      className={`min-h-screen bg-white transition-all duration-300 ${
        isOpen ? "ml-64" : "ml-0"
      }`}
    >
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>
          Blog & Resources - Ashwin Chandrasekar (Ashhhh) Creative Developer
        </h1>
        <p>
          Explore Ashwin Chandrasekar&apos;s blog featuring web development
          tutorials, learning resources, and insights into modern web
          technologies. Discover guides on React, Next.js, Framer Motion, and
          creative development techniques.
        </p>
        <p>
          Ashhhh blog provides valuable resources for developers, designers, and
          anyone interested in web development and creative digital solutions.
          Learn from practical tutorials and case studies.
        </p>
        <p>
          Find comprehensive learning paths, coding tutorials, and design
          resources to enhance your skills in frontend development, UI/UX
          design, and modern web technologies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 pt-20">
        {/* <BlogContent /> */}
        <Cooking />
      </div>
    </main>
  );
}

export default function BlogPage() {
  return (
    <>
      <FloatingDock />
      <SidebarProvider>
        <div className="relative">
          <SidebarToggle />
          <Sidebar />
          <MainContent />
        </div>
      </SidebarProvider>
    </>
  );
}
