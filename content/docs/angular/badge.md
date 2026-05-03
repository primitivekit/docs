---
title: "Badge"
description: "Small label component for displaying status, counts, or categories."
framework: "angular"
category: "feedback"
weight: 366
tags: ["feedback", "angular"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Alert","Spinner","Progress","Skeleton"]
---

# Badge

Small label component for displaying status, counts, or categories.

## Import

```typescript
import { BadgeComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-badge>Content</pk-badge>
```

## Props

No props available.







## Customization

The Badge component supports CSS variables for complete customization:

```typescript
<pk-badge [style]="{
  '--badge-bg-color': '#007bff',
  '--badge-text-color': '#ffffff'
}">Custom</pk-badge>
```

### Design Tokens

The following design tokens are available for customization:

- `--badge-padding-x`
- `--badge-padding-y`
- `--badge-font-size`
- `--badge-font-weight`
- `--badge-border-radius`
- `--badge-border-width`
- `--small`
- `--large`
- `--solid`
- `--primary`
- ... and 10 more

## Accessibility

The Badge component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Spinner](/docs/angular/spinner) - Loading indicator component for showing that content is being loaded or processed.
- [Progress](/docs/angular/progress) - Feedback component for showing the completion progress of a task or operation.
- [Skeleton](/docs/angular/skeleton) - Placeholder component for showing loading states with animated skeleton screens.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
