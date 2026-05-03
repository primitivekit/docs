---
title: "Menu"
description: "Navigation component for displaying a list of actions or navigation links."
framework: "astro"
category: "navigation"
weight: 477
tags: ["navigation", "astro"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Link","Breadcrumb","Tabs","Steps","Pagination"]
---

# Menu

Navigation component for displaying a list of actions or navigation links.

## Import

```astro
import { Menu } from '@primitivekit/astro';
```

## Basic Usage

```astro
<Menu>Content</Menu>
```

## Props

No props available.







## Customization

The Menu component supports CSS variables for complete customization:

```astro
<Menu style={{
  '--menu-bg-color': '#007bff',
  '--menu-text-color': '#ffffff'
}}>Custom</Menu>
```

### Design Tokens

The following design tokens are available for customization:

- `--menu-background`
- `--menu-border-width`
- `--menu-border-style`
- `--menu-border-color`
- `--menu-border-radius`
- `--menu-padding`
- `--menu-min-width`
- `--menu-item-margin`
- `--menu-item-padding`
- `--menu-item-height`
- ... and 48 more

## Accessibility

The Menu component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Link](/docs/astro/link) - Navigation component for creating accessible hyperlinks with various styles.
- [Breadcrumb](/docs/astro/breadcrumb) - Navigation component for showing the current page location in a hierarchical structure.
- [Tabs](/docs/astro/tabs) - Navigation component for organizing content into multiple panels with tab selection.
- [Steps](/docs/astro/steps) - Navigation component for showing progress through a multi-step process or wizard.
- [Pagination](/docs/astro/pagination) - Navigation component for splitting content across multiple pages with page controls.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
