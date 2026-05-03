---
title: "Stack"
description: "Layout component for arranging children in a vertical or horizontal stack with consistent spacing."
framework: "astro"
category: "layout"
weight: 183
tags: ["layout", "astro"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Card","Container","Grid","Space","Divider"]
---

# Stack

Layout component for arranging children in a vertical or horizontal stack with consistent spacing.

## Import

```astro
import { Stack } from '@primitivekit/astro';
```

## Basic Usage

```astro
<Stack>Content</Stack>
```

## Props

No props available.







## Customization

The Stack component supports CSS variables for complete customization:

```astro
<Stack style={{
  '--stack-bg-color': '#007bff',
  '--stack-text-color': '#ffffff'
}}>Custom</Stack>
```

### Design Tokens

The following design tokens are available for customization:

- `--stack-gap`
- `--stack-direction`
- `--stack-align-items`
- `--stack-justify-content`
- `--horizontal`
- `--vertical`
- `--align-start`
- `--align-center`
- `--align-end`
- `--align-stretch`
- ... and 7 more

## Accessibility

The Stack component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Card](/docs/astro/card) - Container component for grouping related content with optional header, body, and footer sections.
- [Container](/docs/astro/container) - Layout component for constraining content width and centering content on the page.
- [Grid](/docs/astro/grid) - Layout component for creating responsive grid layouts with customizable columns and gaps.
- [Space](/docs/astro/space) - Layout component for adding consistent spacing between elements.
- [Divider](/docs/astro/divider) - Visual separator component for dividing content sections horizontally or vertically.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
