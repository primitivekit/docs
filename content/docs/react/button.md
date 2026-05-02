---
title: Button
weight: 1
---

# Button

A versatile, accessible button component with multiple variants, sizes, and states.

## Installation

```bash
npm install @primitivekit/react
```

## Basic Usage

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

## Variants

The button comes with six built-in variants:

```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

## Sizes

Three sizes are available:

```jsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

## States

### Disabled

```jsx
<Button disabled>Disabled Button</Button>
```

### Loading

```jsx
<Button loading>Loading...</Button>
```

### Full Width

```jsx
<Button fullWidth>Full Width Button</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable the button |
| `loading` | `boolean` | `false` | Show loading state |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `onClick` | `(event: React.MouseEvent) => void` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |
| `children` | `React.ReactNode` | - | Button content |
| `className` | `string` | - | Additional CSS classes |
| `style` | `React.CSSProperties` | - | Inline styles |

## Examples

### With Icons

```jsx
import { Button } from '@primitivekit/react';
import { Mail, Download, Trash } from 'lucide-react';

function IconButtons() {
  return (
    <>
      <Button variant="primary">
        <Mail size={20} />
        Send Email
      </Button>
      
      <Button variant="success">
        <Download size={20} />
        Download
      </Button>
      
      <Button variant="danger">
        <Trash size={20} />
        Delete
      </Button>
    </>
  );
}
```

### Button Group

```jsx
import { Button } from '@primitivekit/react';

function ButtonGroup() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Save</Button>
    </div>
  );
}
```

### Form Submit

```jsx
import { Button } from '@primitivekit/react';

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <Button type="submit" variant="primary" fullWidth>
        Sign In
      </Button>
    </form>
  );
}
```

### Async Action

```jsx
import { Button } from '@primitivekit/react';
import { useState } from 'react';

function AsyncButton() {
  const [loading, setLoading] = useState(false);
  
  const handleClick = async () => {
    setLoading(true);
    try {
      await fetch('/api/data');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Button 
      onClick={handleClick} 
      loading={loading}
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Fetch Data'}
    </Button>
  );
}
```

## Customization

### CSS Variables

Customize the button using CSS variables:

```css
.my-custom-button {
  --button-primary-bg: #8b5cf6;
  --button-primary-hover-bg: #7c3aed;
  --button-primary-color: #ffffff;
  --button-border-radius: 2rem;
  --button-padding-x: 2rem;
  --button-padding-y: 0.75rem;
  --button-font-size: 1.125rem;
  --button-font-weight: 600;
  --button-transition: 0.3s;
}
```

### Inline Styles

```jsx
<Button
  variant="primary"
  style={{
    '--button-primary-bg': '#8b5cf6',
    '--button-border-radius': '2rem',
  }}
>
  Custom Button
</Button>
```

### Custom Class

```jsx
<Button variant="primary" className="my-custom-button">
  Custom Button
</Button>
```

## Accessibility

The Button component follows WCAG 2.1 AA standards:

- ✅ Semantic `<button>` element
- ✅ Keyboard accessible (Enter/Space)
- ✅ Focus visible indicator
- ✅ Proper ARIA attributes
- ✅ Screen reader compatible
- ✅ Disabled state handling
- ✅ Loading state announced

### ARIA Attributes

```jsx
<Button
  aria-label="Send email to support"
  aria-describedby="email-help"
>
  Send Email
</Button>
```

## TypeScript

Full TypeScript support with type definitions:

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

## Best Practices

### Do's ✅

- Use semantic button types (`submit`, `button`, `reset`)
- Provide clear, action-oriented labels
- Use appropriate variants for actions (danger for destructive actions)
- Include loading states for async actions
- Add icons to improve clarity

### Don'ts ❌

- Don't use buttons for navigation (use links instead)
- Don't make buttons too small (minimum 44x44px for touch)
- Don't use vague labels like "Click here"
- Don't disable buttons without explanation
- Don't use too many variants on one page

## Related Components

- [Input](/docs/react/input) - Text input component
- [Select](/docs/react/select) - Dropdown selection
- [Checkbox](/docs/react/checkbox) - Checkbox input
- [Radio](/docs/react/radio) - Radio button groups

## Resources

- [GitHub Repository](https://github.com/primitivekit/react)
- [NPM Package](https://www.npmjs.com/package/@primitivekit/react)
- [Design Tokens](/docs/design-tokens)
- [Customization Guide](/docs/customization)
