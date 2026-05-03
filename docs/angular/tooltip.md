# Tooltip

# Tooltip

Overlay component for displaying helpful information when hovering over an element.

## Import

```typescript
import { TooltipComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-tooltip>Content</pk-tooltip>
```

## Props

No props available.







## Customization

The Tooltip component supports CSS variables for complete customization:

```typescript
<pk-tooltip [style]="{
  '--tooltip-bg-color': '#007bff',
  '--tooltip-text-color': '#ffffff'
}">Custom</pk-tooltip>
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

- [Modal](/docs/angular/modal) - Overlay component for displaying content in a dialog that requires user interaction.
- [Drawer](/docs/angular/drawer) - Overlay component for displaying a sliding panel from the edge of the screen.
- [Popover](/docs/angular/popover) - Overlay component for displaying rich content in a floating panel triggered by user interaction.
- [Dropdown](/docs/angular/dropdown) - Overlay component for displaying a menu or list of options triggered by a button.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

