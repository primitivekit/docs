---
title: Astro (Coming Soon)
weight: 5
---

# Astro Components

PrimitiveKit for Astro is coming soon! 🚀

## What to Expect

We're working on bringing the same great experience to Astro developers:

- ✅ **38 Components** - All components from React version
- ✅ **Zero JS by Default** - Ship only HTML/CSS
- ✅ **Framework Agnostic** - Use with React, Vue, or vanilla
- ✅ **TypeScript** - Full type definitions
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Customizable** - Same 600+ design tokens

## Planned Features

### Static Components

```astro
---
import { Button } from '@primitivekit/astro';
---

<Button variant="primary">
  Click me
</Button>
```

### Interactive Islands

```astro
---
import { Button } from '@primitivekit/astro';
---

<!-- Static by default -->
<Button variant="primary">
  Static Button
</Button>

<!-- Interactive when needed -->
<Button client:load variant="primary" onClick={handleClick}>
  Interactive Button
</Button>
```

### Framework Integration

```astro
---
// Use with React
import { Button as ReactButton } from '@primitivekit/react';

// Use with Vue
import { Button as VueButton } from '@primitivekit/vue';

// Use with Astro
import { Button as AstroButton } from '@primitivekit/astro';
---

<ReactButton client:load>React Button</ReactButton>
<VueButton client:load>Vue Button</VueButton>
<AstroButton>Astro Button (No JS)</AstroButton>
```

### TypeScript Support

```astro
---
import { Button, type ButtonProps } from '@primitivekit/astro';

interface Props extends ButtonProps {
  customProp?: string;
}

const { customProp, ...buttonProps } = Astro.props;
---

<Button {...buttonProps}>
  {customProp}
</Button>
```

## Timeline

We're aiming to release the Astro version in **Q1 2027**.

## Stay Updated

- ⭐ Star us on [GitHub](https://github.com/primitivekit/react)
- 📧 Subscribe to our newsletter (coming soon)
- 🐦 Follow us on Twitter (coming soon)

## In the Meantime

Check out our [React components](/docs/react) which are available now!

You can also use the React version with Astro:

```astro
---
import { Button } from '@primitivekit/react';
---

<Button client:load variant="primary">
  Click me
</Button>
```

## Interested in Contributing?

We'd love your help! If you're interested in contributing to the Astro version:

- Join the discussion on [GitHub Discussions](https://github.com/primitivekit/react/discussions)
- Check out our [Contributing Guide](https://github.com/primitivekit/react/blob/main/CONTRIBUTING.md)
- Reach out to the team

## Questions?

Have questions about the Astro version? Open an issue on [GitHub](https://github.com/primitivekit/react/issues) with the `astro` label.
