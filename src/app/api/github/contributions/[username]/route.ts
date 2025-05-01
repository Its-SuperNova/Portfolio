import { NextRequest, NextResponse } from "next/server";

// Helper function to determine contribution level based on count
function getContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 7) return 2;
  if (count <= 12) return 3;
  return 4;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  // In Next.js 15, params is already resolved, no need to await it
  const username = params.username;

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  // Check if GitHub token is available
  const githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    console.warn("GITHUB_TOKEN is not set. Using limited API access.");
  }

  try {
    // GitHub's GraphQL API endpoint
    const endpoint = "https://api.github.com/graphql";

    // Get the last year of contributions
    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    // Format dates in ISO format for GraphQL
    const fromDate = oneYearAgo.toISOString();
    const toDate = today.toISOString();

    // GraphQL query to fetch contribution data
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

    // Prepare headers
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "User-Agent": "GitHub-Contribution-Graph",
    };

    // Add authorization header if token is available
    if (githubToken) {
      headers["Authorization"] = `Bearer ${githubToken}`;
    }

    // Fetch data from GitHub API
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // Check for errors in the GraphQL response
    if (data.errors) {
      const errorMessage = data.errors.map((e: any) => e.message).join(", ");
      throw new Error(`GraphQL Error: ${errorMessage}`);
    }

    // Check if user exists and has contribution data
    if (!data.data?.user) {
      return NextResponse.json(
        { error: "User not found or no contribution data available" },
        { status: 404 }
      );
    }

    // Process the contribution data
    const calendarData =
      data.data.user.contributionsCollection.contributionCalendar;
    const weeks = calendarData.weeks.map((week: any) => ({
      days: week.contributionDays.map((day: any) => ({
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
