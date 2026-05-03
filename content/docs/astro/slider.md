---
title: "Slider"
description: "Input component for selecting a numeric value from a range using a draggable handle."
framework: "astro"
category: "form"
weight: 283
tags: ["form", "astro"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Button","Input","Select","Checkbox","Radio"]
---

# Slider

Input component for selecting a numeric value from a range using a draggable handle.

## Import

```astro
import { Slider } from '@primitivekit/astro';
```

## Basic Usage

```astro
<Slider>Content</Slider>
```

## Props

No props available.







## Customization

The Slider component supports CSS variables for complete customization:

```astro
<Slider style={{
  '--slider-bg-color': '#007bff',
  '--slider-text-color': '#ffffff'
}}>Custom</Slider>
```

### Design Tokens

The following design tokens are available for customization:

- `--slider-height`
- `--slider-padding`
- `--disabled`
- `--slider-rail-height`
- `--slider-rail-background`
- `--slider-rail-border-radius`
- `--slider-track-background`
- `--slider-track-height`
- `--slider-track-border-radius`
- `--slider-transition-duration`
- ... and 46 more

## Accessibility

The Slider component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Select](/docs/astro/select) - Dropdown component for selecting one or multiple options from a list.
- [Checkbox](/docs/astro/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/astro/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
