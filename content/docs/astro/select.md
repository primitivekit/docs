---
title: "Select"
description: "Dropdown component for selecting one or multiple options from a list."
framework: "astro"
category: "form"
weight: 283
tags: ["form", "astro"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Button","Input","Checkbox","Radio","Switch"]
---

# Select

Dropdown component for selecting one or multiple options from a list.

## Import

```astro
import { Select } from '@primitivekit/astro';
```

## Basic Usage

```astro
<Select>Content</Select>
```

## Props

No props available.







## Customization

The Select component supports CSS variables for complete customization:

```astro
<Select style={{
  '--select-bg-color': '#007bff',
  '--select-text-color': '#ffffff'
}}>Custom</Select>
```

### Design Tokens

The following design tokens are available for customization:

- `--select-wrapper-display`
- `--select-wrapper-width`
- `--full-width`
- `--select-padding-y`
- `--select-padding-x`
- `--select-padding-right`
- `--select-border-width`
- `--select-border-style`
- `--select-border-color`
- `--select-border-radius`
- ... and 31 more

## Accessibility

The Select component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Input](/docs/astro/input) - Text input field component with validation, icons, and various input types.
- [Checkbox](/docs/astro/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/astro/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.
- [Switch](/docs/astro/switch) - Toggle component for switching between two states, typically on/off or enabled/disabled.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
