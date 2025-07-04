"use client";

import type React from "react";
import { useState, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

// Define tab items with their routes
export const tabItems = [
  { name: "Blog", id: "blog", href: "/blog" },
  { name: "Resources", id: "resources", href: "/blog/resources" },
  { name: "Learning Paths", id: "learning-paths", href: "/blog/learningpath" },
];

// Create context for sidebar (only for open/close state now)
interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}

export function SidebarToggle() {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <div className="z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 z-30 left-6 p-2 rounded-lg  shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <IoClose className="w-5 h-5 text-gray-600" />
        ) : (
          <CgMenuLeft className="w-5 h-5 text-gray-600" />
        )}
      </button>
    </div>
  );
}

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar();
  const pathname = usePathname();

  // Determine active tab based on current pathname
  const getActiveTab = () => {
    if (pathname === "/blog/resources") return "resources";
    if (pathname === "/blog/learningpath") return "learning-paths";
    return "blog";
  };

  const activeTab = getActiveTab();

  return (
    <aside
      className={`fixed left-0 top-0 h-full  border-r border-gray-200 transition-all duration-300 ease-in-out z-10 ${
        isOpen ? "w-64" : "w-0"
      } overflow-hidden`}
    >
      <div className="w-64 p-8 pt-20">
        <nav>
          <ul className="space-y-3">
            {tabItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Close sidebar on navigation
                  className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-light transition-colors duration-200 ${
                    activeTab === item.id
                      ? " text-black font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
