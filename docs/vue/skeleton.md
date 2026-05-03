# Skeleton

# Skeleton

Placeholder component for showing loading states with animated skeleton screens.

## Import

```vue
import { Skeleton } from '@primitivekit/vue';
```

## Basic Usage

```vue
<Skeleton>Content</Skeleton>
```

## Props

No props available.







## Customization

The Skeleton component supports CSS variables for complete customization:

```vue
<Skeleton style={{
  '--skeleton-bg-color': '#007bff',
  '--skeleton-text-color': '#ffffff'
}}>Custom</Skeleton>
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

- [Alert](/docs/vue/alert) - Feedback component for displaying important messages, warnings, or notifications.
- [Badge](/docs/vue/badge) - Small label component for displaying status, counts, or categories.
- [Spinner](/docs/vue/spinner) - Loading indicator component for showing that content is being loaded or processed.
- [Progress](/docs/vue/progress) - Feedback component for showing the completion progress of a task or operation.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

