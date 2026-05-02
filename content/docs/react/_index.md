---
title: React Components
weight: 4
---

# React Components

PrimitiveKit provides 38 production-ready React components with complete TypeScript support, accessibility features, and extensive customization options.

## Component Categories

### Form Components (10)
Interactive form elements for user input:
- [Button](/docs/react/button) - Clickable button with multiple variants
- [Input](/docs/react/input) - Text input with validation states
- [Select](/docs/react/select) - Dropdown selection component
- [Checkbox](/docs/react/checkbox) - Checkbox input with labels
- [Radio](/docs/react/radio) - Radio button groups
- [Switch](/docs/react/switch) - Toggle switch component
- [Textarea](/docs/react/textarea) - Multi-line text input
- [Slider](/docs/react/slider) - Range slider input
- [Form](/docs/react/form) - Form wrapper with validation
- [Upload](/docs/react/upload) - File upload component

### Layout Components (6)
Structural components for page layout:
- [Card](/docs/react/card) - Content container with variants
- [Container](/docs/react/container) - Responsive container
- [Grid](/docs/react/grid) - Flexible grid system
- [Stack](/docs/react/stack) - Vertical/horizontal stacking
- [Space](/docs/react/space) - Spacing between elements
- [Divider](/docs/react/divider) - Visual separator

### Feedback Components (5)
Components for user feedback and status:
- [Alert](/docs/react/alert) - Alert messages with variants
- [Badge](/docs/react/badge) - Status badges and labels
- [Spinner](/docs/react/spinner) - Loading spinner
- [Progress](/docs/react/progress) - Progress bar
- [Skeleton](/docs/react/skeleton) - Loading placeholder

### Navigation Components (6)
Components for navigation and wayfinding:
- [Link](/docs/react/link) - Styled link component
- [Breadcrumb](/docs/react/breadcrumb) - Breadcrumb navigation
- [Tabs](/docs/react/tabs) - Tab navigation
- [Menu](/docs/react/menu) - Navigation menu
- [Steps](/docs/react/steps) - Step indicator
- [Pagination](/docs/react/pagination) - Page navigation

### Overlay Components (5)
Modal and overlay components:
- [Modal](/docs/react/modal) - Modal dialog
- [Drawer](/docs/react/drawer) - Slide-out drawer
- [Tooltip](/docs/react/tooltip) - Hover tooltip
- [Popover](/docs/react/popover) - Popover content
- [Dropdown](/docs/react/dropdown) - Dropdown menu

### Data Display Components (7)
Components for displaying data:
- [Avatar](/docs/react/avatar) - User avatar
- [Tag](/docs/react/tag) - Tag labels
- [Table](/docs/react/table) - Data table
- [Collapse](/docs/react/collapse) - Collapsible content
- [Image](/docs/react/image) - Image with loading states
- [Empty](/docs/react/empty) - Empty state placeholder
- [Typography](/docs/react/typography) - Text components

## Installation

```bash
npm install @primitivekit/react
```

## Basic Usage

```tsx
import { Button, Input, Card } from '@primitivekit/react';

function App() {
  return (
    <Card>
      <Input 
        label="Email" 
        placeholder="Enter your email"
        type="email"
      />
      <Button variant="primary" size="large">
        Submit
      </Button>
    </Card>
  );
}
```

## Features

### 🎨 Complete Customization
Every component supports extensive CSS variable customization:

```tsx
<Button
  style={{
    '--btn-bg-color': 'rgba(255, 0, 0, 1)',
    '--btn-text-color': 'rgba(255, 255, 255, 1)',
    '--btn-border-radius': '20px',
  }}
>
  Custom Button
</Button>
```

### ♿ Accessibility First
All components are WCAG 2.1 AA compliant with:
- Proper ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus management
- Touch target sizes (44x44px minimum)

### 📘 TypeScript Support
Full TypeScript definitions for all components:

```tsx
import type { ButtonProps, InputProps } from '@primitivekit/react';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

### 🎯 Design Tokens
Components use 600+ design tokens for consistent styling:

```tsx
import '@primitivekit/react/tokens/tokens.css';

// Tokens are automatically applied to all components
```

## Next Steps

- Browse individual component documentation
- Learn about [Customization](/docs/customization)
- Explore [Design Tokens](/docs/design-tokens)
- Check [Accessibility](/docs/accessibility) guidelines
