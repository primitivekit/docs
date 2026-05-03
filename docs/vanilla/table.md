# Table

# Table

Data display component for showing structured data in rows and columns with sorting and pagination.

## Import

```javascript
import { Table } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const table = new Table({ /* options */ });
document.body.appendChild(table.element);
```

## Props

No props available.







## Customization

The Table component supports CSS variables for complete customization:

```javascript
const table = new Table({
  style: {
    '--table-bg-color': '#007bff',
    '--table-text-color': '#ffffff'
  }
});
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

- [Avatar](/docs/vanilla/avatar) - Component for displaying user profile images or initials in a circular or rounded container.
- [Tag](/docs/vanilla/tag) - Removable label component for displaying tags, filters, or selections.
- [Collapse](/docs/vanilla/collapse) - Component for showing and hiding content sections with expand/collapse animation.
- [Image](/docs/vanilla/image) - Enhanced image component with lazy loading, fallback, and aspect ratio support.
- [Empty](/docs/vanilla/empty) - Component for displaying empty states when no data or content is available.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

