---
title: Quick Start
weight: 3
---

# Quick Start

Get up and running with PrimitiveKit in minutes.

## Installation

Install the package via npm, yarn, or pnpm:

```bash
npm install @primitivekit/react
```

## Basic Usage

Import and use components in your React application:

```jsx
import { Button } from '@primitivekit/react';

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

## Customization

Customize components using CSS variables:

```css
:root {
  --button-primary-bg: #007bff;
  --button-primary-color: #ffffff;
  --button-border-radius: 8px;
}
```

## Next Steps

- [Installation Guide](/docs/installation) - Detailed installation instructions
- [React Components](/docs/react) - Browse all React components
- [Customization](/docs/customization) - Learn how to customize components
- [Design Tokens](/docs/design-tokens) - Explore the design token system

## Example Project

Here's a complete example:

```jsx
import React from 'react';
import { Button, Card, Input } from '@primitivekit/react';

function LoginForm() {
  return (
    <Card>
      <h2>Login</h2>
      <Input 
        type="email" 
        placeholder="Email" 
        label="Email Address"
      />
      <Input 
        type="password" 
        placeholder="Password" 
        label="Password"
      />
      <Button variant="primary" fullWidth>
        Sign In
      </Button>
    </Card>
  );
}

export default LoginForm;
```

## TypeScript Support

PrimitiveKit is written in TypeScript and includes full type definitions:

```tsx
import { Button, ButtonProps } from '@primitivekit/react';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Need Help?

- [GitHub Issues](https://github.com/primitivekit/react/issues)
- [GitHub Discussions](https://github.com/primitivekit/react/discussions)
- [NPM Package](https://www.npmjs.com/package/@primitivekit/react)
