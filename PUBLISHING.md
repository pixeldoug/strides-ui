# 🚀 Publishing Guide

## Quick Start - Single Command Release

```bash
# For patch releases (bug fixes)
npm run release:patch

# For minor releases (new features)
npm run release:minor

# For major releases (breaking changes)
npm run release:major
```

## What Happens Automatically

When you run a release command:

1. ✅ **Lints** the code
2. ✅ **Builds** the package
3. ✅ **Generates** changelog from commit messages
4. ✅ **Bumps** version in package.json
5. ✅ **Creates** git tag
6. ✅ **Pushes** to GitHub
7. ✅ **Creates** GitHub release
8. ✅ **Publishes** to npm
9. ✅ **Deploys** Storybook to GitHub Pages

## Setup Requirements

### 1. npm Token
```bash
# Login to npm
npm login

# Or set token manually
npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN
```

### 2. GitHub Token
The release tool needs a GitHub token with repo permissions:
```bash
export GITHUB_TOKEN=your_github_personal_access_token
```

### 3. GitHub Secrets (for Actions)
Add these secrets to your GitHub repository:
- `NPM_TOKEN`: Your npm authentication token
- `GITHUB_TOKEN`: Automatically provided by GitHub

## Conventional Commits

Use conventional commit messages for automatic changelog generation:

```bash
feat: add new PhoneInput component
fix: resolve chevron overlap issue
docs: update component documentation
chore: update dependencies
```

## Dry Run

Test the release process without actually publishing:

```bash
npm run release:dry
```

## Manual Release

If you prefer manual control:

```bash
npm run release
```

This will prompt you for version bump and confirmation at each step.

## Troubleshooting

### Build Fails
```bash
npm run build
npm run lint
```

### npm Publish Fails
```bash
npm whoami  # Check if logged in
npm config list  # Check registry settings
```

### GitHub Release Fails
```bash
# Check if GITHUB_TOKEN is set
echo $GITHUB_TOKEN
``` 