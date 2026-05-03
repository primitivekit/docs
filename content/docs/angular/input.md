---
title: "Input"
description: "Text input field component with validation, icons, and various input types."
framework: "angular"
category: "form"
weight: 273
tags: ["form", "angular"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Button","Select","Checkbox","Radio","Switch"]
---

# Input

Text input field component with validation, icons, and various input types.

## Import

```typescript
import { InputComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-input>Content</pk-input>
```

## Props

No props available.







## Customization

The Input component supports CSS variables for complete customization:

```typescript
<pk-input [style]="{
  '--input-bg-color': '#007bff',
  '--input-text-color': '#ffffff'
}">Custom</pk-input>
```

### Design Tokens

The following design tokens are available for customization:

- `--input-wrapper-gap`
- `--input-wrapper-width`
- `--input-label-font-size`
- `--input-label-font-weight`
- `--input-label-color`
- `--input-label-margin-bottom`
- `--input-required-color`
- `--input-required-margin-left`
- `--input-padding-y`
- `--input-padding-x`
- ... and 39 more

## Accessibility

The Input component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Select](/docs/angular/select) - Dropdown component for selecting one or multiple options from a list.
- [Checkbox](/docs/angular/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/angular/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.
- [Switch](/docs/angular/switch) - Toggle component for switching between two states, typically on/off or enabled/disabled.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
