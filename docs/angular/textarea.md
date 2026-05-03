# Textarea

# Textarea

Multi-line text input component for entering longer text content.

## Import

```typescript
import { TextareaComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-textarea>Content</pk-textarea>
```

## Props

No props available.







## Customization

The Textarea component supports CSS variables for complete customization:

```typescript
<pk-textarea [style]="{
  '--textarea-bg-color': '#007bff',
  '--textarea-text-color': '#ffffff'
}">Custom</pk-textarea>
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

