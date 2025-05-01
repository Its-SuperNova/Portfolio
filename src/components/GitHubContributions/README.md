# GitHub Contribution Graph Component

A responsive React component that displays a GitHub contribution heatmap, similar to the one on GitHub profiles.

## Features

- Fetches real-time contribution data from GitHub
- Displays contributions in a heatmap with GitHub's color scheme (5 shades of green)
- Includes month and weekday labels
- Automatically updates as the user's GitHub contributions change
- Fully responsive design
- Supports light and dark mode
- Multiple component options for different use cases

## Components

This package includes several components to fit different use cases:

1. **GitHubContributionGraph**: The core component that displays the contribution graph
2. **GitHubContributionCard**: An all-in-one card with theme toggle and username input
3. **GitHubContributionDemo**: A demo component with additional explanatory text
4. **ThemeProvider/ThemeToggle**: Components for light/dark mode support
5. **ResponsiveWrapper**: A wrapper for responsive scaling on small screens

## Usage

### Basic Usage

```tsx
import { GitHubContributionGraph } from "@/components/GitHubContributions";

export default function MyPage() {
  return (
    <div>
      <GitHubContributionGraph username="octocat" />
    </div>
  );
}
```

### All-in-one Card Component

The easiest way to use the component with all features included:

```tsx
import { GitHubContributionCard } from "@/components/GitHubContributions";

export default function MyPage() {
  return (
    <GitHubContributionCard
      username="octocat"
      title="GitHub Activity"
      showThemeToggle={true}
    />
  );
}
```

### With Theme Support

```tsx
import {
  GitHubContributionGraph,
  ThemeProvider,
  ThemeToggle,
} from "@/components/GitHubContributions";

export default function MyPage() {
  return (
    <ThemeProvider>
      <div className="p-8 bg-white dark:bg-gray-950">
        <div className="flex justify-between items-center mb-4">
          <h1>GitHub Contributions</h1>
          <ThemeToggle />
        </div>

        <GitHubContributionGraph username="octocat" />
      </div>
    </ThemeProvider>
  );
}
```

## Props

### GitHubContributionGraph

| Prop             | Type                      | Description                                  |
| ---------------- | ------------------------- | -------------------------------------------- |
| `username`       | `string`                  | GitHub username to fetch contributions for   |
| `className`      | `string`                  | Optional CSS class to apply to the component |
| `onError`        | `(error: string) => void` | Optional callback for error handling         |
| `forceLightMode` | `boolean`                 | Force the component to use light mode styles |
| `githubUrl`      | `string`                  | Custom GitHub profile URL to link to         |

### GitHubContributionCard

| Prop               | Type      | Description                                                                 |
| ------------------ | --------- | --------------------------------------------------------------------------- |
| `username`         | `string`  | GitHub username to fetch contributions for                                  |
| `className`        | `string`  | Optional CSS class to apply to the component                                |
| `showThemeToggle`  | `boolean` | Whether to show the theme toggle button (default: true)                     |
| `title`            | `string`  | Title to display above the graph (default: "GitHub Contributions")          |
| `forceLightMode`   | `boolean` | Force the component to always use light mode (default: false)               |
| `fallbackUsername` | `string`  | Fallback username to use if the primary username fails (default: "octocat") |
| `githubUrl`        | `string`  | Custom GitHub profile URL to link to                                        |

### ThemeProvider

| Prop           | Type                            | Description                                                  |
| -------------- | ------------------------------- | ------------------------------------------------------------ |
| `children`     | `React.ReactNode`               | Child components                                             |
| `defaultTheme` | `'light' \| 'dark' \| 'system'` | Default theme (defaults to 'system')                         |
| `storageKey`   | `string`                        | Local storage key for theme preference (defaults to 'theme') |

### ResponsiveWrapper

| Prop        | Type              | Description                                  |
| ----------- | ----------------- | -------------------------------------------- |
| `children`  | `React.ReactNode` | Child components                             |
| `className` | `string`          | Optional CSS class to apply to the component |

## API Requirements

This component requires a GitHub Personal Access Token to fetch contribution data. Create a `.env.local` file in your project root with:

```
GITHUB_TOKEN=your_github_personal_access_token
```

See the ENV_SETUP.md file for detailed instructions on setting up your GitHub token.

## Customization

The component uses Tailwind CSS for styling. You can customize the appearance by modifying the CSS classes in the component files or by passing custom classes via the `className` prop.
