# Breadcrumb

# Breadcrumb

A breadcrumb navigation component for showing the current page location.

## Import

```tsx
import { Breadcrumb } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item>Current Page</Breadcrumb.Item>
</Breadcrumb>
```

## With Icons

```tsx
import { HomeIcon, ChevronRightIcon } from 'your-icon-library';

<Breadcrumb separator={<ChevronRightIcon />}>
  <Breadcrumb.Item href="/">
    <HomeIcon /> Home
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item>Details</Breadcrumb.Item>
</Breadcrumb>
```

## Custom Separator

```tsx
<Breadcrumb separator=">">
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
  <Breadcrumb.Item>Components</Breadcrumb.Item>
</Breadcrumb>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `separator` | `ReactNode` | `'/'` | Separator between items |
| `children` | `ReactNode` | **required** | Breadcrumb items |
| `className` | `string` | - | Additional CSS classes |

### Breadcrumb.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | - | Link URL |
| `children` | `ReactNode` | **required** | Item content |

## Customization

```tsx
<Breadcrumb
  style={{
    '--breadcrumb-color': 'rgba(100, 100, 100, 1)',
    '--breadcrumb-color-active': 'rgba(0, 0, 0, 1)',
    '--breadcrumb-separator-color': 'rgba(150, 150, 150, 1)',
  }}
>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item>Current</Breadcrumb.Item>
</Breadcrumb>
```

## Accessibility

- ✅ ARIA navigation landmark
- ✅ aria-current for current page
- ✅ Keyboard navigation
- ✅ Screen reader support

## Related Components

- [Link](/docs/react/link) - Link component
- [Menu](/docs/react/menu) - Navigation menu

