# Framework Comparison

# Framework Comparison

Choose the right PrimitiveKit package for your project. All frameworks share the same CSS and design tokens.

## Quick Comparison

| Feature | React | Vue | Angular | Svelte | Astro | Vanilla JS |
|---------|-------|-----|---------|--------|-------|------------|
| **Version** | 0.2.1 | 0.1.0 | 0.1.0 | 0.1.0 | 0.1.0 | 0.1.0 |
| **Components** | 38 | 39 | 39 | 39 | 39 | 39 |
| **Bundle Size** | ~50KB | ~45KB | ~60KB | ~40KB | ~35KB | ~30KB |
| **TypeScript** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Tree Shaking** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **SSR Support** | ✅ | ✅ | ✅ | ✅ | ✅ | N/A |
| **Zero JS** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Dependencies** | React 18+ | Vue 3+ | Angular 16+ | Svelte 4+ | Astro 3+ | None |

## Framework Details

### React
**Best for:** Single-page applications, complex UIs, large teams

**Pros:**
- ✅ Most mature implementation (v0.2.1)
- ✅ Largest ecosystem
- ✅ Excellent TypeScript support
- ✅ Hooks-based API
- ✅ Great developer tools

**Cons:**
- ❌ Larger bundle size
- ❌ Requires React knowledge
- ❌ Virtual DOM overhead

**Example:**
```tsx
import { Card, Button } from '@primitivekit/react';

function App() {
  return (
    <Card variant="elevated">
      <Button onClick={() => alert('Hello!')}>
        Click Me
      </Button>
    </Card>
  );
}
```

[View React Docs →](/docs/react)

---

### Vue
**Best for:** Progressive web apps, modern SPAs, flexible architecture

**Pros:**
- ✅ Composition API
- ✅ Excellent reactivity
- ✅ Great documentation
- ✅ Smaller bundle size
- ✅ Easy to learn

**Cons:**
- ❌ Smaller ecosystem than React
- ❌ Less corporate backing

**Example:**
```vue
<script setup lang="ts">
import { Card, Button } from '@primitivekit/vue';
</script>

<template>
  <Card variant="elevated">
    <Button @click="alert('Hello!')">
      Click Me
    </Button>
  </Card>
</template>
```

[View Vue Docs →](/docs/vue)

---

### Angular
**Best for:** Enterprise applications, large-scale projects, TypeScript-first teams

**Pros:**
- ✅ Standalone components
- ✅ Full framework (routing, forms, HTTP)
- ✅ Strong TypeScript integration
- ✅ Enterprise-ready
- ✅ Opinionated structure

**Cons:**
- ❌ Steeper learning curve
- ❌ Larger bundle size
- ❌ More boilerplate

**Example:**
```typescript
import { Component } from '@angular/core';
import { CardComponent, ButtonComponent } from '@primitivekit/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  template: `
    <pk-card variant="elevated">
      <pk-button (click)="handleClick()">
        Click Me
      </pk-button>
    </pk-card>
  `
})
export class AppComponent {
  handleClick() {
    alert('Hello!');
  }
}
```

[View Angular Docs →](/docs/angular)

---

### Svelte
**Best for:** Performance-critical apps, small bundle sizes, modern development

**Pros:**
- ✅ Smallest bundle size
- ✅ No virtual DOM
- ✅ Reactive by default
- ✅ Easy to learn
- ✅ Great performance

**Cons:**
- ❌ Smaller ecosystem
- ❌ Less mature tooling
- ❌ Fewer job opportunities

**Example:**
```svelte
<script lang="ts">
  import { Card, Button } from '@primitivekit/svelte';
  
  function handleClick() {
    alert('Hello!');
  }
</script>

<Card variant="elevated">
  <Button on:click={handleClick}>
    Click Me
  </Button>
</Card>
```

[View Svelte Docs →](/docs/svelte)

---

### Astro
**Best for:** Content-focused sites, blogs, documentation, marketing pages

**Pros:**
- ✅ Zero JavaScript by default
- ✅ Perfect Lighthouse scores
- ✅ Static site generation
- ✅ Partial hydration
- ✅ Multi-framework support

**Cons:**
- ❌ Limited interactivity by default
- ❌ Newer framework
- ❌ Smaller ecosystem

**Example:**
```astro
---
import { Card, Button } from '@primitivekit/astro';
---

<Card variant="elevated">
  <Button>Click Me</Button>
</Card>
```

[View Astro Docs →](/docs/astro)

---

### Vanilla JavaScript
**Best for:** No build step, legacy projects, maximum control, learning

**Pros:**
- ✅ Zero dependencies
- ✅ No build step required
- ✅ Works anywhere
- ✅ CDN support
- ✅ Maximum control

**Cons:**
- ❌ More manual work
- ❌ No reactivity system
- ❌ Imperative API

**Example:**
```javascript
import { Card, Button } from '@primitivekit/vanilla';

const card = new Card({ variant: 'elevated' });
const button = new Button({
  text: 'Click Me',
  onClick: () => alert('Hello!')
});

card.mount(document.body);
```

[View Vanilla JS Docs →](/docs/vanilla)

---

## Bundle Size Comparison

Approximate minified + gzipped sizes for a typical app with 10 components:

| Framework | Size | Notes |
|-----------|------|-------|
| Vanilla JS | ~30KB | No framework overhead |
| Astro | ~35KB | Static by default |
| Svelte | ~40KB | Compiled away |
| Vue | ~45KB | Includes Vue runtime |
| React | ~50KB | Includes React runtime |
| Angular | ~60KB | Full framework |

*Note: Sizes include framework runtime + PrimitiveKit components. Actual sizes vary based on usage.*

## Performance Comparison

| Framework | Initial Load | Reactivity | Re-renders | Memory |
|-----------|-------------|------------|------------|--------|
| Astro | ⭐⭐⭐⭐⭐ | N/A | N/A | ⭐⭐⭐⭐⭐ |
| Vanilla JS | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Svelte | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Vue | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| React | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Angular | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

## Developer Experience

| Framework | Learning Curve | Tooling | Community | Documentation |
|-----------|---------------|---------|-----------|---------------|
| React | Medium | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Vue | Easy | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Svelte | Easy | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Angular | Hard | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Astro | Easy | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Vanilla JS | Easy | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## Use Case Recommendations

### Choose React if:
- Building a complex SPA
- Need a large ecosystem
- Team already knows React
- Need excellent tooling

### Choose Vue if:
- Want progressive enhancement
- Need great reactivity
- Prefer flexible architecture
- Want easy learning curve

### Choose Angular if:
- Building enterprise apps
- Need full framework features
- Want opinionated structure
- Team uses TypeScript heavily

### Choose Svelte if:
- Performance is critical
- Want smallest bundle size
- Prefer reactive programming
- Building modern apps

### Choose Astro if:
- Building content sites
- Need perfect Lighthouse scores
- Want zero JavaScript
- SEO is critical

### Choose Vanilla JS if:
- No build step needed
- Maximum control required
- Legacy project integration
- Learning fundamentals

## Shared Features

All frameworks share these features:

- ✅ **Same CSS** - All use identical CSS files
- ✅ **Same Design Tokens** - 600+ shared tokens
- ✅ **Same API** - Consistent prop names
- ✅ **Same Customization** - CSS variables work everywhere
- ✅ **Same Accessibility** - WCAG 2.1 AA compliant
- ✅ **TypeScript Support** - Full type definitions
- ✅ **Tree Shaking** - Import only what you need

## Migration Between Frameworks

Since all frameworks share the same CSS and design tokens, migrating is straightforward:

1. Install new framework package
2. Update component imports
3. Adjust syntax to new framework
4. Keep all CSS customizations

Your design tokens and custom CSS variables work across all frameworks without changes.

## Still Not Sure?

Start with your team's existing framework knowledge. PrimitiveKit works great with all of them!

Need help deciding? [Open a discussion on GitHub](https://github.com/primitivekit/react/discussions)

