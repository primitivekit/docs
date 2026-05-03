---
title: "{{ replace .Name "-" " " | title }}"
description: ""
framework: ""
category: ""
weight: 1
tags: []
version: ""
wcagLevel: "AA"
relatedComponents: []
---

# {{ replace .Name "-" " " | title }}

[Brief description of the component and its primary use case]

## Import

```tsx
/* Framework-specific import statement */
/* React: import { ComponentName } from '@primitivekit/react'; */
/* Vue: import { ComponentName } from '@primitivekit/vue'; */
/* Angular: import { ComponentName } from '@primitivekit/angular'; */
/* Svelte: import ComponentName from '@primitivekit/svelte/ComponentName.svelte'; */
/* Astro: import { ComponentName } from '@primitivekit/astro'; */
/* Vanilla: import { ComponentName } from '@primitivekit/vanilla'; */
```

## Basic Usage

```tsx
/* Basic example demonstrating the simplest use case */
/* React/JSX syntax: <ComponentName>Content</ComponentName> */
/* Vue template syntax: <ComponentName>Content</ComponentName> */
/* Angular template syntax: <pk-component-name>Content</pk-component-name> */
/* Svelte syntax: <ComponentName>Content</ComponentName> */
/* Astro syntax: <ComponentName>Content</ComponentName> */
/* Vanilla JS: const component = new ComponentName({ options }); */
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `propName` | `string` | `'default'` | Description of what this prop does |
| `required*` | `boolean` | - | Required prop (indicated by asterisk) |
| `optional` | `number` | `0` | Optional prop with default value |

**Note:** Props marked with `*` are required.

## Variants

```tsx
/* Example showing different visual variants */
/* e.g., primary, secondary, success, danger, etc. */
```

## Sizes

```tsx
/* Example showing different size options */
/* e.g., small, medium, large */
```

## States

```tsx
/* Example showing different states */
/* e.g., disabled, loading, active, hover, focus */
```

## Examples

### Example 1: [Descriptive Title]

```tsx
/* Intermediate example showing a common use case */
```

### Example 2: [Descriptive Title]

```tsx
/* Advanced example showing complex usage */
```

### Example 3: [Descriptive Title]

```tsx
/* Real-world example with practical application */
```

## Customization

The {{ replace .Name "-" " " | title }} component supports CSS variables for complete customization:

```tsx
/* Inline customization example using CSS variables */
/* Apply custom styles using component-specific CSS variables */
```

### Global Customization

```css
:root {
  /* Background colors */
  --component-bg-color: rgba(255, 255, 255, 1);
  --component-bg-color-hover: rgba(245, 245, 245, 1);
  
  /* Text colors */
  --component-text-color: rgba(0, 0, 0, 0.87);
  
  /* Spacing */
  --component-padding: 16px;
  --component-margin: 8px;
  --component-border-radius: 4px;
  
  /* Typography */
  --component-font-size: 14px;
  --component-font-weight: 400;
  --component-line-height: 1.5;
  
  /* Borders */
  --component-border-width: 1px;
  --component-border-color: rgba(0, 0, 0, 0.12);
  
  /* Effects */
  --component-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --component-transition-duration: 200ms;
}
```

### Design Tokens

The following design tokens are available for customization:

- `--component-bg-color` - Background color
- `--component-text-color` - Text color
- `--component-border-radius` - Border radius
- `--component-padding` - Internal padding
- `--component-font-size` - Font size
- [Add more component-specific tokens]

## Accessibility

The {{ replace .Name "-" " " | title }} component is fully accessible and follows WCAG 2.1 AA standards:

- ✅ Semantic HTML elements
- ✅ Keyboard accessible
- ✅ Focus visible indicator
- ✅ Proper ARIA attributes
- ✅ Screen reader compatible
- ✅ Touch target size (44x44px minimum)
- ✅ Color contrast compliance

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus to/from component |
| `Enter` | Activate component (if interactive) |
| `Space` | Activate component (if interactive) |
| `Escape` | Close/cancel (if applicable) |
| `Arrow Keys` | Navigate within component (if applicable) |

### ARIA Attributes

```tsx
/* Example with ARIA attributes for enhanced accessibility */
/* ariaLabel="Descriptive label" */
/* ariaDescribedBy="help-text-id" */
/* ariaLabelledBy="label-id" */
/* role="button" (if applicable) */
```

### Screen Reader Announcements

- Component state changes are announced to screen readers
- Loading states are properly communicated
- Error states include descriptive messages
- Success confirmations are announced

## Related Components

- [ComponentName](/docs/react/component-name) - Brief description of how it relates
- [ComponentName](/docs/react/component-name) - Brief description of how it relates
- [ComponentName](/docs/react/component-name) - Brief description of how it relates

## Framework-Specific Notes

### React

```tsx
/* React-specific implementation details, hooks, or patterns */
```

### Vue

```vue
<!-- Vue-specific implementation details, composition API, or patterns -->
```

### Angular

```typescript
/* Angular-specific implementation details, decorators, or patterns */
```

### Svelte

```svelte
<!-- Svelte-specific implementation details, reactive statements, or patterns -->
```

### Astro

```astro
---
/* Astro-specific implementation details, frontmatter, or patterns */
---
```

### Vanilla JS

```javascript
/* Vanilla JS-specific implementation details, API methods, or patterns */
```

## TypeScript

```typescript
/* TypeScript type definitions and interfaces */
interface ComponentNameProps {
  propName: string;
  optional?: number;
}

type ComponentVariant = 'primary' | 'secondary' | 'success' | 'danger';
```

## API Reference

### Methods (if applicable)

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `methodName()` | `param: type` | `ReturnType` | Description of what the method does |

### Events (if applicable)

| Event | Payload | Description |
|-------|---------|-------------|
| `onChange` | `value: string` | Fired when value changes |
| `onSubmit` | `data: object` | Fired when form is submitted |

## Best Practices

- ✅ Use semantic prop names that clearly indicate purpose
- ✅ Provide meaningful labels for accessibility
- ✅ Handle loading and error states appropriately
- ✅ Use appropriate variants for different contexts
- ✅ Test keyboard navigation and screen reader compatibility
- ❌ Don't override accessibility attributes without good reason
- ❌ Don't use color alone to convey information
- ❌ Don't create overly complex component hierarchies

## Common Patterns

### Pattern 1: [Pattern Name]

```tsx
/* Example of a common usage pattern */
```

### Pattern 2: [Pattern Name]

```tsx
/* Example of another common usage pattern */
```

## Troubleshooting

### Issue: [Common Problem]

**Solution:** [How to fix it]

### Issue: [Common Problem]

**Solution:** [How to fix it]

## Version History

- **v0.0.0** - Current version
  - [List of features or changes]

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
