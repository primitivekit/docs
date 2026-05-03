---
title: "Card"
description: "Container component for grouping related content with optional header, body, and footer sections."
framework: "vanilla"
category: "layout"
weight: 167
tags: ["layout", "vanilla"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Container","Grid","Stack","Space","Divider"]
---

# Card

Container component for grouping related content with optional header, body, and footer sections.

## Import

```javascript
import { Card } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const card = new Card({ /* options */ });
document.body.appendChild(card.element);
```

## Props

No props available.







## Customization

The Card component supports CSS variables for complete customization:

```javascript
const card = new Card({
  style: {
    '--card-bg-color': '#007bff',
    '--card-text-color': '#ffffff'
  }
});
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

- [Container](/docs/vanilla/container) - Layout component for constraining content width and centering content on the page.
- [Grid](/docs/vanilla/grid) - Layout component for creating responsive grid layouts with customizable columns and gaps.
- [Stack](/docs/vanilla/stack) - Layout component for arranging children in a vertical or horizontal stack with consistent spacing.
- [Space](/docs/vanilla/space) - Layout component for adding consistent spacing between elements.
- [Divider](/docs/vanilla/divider) - Visual separator component for dividing content sections horizontally or vertically.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
