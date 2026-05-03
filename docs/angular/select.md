# Select

# Select

Dropdown component for selecting one or multiple options from a list.

## Import

```typescript
import { SelectComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-select>Content</pk-select>
```

## Props

No props available.







## Customization

The Select component supports CSS variables for complete customization:

```typescript
<pk-select [style]="{
  '--select-bg-color': '#007bff',
  '--select-text-color': '#ffffff'
}">Custom</pk-select>
```

### Design Tokens

The following design tokens are available for customization:

- `--select-wrapper-display`
- `--select-wrapper-width`
- `--full-width`
- `--select-padding-y`
- `--select-padding-x`
- `--select-padding-right`
- `--select-border-width`
- `--select-border-style`
- `--select-border-color`
- `--select-border-radius`
- ... and 31 more

## Accessibility

The Select component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Checkbox](/docs/angular/checkbox) - Form input component for selecting one or multiple options from a set.
- [Radio](/docs/angular/radio) - Form input component for selecting a single option from a set of mutually exclusive choices.
- [Switch](/docs/angular/switch) - Toggle component for switching between two states, typically on/off or enabled/disabled.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

