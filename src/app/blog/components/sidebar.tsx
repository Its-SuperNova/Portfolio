"use client";

import type React from "react";

import { useState, createContext, useContext } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

// Define tab items
export const tabItems = [
  { name: "Blog", id: "blog" },
  { name: "Resources", id: "resources" },
  { name: "Components", id: "components" },
  { name: "Code Snippets", id: "snippets" },
  { name: "Tips & Tricks", id: "tips" },
];

// Create context for sidebar and active tab
interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => {},
  activeTab: "blog",
  setActiveTab: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("blog");

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, activeTab, setActiveTab }}
    >
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
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-6 left-6 z-20 p-2 rounded-lg bg-[#faf9f5] shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <IoClose className="w-5 h-5 text-gray-600" />
      ) : (
        <CgMenuLeft className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
}

export function Sidebar() {
  const { isOpen, activeTab, setActiveTab } = useSidebar();

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-[#faf9f5] border-r border-gray-200 transition-all duration-300 ease-in-out z-10 ${
        isOpen ? "w-64" : "w-0"
      } overflow-hidden`}
    >
      <div className="w-64 p-8 pt-20">
        <nav>
          <ul className="space-y-3">
            {tabItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-light transition-colors duration-200 ${
                    activeTab === item.id
                      ? " text-black font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
