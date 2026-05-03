# Collapse

# Collapse

Component for showing and hiding content sections with expand/collapse animation.

## Import

```javascript
import { Collapse } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const collapse = new Collapse({ /* options */ });
document.body.appendChild(collapse.element);
```

## Props

No props available.







## Customization

The Collapse component supports CSS variables for complete customization:

```javascript
const collapse = new Collapse({
  style: {
    '--collapse-bg-color': '#007bff',
    '--collapse-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--collapse-background`
- `--bordered`
- `--collapse-border-width`
- `--collapse-border-style`
- `--collapse-border-color`
- `--collapse-border-radius`
- `--collapse-item-border-bottom-width`
- `--collapse-item-border-bottom-style`
- `--collapse-item-border-bottom-color`
- `--collapse-item-margin-bottom`
- ... and 40 more

## Accessibility

The Collapse component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Table](/docs/vanilla/table) - Data display component for showing structured data in rows and columns with sorting and pagination.
- [Image](/docs/vanilla/image) - Enhanced image component with lazy loading, fallback, and aspect ratio support.
- [Empty](/docs/vanilla/empty) - Component for displaying empty states when no data or content is available.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

