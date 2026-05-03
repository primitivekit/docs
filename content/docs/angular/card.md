---
title: "Card"
description: "Container component for grouping related content with optional header, body, and footer sections."
framework: "angular"
category: "layout"
weight: 167
tags: ["layout", "angular"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Container","Grid","Stack","Space","Divider"]
---

# Card

Container component for grouping related content with optional header, body, and footer sections.

## Import

```typescript
import { CardComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-card>Content</pk-card>
```

## Props

No props available.







## Customization

The Card component supports CSS variables for complete customization:

```typescript
<pk-card [style]="{
  '--card-bg-color': '#007bff',
  '--card-text-color': '#ffffff'
}">Custom</pk-card>
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

- [Container](/docs/angular/container) - Layout component for constraining content width and centering content on the page.
- [Grid](/docs/angular/grid) - Layout component for creating responsive grid layouts with customizable columns and gaps.
- [Stack](/docs/angular/stack) - Layout component for arranging children in a vertical or horizontal stack with consistent spacing.
- [Space](/docs/angular/space) - Layout component for adding consistent spacing between elements.
- [Divider](/docs/angular/divider) - Visual separator component for dividing content sections horizontally or vertically.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
