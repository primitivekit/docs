# Skeleton

# Skeleton

Placeholder component for showing loading states with animated skeleton screens.

## Import

```javascript
import { Skeleton } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const skeleton = new Skeleton({ /* options */ });
document.body.appendChild(skeleton.element);
```

## Props

No props available.







## Customization

The Skeleton component supports CSS variables for complete customization:

```javascript
const skeleton = new Skeleton({
  style: {
    '--skeleton-bg-color': '#007bff',
    '--skeleton-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--skeleton-bg-color`
- `--skeleton-animation-duration`
- `--skeleton-width`
- `--skeleton-height`
- `--skeleton-border-radius`
- `--text`
- `--rectangular`
- `--circular`
- `--circle`

## Accessibility

The Skeleton component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Alert](/docs/vanilla/alert) - Feedback component for displaying important messages, warnings, or notifications.
- [Badge](/docs/vanilla/badge) - Small label component for displaying status, counts, or categories.
- [Spinner](/docs/vanilla/spinner) - Loading indicator component for showing that content is being loaded or processed.
- [Progress](/docs/vanilla/progress) - Feedback component for showing the completion progress of a task or operation.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

