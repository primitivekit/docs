---
title: "Progress"
description: "Feedback component for showing the completion progress of a task or operation."
framework: "astro"
category: "feedback"
weight: 380
tags: ["feedback", "astro"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Alert","Badge","Spinner","Skeleton"]
---

# Progress

Feedback component for showing the completion progress of a task or operation.

## Import

```astro
import { Progress } from '@primitivekit/astro';
```

## Basic Usage

```astro
<Progress>Content</Progress>
```

## Props

No props available.







## Customization

The Progress component supports CSS variables for complete customization:

```astro
<Progress style={{
  '--progress-bg-color': '#007bff',
  '--progress-text-color': '#ffffff'
}}>Custom</Progress>
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

- [Alert](/docs/astro/alert) - Feedback component for displaying important messages, warnings, or notifications.
- [Badge](/docs/astro/badge) - Small label component for displaying status, counts, or categories.
- [Spinner](/docs/astro/spinner) - Loading indicator component for showing that content is being loaded or processed.
- [Skeleton](/docs/astro/skeleton) - Placeholder component for showing loading states with animated skeleton screens.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
