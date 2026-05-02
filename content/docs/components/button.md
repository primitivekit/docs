---
title: Button
weight: 1
---

A versatile, accessible button component with multiple variants, sizes, and states.

## Installation

```bash
npm install @primitivekit/react
```

## Framework Examples

### React

```jsx
import { Button } from '@primitivekit/react';

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

### Vue

```vue
<template>
  <button class="pk-button pk-button--primary">
    Click me
  </button>
</template>

<script setup>
import '@primitivekit/react/tokens/tokens.css';
</script>

<style scoped>
.pk-button {
  padding: var(--btn-padding-y, 0.5rem) var(--btn-padding-x, 1rem);
  background: var(--btn-bg-color, var(--color-primary-500));
  color: var(--btn-text-color, white);
  border: var(--btn-border-width, 1px) solid var(--btn-border-color, transparent);
  border-radius: var(--btn-border-radius, var(--border-radius-md));
  font-size: var(--btn-font-size, 1rem);
  font-weight: var(--btn-font-weight, 500);
  cursor: pointer;
  transition: all var(--btn-transition-duration, 0.2s);
}

.pk-button:hover {
  background: var(--btn-bg-color-hover, var(--color-primary-600));
}

.pk-button--primary {
  --btn-bg-color: var(--color-primary-500);
  --btn-bg-color-hover: var(--color-primary-600);
}
</style>
```

### Svelte

```svelte
<script>
  import '@primitivekit/react/tokens/tokens.css';
</script>

<button class="pk-button pk-button--primary">
  Click me
</button>

<style>
  .pk-button {
    padding: var(--btn-padding-y, 0.5rem) var(--btn-padding-x, 1rem);
    background: var(--btn-bg-color, var(--color-primary-500));
    color: var(--btn-text-color, white);
    border: var(--btn-border-width, 1px) solid var(--btn-border-color, transparent);
    border-radius: var(--btn-border-radius, var(--border-radius-md));
    font-size: var(--btn-font-size, 1rem);
    font-weight: var(--btn-font-weight, 500);
    cursor: pointer;
    transition: all var(--btn-transition-duration, 0.2s);
  }

  .pk-button:hover {
    background: var(--btn-bg-color-hover, var(--color-primary-600));
  }

  .pk-button--primary {
    --btn-bg-color: var(--color-primary-500);
    --btn-bg-color-hover: var(--color-primary-600);
  }
</style>
```

### Angular

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="pk-button pk-button--primary">
      Click me
    </button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {}
```

```css
/* button.component.css */
@import '@primitivekit/react/tokens/tokens.css';

.pk-button {
  padding: var(--btn-padding-y, 0.5rem) var(--btn-padding-x, 1rem);
  background: var(--btn-bg-color, var(--color-primary-500));
  color: var(--btn-text-color, white);
  border: var(--btn-border-width, 1px) solid var(--btn-border-color, transparent);
  border-radius: var(--btn-border-radius, var(--border-radius-md));
  font-size: var(--btn-font-size, 1rem);
  font-weight: var(--btn-font-weight, 500);
  cursor: pointer;
  transition: all var(--btn-transition-duration, 0.2s);
}

.pk-button:hover {
  background: var(--btn-bg-color-hover, var(--color-primary-600));
}

.pk-button--primary {
  --btn-bg-color: var(--color-primary-500);
  --btn-bg-color-hover: var(--color-primary-600);
}
```

### HTML/CSS

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/@primitivekit/react/tokens/tokens.css">
  <style>
    .pk-button {
      padding: var(--btn-padding-y, 0.5rem) var(--btn-padding-x, 1rem);
      background: var(--btn-bg-color, var(--color-primary-500));
      color: var(--btn-text-color, white);
      border: var(--btn-border-width, 1px) solid var(--btn-border-color, transparent);
      border-radius: var(--btn-border-radius, var(--border-radius-md));
      font-size: var(--btn-font-size, 1rem);
      font-weight: var(--btn-font-weight, 500);
      cursor: pointer;
      transition: all var(--btn-transition-duration, 0.2s);
    }

    .pk-button:hover {
      background: var(--btn-bg-color-hover, var(--color-primary-600));
    }

    .pk-button--primary {
      --btn-bg-color: var(--color-primary-500);
      --btn-bg-color-hover: var(--color-primary-600);
    }

    .pk-button--secondary {
      --btn-bg-color: var(--color-secondary-500);
      --btn-bg-color-hover: var(--color-secondary-600);
    }

    .pk-button--success {
      --btn-bg-color: var(--color-semantic-success-500);
      --btn-bg-color-hover: var(--color-semantic-success-600);
    }

    .pk-button--danger {
      --btn-bg-color: var(--color-semantic-error-500);
      --btn-bg-color-hover: var(--color-semantic-error-600);
    }
  </style>
</head>
<body>
  <button class="pk-button pk-button--primary">Primary</button>
  <button class="pk-button pk-button--secondary">Secondary</button>
  <button class="pk-button pk-button--success">Success</button>
  <button class="pk-button pk-button--danger">Danger</button>
</body>
</html>
```

## Variants

The button comes with six built-in variants:

- `primary` - Main brand color
- `secondary` - Secondary brand color
- `success` - Success/positive actions
- `danger` - Destructive/dangerous actions
- `outline` - Outlined style
- `ghost` - Minimal style

## Sizes

Three sizes are available:

- `small` - Compact button
- `medium` - Default size
- `large` - Prominent button

## Props (React)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | `'primary'` | Button style variant |
| `size` | string | `'medium'` | Button size |
| `disabled` | boolean | `false` | Disable the button |
| `fullWidth` | boolean | `false` | Make button full width |
| `onClick` | function | - | Click handler |

## CSS Variables

Customize the button using CSS variables:

```css
.my-custom-button {
  --btn-bg-color: rgba(139, 92, 246, 1);
  --btn-bg-color-hover: rgba(124, 58, 237, 1);
  --btn-text-color: rgba(255, 255, 255, 1);
  --btn-border-radius: 2rem;
  --btn-padding-x: 2rem;
  --btn-padding-y: 0.75rem;
  --btn-font-size: 1.125rem;
  --btn-font-weight: 600;
  --btn-transition-duration: 0.3s;
}
```

## Accessibility

The Button component follows WCAG 2.1 AA standards:

- ✅ Semantic `<button>` element
- ✅ Keyboard accessible (Enter/Space)
- ✅ Focus visible indicator
- ✅ Proper ARIA attributes
- ✅ Screen reader compatible
- ✅ Disabled state handling

## Examples

### With Icons (React)

```jsx
import { Button } from '@primitivekit/react';
import { Mail } from 'lucide-react';

<Button variant="primary">
  <Mail size={20} />
  Send Email
</Button>
```

### Loading State (React)

```jsx
import { Button } from '@primitivekit/react';

<Button variant="primary" disabled>
  Loading...
</Button>
```

### Custom Styling

```jsx
<Button
  variant="primary"
  style={{
    '--btn-bg-color': 'rgba(139, 92, 246, 1)',
    '--btn-border-radius': '2rem',
  }}
>
  Custom Button
</Button>
```

## Related Components

- [Input](/docs/components/input) - Text input component
- [Select](/docs/components/select) - Dropdown selection
- [Checkbox](/docs/components/checkbox) - Checkbox input
