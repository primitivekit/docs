import React, { useState } from 'react';
import { Mail, Lock, Search, User, Eye, EyeOff } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer/MarkdownRenderer';
import Demo from '../components/Demo/Demo';
import { Input } from '@primitivekit/react';

const introContent = `
# Input Component

A flexible, accessible text input component with multiple variants, sizes, states, and full customization support.

## Import

\`\`\`jsx
import { Input } from '@primitivekit/react';
\`\`\`

## Basic Usage

\`\`\`jsx
<Input placeholder="Enter text..." />
\`\`\`
`;

const variantsContent = `
## Variants

The Input component comes with four visual variants:

\`\`\`jsx
<Input variant="default" placeholder="Default variant" />
<Input variant="filled" placeholder="Filled variant" />
<Input variant="flushed" placeholder="Flushed variant" />
<Input variant="unstyled" placeholder="Unstyled variant" />
\`\`\`
`;

const sizesContent = `
## Sizes

Three sizes are available to match your design needs:

\`\`\`jsx
<Input size="small" placeholder="Small input" />
<Input size="medium" placeholder="Medium input" />
<Input size="large" placeholder="Large input" />
\`\`\`
`;

const statesContent = `
## States

### With Label and Helper Text

\`\`\`jsx
<Input
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>
\`\`\`

### Error State

\`\`\`jsx
<Input
  label="Email"
  placeholder="Enter your email"
  error="Please enter a valid email address"
/>
\`\`\`

### Success State

\`\`\`jsx
<Input
  label="Username"
  placeholder="Choose a username"
  success="Username is available!"
/>
\`\`\`

### Warning State

\`\`\`jsx
<Input
  label="Password"
  type="password"
  warning="Password strength: Weak"
/>
\`\`\`

### Disabled State

\`\`\`jsx
<Input
  label="Disabled Input"
  placeholder="Cannot edit"
  disabled
/>
\`\`\`

### Read-Only State

\`\`\`jsx
<Input
  label="Read-Only Input"
  value="This is read-only"
  readOnly
/>
\`\`\`
`;

const iconsContent = `
## With Icons

Add icons or custom elements on the left or right side:

\`\`\`jsx
import { Mail, Search, Lock } from 'lucide-react';

// Left icon
<Input
  placeholder="Search..."
  leftElement={<Search size={18} />}
/>

// Right icon
<Input
  type="email"
  placeholder="Email address"
  rightElement={<Mail size={18} />}
/>

// Both sides
<Input
  type="password"
  placeholder="Password"
  leftElement={<Lock size={18} />}
  rightElement={<Eye size={18} />}
/>
\`\`\`
`;

const propsContent = `
## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`size\` | \`'small' \\| 'medium' \\| 'large'\` | \`'medium'\` | Input size |
| \`variant\` | \`'default' \\| 'filled' \\| 'flushed' \\| 'unstyled'\` | \`'default'\` | Visual style variant |
| \`state\` | \`'default' \\| 'error' \\| 'success' \\| 'warning'\` | \`'default'\` | Validation state |
| \`label\` | \`string\` | - | Label text |
| \`helperText\` | \`string\` | - | Helper text below input |
| \`error\` | \`string\` | - | Error message (sets state to error) |
| \`success\` | \`string\` | - | Success message (sets state to success) |
| \`warning\` | \`string\` | - | Warning message (sets state to warning) |
| \`fullWidth\` | \`boolean\` | \`false\` | Make input full width |
| \`leftElement\` | \`ReactNode\` | - | Icon/element on the left |
| \`rightElement\` | \`ReactNode\` | - | Icon/element on the right |
| \`type\` | \`string\` | \`'text'\` | Input type (text, email, password, etc.) |
| \`placeholder\` | \`string\` | - | Placeholder text |
| \`value\` | \`string \\| number\` | - | Controlled value |
| \`defaultValue\` | \`string \\| number\` | - | Uncontrolled default value |
| \`onChange\` | \`function\` | - | Change handler |
| \`onFocus\` | \`function\` | - | Focus handler |
| \`onBlur\` | \`function\` | - | Blur handler |
| \`disabled\` | \`boolean\` | \`false\` | Disable the input |
| \`readOnly\` | \`boolean\` | \`false\` | Make input read-only |
| \`required\` | \`boolean\` | \`false\` | Mark as required |
| \`className\` | \`string\` | \`''\` | Additional CSS classes |
| \`style\` | \`object\` | \`{}\` | Inline styles with CSS variables |

## Examples

### Login Form

\`\`\`jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        leftElement={<Mail size={18} />}
        required
      />
      
      <Input
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        leftElement={<Lock size={18} />}
        rightElement={
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
        required
      />
    </form>
  );
}
\`\`\`

### Search Input

\`\`\`jsx
function SearchInput() {
  const [query, setQuery] = useState('');

  return (
    <Input
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      leftElement={<Search size={18} />}
      fullWidth
    />
  );
}
\`\`\`

### Form Validation

\`\`\`jsx
function ValidatedInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value) => {
    if (!value) {
      setError('Email is required');
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  return (
    <Input
      label="Email"
      type="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
      }}
      error={error}
      required
    />
  );
}
\`\`\`

### Custom Styling

\`\`\`jsx
<Input
  placeholder="Custom styled input"
  style={{
    '--input-border-color': 'rgba(139, 92, 246, 1)',
    '--input-border-color-focus': 'rgba(124, 58, 237, 1)',
    '--input-border-radius': '12px',
    '--input-padding-x': '20px',
  }}
/>
\`\`\`
`;

const InputComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [search, setSearch] = useState('');
  const [validationEmail, setValidationEmail] = useState('');
  const [validationError, setValidationError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      setValidationError('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setValidationError('Please enter a valid email');
    } else {
      setValidationError('');
    }
  };

  return (
    <div>
      <MarkdownRenderer content={introContent} />

      <Demo title="Basic Input">
        <Input placeholder="Enter text..." />
      </Demo>

      <MarkdownRenderer content={variantsContent} />

      <Demo title="All Variants">
        <Input variant="default" placeholder="Default variant" />
        <Input variant="filled" placeholder="Filled variant" />
        <Input variant="flushed" placeholder="Flushed variant" />
        <Input variant="unstyled" placeholder="Unstyled variant" />
      </Demo>

      <MarkdownRenderer content={sizesContent} />

      <Demo title="All Sizes">
        <Input size="small" placeholder="Small input" />
        <Input size="medium" placeholder="Medium input" />
        <Input size="large" placeholder="Large input" />
      </Demo>

      <MarkdownRenderer content={statesContent} />

      <Demo title="With Label and Helper Text">
        <Input
          label="Email"
          placeholder="Enter your email"
          helperText="We'll never share your email"
        />
      </Demo>

      <Demo title="Validation States">
        <Input
          label="Error State"
          placeholder="Enter your email"
          error="Please enter a valid email address"
        />
        <Input
          label="Success State"
          placeholder="Choose a username"
          success="Username is available!"
        />
        <Input
          label="Warning State"
          type="password"
          placeholder="Enter password"
          warning="Password strength: Weak"
        />
      </Demo>

      <Demo title="Disabled and Read-Only">
        <Input
          label="Disabled Input"
          placeholder="Cannot edit"
          disabled
        />
        <Input
          label="Read-Only Input"
          value="This is read-only"
          readOnly
        />
      </Demo>

      <MarkdownRenderer content={iconsContent} />

      <Demo title="With Icons">
        <Input
          placeholder="Search..."
          leftElement={<Search size={18} />}
        />
        <Input
          type="email"
          placeholder="Email address"
          rightElement={<Mail size={18} />}
        />
        <Input
          type="password"
          placeholder="Password"
          leftElement={<Lock size={18} />}
          rightElement={<Eye size={18} />}
        />
      </Demo>

      <Demo title="Login Form Example">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftElement={<Mail size={18} />}
          required
          fullWidth
        />
        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          leftElement={<Lock size={18} />}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
          required
          fullWidth
        />
      </Demo>

      <Demo title="Search Input">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftElement={<Search size={18} />}
          fullWidth
        />
      </Demo>

      <Demo title="Form Validation">
        <Input
          label="Email"
          type="email"
          value={validationEmail}
          onChange={(e) => {
            setValidationEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          error={validationError}
          required
          fullWidth
        />
      </Demo>

      <Demo title="Custom Styling">
        <Input
          placeholder="Custom purple input"
          style={{
            '--input-border-color': 'rgba(139, 92, 246, 1)',
            '--input-border-color-focus': 'rgba(124, 58, 237, 1)',
            '--input-border-radius': '12px',
            '--input-padding-x': '20px',
          }}
        />
      </Demo>

      <Demo title="Full Width">
        <Input
          label="Full Width Input"
          placeholder="This input spans the full width"
          fullWidth
        />
      </Demo>

      <Demo title="Required Field">
        <Input
          label="Username"
          placeholder="Enter username"
          required
          helperText="This field is required"
        />
      </Demo>

      <MarkdownRenderer content={propsContent} />
    </div>
  );
};

export default InputComponent;
