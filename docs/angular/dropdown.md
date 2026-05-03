# Dropdown

# Dropdown

Overlay component for displaying a menu or list of options triggered by a button.

## Import

```typescript
import { DropdownComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-dropdown>Content</pk-dropdown>
```

## Props

No props available.







## Customization

The Dropdown component supports CSS variables for complete customization:

```typescript
<pk-dropdown [style]="{
  '--dropdown-bg-color': '#007bff',
  '--dropdown-text-color': '#ffffff'
}">Custom</pk-dropdown>
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

- [Modal](/docs/angular/modal) - Overlay component for displaying content in a dialog that requires user interaction.
- [Drawer](/docs/angular/drawer) - Overlay component for displaying a sliding panel from the edge of the screen.
- [Tooltip](/docs/angular/tooltip) - Overlay component for displaying helpful information when hovering over an element.
- [Popover](/docs/angular/popover) - Overlay component for displaying rich content in a floating panel triggered by user interaction.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

