import { type NextRequest, NextResponse } from "next/server";

// Define interfaces for type safety
interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface GitHubResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: ContributionCalendar;
      };
    } | null;
  };
  errors?: { message: string }[];
}

// Helper function to determine contribution level based on count
function getContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 7) return 2;
  if (count <= 12) return 3;
  return 4;
}

// Updated type for context params - params is now a Promise
type RouteParams = {
  params: Promise<{
    username: string;
  }>;
};

export async function GET(request: NextRequest, context: RouteParams) {
  // Await params before accessing its properties
  const { username } = await context.params;

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  const githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    console.warn("GITHUB_TOKEN is not set. Using limited API access.");
  }

  try {
    const endpoint = "https://api.github.com/graphql";

    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const fromDate = oneYearAgo.toISOString();
    const toDate = today.toISOString();

    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection(from: "${fromDate}", to: "${toDate}") {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "User-Agent": "GitHub-Contribution-Graph",
    };

    if (githubToken) {
      headers["Authorization"] = `Bearer ${githubToken}`;
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const data: GitHubResponse = await response.json();

    if (data.errors) {
      const errorMessage = data.errors.map((e) => e.message).join(", ");
      throw new Error(`GraphQL Error: ${errorMessage}`);
    }

    if (!data.data?.user) {
      return NextResponse.json(
        { error: "User not found or no contribution data available" },
        { status: 404 }
      );
    }

    const calendarData =
      data.data.user.contributionsCollection.contributionCalendar;

    const weeks = calendarData.weeks.map((week) => ({
      days: week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: getContributionLevel(day.contributionCount),
      })),
    }));

    return NextResponse.json({
      username,
      totalContributions: calendarData.totalContributions,
      contributions: weeks,
    });
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 500 }
    );
  }
}
