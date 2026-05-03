---
title: "Tooltip"
description: "Overlay component for displaying helpful information when hovering over an element."
framework: "vue"
category: "overlay"
weight: 584
tags: ["overlay", "vue"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Modal","Drawer","Popover","Dropdown"]
---

# Tooltip

Overlay component for displaying helpful information when hovering over an element.

## Import

```vue
import { Tooltip } from '@primitivekit/vue';
```

## Basic Usage

```vue
<Tooltip>Content</Tooltip>
```

## Props

No props available.







## Customization

The Tooltip component supports CSS variables for complete customization:

```vue
<Tooltip style={{
  '--tooltip-bg-color': '#007bff',
  '--tooltip-text-color': '#ffffff'
}}>Custom</Tooltip>
```

### Design Tokens

The following design tokens are available for customization:

- `--tooltip-bg-color`
- `--tooltip-color`
- `--tooltip-border-radius`
- `--tooltip-border-width`
- `--tooltip-border-color`
- `--tooltip-box-shadow`
- `--tooltip-padding-top`
- `--tooltip-padding-y`
- `--tooltip-padding-right`
- `--tooltip-padding-x`
- ... and 21 more

## Accessibility

The Tooltip component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Modal](/docs/vue/modal) - Overlay component for displaying content in a dialog that requires user interaction.
- [Drawer](/docs/vue/drawer) - Overlay component for displaying a sliding panel from the edge of the screen.
- [Popover](/docs/vue/popover) - Overlay component for displaying rich content in a floating panel triggered by user interaction.
- [Dropdown](/docs/vue/dropdown) - Overlay component for displaying a menu or list of options triggered by a button.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
