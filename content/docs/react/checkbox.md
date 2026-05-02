---
title: Checkbox
weight: 4
---

# Checkbox

A checkbox input component for boolean selections with customization options.

## Import

```tsx
import { Checkbox } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Checkbox label="Accept terms and conditions" />
```

## Sizes

```tsx
<Checkbox size="small" label="Small checkbox" />
<Checkbox size="medium" label="Medium checkbox" />
<Checkbox size="large" label="Large checkbox" />
```

## States

```tsx
// Checked
<Checkbox checked label="Checked" />

// Unchecked
<Checkbox checked={false} label="Unchecked" />

// Indeterminate
<Checkbox indeterminate label="Indeterminate" />

// Disabled
<Checkbox disabled label="Disabled" />

// Disabled & Checked
<Checkbox disabled checked label="Disabled & Checked" />
```

## Color Schemes

```tsx
<Checkbox colorScheme="primary" label="Primary" />
<Checkbox colorScheme="secondary" label="Secondary" />
<Checkbox colorScheme="success" label="Success" />
<Checkbox colorScheme="danger" label="Danger" />
```

## Controlled Checkbox

```tsx
import { useState } from 'react';

function ControlledCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label="Subscribe to newsletter"
    />
  );
}
```

## Checkbox Group

```tsx
function CheckboxGroup() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setSelected(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div>
      <Checkbox
        checked={selected.includes('react')}
        onChange={() => handleChange('react')}
        label="React"
      />
      <Checkbox
        checked={selected.includes('vue')}
        onChange={() => handleChange('vue')}
        label="Vue"
      />
      <Checkbox
        checked={selected.includes('angular')}
        onChange={() => handleChange('angular')}
        label="Angular"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string \| ReactNode` | - | Checkbox label |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Checkbox size |
| `colorScheme` | `'primary' \| 'secondary' \| 'success' \| 'danger'` | `'primary'` | Color scheme |
| `checked` | `boolean` | - | Checked state (controlled) |
| `defaultChecked` | `boolean` | `false` | Default checked state |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `onChange` | `function` | - | Change handler |
| `disabled` | `boolean` | `false` | Disable checkbox |
| `required` | `boolean` | `false` | Required field |
| `name` | `string` | - | Input name |
| `value` | `string` | - | Input value |

## Customization

```tsx
<Checkbox
  label="Custom checkbox"
  style={{
    '--checkbox-size': '24px',
    '--checkbox-border-radius': '6px',
    '--checkbox-bg-color-checked': 'rgba(255, 0, 0, 1)',
    '--checkbox-border-color': 'rgba(200, 200, 200, 1)',
    '--checkbox-checkmark-color': 'rgba(255, 255, 255, 1)',
  }}
/>
```

## Accessibility

- ✅ Proper label association
- ✅ Keyboard navigation (Space to toggle)
- ✅ Focus indicators
- ✅ Screen reader support
- ✅ Touch target size (44x44px)

## Related Components

- [Radio](/docs/react/radio) - Single selection
- [Switch](/docs/react/switch) - Toggle switch
- [Select](/docs/react/select) - Dropdown selection
