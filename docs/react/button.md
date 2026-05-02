# Button

# Button

A versatile, accessible button component with multiple variants, sizes, and states.

## Import

```tsx
import { Button } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Button variant="primary">Click me</Button>
```

## Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

## Sizes

```tsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

## States

```tsx
// Disabled
<Button disabled>Disabled Button</Button>

// Loading
<Button loading loadingText="Processing...">
  Submit
</Button>

// Full Width
<Button fullWidth>Full Width Button</Button>
```

## With Icons

```tsx
import { MailIcon, DownloadIcon } from 'your-icon-library';

// Left icon
<Button leftIcon={<MailIcon />}>
  Send Email
</Button>

// Right icon
<Button rightIcon={<DownloadIcon />}>
  Download
</Button>

// Both icons
<Button 
  leftIcon={<MailIcon />} 
  rightIcon={<DownloadIcon />}
>
  Send & Download
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disable the button |
| `loading` | `boolean` | `false` | Show loading state |
| `loadingText` | `string` | `'Loading...'` | Text during loading |
| `leftIcon` | `ReactNode` | - | Icon on the left |
| `rightIcon` | `ReactNode` | - | Icon on the right |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `onClick` | `function` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |
| `children` | `ReactNode` | - | Button content |
| `className` | `string` | - | Additional CSS classes |
| `style` | `ButtonCSSVariables` | - | CSS variable overrides |

## Examples

### Button Group

```tsx
<Space>
  <Button variant="outline">Cancel</Button>
  <Button variant="primary">Save</Button>
  <Button variant="danger">Delete</Button>
</Space>
```

### Form Submit

```tsx
function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Input label="Email" type="email" required />
      <Input label="Password" type="password" required />
      <Button type="submit" variant="primary" fullWidth>
        Sign In
      </Button>
    </form>
  );
}
```

### Async Action

```tsx
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
      loadingText="Fetching..."
    >
      Fetch Data
    </Button>
  );
}
```

## Customization

The Button component supports 150+ CSS variables for complete customization:

```tsx
<Button
  variant="primary"
  style={{
    '--btn-bg-color': 'rgba(139, 92, 246, 1)',
    '--btn-bg-color-hover': 'rgba(124, 58, 237, 1)',
    '--btn-text-color': 'rgba(255, 255, 255, 1)',
    '--btn-border-radius': '32px',
    '--btn-padding-x': '32px',
    '--btn-padding-y': '12px',
    '--btn-font-size': '18px',
    '--btn-font-weight': '600',
    '--btn-box-shadow': '0 4px 12px rgba(139, 92, 246, 0.3)',
  }}
>
  Custom Button
</Button>
```

### Global Customization

```css
:root {
  /* Primary button */
  --btn-bg-color: rgba(0, 100, 255, 1);
  --btn-bg-color-hover: rgba(0, 80, 200, 1);
  --btn-text-color: rgba(255, 255, 255, 1);
  
  /* Spacing */
  --btn-padding-x: 16px;
  --btn-padding-y: 8px;
  --btn-border-radius: 8px;
  
  /* Typography */
  --btn-font-size: 14px;
  --btn-font-weight: 500;
  
  /* Effects */
  --btn-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --btn-transition-duration: 200ms;
}
```

## Accessibility

The Button component is fully accessible and follows WCAG 2.1 AA standards:

- ✅ Semantic `<button>` element
- ✅ Keyboard accessible (Enter/Space)
- ✅ Focus visible indicator
- ✅ Proper ARIA attributes
- ✅ Screen reader compatible
- ✅ Disabled state handling
- ✅ Loading state announced
- ✅ Touch target size (44x44px minimum)

### ARIA Attributes

```tsx
<Button
  ariaLabel="Send email to support"
  ariaDescribedBy="email-help"
  ariaPressed={isPressed}
  ariaExpanded={isExpanded}
>
  Send Email
</Button>
```

## Related Components

- [Input](/docs/react/input) - Text input component
- [Select](/docs/react/select) - Dropdown selection
- [Form](/docs/react/form) - Form wrapper
- [Link](/docs/react/link) - Link component

