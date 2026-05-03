---
title: "Alert"
description: "Feedback component for displaying important messages, warnings, or notifications."
framework: "angular"
category: "feedback"
weight: 365
tags: ["feedback", "angular"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Badge","Spinner","Progress","Skeleton"]
---

# Alert

Feedback component for displaying important messages, warnings, or notifications.

## Import

```typescript
import { AlertComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-alert>Content</pk-alert>
```

## Props

No props available.







## Customization

The Alert component supports CSS variables for complete customization:

```typescript
<pk-alert [style]="{
  '--alert-bg-color': '#007bff',
  '--alert-text-color': '#ffffff'
}">Custom</pk-alert>
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

- [Badge](/docs/angular/badge) - Small label component for displaying status, counts, or categories.
- [Spinner](/docs/angular/spinner) - Loading indicator component for showing that content is being loaded or processed.
- [Progress](/docs/angular/progress) - Feedback component for showing the completion progress of a task or operation.
- [Skeleton](/docs/angular/skeleton) - Placeholder component for showing loading states with animated skeleton screens.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
