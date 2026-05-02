import React, { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer/MarkdownRenderer';
import Demo from '../components/Demo/Demo';
// Import from the published NPM package
import { Button } from '@primitivekit/react';

const introContent = `
# Button Component

A versatile, accessible button component with multiple variants, sizes, and states.

## Import

\`\`\`jsx
import { Button } from '@primitivekit/react';
\`\`\`

## Basic Usage

\`\`\`jsx
<Button>Click me</Button>
\`\`\`
`;

const variantsContent = `
## Variants

The button comes with six built-in variants:

\`\`\`jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
\`\`\`
`;

const sizesContent = `
## Sizes

Three sizes are available:

\`\`\`jsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
\`\`\`
`;

const statesContent = `
## States

### Disabled

\`\`\`jsx
<Button disabled>Disabled Button</Button>
\`\`\`

### Loading

\`\`\`jsx
<Button loading loadingText="Saving...">
  Save
</Button>
\`\`\`

### With Icons

\`\`\`jsx
<Button leftIcon={<SaveIcon />}>
  Save
</Button>

<Button rightIcon={<ArrowIcon />}>
  Next
</Button>
\`\`\`
`;

const propsContent = `
## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`string\` | \`'primary'\` | Button style variant |
| \`size\` | \`string\` | \`'medium'\` | Button size |
| \`disabled\` | \`boolean\` | \`false\` | Disable the button |
| \`loading\` | \`boolean\` | \`false\` | Show loading state |
| \`loadingText\` | \`string\` | \`'Loading...'\` | Text shown during loading |
| \`fullWidth\` | \`boolean\` | \`false\` | Make button full width |
| \`leftIcon\` | \`ReactNode\` | - | Icon on the left side |
| \`rightIcon\` | \`ReactNode\` | - | Icon on the right side |
| \`onClick\` | \`function\` | - | Click handler |
| \`type\` | \`string\` | \`'button'\` | Button type |
| \`className\` | \`string\` | \`''\` | Additional CSS classes |
| \`style\` | \`object\` | \`{}\` | Inline styles |
| \`ariaLabel\` | \`string\` | - | Accessible label |
| \`ariaDescribedBy\` | \`string\` | - | ID of describing element |
| \`ariaPressed\` | \`boolean\` | - | Toggle button state |
| \`ariaExpanded\` | \`boolean\` | - | Expandable button state |
| \`ariaControls\` | \`string\` | - | ID of controlled element |
| \`ariaHasPopup\` | \`string\` | - | Popup type |

## Examples

### Form Submit Button

\`\`\`jsx
function MyForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await submitForm();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <Button
        type="submit"
        loading={loading}
        loadingText="Submitting..."
      >
        Submit
      </Button>
    </form>
  );
}
\`\`\`

### Toggle Button

\`\`\`jsx
function ToggleButton() {
  const [active, setActive] = useState(false);

  return (
    <Button
      variant={active ? 'primary' : 'outline'}
      ariaPressed={active}
      onClick={() => setActive(!active)}
    >
      {active ? 'Active' : 'Inactive'}
    </Button>
  );
}
\`\`\`

### Icon Button

\`\`\`jsx
<Button
  variant="ghost"
  ariaLabel="Delete item"
  leftIcon={<TrashIcon />}
>
  Delete
</Button>
\`\`\`

### Custom Styled Button

\`\`\`jsx
<Button
  style={{
    '--btn-bg-color': '#8b5cf6',
    '--btn-border-radius': '2rem',
    '--btn-padding-x': '2.5rem',
    '--btn-box-shadow-hover': '0 20px 25px -5px rgba(139, 92, 246, 0.4)'
  }}
>
  Custom Purple Button
</Button>
\`\`\`
`;

const ButtonComponent = () => {
  const [loading, setLoading] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div>
      <MarkdownRenderer content={introContent} />

      <Demo title="Basic Button">
        <Button>Click me</Button>
      </Demo>

      <MarkdownRenderer content={variantsContent} />

      <Demo title="All Variants">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </Demo>

      <MarkdownRenderer content={sizesContent} />

      <Demo title="All Sizes">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Demo>

      <MarkdownRenderer content={statesContent} />

      <Demo title="Disabled State">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
      </Demo>

      <Demo title="Loading State" description="Click to see loading state">
        <Button loading={loading} loadingText="Loading..." onClick={handleLoadingDemo}>
          {loading ? 'Loading...' : 'Click to Load'}
        </Button>
      </Demo>

      <Demo title="Toggle Button" description="Click to toggle state">
        <Button
          variant={pressed ? 'primary' : 'outline'}
          ariaPressed={pressed}
          onClick={() => setPressed(!pressed)}
        >
          {pressed ? 'Active' : 'Inactive'}
        </Button>
      </Demo>

      <Demo title="Full Width">
        <Button fullWidth>Full Width Button</Button>
      </Demo>

      <Demo title="Custom Styling">
        <Button style={{ '--btn-bg-color': '#8b5cf6', '--btn-border-radius': '2rem' }}>
          Purple Pill
        </Button>
        <Button style={{ '--btn-bg-color': '#f59e0b', '--btn-padding-x': '3rem' }}>
          Orange Wide
        </Button>
      </Demo>

      <MarkdownRenderer content={propsContent} />
    </div>
  );
};

export default ButtonComponent;
