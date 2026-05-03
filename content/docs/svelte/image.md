---
title: "Image"
description: "Enhanced image component with lazy loading, fallback, and aspect ratio support."
framework: "svelte"
category: "data-display"
weight: 673
tags: ["data-display", "svelte"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Avatar","Tag","Table","Collapse","Empty"]
---

# Image

Enhanced image component with lazy loading, fallback, and aspect ratio support.

## Import

```svelte
import Image from '@primitivekit/svelte/Image.svelte';
```

## Basic Usage

```svelte
<Image>Content</Image>
```

## Props

No props available.







## Customization

The Image component supports CSS variables for complete customization:

```svelte
<Image style={{
  '--image-bg-color': '#007bff',
  '--image-text-color': '#ffffff'
}}>Custom</Image>
```

### Design Tokens

The following design tokens are available for customization:

- `--image-display`
- `--image-position`
- `--image-overflow`
- `--image-border-radius`
- `--image-background`
- `--image-transition-duration`
- `--image-transition-timing`
- `--image-width`
- `--image-height`
- `--image-object-fit`
- ... and 38 more

## Accessibility

The Image component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Avatar](/docs/svelte/avatar) - Component for displaying user profile images or initials in a circular or rounded container.
- [Tag](/docs/svelte/tag) - Removable label component for displaying tags, filters, or selections.
- [Table](/docs/svelte/table) - Data display component for showing structured data in rows and columns with sorting and pagination.
- [Collapse](/docs/svelte/collapse) - Component for showing and hiding content sections with expand/collapse animation.
- [Empty](/docs/svelte/empty) - Component for displaying empty states when no data or content is available.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
