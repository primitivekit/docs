# Upload

# Upload

Component for uploading files with drag-and-drop support and progress indication.

## Import

```javascript
import { Upload } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const upload = new Upload({ /* options */ });
document.body.appendChild(upload.element);
```

## Props

No props available.







## Customization

The Upload component supports CSS variables for complete customization:

```javascript
const upload = new Upload({
  style: {
    '--upload-bg-color': '#007bff',
    '--upload-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--upload-border-width`
- `--upload-border-style`
- `--upload-border-color`
- `--upload-border-radius`
- `--upload-background`
- `--upload-padding`
- `--upload-min-height`
- `--upload-cursor`
- `--upload-transition-duration`
- `--upload-transition-timing`
- ... and 38 more

## Accessibility

The Upload component is fully accessible and follows WCAG 2.1 AA standards:

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

