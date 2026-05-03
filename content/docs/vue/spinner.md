---
title: "Spinner"
description: "Loading indicator component for showing that content is being loaded or processed."
framework: "vue"
category: "feedback"
weight: 383
tags: ["feedback", "vue"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Alert","Badge","Progress","Skeleton"]
---

# Spinner

Loading indicator component for showing that content is being loaded or processed.

## Import

```vue
import { Spinner } from '@primitivekit/vue';
```

## Basic Usage

```vue
<Spinner>Content</Spinner>
```

## Props

No props available.







## Customization

The Spinner component supports CSS variables for complete customization:

```vue
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

- [Alert](/docs/vue/alert) - Feedback component for displaying important messages, warnings, or notifications.
- [Badge](/docs/vue/badge) - Small label component for displaying status, counts, or categories.
- [Progress](/docs/vue/progress) - Feedback component for showing the completion progress of a task or operation.
- [Skeleton](/docs/vue/skeleton) - Placeholder component for showing loading states with animated skeleton screens.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
