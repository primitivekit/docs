---
title: "Button"
description: "Interactive button component with multiple variants, sizes, and states for triggering actions."
framework: "svelte"
category: "form"
weight: 266
tags: ["form", "svelte"]
version: "0.1.0"
wcagLevel: "AA"
relatedComponents: ["Input","Select","Checkbox","Radio","Switch"]
---

# Button

Interactive button component with multiple variants, sizes, and states for triggering actions.

## Import

```svelte
import Button from '@primitivekit/svelte/Button.svelte';
```

## Basic Usage

```svelte
<Button>Content</Button>
```

## Props

No props available.







## Customization

The Button component supports CSS variables for complete customization:

```svelte
<Button style={{
  '--button-bg-color': '#007bff',
  '--button-text-color': '#ffffff'
}}>Custom</Button>
```

### Design Tokens

The following design tokens are available for customization:

- `--btn-padding-top`
- `--btn-padding-y`
- `--btn-padding-right`
- `--btn-padding-x`
- `--btn-padding-bottom`
- `--btn-padding-left`
- `--btn-margin-top`
- `--btn-margin-y`
- `--btn-margin-right`
- `--btn-margin-x`
- ... and 139 more

## Accessibility

The Button component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Input](/docs/svelte/input) - Text input field component with validation, icons, and various input types.
- [Select](/docs/svelte/select) - Dropdown component for selecting one or multiple options from a list.
- [Checkbox](/docs/svelte/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/svelte/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.
- [Switch](/docs/svelte/switch) - Toggle component for switching between two states, typically on/off or enabled/disabled.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
