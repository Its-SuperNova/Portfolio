"use client";

import { useTheme } from "./ThemeProvider";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-700"
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <IconSun className="h-5 w-5 text-gray-400 hover:text-gray-300" />
      ) : (
        <IconMoon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
      )}
      <span className="sr-only">
        {resolvedTheme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"}
      </span>
    </button>
  );
}
