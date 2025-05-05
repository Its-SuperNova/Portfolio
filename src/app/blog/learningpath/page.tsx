"use client";
import {
  Sidebar,
  SidebarProvider,
  SidebarToggle,
  useSidebar,
} from "../components/sidebar";
import FloatingDock from "@/components/dock/dock";
import { LearningPathsContent } from "../components/learningPathTab";

function MainContent() {
  const { isOpen } = useSidebar();

  return (
    <main
      className={`min-h-screen bg-white transition-all duration-300 ${
        isOpen ? "ml-64" : "ml-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 pt-20">
        <LearningPathsContent />
      </div>
    </main>
  );
}

export default function LearningPathPage() {
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
