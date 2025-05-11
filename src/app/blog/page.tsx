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
import Cooking from "@/components/CookingCourse";


function MainContent() {
  const { isOpen } = useSidebar();

  return (
    <main
      className={`min-h-screen bg-white transition-all duration-300 ${
        isOpen ? "ml-64" : "ml-0"
      }`}
    >
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
