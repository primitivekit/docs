---
title: Container
weight: 2
---

# Container

A responsive container component for centering and constraining content width.

## Import

```tsx
import { Container } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Container>
  <h1>Page Content</h1>
  <p>This content is centered and constrained to a maximum width.</p>
</Container>
```

## Sizes

```tsx
// Small container (max-width: 640px)
<Container size="sm">
  Small container
</Container>

// Medium container (max-width: 768px)
<Container size="md">
  Medium container
</Container>

// Large container (max-width: 1024px)
<Container size="lg">
  Large container
</Container>

// Extra large container (max-width: 1280px)
<Container size="xl">
  Extra large container
</Container>

// Full width (no max-width)
<Container size="full">
  Full width container
</Container>
```

## Centered

```tsx
<Container centered>
  Centered content
</Container>
```

## With Padding

```tsx
<Container padding="large">
  Container with padding
</Container>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'` | Container max-width |
| `centered` | `boolean` | `true` | Center the container |
| `padding` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Container padding |
| `children` | `ReactNode` | **required** | Container content |
| `className` | `string` | - | Additional CSS classes |
| `style` | `ContainerCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Container
  style={{
    '--container-max-width': '1200px',
    '--container-padding-x': '32px',
    '--container-padding-y': '24px',
  }}
>
  Custom container
</Container>
```

## Examples

### Page Layout

```tsx
function Page() {
  return (
    <Container size="xl">
      <header>
        <h1>My Website</h1>
      </header>
      
      <main>
        <p>Main content</p>
      </main>
      
      <footer>
        <p>© 2024</p>
      </footer>
    </Container>
  );
}
```

### Nested Containers

```tsx
<Container size="xl">
  <h1>Full Width Header</h1>
  
  <Container size="md">
    <p>Narrower content for better readability</p>
  </Container>
</Container>
```

## Accessibility

- ✅ Semantic HTML
- ✅ Responsive design
- ✅ Proper content flow

## Related Components

- [Card](/docs/react/card) - Content container
- [Grid](/docs/react/grid) - Grid layout
- [Stack](/docs/react/stack) - Vertical/horizontal layout
