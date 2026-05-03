---
title: "Link"
description: "Navigation component for creating accessible hyperlinks with various styles."
framework: "vanilla"
category: "navigation"
weight: 476
tags: ["navigation", "vanilla"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Breadcrumb","Tabs","Menu","Steps","Pagination"]
---

# Link

Navigation component for creating accessible hyperlinks with various styles.

## Import

```javascript
import { Link } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const link = new Link({ /* options */ });
document.body.appendChild(link.element);
```

## Props

No props available.







## Customization

The Link component supports CSS variables for complete customization:

```javascript
const link = new Link({
  style: {
    '--link-bg-color': '#007bff',
    '--link-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--link-color`
- `--link-color-hover`
- `--link-color-active`
- `--link-color-visited`
- `--link-color-focus`
- `--link-bg-color`
- `--link-bg-color-hover`
- `--link-bg-color-active`
- `--link-bg-color-focus`
- `--link-font-family`
- ... and 89 more

## Accessibility

The Link component is fully accessible and follows WCAG 2.1 AA standards:

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
| `Enter` | Activate component |
| `Space` | Activate component |


## Related Components

- [Breadcrumb](/docs/vanilla/breadcrumb) - Navigation component for showing the current page location in a hierarchical structure.
- [Tabs](/docs/vanilla/tabs) - Navigation component for organizing content into multiple panels with tab selection.
- [Menu](/docs/vanilla/menu) - Navigation component for displaying a list of actions or navigation links.
- [Steps](/docs/vanilla/steps) - Navigation component for showing progress through a multi-step process or wizard.
- [Pagination](/docs/vanilla/pagination) - Navigation component for splitting content across multiple pages with page controls.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
