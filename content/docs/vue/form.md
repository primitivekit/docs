---
title: "Form"
description: "Container component for grouping form inputs with validation and submission handling."
framework: "vue"
category: "form"
weight: 270
tags: ["form", "vue"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Button","Input","Select","Checkbox","Radio"]
---

# Form

Container component for grouping form inputs with validation and submission handling.

## Import

```vue
import { Form } from '@primitivekit/vue';
```

## Basic Usage

```vue
<Form>Content</Form>
```

## Props

No props available.







## Customization

The Form component supports CSS variables for complete customization:

```vue
<Form style={{
  '--form-bg-color': '#007bff',
  '--form-text-color': '#ffffff'
}}>Custom</Form>
```

### Design Tokens

The following design tokens are available for customization:

- `--form-gap`
- `--form-padding`
- `--form-item-margin-bottom`
- `--form-label-font-size`
- `--form-label-font-weight`
- `--form-label-line-height`
- `--form-label-color`
- `--form-item-label-margin-bottom`
- `--form-label-required-color`
- `--form-label-required-margin-left`
- ... and 30 more

## Accessibility

The Form component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Button](/docs/vue/button) - Interactive button component with multiple variants, sizes, and states for triggering actions.
- [Input](/docs/vue/input) - Text input field component with validation, icons, and various input types.
- [Select](/docs/vue/select) - Dropdown component for selecting one or multiple options from a list.
- [Checkbox](/docs/vue/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/vue/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
