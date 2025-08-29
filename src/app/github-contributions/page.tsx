import {
  GitHubContributionGraph,
  ThemeProvider,
  ThemeToggle,
  GitHubContributionCard,
} from "@/components/GitHubContributions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "GitHub Contributions - Ashwin Chandrasekar (Ashhhh) Creative Developer",
  description:
    "View Ashwin Chandrasekar's (Ashhhh) GitHub contributions and coding activity. Explore open source projects, development activity, and coding expertise through detailed GitHub contribution graphs.",
  keywords: [
    "Ashwin Chandrasekar GitHub",
    "Ashhhh GitHub",
    "GitHub contributions",
    "Open source projects",
    "Coding activity",
    "Development portfolio",
    "GitHub profile",
    "Software development",
    "Programming projects",
    "Code contributions",
    "Developer activity",
    "GitHub statistics",
  ],
  openGraph: {
    title:
      "GitHub Contributions - Ashwin Chandrasekar (Ashhhh) Creative Developer",
    description:
      "View Ashwin Chandrasekar's (Ashhhh) GitHub contributions and coding activity.",
    url: "https://ashhhh-portfolio.vercel.app/github-contributions",
  },
};

export default function GitHubContributionsPage() {
  return (
    <ThemeProvider>
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>
          GitHub Contributions - Ashwin Chandrasekar (Ashhhh) Creative Developer
        </h1>
        <p>
          Explore Ashwin Chandrasekar's (Ashhhh) GitHub contributions and coding
          activity. View detailed GitHub contribution graphs showing development
          activity, open source projects, and coding expertise.
        </p>
        <p>
          Ashhhh GitHub profile demonstrates active participation in software
          development with regular contributions to various projects. Track
          coding activity, project involvement, and development expertise
          through comprehensive GitHub statistics.
        </p>
        <p>
          Discover Ashwin Chandrasekar's open source contributions, programming
          projects, and development activity. View GitHub contribution graphs
          and coding statistics that showcase expertise in web development and
          creative programming.
        </p>
      </div>

      <div className="min-h-screen p-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">GitHub Contributions</h1>
            <ThemeToggle />
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            All-in-one Card Component
          </h2>
          <div className="mb-8">
            <GitHubContributionCard username="octocat" />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Example Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <GitHubContributionGraph username="torvalds" />
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <GitHubContributionGraph username="gaearon" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-4">Basic Usage</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto text-sm mb-4">
                {`import { GitHubContributionGraph } from '@/components/GitHubContributions'

export default function MyPage() {
  return <GitHubContributionGraph username="octocat" />
}`}
              </pre>

              <h3 className="text-lg font-medium mb-4">With Theme Support</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto text-sm mb-4">
                {`import { 
  GitHubContributionGraph, 
  ThemeProvider, 
  ThemeToggle 
} from '@/components/GitHubContributions'

export default function MyPage() {
  return (
    <ThemeProvider>
      <div className="flex justify-between items-center mb-4">
        <h1>GitHub Contributions</h1>
        <ThemeToggle />
      </div>
      <GitHubContributionGraph username="octocat" />
    </ThemeProvider>
  )
}`}
              </pre>

              <h3 className="text-lg font-medium mb-4">All-in-one Card</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto text-sm">
                {`import { GitHubContributionCard } from '@/components/GitHubContributions'

export default function MyPage() {
  return <GitHubContributionCard username="octocat" />
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
