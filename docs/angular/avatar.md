# Avatar

# Avatar

Component for displaying user profile images or initials in a circular or rounded container.

## Import

```typescript
import { AvatarComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-avatar>Content</pk-avatar>
```

## Props

No props available.







## Customization

The Avatar component supports CSS variables for complete customization:

```typescript
<pk-avatar [style]="{
  '--avatar-bg-color': '#007bff',
  '--avatar-text-color': '#ffffff'
}">Custom</pk-avatar>
```

### Design Tokens

The following design tokens are available for customization:

- `--avatar-size`
- `--avatar-bg-color`
- `--avatar-color`
- `--avatar-border-radius`
- `--avatar-border-width`
- `--avatar-border-color`
- `--avatar-font-size`
- `--small`
- `--large`
- `--square`
- ... and 1 more

## Accessibility

The Avatar component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Tag](/docs/angular/tag) - Removable label component for displaying tags, filters, or selections.
- [Table](/docs/angular/table) - Data display component for showing structured data in rows and columns with sorting and pagination.
- [Collapse](/docs/angular/collapse) - Component for showing and hiding content sections with expand/collapse animation.
- [Image](/docs/angular/image) - Enhanced image component with lazy loading, fallback, and aspect ratio support.
- [Empty](/docs/angular/empty) - Component for displaying empty states when no data or content is available.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

