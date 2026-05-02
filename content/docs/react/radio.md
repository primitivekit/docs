---
title: Radio
weight: 5
---

# Radio

A radio button component for single selection from multiple options.

## Import

```tsx
import { Radio, RadioGroup } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Radio label="Option 1" name="option" value="1" />
<Radio label="Option 2" name="option" value="2" />
```

## Radio Group

```tsx
<RadioGroup name="plan" defaultValue="basic">
  <Radio value="basic" label="Basic Plan" />
  <Radio value="pro" label="Pro Plan" />
  <Radio value="enterprise" label="Enterprise Plan" />
</RadioGroup>
```

## Sizes

```tsx
<RadioGroup name="size">
  <Radio size="small" value="s" label="Small" />
  <Radio size="medium" value="m" label="Medium" />
  <Radio size="large" value="l" label="Large" />
</RadioGroup>
```

## Color Schemes

```tsx
<RadioGroup name="color">
  <Radio colorScheme="primary" value="1" label="Primary" />
  <Radio colorScheme="secondary" value="2" label="Secondary" />
  <Radio colorScheme="success" value="3" label="Success" />
  <Radio colorScheme="danger" value="4" label="Danger" />
</RadioGroup>
```

## Disabled State

```tsx
<RadioGroup name="disabled">
  <Radio value="1" label="Enabled" />
  <Radio value="2" label="Disabled" disabled />
  <Radio value="3" label="Disabled & Selected" disabled checked />
</RadioGroup>
```

## Controlled Radio Group

```tsx
import { useState } from 'react';

function ControlledRadioGroup() {
  const [value, setValue] = useState('basic');

  return (
    <RadioGroup 
      name="plan" 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <Radio value="basic" label="Basic - $9/mo" />
      <Radio value="pro" label="Pro - $29/mo" />
      <Radio value="enterprise" label="Enterprise - $99/mo" />
    </RadioGroup>
  );
}
```

## With Descriptions

```tsx
<RadioGroup name="plan">
  <Radio 
    value="basic" 
    label="Basic Plan"
    description="Perfect for individuals"
  />
  <Radio 
    value="pro" 
    label="Pro Plan"
    description="Best for small teams"
  />
  <Radio 
    value="enterprise" 
    label="Enterprise Plan"
    description="For large organizations"
  />
</RadioGroup>
```

## Props

### Radio Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string \| ReactNode` | - | Radio label |
| `description` | `string \| ReactNode` | - | Description text |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Radio size |
| `colorScheme` | `'primary' \| 'secondary' \| 'success' \| 'danger'` | `'primary'` | Color scheme |
| `value` | `string \| number` | **required** | Radio value |
| `checked` | `boolean` | - | Checked state |
| `onChange` | `function` | - | Change handler |
| `disabled` | `boolean` | `false` | Disable radio |
| `name` | `string` | - | Input name |

### RadioGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Group name |
| `value` | `string \| number` | - | Selected value (controlled) |
| `defaultValue` | `string \| number` | - | Default selected value |
| `onChange` | `function` | - | Change handler |
| `children` | `ReactNode` | **required** | Radio components |

## Customization

```tsx
<Radio
  label="Custom radio"
  value="custom"
  style={{
    '--radio-size': '24px',
    '--radio-border-color': 'rgba(100, 100, 200, 1)',
    '--radio-bg-color-checked': 'rgba(255, 0, 0, 1)',
    '--radio-dot-size': '12px',
  }}
/>
```

## Accessibility

- ✅ Proper label association
- ✅ Keyboard navigation (Arrow keys, Tab)
- ✅ Focus indicators
- ✅ Screen reader support
- ✅ Touch target size (44x44px)
- ✅ Group role and relationships

## Related Components

- [Checkbox](/docs/react/checkbox) - Multiple selection
- [Switch](/docs/react/switch) - Toggle switch
- [Select](/docs/react/select) - Dropdown selection
