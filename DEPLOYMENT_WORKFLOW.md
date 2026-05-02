# Deployment Workflow

## Overview

This Hugo site uses a clean separation between source code and build artifacts:

- **main branch**: Source code only (content, config, theme)
- **gh-pages branch**: Built site only (HTML, CSS, JS) - managed by GitHub Actions
- **local public/ folder**: Ignored by git, used for local development

## Branch Structure

### main Branch (Source)
```
docs/
├── .github/workflows/    # GitHub Actions
├── content/              # Markdown content
├── static/               # Static assets
├── hugo.toml            # Hugo config
├── go.mod               # Hugo modules
├── package.json         # NPM scripts
└── .gitignore           # Ignores public/ and resources/
```

**What's tracked**: Source files only  
**What's ignored**: `public/`, `resources/_gen/`, `.hugo_build.lock`

### gh-pages Branch (Build Output)
```
gh-pages/
├── css/                 # Compiled CSS
├── js/                  # Compiled JS
├── docs/                # Built HTML pages
├── images/              # Optimized images
├── index.html           # Home page
├── CNAME                # Custom domain
└── .nojekyll            # Disable Jekyll
```

**What's tracked**: Built site only  
**Managed by**: GitHub Actions (automated)

## Deployment Flow

### 1. Local Development
```bash
# Start development server
cd docs
hugo server --buildDrafts --buildFuture

# Visit http://localhost:1313
# Hugo builds to public/ folder (ignored by git)
```

### 2. Make Changes
```bash
# Edit content files
vim content/docs/my-page.md

# Changes appear instantly in browser (hot reload)
```

### 3. Commit and Push
```bash
# Stage your changes (source files only)
git add content/docs/my-page.md

# Commit
git commit -m "docs: add my-page documentation"

# Push to main branch
git push origin main
```

### 4. Automatic Deployment
GitHub Actions automatically:
1. Checks out code with submodules
2. Sets up Hugo (v0.161.1 extended)
3. Sets up Go (v1.21)
4. Builds with `hugo --minify`
5. Deploys to `gh-pages` branch
6. Adds CNAME file

**Time**: ~30 seconds

### 5. GitHub Pages Deployment
GitHub Pages automatically:
1. Detects new commit on `gh-pages` branch
2. Deploys to https://primitivekit.com
3. Updates CDN cache

**Time**: ~60 seconds

**Total time from push to live**: ~90 seconds

## .gitignore Configuration

The `.gitignore` file ensures build artifacts are never committed:

```gitignore
# Hugo build output
/public/              # Built site (HTML, CSS, JS)
/resources/_gen/      # Generated resources

# Hugo cache
.hugo_build.lock      # Build lock file

# Dependencies
node_modules/

# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
```

## Why This Approach?

### ✅ Benefits

1. **Clean Repository**
   - Only source files in version control
   - No build artifacts cluttering history
   - Smaller repository size

2. **Consistent Builds**
   - Everyone uses the same Hugo version
   - No "works on my machine" issues
   - Reproducible builds

3. **Automatic Deployment**
   - Push to main → site updates automatically
   - No manual build/deploy steps
   - No risk of forgetting to build

4. **Separation of Concerns**
   - Source code on main branch
   - Build output on gh-pages branch
   - Clear separation

5. **Local Development**
   - `public/` folder exists locally for testing
   - Ignored by git
   - Can be deleted and rebuilt anytime

### ❌ What NOT to Do

1. **Don't commit public/ folder**
   ```bash
   # ❌ WRONG
   git add public/
   git commit -m "Add build files"
   ```

2. **Don't manually edit gh-pages branch**
   ```bash
   # ❌ WRONG
   git checkout gh-pages
   vim index.html  # Manual edits will be overwritten
   ```

3. **Don't push build files**
   ```bash
   # ❌ WRONG
   hugo --minify
   git add public/
   git push
   ```

## GitHub Actions Workflow

### Trigger
- Push to `main` branch
- Manual workflow dispatch

### Steps
```yaml
1. Checkout code (with submodules)
2. Setup Hugo (latest extended)
3. Setup Go (v1.21)
4. Build: hugo --minify
5. Deploy to gh-pages branch
6. Add CNAME file
```

### Workflow File
`.github/workflows/deploy.yml`

### View Runs
https://github.com/primitivekit/docs/actions

## Local Commands

### Development
```bash
# Start dev server
hugo server --buildDrafts --buildFuture

# Or use npm script
npm run dev
```

### Build Locally (for testing)
```bash
# Build to public/ folder
hugo --minify

# Or use npm script
npm run build

# Note: public/ is ignored by git
```

### Clean Build
```bash
# Remove build artifacts
rm -rf public/ resources/

# Rebuild
hugo --minify
```

### Create New Content
```bash
# Create new page
hugo new docs/my-page.md

# Create new component page
hugo new docs/components/my-component.md
```

## Verification

### Check What's Tracked
```bash
# Should NOT include public/
git ls-files | grep public
# (should return nothing)
```

### Check What's Ignored
```bash
# Should show public/ as ignored
git status --ignored
```

### Check gh-pages Branch
```bash
# Switch to gh-pages
git checkout gh-pages

# View built files
ls -la

# Switch back to main
git checkout main
```

### Check Live Site
```bash
# Check if Hugo site is live
curl -s https://primitivekit.com/ | grep "Hugo"

# Should return:
# <meta name=generator content="Hugo 0.161.1">
```

## Troubleshooting

### Issue: public/ folder is tracked by git
```bash
# Remove from git tracking
git rm -r --cached public/

# Commit
git commit -m "chore: remove public/ from git tracking"

# Push
git push origin main
```

### Issue: Changes not appearing on live site
```bash
# 1. Check GitHub Actions ran successfully
# Visit: https://github.com/primitivekit/docs/actions

# 2. Check gh-pages branch was updated
git fetch origin
git log origin/gh-pages -1

# 3. Wait 1-2 minutes for GitHub Pages to deploy

# 4. Clear browser cache
# Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
```

### Issue: Build fails in GitHub Actions
```bash
# Check workflow logs
# Visit: https://github.com/primitivekit/docs/actions

# Common issues:
# - Hugo module errors → Check go.mod
# - Content errors → Check markdown syntax
# - Theme errors → Check hugo.toml
```

## Best Practices

### 1. Always Work on main Branch
```bash
# ✅ CORRECT
git checkout main
# Edit files
git add .
git commit -m "docs: update content"
git push origin main
```

### 2. Never Edit gh-pages Branch
```bash
# ❌ WRONG
git checkout gh-pages
# Edit files
# Changes will be overwritten by GitHub Actions
```

### 3. Test Locally Before Pushing
```bash
# ✅ CORRECT
hugo server --buildDrafts
# Test in browser
# If looks good, commit and push
```

### 4. Use Descriptive Commit Messages
```bash
# ✅ CORRECT
git commit -m "docs: add Button component examples"
git commit -m "feat: add search functionality"
git commit -m "fix: correct installation instructions"
```

### 5. Keep public/ Folder Locally
```bash
# ✅ CORRECT
# Don't delete public/ folder
# It's useful for local testing
# Just don't commit it
```

## Summary

| Aspect | Configuration |
|--------|---------------|
| **Source Branch** | main |
| **Build Branch** | gh-pages |
| **Build Tool** | Hugo v0.161.1 |
| **CI/CD** | GitHub Actions |
| **Deployment** | GitHub Pages |
| **Build Time** | ~1.3 seconds |
| **Deploy Time** | ~90 seconds |
| **Ignored Files** | public/, resources/, .hugo_build.lock |

## Quick Reference

```bash
# Local development
hugo server --buildDrafts

# Create new page
hugo new docs/my-page.md

# Build locally (for testing)
hugo --minify

# Deploy (automatic)
git push origin main

# Check deployment
./check-deployment.sh

# View workflow runs
# https://github.com/primitivekit/docs/actions
```

---

**Remember**: Never commit the `public/` folder. GitHub Actions handles all builds and deployments automatically!
