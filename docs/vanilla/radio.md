# Radio

# Radio

Form input component for selecting a single option from a set of mutually exclusive choices.

## Import

```javascript
import { Radio } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const radio = new Radio({ /* options */ });
document.body.appendChild(radio.element);
```

## Props

No props available.







## Customization

The Radio component supports CSS variables for complete customization:

```javascript
const radio = new Radio({
  style: {
    '--radio-bg-color': '#007bff',
    '--radio-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--radio-size`
- `--radio-border-width`
- `--radio-border-color`
- `--radio-border-color-hover`
- `--radio-border-color-checked`
- `--radio-bg-color`
- `--radio-bg-color-checked`
- `--radio-dot-color`
- `--radio-dot-size`
- `--radio-label-gap`
- ... and 7 more

## Accessibility

The Radio component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Switch](/docs/vanilla/switch) - Toggle component for switching between two states, typically on/off or enabled/disabled.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

