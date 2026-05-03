---
title: "Card"
description: "Container component for grouping related content with optional header, body, and footer sections."
framework: "svelte"
category: "layout"
weight: 167
tags: ["layout", "svelte"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Container","Grid","Stack","Space","Divider"]
---

# Card

Container component for grouping related content with optional header, body, and footer sections.

## Import

```svelte
import Card from '@primitivekit/svelte/Card.svelte';
```

## Basic Usage

```svelte
<Card>Content</Card>
```

## Props

No props available.







## Customization

The Card component supports CSS variables for complete customization:

```svelte
<Card style={{
  '--card-bg-color': '#007bff',
  '--card-text-color': '#ffffff'
}}>Custom</Card>
```

### Design Tokens

The following design tokens are available for customization:

- `--card-bg-color`
- `--card-border-width`
- `--card-border-color`
- `--card-border-radius`
- `--card-padding`
- `--card-box-shadow`
- `--card-box-shadow-hover`
- `--card-transition-duration`
- `--elevated`
- `--outlined`
- ... and 3 more

## Accessibility

The Card component is fully accessible and follows WCAG 2.1 AA standards:

- ✅ Semantic HTML elements
- ✅ Keyboard accessible
- ✅ Focus visible indicator
- ✅ Proper ARIA attributes
- ✅ Screen reader compatible
- ✅ Touch target size (44x44px minimum)
- ✅ Color contrast compliance

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus to/from component |



## Related Components

- [Container](/docs/svelte/container) - Layout component for constraining content width and centering content on the page.
- [Grid](/docs/svelte/grid) - Layout component for creating responsive grid layouts with customizable columns and gaps.
- [Stack](/docs/svelte/stack) - Layout component for arranging children in a vertical or horizontal stack with consistent spacing.
- [Space](/docs/svelte/space) - Layout component for adding consistent spacing between elements.
- [Divider](/docs/svelte/divider) - Visual separator component for dividing content sections horizontally or vertically.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
