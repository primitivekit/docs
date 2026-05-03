# Image

# Image

Enhanced image component with lazy loading, fallback, and aspect ratio support.

## Import

```typescript
import { ImageComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-image>Content</pk-image>
```

## Props

No props available.







## Customization

The Image component supports CSS variables for complete customization:

```typescript
<pk-image [style]="{
  '--image-bg-color': '#007bff',
  '--image-text-color': '#ffffff'
}">Custom</pk-image>
```

### Design Tokens

The following design tokens are available for customization:

- `--image-display`
- `--image-position`
- `--image-overflow`
- `--image-border-radius`
- `--image-background`
- `--image-transition-duration`
- `--image-transition-timing`
- `--image-width`
- `--image-height`
- `--image-object-fit`
- ... and 38 more

## Accessibility

The Image component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Avatar](/docs/angular/avatar) - Component for displaying user profile images or initials in a circular or rounded container.
- [Tag](/docs/angular/tag) - Removable label component for displaying tags, filters, or selections.
- [Table](/docs/angular/table) - Data display component for showing structured data in rows and columns with sorting and pagination.
- [Collapse](/docs/angular/collapse) - Component for showing and hiding content sections with expand/collapse animation.
- [Empty](/docs/angular/empty) - Component for displaying empty states when no data or content is available.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

