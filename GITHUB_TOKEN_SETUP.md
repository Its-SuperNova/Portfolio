# GitHub Token Setup Guide

## Why You Need a GitHub Token

The GitHub API has rate limits:

- **Unauthenticated requests**: 60 requests per hour
- **Authenticated requests**: 5,000 requests per hour

Without a token, your portfolio will hit the rate limit quickly and show errors.

## How to Create a GitHub Token

### Step 1: Go to GitHub Settings

1. Log in to your GitHub account
2. Click your profile picture → **Settings**
3. Scroll down to **Developer settings** (bottom left)
4. Click **Personal access tokens** → **Tokens (classic)**

### Step 2: Generate New Token

1. Click **Generate new token** → **Generate new token (classic)**
2. Give it a descriptive name: `Portfolio GitHub API`
3. Set expiration: **No expiration** (or choose a date)
4. Select scopes:
   - ✅ **public_repo** (to read public repository data)
   - ✅ **read:user** (to read user profile data)

### Step 3: Copy the Token

1. Click **Generate token**
2. **IMPORTANT**: Copy the token immediately (you won't see it again!)
3. Store it securely

## Setting Up the Token

### For Local Development

1. Create a `.env.local` file in your project root:

```env
GITHUB_TOKEN=your_github_token_here
```

2. Restart your development server:

```bash
npm run dev
```

### For Production (Vercel)

1. Go to your Vercel dashboard
2. Select your portfolio project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Name**: `GITHUB_TOKEN`
   - **Value**: `your_github_token_here`
   - **Environment**: Production, Preview, Development
5. Click **Save**
6. Redeploy your project

## Security Notes

- ✅ The token only has read permissions
- ✅ It's stored as an environment variable (not in code)
- ✅ It's only used for public data
- ✅ You can revoke it anytime from GitHub settings

## Testing

After setting up the token:

1. Visit your portfolio
2. Check the GitHub contributions section
3. Open browser dev tools → Network tab
4. Look for `/api/github/contributions/` requests
5. They should return 200 status instead of 403/429

## Troubleshooting

### Still getting 403 errors?

- Check if the token is correctly set in environment variables
- Verify the token hasn't expired
- Ensure the token has the correct permissions

### Getting 401 errors?

- The token might be invalid or revoked
- Generate a new token and update your environment variables

### Rate limited?

- Wait an hour for the rate limit to reset
- Or generate a new token with higher limits

## Alternative: Use Demo Data

If you prefer not to use a token, you can modify the component to show demo data when the API fails:

```typescript
// In your GitHub component
const [contributions, setContributions] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
  fetchContributions()
    .then((data) => setContributions(data))
    .catch((err) => {
      setError(err);
      // Show demo data instead
      setContributions(getDemoContributions());
    });
}, []);
```

This way, your portfolio will always show something, even if the GitHub API is unavailable.
