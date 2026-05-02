---
title: Card
weight: 1
---

# Card

A flexible container component for grouping related content.

## Import

```tsx
import { Card } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

## Variants

```tsx
// Elevated (with shadow)
<Card variant="elevated">
  Elevated card with shadow
</Card>

// Outlined (with border)
<Card variant="outlined">
  Outlined card with border
</Card>

// Filled (with background)
<Card variant="filled">
  Filled card with background
</Card>
```

## Hoverable

```tsx
<Card hoverable>
  Hover over me for effect
</Card>
```

## Clickable

```tsx
<Card 
  clickable 
  onClick={() => alert('Card clicked!')}
>
  Click me
</Card>
```

## With Header and Footer

```tsx
<Card>
  <Card.Header>
    <h3>Card Title</h3>
  </Card.Header>
  
  <Card.Body>
    <p>Main content goes here</p>
  </Card.Body>
  
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'elevated' \| 'outlined' \| 'filled'` | `'elevated'` | Card style variant |
| `hoverable` | `boolean` | `false` | Add hover effect |
| `clickable` | `boolean` | `false` | Make card clickable |
| `onClick` | `function` | - | Click handler |
| `children` | `ReactNode` | **required** | Card content |
| `className` | `string` | - | Additional CSS classes |
| `style` | `CardCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Card
  style={{
    '--card-bg-color': 'rgba(240, 240, 255, 1)',
    '--card-border-color': 'rgba(100, 100, 200, 1)',
    '--card-border-radius': '16px',
    '--card-padding': '24px',
    '--card-box-shadow': '0 4px 12px rgba(0, 0, 0, 0.1)',
  }}
>
  Custom styled card
</Card>
```

## Examples

### Product Card

```tsx
<Card hoverable clickable onClick={() => navigate('/product/1')}>
  <img src="/product.jpg" alt="Product" />
  <h3>Product Name</h3>
  <p>$99.99</p>
  <Button>Add to Cart</Button>
</Card>
```

### Profile Card

```tsx
<Card variant="outlined">
  <Card.Header>
    <Avatar src="/avatar.jpg" />
    <h3>John Doe</h3>
  </Card.Header>
  
  <Card.Body>
    <p>Software Engineer</p>
    <p>San Francisco, CA</p>
  </Card.Body>
  
  <Card.Footer>
    <Button variant="outline">Follow</Button>
    <Button>Message</Button>
  </Card.Footer>
</Card>
```

## Accessibility

- ✅ Semantic HTML structure
- ✅ Keyboard navigation (when clickable)
- ✅ Focus indicators
- ✅ ARIA attributes for interactive cards

## Related Components

- [Container](/docs/react/container) - Page container
- [Stack](/docs/react/stack) - Vertical/horizontal layout
- [Grid](/docs/react/grid) - Grid layout
