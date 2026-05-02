---
title: Customization
weight: 2
---

PrimitiveKit components are built with zero hardcoded values. Every visual property is customizable via CSS variables.

## CSS Variables

Each component exposes 50-150+ CSS variables that control every aspect of its appearance. You can customize these variables globally or per-component instance.

### Global Customization

```css
:root {
  --btn-bg-color: rgba(59, 130, 246, 1);
  --btn-text-color: rgba(255, 255, 255, 1);
  --btn-border-radius: 0.5rem;
}
```

### Per-Instance Customization

```css
.custom-button {
  --btn-bg-color: rgba(139, 92, 246, 1);
  --btn-border-radius: 2rem;
}
```

## Framework Examples

### React

```jsx
<Button
  style={{
    '--btn-bg-color': 'rgba(139, 92, 246, 1)',
    '--btn-border-radius': '2rem',
  } as React.CSSProperties}
>
  Custom Button
</Button>
```

### Vue

```vue
<template>
  <button 
    class="pk-button"
    :style="{
      '--btn-bg-color': 'rgba(139, 92, 246, 1)',
      '--btn-border-radius': '2rem'
    }"
  >
    Custom Button
  </button>
</template>
```

### Svelte

```svelte
<button 
  class="pk-button"
  style="
    --btn-bg-color: rgba(139, 92, 246, 1);
    --btn-border-radius: 2rem;
  "
>
  Custom Button
</button>
```

### Angular

```typescript
@Component({
  template: `
    <button 
      class="pk-button"
      [style]="customStyles"
    >
      Custom Button
    </button>
  `
})
export class MyComponent {
  customStyles = {
    '--btn-bg-color': 'rgba(139, 92, 246, 1)',
    '--btn-border-radius': '2rem'
  };
}
```

### HTML/CSS

```html
<button 
  class="pk-button"
  style="
    --btn-bg-color: rgba(139, 92, 246, 1);
    --btn-border-radius: 2rem;
  "
>
  Custom Button
</button>
```

## Design Tokens

PrimitiveKit includes 600+ design tokens following the DTCG specification. Import the tokens CSS file to use them:

```javascript
import '@primitivekit/react/tokens/tokens.css';
```

Use tokens in your CSS:

```css
.my-component {
  color: var(--color-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
}
```

[Explore all design tokens →](/docs/design-tokens)

## Dark Mode

All components support dark mode out of the box. Add the `dark` class to your root element:

```html
<html class="dark">
  <body>
    <Button>Dark Mode Button</Button>
  </body>
</html>
```

Dark mode uses pure black backgrounds (#000000) and adjusted color values for optimal contrast.

## RGBA Colors

All colors in PrimitiveKit use RGBA format for better transparency control:

```css
/* Good - RGBA format */
--btn-bg-color: rgba(59, 130, 246, 1);
--btn-bg-color-hover: rgba(59, 130, 246, 0.8);

/* Avoid - Hex format */
--btn-bg-color: #3b82f6;
```

## Theme Examples

### Custom Theme

```css
:root {
  /* Primary colors */
  --btn-primary-bg: rgba(139, 92, 246, 1);
  --btn-primary-hover: rgba(124, 58, 237, 1);
  
  /* Border radius */
  --btn-border-radius: 0.75rem;
  --input-border-radius: 0.75rem;
  --card-border-radius: 1rem;
  
  /* Spacing */
  --btn-padding-x: 2rem;
  --btn-padding-y: 0.75rem;
}
```

### Minimal Design

```css
:root {
  /* Remove shadows */
  --btn-shadow: none;
  --card-shadow: none;
  
  /* Minimal borders */
  --btn-border-width: 1px;
  --input-border-width: 1px;
  
  /* Square corners */
  --btn-border-radius: 0;
  --input-border-radius: 0;
  --card-border-radius: 0;
}
```

## Component-Specific Variables

Each component has its own set of CSS variables. Check the component documentation for the complete list.

**Tip:** Use your browser's DevTools to inspect components and see all available CSS variables.
