# Divider

# Divider

Visual separator component for dividing content sections horizontally or vertically.

## Import

```vue
import { Divider } from '@primitivekit/vue';
```

## Basic Usage

```vue
<Divider>Content</Divider>
```

## Props

No props available.







## Customization

The Divider component supports CSS variables for complete customization:

```vue
<Divider style={{
  '--divider-bg-color': '#007bff',
  '--divider-text-color': '#ffffff'
}}>Custom</Divider>
```

### Design Tokens

The following design tokens are available for customization:

- `--divider-color`
- `--divider-width`
- `--divider-style`
- `--divider-margin-y`
- `--divider-margin-x`
- `--horizontal`
- `--vertical`
- `--dashed`
- `--dotted`
- `--with-label`

## Accessibility

The Divider component is fully accessible and follows WCAG 2.1 AA standards:

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



## Related Components

- [Card](/docs/vue/card) - Container component for grouping related content with optional header, body, and footer sections.
- [Container](/docs/vue/container) - Layout component for constraining content width and centering content on the page.
- [Grid](/docs/vue/grid) - Layout component for creating responsive grid layouts with customizable columns and gaps.
- [Stack](/docs/vue/stack) - Layout component for arranging children in a vertical or horizontal stack with consistent spacing.
- [Space](/docs/vue/space) - Layout component for adding consistent spacing between elements.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

