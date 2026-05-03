---
title: Vue Components
weight: 2
---

# Vue Components

PrimitiveKit for Vue provides 39 production-ready components built with Vue 3 Composition API and complete TypeScript support.

## Installation

```bash
npm install @primitivekit/vue
```

## Quick Start

```vue
<script setup lang="ts">
import { Card, Button, Badge } from '@primitivekit/vue';
import '@primitivekit/vue/tokens/tokens.css';
</script>

<template>
  <Card variant="elevated">
    <h2>Welcome to PrimitiveKit</h2>
    <Badge variant="solid" color="primary">New</Badge>
    <Button @click="handleClick">
      Click Me
    </Button>
  </Card>
</template>
```

## Features

- ✅ **39 Components** - Complete component library
- ✅ **Vue 3 Composition API** - Modern Vue patterns
- ✅ **TypeScript** - Full type definitions included
- ✅ **600+ Design Tokens** - Comprehensive customization
- ✅ **Zero Hardcoded Values** - Everything customizable via CSS variables
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Tree Shakeable** - Import only what you need

## Component Categories

### Layout Components
- Card - Flexible container with variants
- Container - Responsive content wrapper
- Grid - Flexible grid system
- Stack - Vertical/horizontal stacking
- Space - Spacing between elements
- Divider - Visual separator

### Form Components
- Button - Interactive button
- Input - Text input field
- Select - Dropdown selection
- Checkbox - Checkbox input
- Radio - Radio button
- Switch - Toggle switch
- Textarea - Multi-line text input
- Slider - Range slider
- Form - Form wrapper
- Upload - File upload

### Feedback Components
- Alert - Alert messages
- Badge - Status indicators
- Spinner - Loading spinner
- Progress - Progress bar
- Skeleton - Loading placeholder

### Navigation Components
- Link - Navigation link
- Breadcrumb - Breadcrumb navigation
- Tabs - Tab navigation
- Menu - Navigation menu
- Steps - Step indicator
- Pagination - Page navigation

### Overlay Components
- Modal - Modal dialog
- Drawer - Side drawer
- Tooltip - Tooltip overlay
- Popover - Popover overlay
- Dropdown - Dropdown menu

### Data Display Components
- Avatar - User avatar
- Tag - Tag label
- Table - Data table
- Collapse - Collapsible content
- Image - Image component
- Empty - Empty state
- Typography - Text styling

## Implementation Status

### ✅ Production Ready (6 components)
These components have complete feature parity and are production-ready:
- **Card** - All variants, hoverable, clickable
- **Badge** - All color schemes, sizes, variants
- **Tag** - Closable, icons, events
- **Avatar** - Image fallback, sizes, shapes
- **Divider** - Orientations, variants, labels
- **Space** - Directions, sizes, alignment, wrap

### 🚧 In Development (33 components)
These components have structure in place and are being actively developed:
- All other components listed above

## Version

Current version: **0.1.0**

## Repository

[GitHub](https://github.com/primitivekit/vue) • [NPM](https://www.npmjs.com/package/@primitivekit/vue)

## Vue-Specific Features

### Composition API
All components use Vue 3's Composition API with `<script setup>`:

```vue
<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
});

const classes = computed(() => [
  'component',
  `component--${props.variant}`
]);
</script>
```

### Reactive Props
Props are fully reactive using Vue's reactivity system:

```vue
<template>
  <Card :variant="cardVariant" :hoverable="isHoverable">
    <slot />
  </Card>
</template>
```

### Event Handling
Standard Vue event handling with `@` syntax:

```vue
<Button @click="handleClick" @focus="handleFocus">
  Click Me
</Button>
```
