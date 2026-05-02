---
title: React
weight: 2
---

# React Components

PrimitiveKit for React provides 38 production-ready components with full TypeScript support, accessibility features, and complete customization through design tokens.

## Installation

```bash
npm install @primitivekit/react
```

## Features

- ✅ **38 Components** - Complete set of UI components
- ✅ **TypeScript** - Full type definitions included
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Customizable** - 600+ design tokens
- ✅ **Zero Hardcoded Values** - Everything is customizable
- ✅ **Tree-shakeable** - Import only what you need
- ✅ **SSR Ready** - Works with Next.js, Remix, etc.

## Component Categories

### Form Components

Essential form elements for user input:

- [Button](/docs/react/button) - Buttons with multiple variants
- [Input](/docs/react/input) - Text input fields
- [Select](/docs/react/select) - Dropdown select menus
- [Checkbox](/docs/react/checkbox) - Checkbox inputs
- [Radio](/docs/react/radio) - Radio button groups
- [Switch](/docs/react/switch) - Toggle switches
- [Textarea](/docs/react/textarea) - Multi-line text input
- [Slider](/docs/react/slider) - Range sliders

### Layout Components

Components for structuring your UI:

- [Card](/docs/react/card) - Content containers
- [Container](/docs/react/container) - Page containers
- [Grid](/docs/react/grid) - Grid layouts
- [Stack](/docs/react/stack) - Vertical/horizontal stacks
- [Divider](/docs/react/divider) - Visual separators

### Display Components

Components for displaying content:

- Alert - Alert messages
- Badge - Status badges
- Avatar - User avatars
- Image - Optimized images
- Empty - Empty states

### Navigation Components

Components for navigation:

- Menu - Navigation menus
- Breadcrumb - Breadcrumb navigation
- Tabs - Tab navigation
- Pagination - Page navigation

### Feedback Components

Components for user feedback:

- Modal - Modal dialogs
- Drawer - Side drawers
- Toast - Toast notifications
- Progress - Progress indicators
- Spinner - Loading spinners

## Usage Example

```jsx
import { 
  Button, 
  Card, 
  Input, 
  Stack 
} from '@primitivekit/react';

function ContactForm() {
  return (
    <Card>
      <Stack spacing="md">
        <h2>Contact Us</h2>
        <Input 
          label="Name" 
          placeholder="Your name" 
        />
        <Input 
          label="Email" 
          type="email" 
          placeholder="your@email.com" 
        />
        <Button variant="primary">
          Submit
        </Button>
      </Stack>
    </Card>
  );
}
```

## TypeScript Support

All components include full TypeScript definitions:

```tsx
import { Button, ButtonProps } from '@primitivekit/react';

interface CustomButtonProps extends ButtonProps {
  customProp?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  customProp, 
  ...props 
}) => {
  return <Button {...props} />;
};
```

## Customization

Every component can be customized using CSS variables:

```css
/* Customize Button */
:root {
  --button-primary-bg: #007bff;
  --button-primary-color: #ffffff;
  --button-border-radius: 8px;
  --button-padding-x: 16px;
  --button-padding-y: 8px;
}
```

See [Customization Guide](/docs/customization) for more details.

## Accessibility

All components follow WCAG 2.1 AA guidelines:

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ ARIA attributes
- ✅ Color contrast

See [Accessibility Guide](/docs/accessibility) for more details.

## Server-Side Rendering

PrimitiveKit works seamlessly with SSR frameworks:

### Next.js

```jsx
// app/page.tsx
import { Button } from '@primitivekit/react';

export default function Page() {
  return <Button>Click me</Button>;
}
```

### Remix

```jsx
// app/routes/index.tsx
import { Button } from '@primitivekit/react';

export default function Index() {
  return <Button>Click me</Button>;
}
```

## Tree Shaking

Import only the components you need:

```jsx
// ✅ Good - Tree-shakeable
import { Button, Input } from '@primitivekit/react';

// ❌ Avoid - Imports everything
import * as PrimitiveKit from '@primitivekit/react';
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Package Information

- **Package**: [@primitivekit/react](https://www.npmjs.com/package/@primitivekit/react)
- **Repository**: [github.com/primitivekit/react](https://github.com/primitivekit/react)
- **License**: MIT
- **Bundle Size**: ~50KB (minified + gzipped)

## Next Steps

- Browse [Component Documentation](/docs/react/button)
- Learn about [Design Tokens](/docs/design-tokens)
- Read the [Customization Guide](/docs/customization)
- Check out the [Showcase](/showcase)
