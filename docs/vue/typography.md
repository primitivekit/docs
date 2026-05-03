# Typography

# Typography

Text component for consistent typography with predefined styles and semantic HTML.

## Import

```vue
import { Typography } from '@primitivekit/vue';
```

## Basic Usage

```vue
<Typography>Content</Typography>
```

## Props

No props available.







## Customization

The Typography component supports CSS variables for complete customization:

```vue
<Typography style={{
  '--typography-bg-color': '#007bff',
  '--typography-text-color': '#ffffff'
}}>Custom</Typography>
```

### Design Tokens

The following design tokens are available for customization:

- `--typography-font-family`
- `--typography-font-size`
- `--typography-font-weight`
- `--typography-line-height`
- `--typography-letter-spacing`
- `--typography-text-align`
- `--typography-text-transform`
- `--typography-text-decoration`
- `--typography-color`
- `--typography-margin-top`
- ... and 27 more

## Accessibility

The Typography component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Avatar](/docs/vue/avatar) - Component for displaying user profile images or initials in a circular or rounded container.
- [Tag](/docs/vue/tag) - Removable label component for displaying tags, filters, or selections.
- [Table](/docs/vue/table) - Data display component for showing structured data in rows and columns with sorting and pagination.
- [Collapse](/docs/vue/collapse) - Component for showing and hiding content sections with expand/collapse animation.
- [Image](/docs/vue/image) - Enhanced image component with lazy loading, fallback, and aspect ratio support.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

