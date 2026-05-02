# Documentation

Welcome to PrimitiveKit documentation! This guide will help you get started with building beautiful, accessible user interfaces.

## What is PrimitiveKit?

PrimitiveKit is a flexible, accessible component library designed for modern web development. It provides:

- **38 Production-Ready Components** - Everything from basic buttons to complex data tables
- **600+ Design Tokens** - Comprehensive design system following industry standards
- **Zero Hardcoded Values** - Complete customization via CSS variables
- **Multi-Framework Support** - Works with React, Vue, Svelte, Angular, and HTML/CSS
- **Full Accessibility** - WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **TypeScript First** - Complete type safety out of the box

## Quick Start

Install PrimitiveKit via npm:

```bash
npm install @primitivekit/react
```

Import and use components:

```jsx
import { Button, Input } from '@primitivekit/react';

function App() {
  return (
    <div>
      <Input label="Email" placeholder="Enter your email" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## Framework Examples

### React

```jsx
import { Button } from '@primitivekit/react';

<Button variant="primary">Click me</Button>
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
```

### Svelte

```svelte
<script>
  import '@primitivekit/react/tokens/tokens.css';
</script>

<button class="pk-button pk-button--primary">
  Click me
</button>
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
  styleUrls: ['@primitivekit/react/tokens/tokens.css']
})
export class ButtonComponent {}
```

### HTML/CSS

```html
<button class="pk-button pk-button--primary">
  Click me
</button>

<style>
  @import '@primitivekit/react/tokens/tokens.css';
  
  .pk-button {
    padding: var(--spacing-2) var(--spacing-4);
    background: var(--color-primary-500);
    color: white;
    border: none;
    border-radius: var(--border-radius-md);
  }
</style>
```

## Next Steps

- [Installation Guide](/docs/installation) - Detailed installation instructions
- [Customization](/docs/customization) - Learn how to customize components
- [Design Tokens](/docs/design-tokens) - Explore the design token system
- [Components](/docs/components) - Browse all available components

