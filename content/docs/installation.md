---
title: Installation
weight: 2
---

# Installation

Install PrimitiveKit for your framework of choice. All packages are available on NPM.

## Choose Your Framework

{{< tabs >}}

{{< tab name="React" >}}
### React

```bash
npm install @primitivekit/react
```

**Usage:**

```tsx
import { Button, Card } from '@primitivekit/react';
import '@primitivekit/react/tokens/tokens.css';

function App() {
  return (
    <Card variant="elevated">
      <Button>Click Me</Button>
    </Card>
  );
}
```

**Requirements:**
- React 18.0.0 or higher
- TypeScript 5.0.0 or higher (optional)

[View React Documentation →](/docs/react)
{{< /tab >}}

{{< tab name="Vue" >}}
### Vue

```bash
npm install @primitivekit/vue
```

**Usage:**

```vue
<script setup lang="ts">
import { Card, Button } from '@primitivekit/vue';
import '@primitivekit/vue/tokens/tokens.css';
</script>

<template>
  <Card variant="elevated">
    <Button>Click Me</Button>
  </Card>
</template>
```

**Requirements:**
- Vue 3.0.0 or higher
- TypeScript 5.0.0 or higher (optional)

[View Vue Documentation →](/docs/vue)
{{< /tab >}}

{{< tab name="Angular" >}}
### Angular

```bash
npm install @primitivekit/angular
```

**Usage:**

```typescript
import { Component } from '@angular/core';
import { CardComponent, ButtonComponent } from '@primitivekit/angular';
import '@primitivekit/angular/tokens/tokens.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  template: `
    <pk-card variant="elevated">
      <pk-button>Click Me</pk-button>
    </pk-card>
  `
})
export class AppComponent {}
```

**Requirements:**
- Angular 16.0.0 or higher
- TypeScript 5.0.0 or higher

[View Angular Documentation →](/docs/angular)
{{< /tab >}}

{{< tab name="Svelte" >}}
### Svelte

```bash
npm install @primitivekit/svelte
```

**Usage:**

```svelte
<script lang="ts">
  import { Card, Button } from '@primitivekit/svelte';
  import '@primitivekit/svelte/tokens/tokens.css';
</script>

<Card variant="elevated">
  <Button>Click Me</Button>
</Card>
```

**Requirements:**
- Svelte 4.0.0 or higher
- TypeScript 5.0.0 or higher (optional)

[View Svelte Documentation →](/docs/svelte)
{{< /tab >}}

{{< tab name="Astro" >}}
### Astro

```bash
npm install @primitivekit/astro
```

**Usage:**

```astro
---
import { Card, Button } from '@primitivekit/astro';
import '@primitivekit/astro/tokens/tokens.css';
---

<Card variant="elevated">
  <Button>Click Me</Button>
</Card>
```

**Requirements:**
- Astro 3.0.0 or higher
- TypeScript 5.0.0 or higher (optional)

[View Astro Documentation →](/docs/astro)
{{< /tab >}}

{{< tab name="Vanilla JS" >}}
### Vanilla JavaScript

```bash
npm install @primitivekit/vanilla
```

**Usage:**

```javascript
import { Card, Button } from '@primitivekit/vanilla';
import '@primitivekit/vanilla/tokens/tokens.css';

const card = new Card({ variant: 'elevated' });
const button = new Button({ text: 'Click Me' });

card.mount(document.getElementById('app'));
```

**CDN Usage:**

```html
<link rel="stylesheet" href="https://unpkg.com/@primitivekit/vanilla/dist/tokens/tokens.css">
<script src="https://unpkg.com/@primitivekit/vanilla"></script>

<script>
  const { Card, Button } = PrimitiveKit;
  const card = new Card({ variant: 'elevated' });
  card.mount(document.body);
</script>
```

**Requirements:**
- Modern browser (ES6+ support)
- No dependencies

[View Vanilla JS Documentation →](/docs/vanilla)
{{< /tab >}}

{{< /tabs >}}

## Import Design Tokens

All frameworks require importing the design tokens CSS file:

```javascript
import '@primitivekit/{framework}/tokens/tokens.css';
```

This file contains 600+ CSS variables that power all components. You only need to import it once in your application's entry point.

## Tree Shaking

All packages support tree shaking. Import only the components you need:

```javascript
// ✅ Good - Only imports Button
import { Button } from '@primitivekit/react';

// ❌ Avoid - Imports everything
import * as PrimitiveKit from '@primitivekit/react';
```

## TypeScript Support

All packages include TypeScript definitions. No additional `@types` packages needed.

```typescript
import type { ButtonProps } from '@primitivekit/react';

const props: ButtonProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false
};
```

## Version Compatibility

| Framework | PrimitiveKit Version | Status |
|-----------|---------------------|--------|
| React | 0.2.1 | ✅ Production Ready |
| Vue | 0.1.0 | ✅ Ready |
| Angular | 0.1.0 | ✅ Ready |
| Svelte | 0.1.0 | ✅ Ready |
| Astro | 0.1.0 | ✅ Ready |
| Vanilla JS | 0.1.0 | ✅ Ready |

## Next Steps

- [Quick Start Guide](/docs/quick-start) - Get up and running in 5 minutes
- [Customization](/docs/customization) - Learn how to customize components
- [Design Tokens](/docs/design-tokens) - Explore the token system
- [Components](/docs/react) - Browse all available components

## Need Help?

- [GitHub Issues](https://github.com/primitivekit/react/issues) - Report bugs or request features
- [GitHub Discussions](https://github.com/primitivekit/react/discussions) - Ask questions and share ideas
- [NPM](https://www.npmjs.com/package/@primitivekit/react) - View package details
