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
    ? "bg-white text-gray-900 border border-gray-200"
    : "";

  return (
    <ThemeProvider defaultTheme={forceLightMode ? "light" : "system"}>
      <div
        className={`rounded-lg shadow-md p-6 ${lightModeClass} ${className} w-full`}
        style={
          forceLightMode ? { backgroundColor: "white", color: "#111" } : {}
        }
      >
        <div className="flex items-center justify-between mb-4 w-full">
          <h2
            className="text-xl font-semibold"
            style={forceLightMode ? { color: "#111" } : {}}
          >
            {title}
          </h2>
          <div className="flex items-center gap-2">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="px-2 py-1 text-sm border border-gray-300 rounded-md 
                           bg-white text-gray-900
                           focus:outline-none focus:ring-1 focus:ring-gray-400"
                  style={
                    forceLightMode
                      ? {
                          backgroundColor: "white",
                          color: "#111",
                          borderColor: "#ddd",
                        }
                      : {}
                  }
                  placeholder="GitHub username"
                  aria-label="GitHub username"
                />
                <button
                  type="submit"
                  className="ml-2 px-2 py-1 text-xs bg-gray-800 text-white rounded-md
                           hover:bg-gray-700"
                  style={
                    forceLightMode
                      ? { backgroundColor: "#333", color: "white" }
                      : {}
                  }
                >
                  View
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="text-xs text-gray-500 hover:text-gray-700"
                style={forceLightMode ? { color: "#555" } : {}}
              >
                Change user
              </button>
            )}

            {showThemeToggle && !forceLightMode && <ThemeToggle />}
          </div>
        </div>

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
