import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer/MarkdownRenderer';

const content = `
# Customization

Learn how to customize components to match your brand and design system.

## Three Levels of Customization

The library provides three ways to customize components, from global to component-specific:

### 1. Global Customization

Define CSS variables at the root level to affect all components:

\`\`\`css
/* In your global CSS file */
:root {
  /* Change primary button colors globally */
  --btn-primary-bg: #8b5cf6;
  --btn-primary-bg-hover: #7c3aed;
  --btn-primary-bg-active: #6d28d9;
  
  /* Change border radius for all buttons */
  --btn-border-radius: 0.75rem;
  
  /* Change font weight */
  --btn-font-weight: 600;
}
\`\`\`

### 2. Class-Based Customization

Create custom CSS classes for specific use cases:

\`\`\`css
/* Custom button style */
.my-special-button {
  --btn-bg-color: #f59e0b;
  --btn-text-color: #ffffff;
  --btn-border-radius: 2rem;
  --btn-padding-x: 3rem;
  --btn-box-shadow-hover: 0 20px 25px -5px rgba(245, 158, 11, 0.4);
}
\`\`\`

\`\`\`jsx
<Button className="my-special-button">
  Special Button
</Button>
\`\`\`

### 3. Inline Customization

Override styles for individual components:

\`\`\`jsx
<Button 
  style={{ 
    '--btn-bg-color': '#ec4899',
    '--btn-border-radius': '0.25rem',
    '--btn-padding-x': '2.5rem'
  }}
>
  Pink Button
</Button>
\`\`\`

## Available CSS Variables

### Colors

| Variable | Description | Default |
|----------|-------------|---------|
| \`--btn-bg-color\` | Background color | Variant-specific |
| \`--btn-text-color\` | Text color | Variant-specific |
| \`--btn-border-color\` | Border color | Variant-specific |
| \`--btn-bg-color-hover\` | Hover background | Variant-specific |
| \`--btn-text-color-hover\` | Hover text color | Variant-specific |
| \`--btn-border-color-hover\` | Hover border color | Variant-specific |
| \`--btn-bg-color-active\` | Active background | Variant-specific |
| \`--btn-outline-color\` | Focus outline color | Variant-specific |

### Sizing

| Variable | Description | Default |
|----------|-------------|---------|
| \`--btn-padding-x\` | Horizontal padding | Size-specific |
| \`--btn-padding-y\` | Vertical padding | Size-specific |
| \`--btn-font-size\` | Font size | Size-specific |
| \`--btn-min-height\` | Minimum height | Size-specific |
| \`--btn-border-radius\` | Border radius | \`0.375rem\` |
| \`--btn-border-width\` | Border width | \`1px\` |

### Typography

| Variable | Description | Default |
|----------|-------------|---------|
| \`--btn-font-family\` | Font family | System fonts |
| \`--btn-font-weight\` | Font weight | \`500\` |
| \`--btn-line-height\` | Line height | Size-specific |

### Effects

| Variable | Description | Default |
|----------|-------------|---------|
| \`--btn-transition-duration\` | Transition duration | \`0.2s\` |
| \`--btn-transform-hover\` | Hover transform | \`translateY(-1px)\` |
| \`--btn-box-shadow-hover\` | Hover shadow | Subtle shadow |
| \`--btn-spinner-size\` | Loading spinner size | \`1em\` |
| \`--btn-spinner-color\` | Loading spinner color | \`currentColor\` |

## Creating a Theme

Here's an example of creating a complete custom theme:

\`\`\`css
/* theme.css */
:root {
  /* Brand Colors */
  --brand-primary: #6366f1;
  --brand-primary-dark: #4f46e5;
  --brand-primary-darker: #4338ca;
  
  /* Apply to buttons */
  --btn-primary-bg: var(--brand-primary);
  --btn-primary-bg-hover: var(--brand-primary-dark);
  --btn-primary-bg-active: var(--brand-primary-darker);
  --btn-primary-border: var(--brand-primary);
  --btn-primary-border-hover: var(--brand-primary-dark);
  --btn-primary-border-active: var(--brand-primary-darker);
  
  /* Typography */
  --btn-font-family: 'Inter', system-ui, sans-serif;
  --btn-font-weight: 600;
  
  /* Spacing */
  --btn-border-radius: 0.5rem;
  --btn-padding-x-small: 1rem;
  --btn-padding-x-medium: 1.5rem;
  --btn-padding-x-large: 2rem;
  
  /* Effects */
  --btn-transition-duration: 0.15s;
  --btn-transform-hover: translateY(-2px);
  --btn-box-shadow-hover: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
}
\`\`\`

## Dark Mode Support

Implement dark mode by overriding variables:

\`\`\`css
@media (prefers-color-scheme: dark) {
  :root {
    --btn-primary-bg: #818cf8;
    --btn-primary-bg-hover: #6366f1;
    --btn-primary-text: #000000;
    
    --btn-secondary-bg: #374151;
    --btn-secondary-bg-hover: #4b5563;
  }
}
\`\`\`

Or use a class-based approach:

\`\`\`css
.dark-theme {
  --btn-primary-bg: #818cf8;
  --btn-primary-bg-hover: #6366f1;
  /* ... more variables */
}
\`\`\`

\`\`\`jsx
<div className="dark-theme">
  <Button variant="primary">Dark Mode Button</Button>
</div>
\`\`\`

## Best Practices

1. **Start Global** - Define your brand colors and common styles at the root level
2. **Use Classes for Patterns** - Create reusable classes for common variations
3. **Inline for Exceptions** - Use inline styles only for one-off customizations
4. **Maintain Consistency** - Keep your design system consistent across components
5. **Test Accessibility** - Ensure custom colors meet WCAG contrast requirements
`;

const Customization = () => {
  return <MarkdownRenderer content={content} />;
};

export default Customization;
