# Button

# Button

Interactive button component with multiple variants, sizes, and states for triggering actions.

## Import

```javascript
import { Button } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const button = new Button({ /* options */ });
document.body.appendChild(button.element);
```

## Props

No props available.







## Customization

The Button component supports CSS variables for complete customization:

```javascript
const button = new Button({
  style: {
    '--button-bg-color': '#007bff',
    '--button-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--button-gap`
- `--button-padding-y`
- `--button-padding-x`
- `--button-min-height`
- `--button-min-width`
- `--button-font-family`
- `--button-font-size`
- `--button-font-weight`
- `--button-line-height`
- `--button-background`
- ... and 63 more

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

- [Input](/docs/vanilla/input) - Text input field component with validation, icons, and various input types.
- [Select](/docs/vanilla/select) - Dropdown component for selecting one or multiple options from a list.
- [Checkbox](/docs/vanilla/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/vanilla/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.
- [Switch](/docs/vanilla/switch) - Toggle component for switching between two states, typically on/off or enabled/disabled.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

