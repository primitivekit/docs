---
title: "Empty"
description: "Component for displaying empty states when no data or content is available."
framework: "astro"
category: "data-display"
weight: 669
tags: ["data-display", "astro"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Avatar","Tag","Table","Collapse","Image"]
---

# Empty

Component for displaying empty states when no data or content is available.

## Import

```astro
import { Empty } from '@primitivekit/astro';
```

## Basic Usage

```astro
<Empty>Content</Empty>
```

## Props

No props available.







## Customization

The Empty component supports CSS variables for complete customization:

```astro
<Empty style={{
  '--empty-bg-color': '#007bff',
  '--empty-text-color': '#ffffff'
}}>Custom</Empty>
```

### Design Tokens

The following design tokens are available for customization:

- `--empty-padding`
- `--empty-text-align`
- `--empty-max-width`
- `--empty-margin`
- `--empty-transition-duration`
- `--empty-transition-timing`
- `--empty-animation-duration`
- `--empty-animation-timing`
- `--empty-image-width`
- `--empty-image-height`
- ... and 32 more

## Accessibility

The Empty component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Avatar](/docs/astro/avatar) - Component for displaying user profile images or initials in a circular or rounded container.
- [Tag](/docs/astro/tag) - Removable label component for displaying tags, filters, or selections.
- [Table](/docs/astro/table) - Data display component for showing structured data in rows and columns with sorting and pagination.
- [Collapse](/docs/astro/collapse) - Component for showing and hiding content sections with expand/collapse animation.
- [Image](/docs/astro/image) - Enhanced image component with lazy loading, fallback, and aspect ratio support.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
