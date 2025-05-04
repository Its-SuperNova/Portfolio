"use client";
import { BlogCard } from "./components/blog-card";
import {
  Sidebar,
  SidebarProvider,
  SidebarToggle,
  useSidebar,
} from "./components/sidebar";
import { blogPosts } from "./data/blog-data";
import FloatingDock from "@/components/dock/dock";
import SlideUpWord from "@/components/TextAnimations/SlideUpWord";
import { useInView } from "react-intersection-observer";
import { ResourcesContent } from "./components/resourses-tabs";
import { LearningPathsContent } from "./components/learningPathTab";

// Tab content components
function BlogContent() {
  const { ref: inViewRef, inView: titleInView } = useInView();
  return (
    <>
      <div className="mb-16">
        <div ref={inViewRef}>
          <SlideUpWord
            title={["Welcome to Ashhhh's", " Documentation."]} // Pass the title as an array for animation
            isInView={titleInView} // Trigger animation based on visibility
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}


function MainContent() {
  const { isOpen, activeTab } = useSidebar();

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "blog":
        return <BlogContent />;
      case "resources":
        return <ResourcesContent />;
      case "learning-paths":
        return <LearningPathsContent />;
      default:
        return <BlogContent />;
    }
  };

  return (
    <main
      className={`min-h-screen bg-white transition-all duration-300 ${
        isOpen ? "ml-64" : "ml-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 pt-20">
        {renderContent()}
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
