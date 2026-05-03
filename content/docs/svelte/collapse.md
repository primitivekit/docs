---
title: "Collapse"
description: "Component for showing and hiding content sections with expand/collapse animation."
framework: "svelte"
category: "data-display"
weight: 667
tags: ["data-display", "svelte"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Avatar","Tag","Table","Image","Empty"]
---

# Collapse

Component for showing and hiding content sections with expand/collapse animation.

## Import

```svelte
import Collapse from '@primitivekit/svelte/Collapse.svelte';
```

## Basic Usage

```svelte
<Collapse>Content</Collapse>
```

## Props

No props available.







## Customization

The Collapse component supports CSS variables for complete customization:

```svelte
<Collapse style={{
  '--collapse-bg-color': '#007bff',
  '--collapse-text-color': '#ffffff'
}}>Custom</Collapse>
```

### Design Tokens

The following design tokens are available for customization:

- `--collapse-background`
- `--bordered`
- `--collapse-border-width`
- `--collapse-border-style`
- `--collapse-border-color`
- `--collapse-border-radius`
- `--collapse-item-border-bottom-width`
- `--collapse-item-border-bottom-style`
- `--collapse-item-border-bottom-color`
- `--collapse-item-margin-bottom`
- ... and 40 more

## Accessibility

The Collapse component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Image](/docs/svelte/image) - Enhanced image component with lazy loading, fallback, and aspect ratio support.
- [Empty](/docs/svelte/empty) - Component for displaying empty states when no data or content is available.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
