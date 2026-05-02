import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer/MarkdownRenderer';

const content = `
# Introduction

Welcome to the **Custom Component Library** documentation! This library provides a collection of flexible, accessible, and fully customizable React components.

## Philosophy

Our component library is built on three core principles:

### Zero Hardcoded Values

Every single style property is controlled through CSS variables. This means you have complete control over the appearance of every component without touching the source code.

### Accessibility First

All components are built with accessibility in mind, following WCAG 2.1 guidelines. We include:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- High contrast mode support
- Reduced motion support

### Minimal & Lightweight

We keep dependencies to a minimum. Just React and CSS - no bloated UI frameworks or unnecessary abstractions.

## Features

- **Fully Customizable** - Override any style with CSS variables
- **Accessible** - WCAG 2.1 compliant with proper ARIA support
- **Lightweight** - Minimal dependencies, maximum flexibility
- **Type-Safe Ready** - Easy to add TypeScript definitions
- **Modern CSS** - Uses CSS custom properties for theming
- **Responsive** - Mobile-first design approach

## What's Included

Currently, the library includes:

- **Button Component** - A versatile button with multiple variants, sizes, and states

More components coming soon!

## Quick Example

\`\`\`jsx
import { Button } from 'custom-component-library';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Button variant="outline" size="large">Large Outline</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use in personal and commercial projects.
`;

const Introduction = () => {
  return <MarkdownRenderer content={content} />;
};

export default Introduction;
