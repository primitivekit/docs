# Alert

# Alert

Feedback component for displaying important messages, warnings, or notifications.

## Import

```javascript
import { Alert } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const alert = new Alert({ /* options */ });
document.body.appendChild(alert.element);
```

## Props

No props available.







## Customization

The Alert component supports CSS variables for complete customization:

```javascript
const alert = new Alert({
  style: {
    '--alert-bg-color': '#007bff',
    '--alert-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--alert-padding`
- `--alert-border-radius`
- `--alert-border-width`
- `--alert-icon-color`
- `--alert-text-color`
- `--solid`
- `--info`
- `--alert-bg-color`
- `--subtle`
- `--left-accent`
- ... and 5 more

## Accessibility

The Alert component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Badge](/docs/vanilla/badge) - Small label component for displaying status, counts, or categories.
- [Spinner](/docs/vanilla/spinner) - Loading indicator component for showing that content is being loaded or processed.
- [Progress](/docs/vanilla/progress) - Feedback component for showing the completion progress of a task or operation.
- [Skeleton](/docs/vanilla/skeleton) - Placeholder component for showing loading states with animated skeleton screens.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

