# Quick Start

# Quick Start

Get up and running with PrimitiveKit in 5 minutes.

## 1. Install

Choose your framework and install the package:

{{< tabs >}}

{{< tab name="React" >}}
```bash
npm install @primitivekit/react
```
{{< /tab >}}

{{< tab name="Vue" >}}
```bash
npm install @primitivekit/vue
```
{{< /tab >}}

{{< tab name="Angular" >}}
```bash
npm install @primitivekit/angular
```
{{< /tab >}}

{{< tab name="Svelte" >}}
```bash
npm install @primitivekit/svelte
```
{{< /tab >}}

{{< tab name="Astro" >}}
```bash
npm install @primitivekit/astro
```
{{< /tab >}}

{{< tab name="Vanilla" >}}
```bash
npm install @primitivekit/vanilla
```
{{< /tab >}}

{{< /tabs >}}

## 2. Import Design Tokens

Import the design tokens CSS file in your application's entry point:

{{< tabs >}}

{{< tab name="React" >}}
```tsx
// src/main.tsx or src/App.tsx
import '@primitivekit/react/tokens/tokens.css';
```
{{< /tab >}}

{{< tab name="Vue" >}}
```typescript
// src/main.ts
import '@primitivekit/vue/tokens/tokens.css';
```
{{< /tab >}}

{{< tab name="Angular" >}}
```typescript
// src/main.ts
import '@primitivekit/angular/tokens/tokens.css';
```
{{< /tab >}}

{{< tab name="Svelte" >}}
```typescript
// src/main.ts
import '@primitivekit/svelte/tokens/tokens.css';
```
{{< /tab >}}

{{< tab name="Astro" >}}
```astro
---
// src/layouts/Layout.astro
import '@primitivekit/astro/tokens/tokens.css';
---
```
{{< /tab >}}

{{< tab name="Vanilla" >}}
```html
<!-- index.html -->
<link rel="stylesheet" href="node_modules/@primitivekit/vanilla/dist/tokens/tokens.css">
```
{{< /tab >}}

{{< /tabs >}}

## 3. Use Components

Import and use components in your application:

{{< tabs >}}

{{< tab name="React" >}}
```tsx
import { Card, Button, Badge } from '@primitivekit/react';

function App() {
  return (
    <div className="app">
      <Card variant="elevated" hoverable>
        <Badge variant="solid" color="primary">New</Badge>
        <h2>Welcome to PrimitiveKit</h2>
        <p>Build beautiful UIs with zero hardcoded values.</p>
        <Button onClick={() => alert('Hello!')}>
          Get Started
        </Button>
      </Card>
    </div>
  );
}

export default App;
```
{{< /tab >}}

{{< tab name="Vue" >}}
```vue
<script setup lang="ts">
import { Card, Button, Badge } from '@primitivekit/vue';

const handleClick = () => {
  alert('Hello!');
};
</script>

<template>
  <div class="app">
    <Card variant="elevated" :hoverable="true">
      <Badge variant="solid" color="primary">New</Badge>
      <h2>Welcome to PrimitiveKit</h2>
      <p>Build beautiful UIs with zero hardcoded values.</p>
      <Button @click="handleClick">
        Get Started
      </Button>
    </Card>
  </div>
</template>
```
{{< /tab >}}

{{< tab name="Angular" >}}
```typescript
import { Component } from '@angular/core';
import { CardComponent, ButtonComponent, BadgeComponent } from '@primitivekit/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, ButtonComponent, BadgeComponent],
  template: `
    <div class="app">
      <pk-card variant="elevated" [hoverable]="true">
        <pk-badge variant="solid" color="primary">New</pk-badge>
        <h2>Welcome to PrimitiveKit</h2>
        <p>Build beautiful UIs with zero hardcoded values.</p>
        <pk-button (click)="handleClick()">
          Get Started
        </pk-button>
      </pk-card>
    </div>
  `
})
export class AppComponent {
  handleClick() {
    alert('Hello!');
  }
}
```
{{< /tab >}}

{{< tab name="Svelte" >}}
```svelte
<script lang="ts">
  import { Card, Button, Badge } from '@primitivekit/svelte';
  
  function handleClick() {
    alert('Hello!');
  }
</script>

<div class="app">
  <Card variant="elevated" hoverable={true}>
    <Badge variant="solid" color="primary">New</Badge>
    <h2>Welcome to PrimitiveKit</h2>
    <p>Build beautiful UIs with zero hardcoded values.</p>
    <Button on:click={handleClick}>
      Get Started
    </Button>
  </Card>
</div>
```
{{< /tab >}}

{{< tab name="Astro" >}}
```astro
---
import { Card, Button, Badge } from '@primitivekit/astro';
---

<div class="app">
  <Card variant="elevated" hoverable={true}>
    <Badge variant="solid" color="primary">New</Badge>
    <h2>Welcome to PrimitiveKit</h2>
    <p>Build beautiful UIs with zero hardcoded values.</p>
    <Button>Get Started</Button>
  </Card>
</div>
```
{{< /tab >}}

{{< tab name="Vanilla" >}}
```javascript
import { Card, Button, Badge } from '@primitivekit/vanilla';

const app = document.getElementById('app');

const badge = new Badge({
  variant: 'solid',
  color: 'primary',
  text: 'New'
});

const button = new Button({
  text: 'Get Started',
  onClick: () => alert('Hello!')
});

const card = new Card({
  variant: 'elevated',
  hoverable: true,
  children: [
    badge,
    '<h2>Welcome to PrimitiveKit</h2>',
    '<p>Build beautiful UIs with zero hardcoded values.</p>',
    button
  ]
});

card.mount(app);
```
{{< /tab >}}

{{< /tabs >}}

## 4. Customize (Optional)

Override CSS variables to customize the look and feel:

```css
/* styles.css */
:root {
  /* Colors */
  --color-primary: #0ea5e9;
  --color-secondary: #8b5cf6;
  
  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  
  /* Typography */
  --font-family-base: 'Inter', sans-serif;
  --font-size-base: 1rem;
  
  /* Border Radius */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 0.75rem;
}
```

## Complete Example

Here's a complete example with multiple components:

{{< tabs >}}

{{< tab name="React" >}}
```tsx
import { 
  Card, 
  Button, 
  Badge, 
  Input, 
  Stack,
  Divider 
} from '@primitivekit/react';
import '@primitivekit/react/tokens/tokens.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <Card variant="elevated">
        <Stack direction="vertical" spacing="lg">
          <div>
            <Badge variant="solid" color="primary">New Feature</Badge>
            <h1>Welcome to PrimitiveKit</h1>
            <p>Build beautiful UIs with zero hardcoded values.</p>
          </div>
          
          <Divider />
          
          <div>
            <label htmlFor="name">Your Name</label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <Button 
            variant="primary" 
            onClick={() => alert(`Hello, ${name || 'World'}!`)}
          >
            Say Hello
          </Button>
        </Stack>
      </Card>
    </div>
  );
}

export default App;
```
{{< /tab >}}

{{< tab >}}
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { 
  Card, 
  Button, 
  Badge, 
  Input, 
  Stack,
  Divider 
} from '@primitivekit/vue';
import '@primitivekit/vue/tokens/tokens.css';

const name = ref('');

const handleClick = () => {
  alert(`Hello, ${name.value || 'World'}!`);
};
</script>

<template>
  <div style="padding: 2rem; max-width: 600px; margin: 0 auto;">
    <Card variant="elevated">
      <Stack direction="vertical" spacing="lg">
        <div>
          <Badge variant="solid" color="primary">New Feature</Badge>
          <h1>Welcome to PrimitiveKit</h1>
          <p>Build beautiful UIs with zero hardcoded values.</p>
        </div>
        
        <Divider />
        
        <div>
          <label for="name">Your Name</label>
          <Input
            id="name"
            placeholder="Enter your name"
            v-model="name"
          />
        </div>
        
        <Button variant="primary" @click="handleClick">
          Say Hello
        </Button>
      </Stack>
    </Card>
  </div>
</template>
```
{{< /tab >}}

{{< tab >}}
```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  CardComponent, 
  ButtonComponent, 
  BadgeComponent, 
  InputComponent, 
  StackComponent,
  DividerComponent 
} from '@primitivekit/angular';
import '@primitivekit/angular/tokens/tokens.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CardComponent, 
    ButtonComponent, 
    BadgeComponent, 
    InputComponent, 
    StackComponent,
    DividerComponent
  ],
  template: `
    <div style="padding: 2rem; max-width: 600px; margin: 0 auto;">
      <pk-card variant="elevated">
        <pk-stack direction="vertical" spacing="lg">
          <div>
            <pk-badge variant="solid" color="primary">New Feature</pk-badge>
            <h1>Welcome to PrimitiveKit</h1>
            <p>Build beautiful UIs with zero hardcoded values.</p>
          </div>
          
          <pk-divider />
          
          <div>
            <label for="name">Your Name</label>
            <pk-input
              id="name"
              placeholder="Enter your name"
              [(ngModel)]="name"
            />
          </div>
          
          <pk-button variant="primary" (click)="handleClick()">
            Say Hello
          </pk-button>
        </pk-stack>
      </pk-card>
    </div>
  `
})
export class AppComponent {
  name = '';

  handleClick() {
    alert(`Hello, ${this.name || 'World'}!`);
  }
}
```
{{< /tab >}}

{{< tab >}}
```svelte
<script lang="ts">
  import { 
    Card, 
    Button, 
    Badge, 
    Input, 
    Stack,
    Divider 
  } from '@primitivekit/svelte';
  import '@primitivekit/svelte/tokens/tokens.css';
  
  let name = '';
  
  function handleClick() {
    alert(`Hello, ${name || 'World'}!`);
  }
</script>

<div style="padding: 2rem; max-width: 600px; margin: 0 auto;">
  <Card variant="elevated">
    <Stack direction="vertical" spacing="lg">
      <div>
        <Badge variant="solid" color="primary">New Feature</Badge>
        <h1>Welcome to PrimitiveKit</h1>
        <p>Build beautiful UIs with zero hardcoded values.</p>
      </div>
      
      <Divider />
      
      <div>
        <label for="name">Your Name</label>
        <Input
          id="name"
          placeholder="Enter your name"
          bind:value={name}
        />
      </div>
      
      <Button variant="primary" on:click={handleClick}>
        Say Hello
      </Button>
    </Stack>
  </Card>
</div>
```
{{< /tab >}}

{{< tab >}}
```astro
---
import { 
  Card, 
  Button, 
  Badge, 
  Input, 
  Stack,
  Divider 
} from '@primitivekit/astro';
import '@primitivekit/astro/tokens/tokens.css';
---

<div style="padding: 2rem; max-width: 600px; margin: 0 auto;">
  <Card variant="elevated">
    <Stack direction="vertical" spacing="lg">
      <div>
        <Badge variant="solid" color="primary">New Feature</Badge>
        <h1>Welcome to PrimitiveKit</h1>
        <p>Build beautiful UIs with zero hardcoded values.</p>
      </div>
      
      <Divider />
      
      <div>
        <label for="name">Your Name</label>
        <Input
          id="name"
          placeholder="Enter your name"
        />
      </div>
      
      <Button variant="primary">
        Say Hello
      </Button>
    </Stack>
  </Card>
</div>
```
{{< /tab >}}

{{< tab >}}
```javascript
import { 
  Card, 
  Button, 
  Badge, 
  Input, 
  Stack,
  Divider 
} from '@primitivekit/vanilla';
import '@primitivekit/vanilla/tokens/tokens.css';

const app = document.getElementById('app');

const badge = new Badge({
  variant: 'solid',
  color: 'primary',
  text: 'New Feature'
});

const input = new Input({
  id: 'name',
  placeholder: 'Enter your name'
});

const button = new Button({
  variant: 'primary',
  text: 'Say Hello',
  onClick: () => {
    const name = input.getValue();
    alert(`Hello, ${name || 'World'}!`);
  }
});

const divider = new Divider();

const stack = new Stack({
  direction: 'vertical',
  spacing: 'lg',
  children: [
    '<div>' +
      badge.element.outerHTML +
      '<h1>Welcome to PrimitiveKit</h1>' +
      '<p>Build beautiful UIs with zero hardcoded values.</p>' +
    '</div>',
    divider,
    '<div><label for="name">Your Name</label></div>',
    input,
    button
  ]
});

const card = new Card({
  variant: 'elevated',
  children: [stack]
});

card.mount(app);
```
{{< /tab >}}

{{< /tabs >}}

## Next Steps

- [Browse Components](/docs/react) - Explore all available components
- [Customization Guide](/docs/customization) - Learn how to customize components
- [Design Tokens](/docs/design-tokens) - Understand the token system
- [Accessibility](/docs/accessibility) - Learn about accessibility features

## Need Help?

- [GitHub Issues](https://github.com/primitivekit/react/issues) - Report bugs
- [GitHub Discussions](https://github.com/primitivekit/react/discussions) - Ask questions
- [NPM](https://www.npmjs.com/package/@primitivekit/react) - View package details

