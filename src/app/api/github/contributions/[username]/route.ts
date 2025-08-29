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

    // Handle different response statuses
    if (response.status === 403) {
      console.warn("GitHub API rate limit exceeded or token invalid");
      return NextResponse.json(
        {
          error:
            "GitHub API rate limit exceeded. Please try again later or set up a GitHub token.",
          rateLimited: true,
        },
        { status: 429 }
      );
    }

    if (response.status === 401) {
      console.warn("GitHub API unauthorized - token may be invalid");
      return NextResponse.json(
        {
          error:
            "GitHub API unauthorized. Please check your token configuration.",
          unauthorized: true,
        },
        { status: 401 }
      );
    }

    if (!response.ok) {
      console.error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
      return NextResponse.json(
        {
          error: `GitHub API error: ${response.status}`,
          status: response.status,
        },
        { status: response.status }
      );
    }

    const data: GitHubResponse = await response.json();

    if (data.errors) {
      const errorMessage = data.errors.map((e) => e.message).join(", ");
      console.error("GraphQL errors:", data.errors);
      return NextResponse.json(
        {
          error: `GraphQL Error: ${errorMessage}`,
          graphqlErrors: data.errors,
        },
        { status: 400 }
      );
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

    // Return a more specific error message
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: "Failed to fetch GitHub contributions",
        details: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
