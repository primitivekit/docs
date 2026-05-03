# Switch

# Switch

Toggle component for switching between two states, typically on/off or enabled/disabled.

## Import

```typescript
import { SwitchComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-switch>Content</pk-switch>
```

## Props

No props available.







## Customization

The Switch component supports CSS variables for complete customization:

```typescript
<pk-switch [style]="{
  '--switch-bg-color': '#007bff',
  '--switch-text-color': '#ffffff'
}">Custom</pk-switch>
```

### Design Tokens

The following design tokens are available for customization:

- `--switch-width`
- `--switch-height`
- `--switch-bg-color`
- `--switch-bg-color-checked`
- `--switch-thumb-size`
- `--switch-thumb-color`
- `--switch-thumb-offset`
- `--switch-label-gap`
- `--switch-label-color`
- `--switch-label-font-size`
- ... and 5 more

## Accessibility

The Switch component is fully accessible and follows WCAG 2.1 AA standards:

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

