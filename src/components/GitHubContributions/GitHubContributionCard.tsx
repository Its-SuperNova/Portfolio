"use client";

import { useState, useEffect } from "react";
import GitHubContributionGraph from "./GitHubContributionGraph";
import { ThemeProvider } from "./ThemeProvider";

interface GitHubContributionCardProps {
  username: string;
  className?: string;
  forceLightMode?: boolean;
  fallbackUsername?: string;
  githubUrl?: string;
}

export function GitHubContributionCard({
  username: initialUsername,
  className = "",
  forceLightMode = false,
  fallbackUsername = "octocat",
  githubUrl,
}: GitHubContributionCardProps) {
  const [username, setUsername] = useState(initialUsername);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error && username !== fallbackUsername) {
      console.log(
        `Falling back to ${fallbackUsername} due to error with ${username}`
      );
      setUsername(fallbackUsername);
    }
  }, [error, username, fallbackUsername]);

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const lightModeClass = forceLightMode ? "bg-white text-gray-900" : "";

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
