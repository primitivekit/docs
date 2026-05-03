# Upload

# Upload

Component for uploading files with drag-and-drop support and progress indication.

## Import

```astro
import { Upload } from '@primitivekit/astro';
```

## Basic Usage

```astro
<Upload>Content</Upload>
```

## Props

No props available.







## Customization

The Upload component supports CSS variables for complete customization:

```astro
<Upload style={{
  '--upload-bg-color': '#007bff',
  '--upload-text-color': '#ffffff'
}}>Custom</Upload>
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

- [Button](/docs/astro/button) - Interactive button component with multiple variants, sizes, and states for triggering actions.
- [Input](/docs/astro/input) - Text input field component with validation, icons, and various input types.
- [Select](/docs/astro/select) - Dropdown component for selecting one or multiple options from a list.
- [Checkbox](/docs/astro/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/astro/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

