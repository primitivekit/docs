# Input

# Input

Text input field component with validation, icons, and various input types.

## Import

```javascript
import { Input } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const input = new Input({ /* options */ });
document.body.appendChild(input.element);
```

## Props

No props available.







## Customization

The Input component supports CSS variables for complete customization:

```javascript
const input = new Input({
  style: {
    '--input-bg-color': '#007bff',
    '--input-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--error`

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

- [Button](/docs/vanilla/button) - Interactive button component with multiple variants, sizes, and states for triggering actions.
- [Select](/docs/vanilla/select) - Dropdown component for selecting one or multiple options from a list.
- [Checkbox](/docs/vanilla/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/vanilla/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.
- [Switch](/docs/vanilla/switch) - Toggle component for switching between two states, typically on/off or enabled/disabled.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

