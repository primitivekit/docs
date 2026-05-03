# Switch

# Switch

Toggle component for switching between two states, typically on/off or enabled/disabled.

## Import

```javascript
import { Switch } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const switch = new Switch({ /* options */ });
document.body.appendChild(switch.element);
```

## Props

No props available.







## Customization

The Switch component supports CSS variables for complete customization:

```javascript
const switch = new Switch({
  style: {
    '--switch-bg-color': '#007bff',
    '--switch-text-color': '#ffffff'
  }
});
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

- [Button](/docs/vanilla/button) - Interactive button component with multiple variants, sizes, and states for triggering actions.
- [Input](/docs/vanilla/input) - Text input field component with validation, icons, and various input types.
- [Select](/docs/vanilla/select) - Dropdown component for selecting one or multiple options from a list.
- [Checkbox](/docs/vanilla/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/vanilla/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

