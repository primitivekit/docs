---
title: "Tooltip"
description: "Overlay component for displaying helpful information when hovering over an element."
framework: "vanilla"
category: "overlay"
weight: 584
tags: ["overlay", "vanilla"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Modal","Drawer","Popover","Dropdown"]
---

# Tooltip

Overlay component for displaying helpful information when hovering over an element.

## Import

```javascript
import { Tooltip } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const tooltip = new Tooltip({ /* options */ });
document.body.appendChild(tooltip.element);
```

## Props

No props available.







## Customization

The Tooltip component supports CSS variables for complete customization:

```javascript
const tooltip = new Tooltip({
  style: {
    '--tooltip-bg-color': '#007bff',
    '--tooltip-text-color': '#ffffff'
  }
});
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

- [Modal](/docs/vanilla/modal) - Overlay component for displaying content in a dialog that requires user interaction.
- [Drawer](/docs/vanilla/drawer) - Overlay component for displaying a sliding panel from the edge of the screen.
- [Popover](/docs/vanilla/popover) - Overlay component for displaying rich content in a floating panel triggered by user interaction.
- [Dropdown](/docs/vanilla/dropdown) - Overlay component for displaying a menu or list of options triggered by a button.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
