---
title: "Avatar"
description: "Component for displaying user profile images or initials in a circular or rounded container."
framework: "svelte"
category: "data-display"
weight: 665
tags: ["data-display", "svelte"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Tag","Table","Collapse","Image","Empty"]
---

# Avatar

Component for displaying user profile images or initials in a circular or rounded container.

## Import

```svelte
import Avatar from '@primitivekit/svelte/Avatar.svelte';
```

## Basic Usage

```svelte
<Avatar>Content</Avatar>
```

## Props

No props available.







## Customization

The Avatar component supports CSS variables for complete customization:

```svelte
<Avatar style={{
  '--avatar-bg-color': '#007bff',
  '--avatar-text-color': '#ffffff'
}}>Custom</Avatar>
```

### Design Tokens

The following design tokens are available for customization:

- `--avatar-size`
- `--avatar-bg-color`
- `--avatar-color`
- `--avatar-border-radius`
- `--avatar-border-width`
- `--avatar-border-color`
- `--avatar-font-size`
- `--small`
- `--large`
- `--square`
- ... and 1 more

## Accessibility

The Avatar component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Tag](/docs/svelte/tag) - Removable label component for displaying tags, filters, or selections.
- [Table](/docs/svelte/table) - Data display component for showing structured data in rows and columns with sorting and pagination.
- [Collapse](/docs/svelte/collapse) - Component for showing and hiding content sections with expand/collapse animation.
- [Image](/docs/svelte/image) - Enhanced image component with lazy loading, fallback, and aspect ratio support.
- [Empty](/docs/svelte/empty) - Component for displaying empty states when no data or content is available.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
