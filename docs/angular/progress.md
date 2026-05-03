# Progress

# Progress

Feedback component for showing the completion progress of a task or operation.

## Import

```typescript
import { ProgressComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-progress>Content</pk-progress>
```

## Props

No props available.







## Customization

The Progress component supports CSS variables for complete customization:

```typescript
<pk-progress [style]="{
  '--progress-bg-color': '#007bff',
  '--progress-text-color': '#ffffff'
}">Custom</pk-progress>
```

### Design Tokens

The following design tokens are available for customization:

- `--progress-height`
- `--progress-bg-color`
- `--progress-fill-color`
- `--progress-border-radius`
- `--small`
- `--large`
- `--indeterminate`

## Accessibility

The Progress component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Alert](/docs/angular/alert) - Feedback component for displaying important messages, warnings, or notifications.
- [Badge](/docs/angular/badge) - Small label component for displaying status, counts, or categories.
- [Spinner](/docs/angular/spinner) - Loading indicator component for showing that content is being loaded or processed.
- [Skeleton](/docs/angular/skeleton) - Placeholder component for showing loading states with animated skeleton screens.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

