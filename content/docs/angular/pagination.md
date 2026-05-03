---
title: "Pagination"
description: "Navigation component for splitting content across multiple pages with page controls."
framework: "angular"
category: "navigation"
weight: 480
tags: ["navigation", "angular"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Link","Breadcrumb","Tabs","Menu","Steps"]
---

# Pagination

Navigation component for splitting content across multiple pages with page controls.

## Import

```typescript
import { PaginationComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-pagination>Content</pk-pagination>
```

## Props

No props available.







## Customization

The Pagination component supports CSS variables for complete customization:

```typescript
<pk-pagination [style]="{
  '--pagination-bg-color': '#007bff',
  '--pagination-text-color': '#ffffff'
}">Custom</pk-pagination>
```

### Design Tokens

The following design tokens are available for customization:

- `--pagination-display`
- `--pagination-align-items`
- `--pagination-gap`
- `--pagination-padding`
- `--pagination-item-min-width`
- `--pagination-item-height`
- `--pagination-item-padding`
- `--pagination-item-font-size`
- `--pagination-item-font-weight`
- `--pagination-item-line-height`
- ... and 56 more

## Accessibility

The Pagination component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Link](/docs/angular/link) - Navigation component for creating accessible hyperlinks with various styles.
- [Breadcrumb](/docs/angular/breadcrumb) - Navigation component for showing the current page location in a hierarchical structure.
- [Tabs](/docs/angular/tabs) - Navigation component for organizing content into multiple panels with tab selection.
- [Menu](/docs/angular/menu) - Navigation component for displaying a list of actions or navigation links.
- [Steps](/docs/angular/steps) - Navigation component for showing progress through a multi-step process or wizard.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
