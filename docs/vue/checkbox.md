# Checkbox

# Checkbox

Form input component for selecting one or multiple options from a set.

## Import

```vue
import { Checkbox } from '@primitivekit/vue';
```

## Basic Usage

```vue
<Checkbox>Content</Checkbox>
```

## Props

No props available.







## Customization

The Checkbox component supports CSS variables for complete customization:

```vue
<Checkbox style={{
  '--checkbox-bg-color': '#007bff',
  '--checkbox-text-color': '#ffffff'
}}>Custom</Checkbox>
```

### Design Tokens

The following design tokens are available for customization:

- `--checkbox-size`
- `--checkbox-border-width`
- `--checkbox-border-color`
- `--checkbox-border-radius`
- `--checkbox-border-color-hover`
- `--checkbox-border-color-checked`
- `--checkbox-bg-color`
- `--checkbox-bg-color-checked`
- `--checkbox-checkmark-color`
- `--checkbox-label-gap`
- ... and 8 more

## Accessibility

The Checkbox component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Radio](/docs/vue/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.
- [Switch](/docs/vue/switch) - Toggle component for switching between two states, typically on/off or enabled/disabled.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

