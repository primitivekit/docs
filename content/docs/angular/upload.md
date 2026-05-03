---
title: "Upload"
description: "Component for uploading files with drag-and-drop support and progress indication."
framework: "angular"
category: "form"
weight: 285
tags: ["form", "angular"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Button","Input","Select","Checkbox","Radio"]
---

# Upload

Component for uploading files with drag-and-drop support and progress indication.

## Import

```typescript
import { UploadComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-upload>Content</pk-upload>
```

## Props

No props available.







## Customization

The Upload component supports CSS variables for complete customization:

```typescript
<pk-upload [style]="{
  '--upload-bg-color': '#007bff',
  '--upload-text-color': '#ffffff'
}">Custom</pk-upload>
```

### Design Tokens

The following design tokens are available for customization:

- `--upload-border-width`
- `--upload-border-style`
- `--upload-border-color`
- `--upload-border-radius`
- `--upload-background`
- `--upload-padding`
- `--upload-min-height`
- `--upload-cursor`
- `--upload-transition-duration`
- `--upload-transition-timing`
- ... and 38 more

## Accessibility

The Upload component is fully accessible and follows WCAG 2.1 AA standards:

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
| `Enter` | Activate component |
| `Space` | Activate component |


## Related Components

- [Button](/docs/angular/button) - Interactive button component with multiple variants, sizes, and states for triggering actions.
- [Input](/docs/angular/input) - Text input field component with validation, icons, and various input types.
- [Select](/docs/angular/select) - Dropdown component for selecting one or multiple options from a list.
- [Checkbox](/docs/angular/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/angular/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
