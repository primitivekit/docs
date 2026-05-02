# Textarea

# Textarea

A multi-line text input component with auto-resize and validation states.

## Import

```tsx
import { Textarea } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Textarea 
  label="Description" 
  placeholder="Enter description..."
/>
```

## Variants

```tsx
<Textarea variant="default" placeholder="Default" />
<Textarea variant="filled" placeholder="Filled" />
<Textarea variant="flushed" placeholder="Flushed" />
<Textarea variant="unstyled" placeholder="Unstyled" />
```

## Sizes

```tsx
<Textarea size="small" placeholder="Small" />
<Textarea size="medium" placeholder="Medium" />
<Textarea size="large" placeholder="Large" />
```

## Rows

```tsx
<Textarea rows={3} placeholder="3 rows" />
<Textarea rows={5} placeholder="5 rows" />
<Textarea rows={10} placeholder="10 rows" />
```

## Auto Resize

```tsx
<Textarea 
  autoResize
  minRows={3}
  maxRows={10}
  placeholder="Auto-resizing textarea"
/>
```

## Validation States

```tsx
<Textarea 
  label="Feedback"
  error="Feedback is required"
/>

<Textarea 
  label="Comment"
  success="Comment saved"
/>

<Textarea 
  label="Note"
  warning="Character limit approaching"
/>
```

## Character Count

```tsx
<Textarea 
  label="Bio"
  maxLength={200}
  showCount
  placeholder="Tell us about yourself"
/>
```

## Controlled Textarea

```tsx
import { useState } from 'react';

function ControlledTextarea() {
  const [value, setValue] = useState('');

  return (
    <Textarea
      label="Message"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type your message..."
      showCount
      maxLength={500}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Textarea size |
| `variant` | `'default' \| 'filled' \| 'flushed' \| 'unstyled'` | `'default'` | Visual style |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Validation state |
| `label` | `string` | - | Label text |
| `helperText` | `string` | - | Helper text |
| `error` | `string` | - | Error message |
| `success` | `string` | - | Success message |
| `warning` | `string` | - | Warning message |
| `rows` | `number` | `3` | Number of rows |
| `autoResize` | `boolean` | `false` | Auto-resize height |
| `minRows` | `number` | `3` | Min rows (with autoResize) |
| `maxRows` | `number` | - | Max rows (with autoResize) |
| `showCount` | `boolean` | `false` | Show character count |
| `maxLength` | `number` | - | Maximum characters |
| `fullWidth` | `boolean` | `false` | Full width |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Controlled value |
| `onChange` | `function` | - | Change handler |
| `disabled` | `boolean` | `false` | Disable textarea |
| `readOnly` | `boolean` | `false` | Read-only |
| `required` | `boolean` | `false` | Required field |

## Customization

```tsx
<Textarea
  placeholder="Custom textarea"
  style={{
    '--textarea-bg-color': 'rgba(240, 240, 255, 1)',
    '--textarea-border-color': 'rgba(100, 100, 200, 1)',
    '--textarea-border-radius': '12px',
    '--textarea-padding': '16px',
    '--textarea-font-size': '16px',
    '--textarea-line-height': '1.6',
  }}
/>
```

## Accessibility

- ✅ Proper label association
- ✅ ARIA attributes for validation
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Character count announcements

## Related Components

- [Input](/docs/react/input) - Single-line text input
- [Form](/docs/react/form) - Form wrapper

