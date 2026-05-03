---
title: "Drawer"
description: "Overlay component for displaying a sliding panel from the edge of the screen."
framework: "angular"
category: "overlay"
weight: 568
tags: ["overlay", "angular"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Modal","Tooltip","Popover","Dropdown"]
---

# Drawer

Overlay component for displaying a sliding panel from the edge of the screen.

## Import

```typescript
import { DrawerComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-drawer>Content</pk-drawer>
```

## Props

No props available.







## Customization

The Drawer component supports CSS variables for complete customization:

```typescript
<pk-drawer [style]="{
  '--drawer-bg-color': '#007bff',
  '--drawer-text-color': '#ffffff'
}">Custom</pk-drawer>
```

### Design Tokens

The following design tokens are available for customization:

- `--drawer-mask-background`
- `--drawer-mask-z-index`
- `--drawer-mask-opacity`
- `--drawer-mask-backdrop-filter`
- `--drawer-transition-duration`
- `--drawer-transition-timing`
- `--open`
- `--drawer-z-index`
- `--drawer-background`
- `--drawer-box-shadow`
- ... and 58 more

## Accessibility

The Drawer component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Modal](/docs/angular/modal) - Overlay component for displaying content in a dialog that requires user interaction.
- [Tooltip](/docs/angular/tooltip) - Overlay component for displaying helpful information when hovering over an element.
- [Popover](/docs/angular/popover) - Overlay component for displaying rich content in a floating panel triggered by user interaction.
- [Dropdown](/docs/angular/dropdown) - Overlay component for displaying a menu or list of options triggered by a button.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
