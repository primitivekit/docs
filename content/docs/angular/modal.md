---
title: "Modal"
description: "Overlay component for displaying content in a dialog that requires user interaction."
framework: "angular"
category: "overlay"
weight: 577
tags: ["overlay", "angular"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Drawer","Tooltip","Popover","Dropdown"]
---

# Modal

Overlay component for displaying content in a dialog that requires user interaction.

## Import

```typescript
import { ModalComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-modal>Content</pk-modal>
```

## Props

No props available.







## Customization

The Modal component supports CSS variables for complete customization:

```typescript
<pk-modal [style]="{
  '--modal-bg-color': '#007bff',
  '--modal-text-color': '#ffffff'
}">Custom</pk-modal>
```

### Design Tokens

The following design tokens are available for customization:

- `--modal-overlay-bg-color`
- `--modal-overlay-opacity`
- `--modal-overlay-backdrop-filter`
- `--modal-overlay-z-index`
- `--modal-overlay-animation-duration`
- `--modal-overlay-animation-timing`
- `--modal-bg-color`
- `--modal-color`
- `--modal-border-radius`
- `--modal-border-width`
- ... and 57 more

## Accessibility

The Modal component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Drawer](/docs/angular/drawer) - Overlay component for displaying a sliding panel from the edge of the screen.
- [Tooltip](/docs/angular/tooltip) - Overlay component for displaying helpful information when hovering over an element.
- [Popover](/docs/angular/popover) - Overlay component for displaying rich content in a floating panel triggered by user interaction.
- [Dropdown](/docs/angular/dropdown) - Overlay component for displaying a menu or list of options triggered by a button.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
