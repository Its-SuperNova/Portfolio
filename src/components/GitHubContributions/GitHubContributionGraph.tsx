"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

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
}

export default function GitHubContributionGraph({
  username,
  className = "",
  onError,
  forceLightMode = false,
}: GitHubContributionGraphProps) {
  const [contributions, setContributions] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const isDarkMode = forceLightMode ? false : resolvedTheme === "dark";

  const colorLevels = isDarkMode
    ? [
        "bg-[#161b22]",
        "bg-[#0e4429]",
        "bg-[#006d32]",
        "bg-[#26a641]",
        "bg-[#39d353]",
      ]
    : [
        "bg-[#ebedf0]",
        "bg-[#9be9a8]",
        "bg-[#40c463]",
        "bg-[#30a14e]",
        "bg-[#216e39]",
      ];

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/github/contributions/${username}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage =
            errorData.error ||
            `Failed to fetch contributions: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();

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
        if (onError) onError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchContributions();
    }
  }, [username, onError]);

  const getOrderedMonths = () => [
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

  if (loading) {
    return (
      <div
        className={`flex flex-col items-center ${className}`}
        style={forceLightMode ? { color: "#111" } : {}}
      >
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
          className="p-4 rounded border"
          style={
            forceLightMode
              ? {
                  backgroundColor: "#f5f5f5",
                  color: "#333",
                  borderColor: "#ddd",
                }
              : { borderColor: "#374151" }
          }
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">
                Unable to load GitHub contributions
              </h3>
              <p className="text-sm mb-3">
                {error.includes("rate limit") ? (
                  <>
                    GitHub API rate limit exceeded. This usually happens when no
                    GitHub token is configured.
                    <br />
                    <a
                      href="https://github.com/settings/tokens"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 underline"
                    >
                      Create a GitHub token
                    </a>{" "}
                    to fix this issue.
                  </>
                ) : (
                  error
                )}
              </p>

              {/* Demo contribution grid */}
              <div className="mt-4">
                <p className="text-xs mb-2 opacity-70">
                  Demo contribution graph:
                </p>
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
                          const level = Math.floor(Math.random() * 5);
                          return (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              className={`w-[10px] h-[10px] m-[1px] rounded-sm ${colorLevels[level]} opacity-30`}
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
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col ${className} w-full`}
      style={forceLightMode ? { color: "#111" } : {}}
    >
      <div className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
        <div className="min-w-[800px] md:min-w-full">
          <div className="flex mb-2">
            <div className="w-12 flex-shrink-0"></div>
            <div
              className="flex-1 flex justify-between text-xs px-1 min-w-[800px] md:min-w-full"
              style={forceLightMode ? { color: "#888" } : {}}
            >
              {getOrderedMonths().map((month, i) => (
                <span key={i}>{month}</span>
              ))}
            </div>
          </div>

          <div className="flex">
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

            <div className="flex-1 flex gap-1 relative min-w-[800px] md:min-w-full">
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

        <div className="flex justify-between items-center mt-4 text-xs w-full min-w-[800px] md:min-w-full">
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
