# Popover

# Popover

Overlay component for displaying rich content in a floating panel triggered by user interaction.

## Import

```astro
import { Popover } from '@primitivekit/astro';
```

## Basic Usage

```astro
<Popover>Content</Popover>
```

## Props

No props available.







## Customization

The Popover component supports CSS variables for complete customization:

```astro
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

- [Modal](/docs/astro/modal) - Overlay component for displaying content in a dialog that requires user interaction.
- [Drawer](/docs/astro/drawer) - Overlay component for displaying a sliding panel from the edge of the screen.
- [Tooltip](/docs/astro/tooltip) - Overlay component for displaying helpful information when hovering over an element.
- [Dropdown](/docs/astro/dropdown) - Overlay component for displaying a menu or list of options triggered by a button.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

