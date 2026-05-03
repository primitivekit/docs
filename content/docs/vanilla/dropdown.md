---
title: "Dropdown"
description: "Overlay component for displaying a menu or list of options triggered by a button."
framework: "vanilla"
category: "overlay"
weight: 568
tags: ["overlay", "vanilla"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Modal","Drawer","Tooltip","Popover"]
---

# Dropdown

Overlay component for displaying a menu or list of options triggered by a button.

## Import

```javascript
import { Dropdown } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const dropdown = new Dropdown({ /* options */ });
document.body.appendChild(dropdown.element);
```

## Props

No props available.







## Customization

The Dropdown component supports CSS variables for complete customization:

```javascript
const dropdown = new Dropdown({
  style: {
    '--dropdown-bg-color': '#007bff',
    '--dropdown-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--dropdown-bg-color`
- `--dropdown-border-radius`
- `--dropdown-border-width`
- `--dropdown-border-color`
- `--dropdown-box-shadow`
- `--dropdown-padding-top`
- `--dropdown-padding-y`
- `--dropdown-padding-right`
- `--dropdown-padding-x`
- `--dropdown-padding-bottom`
- ... and 42 more

## Accessibility

The Dropdown component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Tooltip](/docs/vanilla/tooltip) - Overlay component for displaying helpful information when hovering over an element.
- [Popover](/docs/vanilla/popover) - Overlay component for displaying rich content in a floating panel triggered by user interaction.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
