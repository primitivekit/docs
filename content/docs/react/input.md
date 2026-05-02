---
title: Input
weight: 2
---

# Input

A flexible text input component with validation states, icons, and extensive customization options.

## Import

```tsx
import { Input } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Input 
  label="Email" 
  placeholder="Enter your email"
  type="email"
/>
```

## Variants

The Input component supports multiple visual styles:

```tsx
// Default variant
<Input variant="default" placeholder="Default input" />

// Filled variant
<Input variant="filled" placeholder="Filled input" />

// Flushed variant (bottom border only)
<Input variant="flushed" placeholder="Flushed input" />

// Unstyled variant
<Input variant="unstyled" placeholder="Unstyled input" />
```

## Sizes

```tsx
<Input size="small" placeholder="Small input" />
<Input size="medium" placeholder="Medium input" />
<Input size="large" placeholder="Large input" />
```

## Validation States

```tsx
// Error state
<Input 
  label="Email"
  error="Invalid email address"
  value="invalid-email"
/>

// Success state
<Input 
  label="Username"
  success="Username is available"
  value="john_doe"
/>

// Warning state
<Input 
  label="Password"
  warning="Password strength: weak"
  type="password"
/>
```

## With Icons

```tsx
import { SearchIcon, LockIcon } from 'your-icon-library';

// Left icon
<Input 
  placeholder="Search..."
  leftElement={<SearchIcon />}
/>

// Right icon
<Input 
  type="password"
  placeholder="Enter password"
  rightElement={<LockIcon />}
/>

// Both icons
<Input 
  placeholder="Search securely"
  leftElement={<SearchIcon />}
  rightElement={<LockIcon />}
/>
```

## Helper Text

```tsx
<Input 
  label="Username"
  helperText="Choose a unique username"
  placeholder="Enter username"
/>
```

## Full Width

```tsx
<Input 
  label="Full Name"
  fullWidth
  placeholder="Enter your full name"
/>
```

## Disabled & Read-Only

```tsx
// Disabled
<Input 
  label="Disabled Input"
  disabled
  value="Cannot edit"
/>

// Read-only
<Input 
  label="Read-only Input"
  readOnly
  value="Can select but not edit"
/>
```

## Input Types

```tsx
<Input type="text" placeholder="Text" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />
<Input type="tel" placeholder="Phone" />
<Input type="url" placeholder="URL" />
<Input type="search" placeholder="Search" />
<Input type="date" />
<Input type="time" />
<Input type="datetime-local" />
```

## Controlled Input

```tsx
import { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <Input
      label="Controlled Input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type something..."
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| `variant` | `'default' \| 'filled' \| 'flushed' \| 'unstyled'` | `'default'` | Visual style variant |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Validation state |
| `label` | `string` | - | Label text |
| `helperText` | `string` | - | Helper text below input |
| `error` | `string` | - | Error message (sets state to 'error') |
| `success` | `string` | - | Success message (sets state to 'success') |
| `warning` | `string` | - | Warning message (sets state to 'warning') |
| `fullWidth` | `boolean` | `false` | Make input full width |
| `leftElement` | `ReactNode` | - | Icon or element on the left |
| `rightElement` | `ReactNode` | - | Icon or element on the right |
| `type` | `string` | `'text'` | HTML input type |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string \| number` | - | Controlled value |
| `defaultValue` | `string \| number` | - | Uncontrolled default value |
| `onChange` | `function` | - | Change handler |
| `onFocus` | `function` | - | Focus handler |
| `onBlur` | `function` | - | Blur handler |
| `disabled` | `boolean` | `false` | Disable input |
| `readOnly` | `boolean` | `false` | Make read-only |
| `required` | `boolean` | `false` | Mark as required |
| `className` | `string` | - | Additional CSS classes |
| `style` | `InputCSSVariables` | - | CSS variable overrides |

## Customization

### CSS Variables

The Input component supports 100+ CSS variables for complete customization:

```tsx
<Input
  placeholder="Custom input"
  style={{
    '--input-bg-color': 'rgba(240, 240, 255, 1)',
    '--input-text-color': 'rgba(0, 0, 100, 1)',
    '--input-border-color': 'rgba(100, 100, 200, 1)',
    '--input-border-radius': '12px',
    '--input-padding-x': '16px',
    '--input-padding-y': '12px',
    '--input-font-size': '16px',
    '--input-border-color-focus': 'rgba(0, 100, 255, 1)',
    '--input-ring-color': 'rgba(0, 100, 255, 0.2)',
  }}
/>
```

### Global Customization

```css
:root {
  /* Base colors */
  --input-bg-color: rgba(255, 255, 255, 1);
  --input-text-color: rgba(0, 0, 0, 1);
  --input-border-color: rgba(200, 200, 200, 1);
  
  /* Focus state */
  --input-border-color-focus: rgba(0, 100, 255, 1);
  --input-ring-color: rgba(0, 100, 255, 0.2);
  --input-ring-width: 3px;
  
  /* Spacing */
  --input-padding-x: 12px;
  --input-padding-y: 8px;
  --input-border-radius: 8px;
  
  /* Typography */
  --input-font-size: 14px;
  --input-font-weight: 400;
  
  /* States */
  --input-border-color-error: rgba(255, 0, 0, 1);
  --input-border-color-success: rgba(0, 200, 0, 1);
  --input-border-color-warning: rgba(255, 150, 0, 1);
}
```

## Accessibility

The Input component is fully accessible:

- ✅ Proper label association with `htmlFor` and `id`
- ✅ ARIA attributes for validation states
- ✅ Keyboard navigation support
- ✅ Screen reader announcements for errors
- ✅ Focus visible indicators
- ✅ Touch target size (44x44px minimum)

### ARIA Attributes

```tsx
<Input
  label="Email"
  ariaLabel="Email address"
  ariaDescribedBy="email-helper"
  ariaInvalid={hasError}
  required
/>
```

## Examples

### Login Form

```tsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        fullWidth
      />
      
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
        fullWidth
      />
    </form>
  );
}
```

### Search Input

```tsx
import { SearchIcon } from 'your-icon-library';

function SearchInput() {
  const [query, setQuery] = useState('');

  return (
    <Input
      type="search"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      leftElement={<SearchIcon />}
      variant="filled"
      fullWidth
    />
  );
}
```

### Validated Input

```tsx
function ValidatedInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      setError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setError('Invalid email format');
    } else {
      setError('');
    }
  };

  return (
    <Input
      label="Email"
      type="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
      }}
      error={error}
      placeholder="Enter your email"
    />
  );
}
```

## Related Components

- [Textarea](/docs/react/textarea) - Multi-line text input
- [Select](/docs/react/select) - Dropdown selection
- [Form](/docs/react/form) - Form wrapper with validation
