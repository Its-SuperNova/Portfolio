"use client";

import { useState, useEffect } from "react";
import GitHubContributionGraph from "./GitHubContributionGraph";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

interface GitHubContributionCardProps {
  username: string;
  className?: string;
  showThemeToggle?: boolean;
  title?: string;
  forceLightMode?: boolean;
  fallbackUsername?: string;
  githubUrl?: string;
}

export function GitHubContributionCard({
  username: initialUsername,
  className = "",
  showThemeToggle = true,
  title = "GitHub Contributions",
  forceLightMode = false,
  fallbackUsername = "octocat",
  githubUrl,
}: GitHubContributionCardProps) {
  const [username, setUsername] = useState(initialUsername);
  const [inputValue, setInputValue] = useState(initialUsername);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If there's an error with the current username, try the fallback
    if (error && username !== fallbackUsername) {
      console.log(
        `Falling back to ${fallbackUsername} due to error with ${username}`
      );
      setUsername(fallbackUsername);
      setInputValue(fallbackUsername);
    }
  }, [error, username, fallbackUsername]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
    setUsername(inputValue.trim());
    setIsEditing(false);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  // Force light mode styles
  const lightModeClass = forceLightMode
    ? "bg-white text-gray-900"
    : "";

  return (
    <ThemeProvider defaultTheme={forceLightMode ? "light" : "system"}>
      <div
        className={`rounded-lg p-6 ${lightModeClass} ${className} w-full`}
        style={
          forceLightMode ? { backgroundColor: "white", color: "#111" } : {}
        }
      >
        <GitHubContributionGraph
          username={username}
          onError={handleError}
          forceLightMode={forceLightMode}
          githubUrl={githubUrl}
          className="w-full"
        />
      </div>
    </ThemeProvider>
  );
}
