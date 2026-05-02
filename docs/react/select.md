# Select

# Select

A dropdown selection component with validation states and customization options.

## Import

```tsx
import { Select } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ]}
  placeholder="Select a country"
/>
```

## Variants

```tsx
// Default variant
<Select variant="default" options={options} />

// Filled variant
<Select variant="filled" options={options} />

// Flushed variant
<Select variant="flushed" options={options} />

// Unstyled variant
<Select variant="unstyled" options={options} />
```

## Sizes

```tsx
<Select size="small" options={options} />
<Select size="medium" options={options} />
<Select size="large" options={options} />
```

## Validation States

```tsx
// Error state
<Select 
  label="Country"
  options={options}
  error="Please select a country"
/>

// Success state
<Select 
  label="Country"
  options={options}
  success="Valid selection"
/>

// Warning state
<Select 
  label="Country"
  options={options}
  warning="This option may have limitations"
/>
```

## With Disabled Options

```tsx
<Select
  label="Status"
  options={[
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
    { value: 'archived', label: 'Archived', disabled: true },
  ]}
/>
```

## Controlled Select

```tsx
import { useState } from 'react';

function ControlledSelect() {
  const [value, setValue] = useState('');

  return (
    <Select
      label="Country"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      options={[
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
      ]}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | **required** | Array of options |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Select size |
| `variant` | `'default' \| 'filled' \| 'flushed' \| 'unstyled'` | `'default'` | Visual style |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Validation state |
| `label` | `string` | - | Label text |
| `helperText` | `string` | - | Helper text |
| `error` | `string` | - | Error message |
| `success` | `string` | - | Success message |
| `warning` | `string` | - | Warning message |
| `fullWidth` | `boolean` | `false` | Full width |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string \| number` | - | Controlled value |
| `defaultValue` | `string \| number` | - | Default value |
| `onChange` | `function` | - | Change handler |
| `disabled` | `boolean` | `false` | Disable select |
| `required` | `boolean` | `false` | Required field |

### SelectOption Type

```tsx
interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}
```

## Customization

```tsx
<Select
  options={options}
  style={{
    '--select-bg-color': 'rgba(240, 240, 255, 1)',
    '--select-border-color': 'rgba(100, 100, 200, 1)',
    '--select-border-radius': '12px',
    '--select-padding-x': '16px',
    '--select-font-size': '16px',
  }}
/>
```

## Accessibility

- ✅ Proper label association
- ✅ ARIA attributes for states
- ✅ Keyboard navigation
- ✅ Screen reader support

## Related Components

- [Input](/docs/react/input) - Text input
- [Checkbox](/docs/react/checkbox) - Multiple selection
- [Radio](/docs/react/radio) - Single selection from visible options

