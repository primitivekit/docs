---
title: "{{ replace .Name "-" " " | title }} Components"
description: "PrimitiveKit for {{ replace .Name "-" " " | title }} - Production-ready components with complete type support and zero hardcoded values"
framework: "{{ .Name }}"
weight: 1
---

# {{ replace .Name "-" " " | title }} Components

PrimitiveKit for {{ replace .Name "-" " " | title }} provides 38 production-ready components with complete TypeScript support and zero hardcoded values.

## Installation

```bash
# npm
npm install @primitivekit/{{ .Name }}

# yarn
yarn add @primitivekit/{{ .Name }}

# pnpm
pnpm add @primitivekit/{{ .Name }}
```

## Quick Start

```tsx
/* Import components and design tokens */
import { Button, Card, Badge } from '@primitivekit/{{ .Name }}';
import '@primitivekit/{{ .Name }}/tokens/tokens.css';

/* Basic usage example */
/* React/JSX: */
function App() {
  return (
    <Card variant="elevated">
      <h2>Welcome to PrimitiveKit</h2>
      <Badge variant="solid" color="primary">New</Badge>
      <Button onClick={() => alert('Hello!')}>
        Click Me
      </Button>
    </Card>
  );
}

/* Vue: */
<template>
  <Card variant="elevated">
    <h2>Welcome to PrimitiveKit</h2>
    <Badge variant="solid" color="primary">New</Badge>
    <Button @click="handleClick">Click Me</Button>
  </Card>
</template>

/* Angular: */
<pk-card variant="elevated">
  <h2>Welcome to PrimitiveKit</h2>
  <pk-badge variant="solid" color="primary">New</pk-badge>
  <pk-button (click)="handleClick()">Click Me</pk-button>
</pk-card>

/* Svelte: */
<Card variant="elevated">
  <h2>Welcome to PrimitiveKit</h2>
  <Badge variant="solid" color="primary">New</Badge>
  <Button on:click={handleClick}>Click Me</Button>
</Card>

/* Astro: */
<Card variant="elevated">
  <h2>Welcome to PrimitiveKit</h2>
  <Badge variant="solid" color="primary">New</Badge>
  <Button>Click Me</Button>
</Card>

/* Vanilla JS: */
const card = new Card({ variant: 'elevated' });
const badge = new Badge({ variant: 'solid', color: 'primary', text: 'New' });
const button = new Button({ text: 'Click Me', onClick: () => alert('Hello!') });
```

## Features

- ✅ **38 Components** - Complete component library
- ✅ **TypeScript** - Full type definitions included
- ✅ **600+ Design Tokens** - Comprehensive customization
- ✅ **Zero Hardcoded Values** - Everything customizable via CSS variables
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Tree Shakeable** - Import only what you need
- ✅ **Framework Native** - Built specifically for {{ replace .Name "-" " " | title }}
- ✅ **Production Ready** - Battle-tested components

## Component Categories

### Layout Components (6)
- [Card](/docs/{{ .Name }}/card) - Flexible container with variants
- [Container](/docs/{{ .Name }}/container) - Responsive content wrapper
- [Grid](/docs/{{ .Name }}/grid) - Flexible grid system
- [Stack](/docs/{{ .Name }}/stack) - Vertical/horizontal stacking
- [Space](/docs/{{ .Name }}/space) - Spacing between elements
- [Divider](/docs/{{ .Name }}/divider) - Visual separator

### Form Components (10)
- [Button](/docs/{{ .Name }}/button) - Interactive button
- [Input](/docs/{{ .Name }}/input) - Text input field
- [Select](/docs/{{ .Name }}/select) - Dropdown selection
- [Checkbox](/docs/{{ .Name }}/checkbox) - Checkbox input
- [Radio](/docs/{{ .Name }}/radio) - Radio button
- [Switch](/docs/{{ .Name }}/switch) - Toggle switch
- [Textarea](/docs/{{ .Name }}/textarea) - Multi-line text input
- [Slider](/docs/{{ .Name }}/slider) - Range slider
- [Form](/docs/{{ .Name }}/form) - Form wrapper
- [Upload](/docs/{{ .Name }}/upload) - File upload

### Feedback Components (5)
- [Alert](/docs/{{ .Name }}/alert) - Alert messages
- [Badge](/docs/{{ .Name }}/badge) - Status indicators
- [Spinner](/docs/{{ .Name }}/spinner) - Loading spinner
- [Progress](/docs/{{ .Name }}/progress) - Progress bar
- [Skeleton](/docs/{{ .Name }}/skeleton) - Loading placeholder

### Navigation Components (6)
- [Link](/docs/{{ .Name }}/link) - Navigation link
- [Breadcrumb](/docs/{{ .Name }}/breadcrumb) - Breadcrumb navigation
- [Tabs](/docs/{{ .Name }}/tabs) - Tab navigation
- [Menu](/docs/{{ .Name }}/menu) - Navigation menu
- [Steps](/docs/{{ .Name }}/steps) - Step indicator
- [Pagination](/docs/{{ .Name }}/pagination) - Page navigation

### Overlay Components (5)
- [Modal](/docs/{{ .Name }}/modal) - Modal dialog
- [Drawer](/docs/{{ .Name }}/drawer) - Side drawer
- [Tooltip](/docs/{{ .Name }}/tooltip) - Tooltip overlay
- [Popover](/docs/{{ .Name }}/popover) - Popover overlay
- [Dropdown](/docs/{{ .Name }}/dropdown) - Dropdown menu

### Data Display Components (7)
- [Avatar](/docs/{{ .Name }}/avatar) - User avatar
- [Tag](/docs/{{ .Name }}/tag) - Tag label
- [Table](/docs/{{ .Name }}/table) - Data table
- [Collapse](/docs/{{ .Name }}/collapse) - Collapsible content
- [Image](/docs/{{ .Name }}/image) - Image component
- [Empty](/docs/{{ .Name }}/empty) - Empty state
- [Typography](/docs/{{ .Name }}/typography) - Text styling

## Framework-Specific Setup

### React
```tsx
// Import components
import { Button } from '@primitivekit/react';

// Import design tokens CSS
import '@primitivekit/react/tokens/tokens.css';

// Use in your components
function MyComponent() {
  return <Button>Click Me</Button>;
}
```

### Vue
```vue
<script setup>
import { Button } from '@primitivekit/vue';
import '@primitivekit/vue/tokens/tokens.css';
</script>

<template>
  <Button>Click Me</Button>
</template>
```

### Angular
```typescript
// app.module.ts
import { PrimitiveKitModule } from '@primitivekit/angular';

@NgModule({
  imports: [PrimitiveKitModule],
})
export class AppModule {}

// styles.css
@import '@primitivekit/angular/tokens/tokens.css';

// component.html
<pk-button>Click Me</pk-button>
```

### Svelte
```svelte
<script>
  import Button from '@primitivekit/svelte/Button.svelte';
  import '@primitivekit/svelte/tokens/tokens.css';
</script>

<Button>Click Me</Button>
```

### Astro
```astro
---
import { Button } from '@primitivekit/astro';
import '@primitivekit/astro/tokens/tokens.css';
---

<Button>Click Me</Button>
```

### Vanilla JS
```javascript
import { Button } from '@primitivekit/vanilla';
import '@primitivekit/vanilla/tokens/tokens.css';

const button = new Button({
  text: 'Click Me',
  onClick: () => console.log('Clicked!'),
});

document.body.appendChild(button.element);
```

## Configuration

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "types": ["@primitivekit/{{ .Name }}"]
  }
}
```

### Vite Configuration (if applicable)

```javascript
// vite.config.js
export default {
  optimizeDeps: {
    include: ['@primitivekit/{{ .Name }}']
  }
};
```

### Webpack Configuration (if applicable)

```javascript
// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      '@primitivekit': '@primitivekit/{{ .Name }}'
    }
  }
};
```

## Troubleshooting

### Common Installation Issues

**Issue:** Module not found after installation

**Solution:** Clear your package manager cache and reinstall:
```bash
# npm
rm -rf node_modules package-lock.json
npm install

# yarn
rm -rf node_modules yarn.lock
yarn install

# pnpm
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Issue:** TypeScript types not recognized

**Solution:** Ensure your `tsconfig.json` includes the package types:
```json
{
  "compilerOptions": {
    "types": ["@primitivekit/{{ .Name }}"]
  }
}
```

**Issue:** CSS variables not applying

**Solution:** Make sure you've imported the design tokens CSS file:
```tsx
import '@primitivekit/{{ .Name }}/tokens/tokens.css';
```

## Version

Current version: **0.2.1**

See the [Changelog](/docs/changelog) for version history and migration guides.

## Compatibility

- **{{ replace .Name "-" " " | title }} Version:** 16.0.0+
- **TypeScript:** 4.5.0+
- **Node.js:** 16.0.0+
- **Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Repository

- [GitHub](https://github.com/primitivekit/{{ .Name }}) - Source code and issues
- [NPM](https://www.npmjs.com/package/@primitivekit/{{ .Name }}) - Package registry
- [Documentation](https://primitivekit.com/docs/{{ .Name }}) - Full documentation

## Next Steps

- 📖 [Customization Guide](/docs/customization) - Learn how to customize components
- 🎨 [Design Tokens](/docs/design-tokens) - Explore all 600+ design tokens
- ♿ [Accessibility](/docs/accessibility) - Accessibility features and guidelines
- 🧪 [Testing Guide](/docs/testing) - Testing components in your application
- 💡 [Best Practices](/docs/best-practices) - Recommended patterns and practices

## Support

- [GitHub Issues](https://github.com/primitivekit/{{ .Name }}/issues) - Report bugs or request features
- [GitHub Discussions](https://github.com/primitivekit/primitivekit/discussions) - Ask questions and share ideas
- [Contributing Guide](/docs/contributing) - Learn how to contribute

