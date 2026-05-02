# Design Tokens

PrimitiveKit includes 600+ design tokens following the DTCG specification and industry best practices.

## Overview

Design tokens are the visual design atoms of the design system. They are named entities that store visual design attributes, used in place of hard-coded values to ensure flexibility and maintainability.

### Statistics

- **Total Tokens:** 600+
- **Token Categories:** 21
- **Color Tokens:** 100+
- **Spacing Tokens:** 30
- **Typography Tokens:** 60+

## Installation

Import the design tokens CSS file in your application:

```javascript
import '@primitivekit/react/tokens/tokens.css';
```

## Token Categories

### Color Tokens

#### Brand Colors
Primary and secondary brand colors with full scale (50-950).

```css
--color-brand-primary-500    /* Base primary color */
--color-brand-secondary-500  /* Base secondary color */
```

#### Semantic Colors
Colors with meaning: success, warning, error, info.

```css
--color-semantic-success-500  /* Success states */
--color-semantic-warning-500  /* Warning states */
--color-semantic-error-500    /* Error states */
--color-semantic-info-500     /* Informational states */
```

#### Neutral Colors
Grayscale palette from white (0) to black (1000).

```css
--color-neutral-0     /* Pure white */
--color-neutral-500   /* Mid gray */
--color-neutral-1000  /* Pure black */
```

### Spacing Tokens

Consistent spacing scale based on 4px (0.25rem) increments.

```css
--spacing-0   /* 0 */
--spacing-1   /* 4px */
--spacing-2   /* 8px */
--spacing-4   /* 16px */
--spacing-8   /* 32px */
--spacing-16  /* 64px */
```

### Typography Tokens

#### Font Sizes

```css
--font-size-xs    /* 0.75rem / 12px */
--font-size-sm    /* 0.875rem / 14px */
--font-size-base  /* 1rem / 16px */
--font-size-lg    /* 1.125rem / 18px */
--font-size-xl    /* 1.25rem / 20px */
--font-size-2xl   /* 1.5rem / 24px */
```

#### Font Weights

```css
--font-weight-light     /* 300 */
--font-weight-normal    /* 400 */
--font-weight-medium    /* 500 */
--font-weight-semibold  /* 600 */
--font-weight-bold      /* 700 */
```

### Border Tokens

#### Border Radius

```css
--border-radius-none  /* 0 */
--border-radius-sm    /* 0.125rem / 2px */
--border-radius-md    /* 0.375rem / 6px */
--border-radius-lg    /* 0.5rem / 8px */
--border-radius-xl    /* 0.75rem / 12px */
--border-radius-full  /* 9999px */
```

#### Border Width

```css
--border-width-none     /* 0 */
--border-width-default  /* 1px */
--border-width-medium   /* 2px */
--border-width-thick    /* 4px */
```

### Shadow Tokens

Elevation and depth tokens.

```css
--shadow-sm   /* Small shadow */
--shadow-md   /* Medium shadow */
--shadow-lg   /* Large shadow */
--shadow-xl   /* Extra large shadow */
--shadow-2xl  /* 2X large shadow */
```

### Animation Tokens

#### Duration

```css
--duration-instant  /* 0ms */
--duration-fast     /* 150ms */
--duration-normal   /* 300ms */
--duration-slow     /* 500ms */
```

#### Easing

```css
--easing-linear      /* linear */
--easing-ease-in     /* cubic-bezier(0.4, 0, 1, 1) */
--easing-ease-out    /* cubic-bezier(0, 0, 0.2, 1) */
--easing-ease-in-out /* cubic-bezier(0.4, 0, 0.2, 1) */
```

### Breakpoint Tokens

Responsive breakpoint tokens for different screen sizes.

| Token | Value | Description |
|-------|-------|-------------|
| `--breakpoint-xs` | 320px | Extra small devices |
| `--breakpoint-sm` | 640px | Small devices |
| `--breakpoint-md` | 768px | Medium devices |
| `--breakpoint-lg` | 1024px | Large devices |
| `--breakpoint-xl` | 1280px | Extra large devices |
| `--breakpoint-2xl` | 1536px | 2X large devices |

## Usage Examples

### React

```jsx
import '@primitivekit/react/tokens/tokens.css';

function MyComponent() {
  return (
    <div style={{
      color: 'var(--color-brand-primary-500)',
      padding: 'var(--spacing-4)',
      borderRadius: 'var(--border-radius-md)',
      fontSize: 'var(--font-size-base)',
      fontWeight: 'var(--font-weight-medium)',
      boxShadow: 'var(--shadow-md)',
      transition: `all var(--duration-normal) var(--easing-ease-in-out)`
    }}>
      Content
    </div>
  );
}
```

### Vue

```vue
<template>
  <div class="my-component">
    Content
  </div>
</template>

<script setup>
import '@primitivekit/react/tokens/tokens.css';
</script>

<style scoped>
.my-component {
  color: var(--color-brand-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-normal) var(--easing-ease-in-out);
}
</style>
```

### Svelte

```svelte
<script>
  import '@primitivekit/react/tokens/tokens.css';
</script>

<div class="my-component">
  Content
</div>

<style>
  .my-component {
    color: var(--color-brand-primary-500);
    padding: var(--spacing-4);
    border-radius: var(--border-radius-md);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    box-shadow: var(--shadow-md);
    transition: all var(--duration-normal) var(--easing-ease-in-out);
  }
</style>
```

### Angular

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: '<div class="my-component">Content</div>',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {}
```

```css
/* my-component.component.css */
@import '@primitivekit/react/tokens/tokens.css';

.my-component {
  color: var(--color-brand-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-normal) var(--easing-ease-in-out);
}
```

### HTML/CSS

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/@primitivekit/react/tokens/tokens.css">
  <style>
    .my-component {
      color: var(--color-brand-primary-500);
      padding: var(--spacing-4);
      border-radius: var(--border-radius-md);
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-medium);
      box-shadow: var(--shadow-md);
      transition: all var(--duration-normal) var(--easing-ease-in-out);
    }
  </style>
</head>
<body>
  <div class="my-component">Content</div>
</body>
</html>
```

## All Token Categories

### Visual Tokens
- Color (100+ tokens)
- Spacing (30 tokens)
- Typography (60+ tokens)
- Border (15 tokens)
- Shadow (12 tokens)
- Gradient (12 tokens)
- Blur (8 tokens)
- Filter (40+ tokens)

### Behavioral Tokens
- Animation (25 tokens)
- Motion (30 tokens)
- Z-Index (11 tokens)
- Focus Ring (13 tokens)
- Transform (11 tokens)

### Layout Tokens
- Breakpoint (6 tokens)
- Grid (12 tokens)
- Container (9 tokens)
- Aspect Ratio (7 tokens)
- Viewport (26 tokens)

### Semantic Tokens
- Semantic Colors (27 tokens)
- Icon Size (10 tokens)
- Accessibility (10 tokens)

## Standards Compliance

Our token system follows industry standards:

- ✅ **DTCG (Design Tokens Community Group)** - Official W3C specification
- ✅ **Material Design 3** - Google's design system tokens
- ✅ **Tailwind CSS** - Utility-first design tokens
- ✅ **Ant Design** - Enterprise-grade design tokens
- ✅ **WCAG 2.1 AA** - Accessibility compliance
- ✅ **CSS Custom Properties** - Native browser support

