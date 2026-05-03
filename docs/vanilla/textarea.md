# Textarea

# Textarea

Multi-line text input component for entering longer text content.

## Import

```javascript
import { Textarea } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const textarea = new Textarea({ /* options */ });
document.body.appendChild(textarea.element);
```

## Props

No props available.







## Customization

The Textarea component supports CSS variables for complete customization:

```javascript
const textarea = new Textarea({
  style: {
    '--textarea-bg-color': '#007bff',
    '--textarea-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--textarea-wrapper-display`
- `--textarea-wrapper-width`
- `--full-width`
- `--textarea-padding-top`
- `--textarea-padding-y`
- `--textarea-padding-right`
- `--textarea-padding-x`
- `--textarea-padding-bottom`
- `--textarea-padding-left`
- `--textarea-border-width`
- ... and 50 more

## Accessibility

The Textarea component is fully accessible and follows WCAG 2.1 AA standards:

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

