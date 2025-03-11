# GitHub Deployment Guide for Mike Wayne Portfolio 2.0

Follow these steps to push your portfolio to GitHub and deploy it using GitHub Pages:

## Step 1: Create a new GitHub repository

1. Go to https://github.com/new
2. Name your repository: `mike-wayne-portfolio-2.0`
3. Make it public or private as preferred
4. Do not initialize with a README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Push your code to GitHub

Run these commands in your terminal from the project directory:

```bash
# Rename the current directory (optional)
# If you're in a directory with a long name, you might want to rename it
mv /Users/mikewayne/Downloads/karthikmudunuri-portfolio-template-cf86a2f ~/mike-wayne-portfolio-2.0
cd ~/mike-wayne-portfolio-2.0

# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit: Mike Wayne Portfolio 2.0"

# Add the GitHub repository as a remote
git remote add origin https://github.com/mikewayne92/mike-wayne-portfolio-2.0.git

# Push to GitHub
git push -u origin main
```

If your default branch is named `master` instead of `main`, use this command instead:
```bash
git push -u origin master
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. GitHub will automatically detect the Next.js workflow we've added

## Step 4: Trigger the first deployment

1. Go to the "Actions" tab in your repository
2. You should see the "Deploy Next.js site to Pages" workflow
3. If it hasn't started automatically, click on it and then click "Run workflow"

## Step 5: Access your deployed site

Once the workflow completes successfully:

1. Go back to "Settings" > "Pages"
2. You'll see a message like "Your site is published at https://mikewayne92.github.io/mike-wayne-portfolio-2.0/"
3. Click the link to view your deployed portfolio

## Troubleshooting

- If you see errors in the GitHub Actions workflow, check the logs for details
- Make sure your repository name in the `next.config.js` file matches your actual repository name
- If images aren't loading, check that the paths are correct with the basePath prefix

## Future Updates

To update your portfolio in the future:

1. Make your changes locally
2. Commit them: `git commit -m "Your update message"`
3. Push to GitHub: `git push`
4. The GitHub Actions workflow will automatically deploy your changes 