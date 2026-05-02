# Slider

# Slider

A range slider component for selecting numeric values.

## Import

```tsx
import { Slider } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Slider label="Volume" />
```

## With Min/Max

```tsx
<Slider 
  label="Price Range"
  min={0}
  max={1000}
  defaultValue={500}
/>
```

## Step

```tsx
<Slider 
  label="Rating"
  min={0}
  max={5}
  step={0.5}
  defaultValue={3.5}
/>
```

## Sizes

```tsx
<Slider size="small" label="Small" />
<Slider size="medium" label="Medium" />
<Slider size="large" label="Large" />
```

## Color Schemes

```tsx
<Slider colorScheme="primary" label="Primary" />
<Slider colorScheme="secondary" label="Secondary" />
<Slider colorScheme="success" label="Success" />
<Slider colorScheme="danger" label="Danger" />
```

## Show Value

```tsx
<Slider 
  label="Brightness"
  showValue
  min={0}
  max={100}
  defaultValue={75}
/>
```

## With Marks

```tsx
<Slider 
  label="Temperature"
  min={0}
  max={100}
  step={25}
  marks={[
    { value: 0, label: '0°C' },
    { value: 25, label: '25°C' },
    { value: 50, label: '50°C' },
    { value: 75, label: '75°C' },
    { value: 100, label: '100°C' },
  ]}
/>
```

## Controlled Slider

```tsx
import { useState } from 'react';

function ControlledSlider() {
  const [value, setValue] = useState(50);

  return (
    <div>
      <Slider
        label="Volume"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        min={0}
        max={100}
        showValue
      />
      <p>Current value: {value}</p>
    </div>
  );
}
```

## Range Slider

```tsx
<Slider 
  label="Price Range"
  range
  min={0}
  max={1000}
  defaultValue={[200, 800]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Slider label |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Slider size |
| `colorScheme` | `'primary' \| 'secondary' \| 'success' \| 'danger'` | `'primary'` | Color scheme |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `value` | `number \| number[]` | - | Controlled value |
| `defaultValue` | `number \| number[]` | `0` | Default value |
| `onChange` | `function` | - | Change handler |
| `showValue` | `boolean` | `false` | Show current value |
| `marks` | `Mark[]` | - | Value marks |
| `range` | `boolean` | `false` | Enable range selection |
| `disabled` | `boolean` | `false` | Disable slider |

## Customization

```tsx
<Slider
  label="Custom slider"
  style={{
    '--slider-track-height': '8px',
    '--slider-track-bg': 'rgba(200, 200, 200, 1)',
    '--slider-track-fill-bg': 'rgba(255, 0, 0, 1)',
    '--slider-thumb-size': '24px',
    '--slider-thumb-bg': 'rgba(255, 0, 0, 1)',
  }}
/>
```

## Accessibility

- ✅ Keyboard navigation (Arrow keys)
- ✅ ARIA attributes (role="slider")
- ✅ Value announcements
- ✅ Focus indicators
- ✅ Touch support

## Related Components

- [Input](/docs/react/input) - Text input
- [Progress](/docs/react/progress) - Progress indicator

