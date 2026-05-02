---
title: Getting Started with PrimitiveKit
date: 2024-01-15
authors:
  - name: PrimitiveKit Team
tags:
  - tutorial
  - getting-started
  - react
---

# Getting Started with PrimitiveKit

Welcome to PrimitiveKit! This guide will help you get up and running with our component library in just a few minutes.

## Installation

Install PrimitiveKit using your preferred package manager:

```bash
npm install @primitivekit/react
```

Or with yarn:

```bash
yarn add @primitivekit/react
```

## Basic Usage

Import components and start building:

```jsx
import { Button, Card, Alert } from '@primitivekit/react';

function App() {
  return (
    <Card>
      <Alert variant="info">
        Welcome to PrimitiveKit!
      </Alert>
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  );
}
```

## Design Tokens

PrimitiveKit uses 600+ design tokens for complete customization:

```css
:root {
  --primitive-color-primary: #0ea5e9;
  --primitive-spacing-md: 1rem;
  --primitive-radius-md: 0.5rem;
}
```

## Next Steps

- Explore the [Component Documentation](/docs/react)
- Learn about [Design Tokens](/docs/design-tokens)
- Check out [Customization Guide](/docs/customization)

Happy building! 🚀
