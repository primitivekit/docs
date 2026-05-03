# Spinner

# Spinner

Loading indicator component for showing that content is being loaded or processed.

## Import

```svelte
import Spinner from '@primitivekit/svelte/Spinner.svelte';
```

## Basic Usage

```svelte
<Spinner>Content</Spinner>
```

## Props

No props available.







## Customization

The Spinner component supports CSS variables for complete customization:

```svelte
<Spinner style={{
  '--spinner-bg-color': '#007bff',
  '--spinner-text-color': '#ffffff'
}}>Custom</Spinner>
```

### Design Tokens

The following design tokens are available for customization:

- `--spinner-size`
- `--spinner-color`
- `--spinner-border-width`
- `--spinner-speed`
- `--border`
- `--dots`
- `--small`
- `--medium`
- `--large`
- `--xlarge`

## Accessibility

The Spinner component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Alert](/docs/svelte/alert) - Feedback component for displaying important messages, warnings, or notifications.
- [Badge](/docs/svelte/badge) - Small label component for displaying status, counts, or categories.
- [Progress](/docs/svelte/progress) - Feedback component for showing the completion progress of a task or operation.
- [Skeleton](/docs/svelte/skeleton) - Placeholder component for showing loading states with animated skeleton screens.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

