# Stack

# Stack

A layout component for arranging children vertically or horizontally with consistent spacing.

## Import

```tsx
import { Stack } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Stack>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

## Direction

```tsx
// Vertical (default)
<Stack direction="vertical">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Stack>

// Horizontal
<Stack direction="horizontal">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Stack>
```

## Spacing

```tsx
<Stack spacing="small">
  <div>Small spacing</div>
  <div>Between items</div>
</Stack>

<Stack spacing="large">
  <div>Large spacing</div>
  <div>Between items</div>
</Stack>

<Stack spacing="32px">
  <div>Custom spacing</div>
  <div>32 pixels</div>
</Stack>
```

## Alignment

```tsx
// Align items
<Stack align="start">
  <div>Start</div>
  <div>Aligned</div>
</Stack>

<Stack align="center">
  <div>Center</div>
  <div>Aligned</div>
</Stack>

<Stack align="end">
  <div>End</div>
  <div>Aligned</div>
</Stack>

// Justify content
<Stack justify="space-between">
  <div>Space</div>
  <div>Between</div>
</Stack>
```

## Wrap

```tsx
<Stack direction="horizontal" wrap>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
  <Button>Button 4</Button>
  <Button>Button 5</Button>
</Stack>
```

## Divider

```tsx
<Stack divider>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Stack direction |
| `spacing` | `'small' \| 'medium' \| 'large' \| string` | `'medium'` | Space between items |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Align items |
| `justify` | `'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around'` | `'start'` | Justify content |
| `wrap` | `boolean` | `false` | Allow wrapping |
| `divider` | `boolean \| ReactNode` | `false` | Show divider between items |
| `children` | `ReactNode` | **required** | Stack items |
| `className` | `string` | - | Additional CSS classes |
| `style` | `StackCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Stack
  style={{
    '--stack-spacing': '24px',
    '--stack-divider-color': 'rgba(200, 200, 200, 1)',
    '--stack-divider-width': '2px',
  }}
>
  <div>Custom</div>
  <div>Stack</div>
</Stack>
```

## Examples

### Form Layout

```tsx
<Stack spacing="large">
  <Input label="Name" />
  <Input label="Email" type="email" />
  <Textarea label="Message" />
  <Button type="submit">Submit</Button>
</Stack>
```

### Button Group

```tsx
<Stack direction="horizontal" spacing="small">
  <Button variant="primary">Save</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="ghost">Delete</Button>
</Stack>
```

### Card List

```tsx
<Stack spacing="medium" divider>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Stack>
```

## Accessibility

- ✅ Semantic HTML
- ✅ Proper content flow
- ✅ Responsive design

## Related Components

- [Grid](/docs/react/grid) - Grid layout
- [Space](/docs/react/space) - Spacing component
- [Divider](/docs/react/divider) - Visual separator

