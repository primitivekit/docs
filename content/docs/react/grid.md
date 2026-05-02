---
title: Grid
weight: 3
---

# Grid

A flexible grid layout component based on CSS Grid.

## Import

```tsx
import { Grid } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Grid columns={3}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Grid>
```

## Columns

```tsx
<Grid columns={2}>
  <div>Column 1</div>
  <div>Column 2</div>
</Grid>

<Grid columns={4}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</Grid>
```

## Gap

```tsx
<Grid columns={3} gap="small">
  <div>Small gap</div>
  <div>Small gap</div>
  <div>Small gap</div>
</Grid>

<Grid columns={3} gap="large">
  <div>Large gap</div>
  <div>Large gap</div>
  <div>Large gap</div>
</Grid>
```

## Responsive Columns

```tsx
<Grid 
  columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
  gap="medium"
>
  <div>Responsive</div>
  <div>Grid</div>
  <div>Layout</div>
  <div>Items</div>
</Grid>
```

## Auto Fit

```tsx
<Grid autoFit minColumnWidth="200px" gap="medium">
  <div>Auto</div>
  <div>Fit</div>
  <div>Columns</div>
  <div>Based</div>
  <div>On</div>
  <div>Width</div>
</Grid>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `number \| ResponsiveValue` | `12` | Number of columns |
| `gap` | `'small' \| 'medium' \| 'large' \| string` | `'medium'` | Gap between items |
| `rowGap` | `string` | - | Gap between rows |
| `columnGap` | `string` | - | Gap between columns |
| `autoFit` | `boolean` | `false` | Auto-fit columns |
| `minColumnWidth` | `string` | `'250px'` | Min column width (with autoFit) |
| `children` | `ReactNode` | **required** | Grid items |
| `className` | `string` | - | Additional CSS classes |
| `style` | `GridCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Grid
  columns={3}
  style={{
    '--grid-gap': '32px',
    '--grid-column-gap': '24px',
    '--grid-row-gap': '40px',
  }}
>
  <div>Custom</div>
  <div>Grid</div>
  <div>Spacing</div>
</Grid>
```

## Examples

### Product Grid

```tsx
<Grid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="large">
  {products.map(product => (
    <Card key={product.id}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </Card>
  ))}
</Grid>
```

### Dashboard Layout

```tsx
<Grid columns={{ base: 1, md: 2, lg: 3 }} gap="medium">
  <Card>
    <h3>Total Users</h3>
    <p>1,234</p>
  </Card>
  
  <Card>
    <h3>Revenue</h3>
    <p>$12,345</p>
  </Card>
  
  <Card>
    <h3>Orders</h3>
    <p>567</p>
  </Card>
</Grid>
```

## Accessibility

- ✅ Semantic HTML
- ✅ Responsive design
- ✅ Proper content flow

## Related Components

- [Stack](/docs/react/stack) - Vertical/horizontal layout
- [Container](/docs/react/container) - Page container
- [Space](/docs/react/space) - Spacing component
