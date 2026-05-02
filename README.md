# PrimitiveKit Documentation

Static documentation site for [@primitivekit/react](https://www.npmjs.com/package/@primitivekit/react) built with [Hugo](https://gohugo.io/) and [Hextra](https://github.com/imfing/hextra) theme.

## Features

- ✅ **Blazingly Fast** - Hugo builds in milliseconds
- ✅ **Zero JavaScript** - Pure static HTML/CSS
- ✅ **Multi-Framework Examples** - React, Vue, Svelte, Angular, HTML/CSS
- ✅ **SEO Optimized** - All content pre-rendered
- ✅ **Full-Text Search** - Built-in search functionality
- ✅ **Dark Mode** - Automatic theme switching
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **Accessibility** - WCAG compliant

## Development

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (v0.123.0 or later, extended version)
- [Go](https://go.dev/doc/install) (v1.21 or later)

### Install Hugo

**macOS:**
```bash
brew install hugo
```

**Linux:**
```bash
snap install hugo
```

**Windows:**
```bash
choco install hugo-extended
```

### Local Development

```bash
# Start development server
hugo server --buildDrafts --buildFuture

# Or use npm script
npm run dev
```

Visit http://localhost:1313

### Build

```bash
# Build static site
hugo --minify

# Or use npm script
npm run build
```

Output will be in `./public` directory.

## Project Structure

```
docs/
├── content/                 # Markdown content
│   ├── _index.md           # Home page
│   └── docs/               # Documentation pages
│       ├── _index.md       # Docs home
│       ├── installation.md
│       ├── customization.md
│       ├── accessibility.md
│       ├── design-tokens.md
│       └── components/     # Component docs
│           ├── button.md
│           ├── input.md
│           └── ...
├── static/                 # Static assets
│   ├── images/
│   └── CNAME
├── hugo.toml              # Hugo configuration
├── go.mod                 # Hugo modules
└── package.json           # NPM scripts
```

## Adding Content

### Create a New Page

```bash
hugo new docs/my-page.md
```

### Create a Component Page

```bash
hugo new docs/components/my-component.md
```

### Front Matter Example

```yaml
---
title: Button Component
weight: 1
---

Your content here...
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
# Build the site
hugo --minify

# Deploy to GitHub Pages
# (Handled by GitHub Actions)
```

## Configuration

Edit `hugo.toml` to customize:

- Site title and description
- Navigation menus
- Theme settings
- Search configuration
- Social links

## Theme

This site uses the [Hextra](https://github.com/imfing/hextra) theme, which provides:

- Modern, responsive design
- Dark mode support
- Full-text search
- Syntax highlighting
- Mobile-friendly navigation
- SEO optimization

## License

MIT License - see [LICENSE](../LICENSE) for details.

## Links

- [Live Site](https://primitivekit.com)
- [GitHub Repository](https://github.com/primitivekit/react)
- [NPM Package](https://www.npmjs.com/package/@primitivekit/react)
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hextra Theme](https://imfing.github.io/hextra/)
