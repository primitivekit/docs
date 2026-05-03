# Tag

# Tag

Removable label component for displaying tags, filters, or selections.

## Import

```vue
import { Tag } from '@primitivekit/vue';
```

## Basic Usage

```vue
<Tag>Content</Tag>
```

## Props

No props available.







## Customization

The Tag component supports CSS variables for complete customization:

```vue
<Tag style={{
  '--tag-bg-color': '#007bff',
  '--tag-text-color': '#ffffff'
}}>Custom</Tag>
```

### Design Tokens

The following design tokens are available for customization:

- `--tag-bg-color`
- `--tag-color`
- `--tag-border-color`
- `--tag-border-radius`
- `--tag-padding-x`
- `--tag-padding-y`
- `--tag-font-size`
- `--small`
- `--large`
- `--primary`
- ... and 4 more

## Accessibility

The Tag component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Table](/docs/vue/table) - Data display component for showing structured data in rows and columns with sorting and pagination.
- [Collapse](/docs/vue/collapse) - Component for showing and hiding content sections with expand/collapse animation.
- [Image](/docs/vue/image) - Enhanced image component with lazy loading, fallback, and aspect ratio support.
- [Empty](/docs/vue/empty) - Component for displaying empty states when no data or content is available.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

