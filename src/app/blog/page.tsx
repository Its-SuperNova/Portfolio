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

function ComponentsContent() {
  return (
    <>
      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight">
          Components
        </h1>
        <p className="text-lg text-gray-600 font-light max-w-2xl">
          Reusable UI components for your next project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-gray-200/50 hover:shadow-md transition-shadow"
          >
            <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              Component Preview {i}
            </div>
            <h3 className="text-lg font-medium mb-2">Component {i}</h3>
            <p className="text-gray-600 text-sm">
              A beautiful and functional UI component.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function SnippetsContent() {
  return (
    <>
      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight">
          Code Snippets
        </h1>
        <p className="text-lg text-gray-600 font-light max-w-2xl">
          Useful code snippets for common programming tasks.
        </p>
      </div>

      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-gray-200/50 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium mb-2">Snippet {i}</h3>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mb-4">
              <code>
                const greeting = () =&gt; console.log("Hello, world!");
              </code>
            </div>
            <p className="text-gray-600 text-sm">
              A useful code snippet for your projects.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function TipsContent() {
  return (
    <>
      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight">
          Tips & Tricks
        </h1>
        <p className="text-lg text-gray-600 font-light max-w-2xl">
          Helpful tips and tricks to improve your workflow.
        </p>
      </div>

      <div className="space-y-8">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-gray-200/50 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium mb-2">Tip {i}</h3>
            <p className="text-gray-600">
              Here's a helpful tip to improve your workflow and boost
              productivity.
            </p>
          </div>
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
      case "components":
        return <ComponentsContent />;
      case "snippets":
        return <SnippetsContent />;
      case "tips":
        return <TipsContent />;
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
