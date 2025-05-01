"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { IconGitFork } from "@tabler/icons-react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionWeek {
  days: ContributionDay[];
}

interface GitHubContributionGraphProps {
  username: string;
  className?: string;
  onError?: (error: string) => void;
  forceLightMode?: boolean;
  githubUrl?: string;
}

export default function GitHubContributionGraph({
  username,
  className = "",
  onError,
  forceLightMode = false,
  githubUrl,
}: GitHubContributionGraphProps) {
  const [contributions, setContributions] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const isDarkMode = forceLightMode ? false : resolvedTheme === "dark";

  // Color levels matching GitHub's scheme
  const colorLevels = isDarkMode
    ? [
        "bg-[#161b22]", // Level 0 (no contributions)
        "bg-[#0e4429]", // Level 1 (1-3 contributions)
        "bg-[#006d32]", // Level 2 (4-7 contributions)
        "bg-[#26a641]", // Level 3 (8-12 contributions)
        "bg-[#39d353]", // Level 4 (13+ contributions)
      ]
    : [
        "bg-[#ebedf0]", // Level 0 (no contributions)
        "bg-[#9be9a8]", // Level 1 (1-3 contributions)
        "bg-[#40c463]", // Level 2 (4-7 contributions)
        "bg-[#30a14e]", // Level 3 (8-12 contributions)
        "bg-[#216e39]", // Level 4 (13+ contributions)
      ];

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null); // Clear any previous errors

        // Use our custom API route to fetch GitHub contribution data
        const response = await fetch(`/api/github/contributions/${username}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage =
            errorData.error ||
            `Failed to fetch contributions: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();

        // Process the contribution data
        if (data.contributions && data.contributions.length > 0) {
          setContributions(data.contributions);
          setTotalContributions(data.totalContributions || 0);
        } else {
          throw new Error("No contribution data found");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch contributions";
        setError(errorMessage);
        console.error("Error fetching GitHub contributions:", err);

        // Call the onError callback if provided
        if (onError) {
          onError(errorMessage);
        }
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchContributions();
    }
  }, [username, onError]);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  // Get the months in the correct order (June to May)
  const getOrderedMonths = () => {
    // GitHub shows the last 12 months, starting from the current month and going back
    // For this example, we'll use June to May as shown in the screenshot
    return [
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
    ];
  };

  if (loading) {
    return (
      <div
        className={`flex flex-col items-center ${className}`}
        style={forceLightMode ? { color: "#111" } : {}}
      >
        <h2 className="text-xl font-semibold mb-4">GitHub Contributions</h2>
        <div
          className="animate-pulse w-full h-32 rounded"
          style={forceLightMode ? { backgroundColor: "#f0f0f0" } : {}}
        ></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex flex-col ${className}`}>
        <h2
          className="text-xl font-semibold mb-4"
          style={forceLightMode ? { color: "#111" } : {}}
        >
          GitHub Contributions
        </h2>
        <div
          className="p-4 rounded"
          style={
            forceLightMode ? { backgroundColor: "#f5f5f5", color: "#333" } : {}
          }
        >
          <p className="mb-2">
            Unable to load GitHub contributions for {username}.
          </p>
          <p className="text-sm">{error}</p>

          {/* Fallback UI - Simple placeholder grid */}
          <div className="mt-4">
            <div className="flex">
              <div
                className="flex flex-col justify-between text-xs pr-2 pt-2 pb-1"
                style={forceLightMode ? { color: "#888" } : {}}
              >
                <span>Mon</span>
                <span></span>
                <span>Wed</span>
                <span></span>
                <span>Fri</span>
              </div>

              <div className="flex">
                {Array.from({ length: 52 }).map((_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col">
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      // Create a random contribution level for the placeholder
                      const level = Math.floor(Math.random() * 5);
                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`
                            w-[10px] h-[10px] m-[1px] rounded-sm
                            ${colorLevels[level]} opacity-30
                          `}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex justify-end items-center mt-2 text-xs"
              style={forceLightMode ? { color: "#888" } : {}}
            >
              <span className="mr-2">Less</span>
              {colorLevels.map((color, i) => (
                <div
                  key={i}
                  className={`w-[10px] h-[10px] m-[1px] rounded-sm ${color} opacity-30`}
                />
              ))}
              <span className="ml-2">More</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col ${className} w-full`}
      style={forceLightMode ? { color: "#111" } : {}}
    >
      <div className="w-full overflow-visible">
        <div className="flex items-center justify-between mb-2 w-full">
          <h2
            className="text-xl font-semibold"
            style={forceLightMode ? { color: "#111" } : {}}
          >
            GitHub Contributions
          </h2>
          <a
            href={githubUrl || `https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex items-center gap-1"
            style={forceLightMode ? { color: "#555" } : {}}
          >
            <IconGitFork size={16} />
            {username}
          </a>
        </div>

        <div className="w-full overflow-visible">
          <div className="min-w-full">
            {/* Month labels - in the correct order (June to May) */}
            <div className="flex mb-2">
              <div className="w-12 flex-shrink-0"></div>
              <div
                className="flex-1 flex justify-between text-xs px-1"
                style={forceLightMode ? { color: "#888" } : {}}
              >
                {getOrderedMonths().map((month, i) => (
                  <span key={i}>{month}</span>
                ))}
              </div>
            </div>

            {/* Day labels and contribution grid */}
            <div className="flex">
              {/* Day labels */}
              <div
                className="w-12 flex-shrink-0 flex flex-col justify-around text-xs pr-2"
                style={{
                  height: "112px",
                  ...(forceLightMode ? { color: "#888" } : {}),
                }}
              >
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Contribution grid - using flexbox for better compatibility */}
              <div className="flex-1 flex gap-1 relative">
                {contributions.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex-1 flex flex-col gap-1">
                    {week.days.map((day, dayIndex) => {
                      const date = new Date(day.date);
                      const formattedDate = date.toLocaleDateString(undefined, {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      });

                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`
                            w-full aspect-square rounded-sm min-h-[12px] min-w-[12px]
                            ${colorLevels[day.level]}
                            hover:ring-1 hover:ring-gray-300 hover:scale-110 transition-all duration-150
                            cursor-pointer group
                          `}
                          data-date={formattedDate}
                          data-count={day.count}
                          aria-label={`${formattedDate}: ${
                            day.count
                          } contribution${day.count !== 1 ? "s" : ""}`}
                        >
                          {/* Custom tooltip that appears on hover */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full px-3 py-1.5 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none mt-[-10px]">
                            {formattedDate}: {day.count} contribution
                            {day.count !== 1 ? "s" : ""}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-full border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-between items-center mt-4 text-xs w-full">
          <div
            className="text-xs"
            style={forceLightMode ? { color: "#888" } : {}}
          >
            {totalContributions.toLocaleString()} contributions in the last year
          </div>

          <div
            className="flex items-center gap-1"
            style={forceLightMode ? { color: "#888" } : {}}
          >
            <span className="mr-2">Less</span>
            {colorLevels.map((color, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
            ))}
            <span className="ml-2">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
