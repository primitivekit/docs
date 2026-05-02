---
title: Installation
weight: 1
---

Get started with PrimitiveKit by installing it via your preferred package manager.

## Package Manager

### NPM

```bash
npm install @primitivekit/react
```

### Yarn

```bash
yarn add @primitivekit/react
```

### pnpm

```bash
pnpm add @primitivekit/react
```

## Import Design Tokens (Optional)

To use the design token CSS variables, import the tokens CSS file in your app:

```javascript
import '@primitivekit/react/tokens/tokens.css';
```

This gives you access to 600+ design tokens for colors, spacing, typography, and more.

## Basic Usage

### React

```jsx
import { Button, Input } from '@primitivekit/react';

function App() {
  return (
    <div>
      <Input 
        label="Email" 
        placeholder="Enter your email" 
      />
      <Button variant="primary">
        Submit
      </Button>
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <button class="pk-button pk-button--primary">
      Submit
    </button>
  </div>
</template>

<script setup>
import '@primitivekit/react/tokens/tokens.css';
</script>

<style scoped>
.pk-button {
  padding: var(--spacing-2) var(--spacing-4);
  background: var(--color-primary-500);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
}

.pk-button:hover {
  background: var(--color-primary-600);
}
</style>
```

### Svelte

```svelte
<script>
  import '@primitivekit/react/tokens/tokens.css';
</script>

<button class="pk-button pk-button--primary">
  Submit
</button>

<style>
  .pk-button {
    padding: var(--spacing-2) var(--spacing-4);
    background: var(--color-primary-500);
    color: white;
    border: none;
    border-radius: var(--border-radius-md);
    cursor: pointer;
  }

  .pk-button:hover {
    background: var(--color-primary-600);
  }
</style>
```

### Angular

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button class="pk-button pk-button--primary">
      Submit
    </button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
```

```css
/* app.component.css */
@import '@primitivekit/react/tokens/tokens.css';

.pk-button {
  padding: var(--spacing-2) var(--spacing-4);
  background: var(--color-primary-500);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
}

.pk-button:hover {
  background: var(--color-primary-600);
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
      padding: var(--spacing-2) var(--spacing-4);
      background: var(--color-primary-500);
      color: white;
      border: none;
      border-radius: var(--border-radius-md);
      cursor: pointer;
    }

    .pk-button:hover {
      background: var(--color-primary-600);
    }
  </style>
</head>
<body>
  <button class="pk-button pk-button--primary">
    Submit
  </button>
</body>
</html>
```

## Requirements

- **React**: 18.0.0 or higher (for React components)
- **React DOM**: 18.0.0 or higher (for React components)
- **Modern Browser**: Supports CSS Custom Properties

## TypeScript Support

PrimitiveKit is written in TypeScript and includes type definitions out of the box. No additional @types packages needed!

```typescript
import { Button, ButtonProps } from '@primitivekit/react';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Next Steps

- [Learn about customization](/docs/customization)
- [Explore design tokens](/docs/design-tokens)
- [Browse components](/docs/components)
- [Check accessibility features](/docs/accessibility)
