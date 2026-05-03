# Drawer

# Drawer

Overlay component for displaying a sliding panel from the edge of the screen.

## Import

```vue
import { Drawer } from '@primitivekit/vue';
```

## Basic Usage

```vue
<Drawer>Content</Drawer>
```

## Props

No props available.







## Customization

The Drawer component supports CSS variables for complete customization:

```vue
<Drawer style={{
  '--drawer-bg-color': '#007bff',
  '--drawer-text-color': '#ffffff'
}}>Custom</Drawer>
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

- [Modal](/docs/vue/modal) - Overlay component for displaying content in a dialog that requires user interaction.
- [Tooltip](/docs/vue/tooltip) - Overlay component for displaying helpful information when hovering over an element.
- [Popover](/docs/vue/popover) - Overlay component for displaying rich content in a floating panel triggered by user interaction.
- [Dropdown](/docs/vue/dropdown) - Overlay component for displaying a menu or list of options triggered by a button.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

