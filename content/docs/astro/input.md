---
title: "Input"
description: "Text input field component with validation, icons, and various input types."
framework: "astro"
category: "form"
weight: 273
tags: ["form", "astro"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Button","Select","Checkbox","Radio","Switch"]
---

# Input

Text input field component with validation, icons, and various input types.

## Import

```astro
import { Input } from '@primitivekit/astro';
```

## Basic Usage

```astro
<Input>Content</Input>
```

## Props

No props available.







## Customization

The Input component supports CSS variables for complete customization:

```astro
<Input style={{
  '--input-bg-color': '#007bff',
  '--input-text-color': '#ffffff'
}}>Custom</Input>
```

### Design Tokens

The following design tokens are available for customization:

- `--input-wrapper-display`
- `--input-wrapper-width`
- `--full-width`
- `--input-padding-top`
- `--input-padding-y`
- `--input-padding-right`
- `--input-padding-x`
- `--input-padding-bottom`
- `--input-padding-left`
- `--input-margin-top`
- ... and 122 more

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

- [Button](/docs/astro/button) - Interactive button component with multiple variants, sizes, and states for triggering actions.
- [Select](/docs/astro/select) - Dropdown component for selecting one or multiple options from a list.
- [Checkbox](/docs/astro/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/astro/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.
- [Switch](/docs/astro/switch) - Toggle component for switching between two states, typically on/off or enabled/disabled.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
