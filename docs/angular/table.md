# Table

# Table

Data display component for showing structured data in rows and columns with sorting and pagination.

## Import

```typescript
import { TableComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-table>Content</pk-table>
```

## Props

No props available.







## Customization

The Table component supports CSS variables for complete customization:

```typescript
<pk-table [style]="{
  '--table-bg-color': '#007bff',
  '--table-text-color': '#ffffff'
}">Custom</pk-table>
```

### Design Tokens

The following design tokens are available for customization:

- `--table-border-width`
- `--table-border-style`
- `--table-border-color`
- `--table-border-radius`
- `--table-background`
- `--table-header-background`
- `--table-header-padding`
- `--table-header-color`
- `--table-header-font-weight`
- `--table-header-border-bottom-width`
- ... and 31 more

## Accessibility

The Table component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Collapse](/docs/angular/collapse) - Component for showing and hiding content sections with expand/collapse animation.
- [Image](/docs/angular/image) - Enhanced image component with lazy loading, fallback, and aspect ratio support.
- [Empty](/docs/angular/empty) - Component for displaying empty states when no data or content is available.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

