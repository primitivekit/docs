---
title: React Components
weight: 1
---

# React Components

PrimitiveKit for React provides 38 production-ready components with complete TypeScript support and zero hardcoded values.

## Installation

```bash
npm install @primitivekit/react
```

## Quick Start

```tsx
import { Button, Card, Badge } from '@primitivekit/react';
import '@primitivekit/react/tokens/tokens.css';

function App() {
  return (
    <Card variant="elevated">
      <h2>Welcome to PrimitiveKit</h2>
      <Badge variant="solid" color="primary">New</Badge>
      <Button onClick={() => alert('Hello!')}>
        Click Me
      </Button>
    </Card>
  );
}
```

## Features

- ✅ **38 Components** - Complete component library
- ✅ **TypeScript** - Full type definitions included
- ✅ **600+ Design Tokens** - Comprehensive customization
- ✅ **Zero Hardcoded Values** - Everything customizable via CSS variables
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Tree Shakeable** - Import only what you need

## Component Categories

### Layout Components
- [Card](/docs/react/card) - Flexible container with variants
- [Container](/docs/react/container) - Responsive content wrapper
- [Grid](/docs/react/grid) - Flexible grid system
- [Stack](/docs/react/stack) - Vertical/horizontal stacking
- [Space](/docs/react/space) - Spacing between elements
- [Divider](/docs/react/divider) - Visual separator

### Form Components
- [Button](/docs/react/button) - Interactive button
- [Input](/docs/react/input) - Text input field
- [Select](/docs/react/select) - Dropdown selection
- [Checkbox](/docs/react/checkbox) - Checkbox input
- [Radio](/docs/react/radio) - Radio button
- [Switch](/docs/react/switch) - Toggle switch
- [Textarea](/docs/react/textarea) - Multi-line text input
- [Slider](/docs/react/slider) - Range slider
- [Form](/docs/react/form) - Form wrapper
- [Upload](/docs/react/upload) - File upload

### Feedback Components
- [Alert](/docs/react/alert) - Alert messages
- [Badge](/docs/react/badge) - Status indicators
- [Spinner](/docs/react/spinner) - Loading spinner
- [Progress](/docs/react/progress) - Progress bar
- [Skeleton](/docs/react/skeleton) - Loading placeholder

### Navigation Components
- [Link](/docs/react/link) - Navigation link
- [Breadcrumb](/docs/react/breadcrumb) - Breadcrumb navigation
- [Tabs](/docs/react/tabs) - Tab navigation
- [Menu](/docs/react/menu) - Navigation menu
- [Steps](/docs/react/steps) - Step indicator
- [Pagination](/docs/react/pagination) - Page navigation

### Overlay Components
- [Modal](/docs/react/modal) - Modal dialog
- [Drawer](/docs/react/drawer) - Side drawer
- [Tooltip](/docs/react/tooltip) - Tooltip overlay
- [Popover](/docs/react/popover) - Popover overlay
- [Dropdown](/docs/react/dropdown) - Dropdown menu

### Data Display Components
- [Avatar](/docs/react/avatar) - User avatar
- [Tag](/docs/react/tag) - Tag label
- [Table](/docs/react/table) - Data table
- [Collapse](/docs/react/collapse) - Collapsible content
- [Image](/docs/react/image) - Image component
- [Empty](/docs/react/empty) - Empty state
- [Typography](/docs/react/typography) - Text styling

## Version

Current version: **0.2.1**

## Repository

[GitHub](https://github.com/primitivekit/react) • [NPM](https://www.npmjs.com/package/@primitivekit/react)
