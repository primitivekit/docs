---
title: "Grid"
description: "Layout component for creating responsive grid layouts with customizable columns and gaps."
framework: "vanilla"
category: "layout"
weight: 171
tags: ["layout", "vanilla"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Card","Container","Stack","Space","Divider"]
---

# Grid

Layout component for creating responsive grid layouts with customizable columns and gaps.

## Import

```javascript
import { Grid } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const grid = new Grid({ /* options */ });
document.body.appendChild(grid.element);
```

## Props

No props available.







## Customization

The Grid component supports CSS variables for complete customization:

```javascript
const grid = new Grid({
  style: {
    '--grid-bg-color': '#007bff',
    '--grid-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--grid-columns`
- `--grid-gap`
- `--grid-row-gap`
- `--grid-column-gap`
- `--grid-auto-rows`
- `--grid-auto-columns`

## Accessibility

The Grid component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Card](/docs/vanilla/card) - Container component for grouping related content with optional header, body, and footer sections.
- [Container](/docs/vanilla/container) - Layout component for constraining content width and centering content on the page.
- [Stack](/docs/vanilla/stack) - Layout component for arranging children in a vertical or horizontal stack with consistent spacing.
- [Space](/docs/vanilla/space) - Layout component for adding consistent spacing between elements.
- [Divider](/docs/vanilla/divider) - Visual separator component for dividing content sections horizontally or vertically.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
