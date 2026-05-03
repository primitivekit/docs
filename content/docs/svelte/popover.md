---
title: "Popover"
description: "Overlay component for displaying rich content in a floating panel triggered by user interaction."
framework: "svelte"
category: "overlay"
weight: 580
tags: ["overlay", "svelte"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Modal","Drawer","Tooltip","Dropdown"]
---

# Popover

Overlay component for displaying rich content in a floating panel triggered by user interaction.

## Import

```svelte
import Popover from '@primitivekit/svelte/Popover.svelte';
```

## Basic Usage

```svelte
<Popover>Content</Popover>
```

## Props

No props available.







## Customization

The Popover component supports CSS variables for complete customization:

```svelte
<Popover style={{
  '--popover-bg-color': '#007bff',
  '--popover-text-color': '#ffffff'
}}>Custom</Popover>
```

### Design Tokens

The following design tokens are available for customization:

- `--popover-bg-color`
- `--popover-color`
- `--popover-border-radius`
- `--popover-border-width`
- `--popover-border-color`
- `--popover-box-shadow`
- `--popover-padding-top`
- `--popover-padding-y`
- `--popover-padding-right`
- `--popover-padding-x`
- ... and 61 more

## Accessibility

The Popover component is fully accessible and follows WCAG 2.1 AA standards:

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

| `Escape` | Close component |

## Related Components

- [Modal](/docs/svelte/modal) - Overlay component for displaying content in a dialog that requires user interaction.
- [Drawer](/docs/svelte/drawer) - Overlay component for displaying a sliding panel from the edge of the screen.
- [Tooltip](/docs/svelte/tooltip) - Overlay component for displaying helpful information when hovering over an element.
- [Dropdown](/docs/svelte/dropdown) - Overlay component for displaying a menu or list of options triggered by a button.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
