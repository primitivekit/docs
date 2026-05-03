---
title: "Skeleton"
description: "Placeholder component for showing loading states with animated skeleton screens."
framework: "svelte"
category: "feedback"
weight: 383
tags: ["feedback", "svelte"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Alert","Badge","Spinner","Progress"]
---

# Skeleton

Placeholder component for showing loading states with animated skeleton screens.

## Import

```svelte
import Skeleton from '@primitivekit/svelte/Skeleton.svelte';
```

## Basic Usage

```svelte
<Skeleton>Content</Skeleton>
```

## Props

No props available.







## Customization

The Skeleton component supports CSS variables for complete customization:

```svelte
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

- [Alert](/docs/svelte/alert) - Feedback component for displaying important messages, warnings, or notifications.
- [Badge](/docs/svelte/badge) - Small label component for displaying status, counts, or categories.
- [Spinner](/docs/svelte/spinner) - Loading indicator component for showing that content is being loaded or processed.
- [Progress](/docs/svelte/progress) - Feedback component for showing the completion progress of a task or operation.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
