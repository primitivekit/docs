---
title: Alert
weight: 1
---

# Alert

An alert component for displaying important messages to users.

## Import

```tsx
import { Alert } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Alert>This is an alert message</Alert>
```

## Status

```tsx
<Alert status="info">
  This is an informational message
</Alert>

<Alert status="success">
  Operation completed successfully!
</Alert>

<Alert status="warning">
  Please review this warning
</Alert>

<Alert status="error">
  An error occurred
</Alert>
```

## Variants

```tsx
// Solid (default)
<Alert variant="solid" status="success">
  Solid alert
</Alert>

// Subtle
<Alert variant="subtle" status="info">
  Subtle alert
</Alert>

// Left accent
<Alert variant="left-accent" status="warning">
  Left accent alert
</Alert>

// Top accent
<Alert variant="top-accent" status="error">
  Top accent alert
</Alert>
```

## With Title

```tsx
<Alert status="success" title="Success!">
  Your changes have been saved successfully.
</Alert>
```

## With Icon

```tsx
import { CheckIcon } from 'your-icon-library';

<Alert 
  status="success" 
  icon={<CheckIcon />}
  title="Success!"
>
  Operation completed
</Alert>
```

## Closable

```tsx
import { useState } from 'react';

function ClosableAlert() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Alert 
      status="info"
      onClose={() => setVisible(false)}
    >
      This alert can be closed
    </Alert>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Alert status |
| `variant` | `'solid' \| 'subtle' \| 'left-accent' \| 'top-accent'` | `'solid'` | Visual variant |
| `title` | `string \| ReactNode` | - | Alert title |
| `icon` | `ReactNode` | - | Custom icon |
| `onClose` | `function` | - | Close handler |
| `children` | `ReactNode` | **required** | Alert content |
| `className` | `string` | - | Additional CSS classes |
| `style` | `AlertCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Alert
  status="info"
  style={{
    '--alert-bg-color': 'rgba(230, 240, 255, 1)',
    '--alert-text-color': 'rgba(0, 50, 150, 1)',
    '--alert-border-color': 'rgba(0, 100, 255, 1)',
    '--alert-icon-color': 'rgba(0, 100, 255, 1)',
    '--alert-border-radius': '12px',
    '--alert-padding': '20px',
  }}
>
  Custom styled alert
</Alert>
```

## Examples

### Form Validation

```tsx
function FormWithValidation() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm();
      setSuccess('Form submitted successfully!');
      setError('');
    } catch (err) {
      setError('Failed to submit form');
      setSuccess('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Alert status="error" onClose={() => setError('')}>
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert status="success" onClose={() => setSuccess('')}>
          {success}
        </Alert>
      )}
      
      <Input label="Email" type="email" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### System Notification

```tsx
<Alert 
  status="warning" 
  variant="left-accent"
  title="Maintenance Scheduled"
>
  System maintenance is scheduled for tonight at 2 AM EST. 
  Expected downtime: 2 hours.
</Alert>
```

## Accessibility

- ✅ ARIA role="alert" for important messages
- ✅ Proper color contrast
- ✅ Screen reader announcements
- ✅ Keyboard navigation for close button
- ✅ Focus management

## Related Components

- [Badge](/docs/react/badge) - Status indicators
- [Toast](/docs/react/toast) - Temporary notifications
- [Modal](/docs/react/modal) - Dialog messages
