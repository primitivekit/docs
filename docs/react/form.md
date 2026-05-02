# Form

# Form

A form wrapper component with validation and submission handling.

## Import

```tsx
import { Form } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Form onSubmit={(data) => console.log(data)}>
  <Input name="email" label="Email" type="email" required />
  <Input name="password" label="Password" type="password" required />
  <Button type="submit">Submit</Button>
</Form>
```

## With Validation

```tsx
<Form
  onSubmit={(data) => console.log(data)}
  validationSchema={{
    email: {
      required: 'Email is required',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Invalid email format'
      }
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters'
      }
    }
  }}
>
  <Input name="email" label="Email" type="email" />
  <Input name="password" label="Password" type="password" />
  <Button type="submit">Submit</Button>
</Form>
```

## Complete Example

```tsx
import { useState } from 'react';
import { Form, Input, Select, Checkbox, Button } from '@primitivekit/react';

function RegistrationForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await api.register(data);
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Full Name"
        required
        placeholder="John Doe"
      />
      
      <Input
        name="email"
        label="Email"
        type="email"
        required
        placeholder="john@example.com"
      />
      
      <Input
        name="password"
        label="Password"
        type="password"
        required
        helperText="Must be at least 8 characters"
      />
      
      <Select
        name="country"
        label="Country"
        required
        options={[
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'ca', label: 'Canada' },
        ]}
      />
      
      <Checkbox
        name="terms"
        label="I accept the terms and conditions"
        required
      />
      
      <Button type="submit" loading={loading}>
        Register
      </Button>
    </Form>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSubmit` | `function` | **required** | Submit handler |
| `validationSchema` | `object` | - | Validation rules |
| `defaultValues` | `object` | - | Default form values |
| `children` | `ReactNode` | **required** | Form fields |
| `className` | `string` | - | Additional CSS classes |

## Validation Schema

```tsx
interface ValidationSchema {
  [fieldName: string]: {
    required?: string | boolean;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    validate?: (value: any) => boolean | string;
  };
}
```

## Accessibility

- ✅ Proper form semantics
- ✅ Error announcements
- ✅ Field associations
- ✅ Keyboard navigation

## Related Components

- [Input](/docs/react/input) - Text input
- [Select](/docs/react/select) - Dropdown
- [Checkbox](/docs/react/checkbox) - Checkbox
- [Button](/docs/react/button) - Submit button

