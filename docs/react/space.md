# Space

# Space

A component for adding consistent spacing between elements.

## Import

```tsx
import { Space } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Space>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>
```

## Sizes

```tsx
<Space size="small">
  <Button>Small</Button>
  <Button>Spacing</Button>
</Space>

<Space size="medium">
  <Button>Medium</Button>
  <Button>Spacing</Button>
</Space>

<Space size="large">
  <Button>Large</Button>
  <Button>Spacing</Button>
</Space>
```

## Direction

```tsx
// Horizontal (default)
<Space direction="horizontal">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</Space>

// Vertical
<Space direction="vertical">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</Space>
```

## Wrap

```tsx
<Space wrap>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
  <Button>Button 4</Button>
  <Button>Button 5</Button>
</Space>
```

## Alignment

```tsx
<Space align="center">
  <Button size="small">Small</Button>
  <Button size="large">Large</Button>
</Space>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large' \| number` | `'medium'` | Space size |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Space direction |
| `wrap` | `boolean` | `false` | Allow wrapping |
| `align` | `'start' \| 'center' \| 'end' \| 'baseline'` | `'center'` | Align items |
| `children` | `ReactNode` | **required** | Spaced items |
| `className` | `string` | - | Additional CSS classes |

## Customization

```tsx
<Space
  style={{
    '--space-gap': '24px',
  }}
>
  <Button>Custom</Button>
  <Button>Spacing</Button>
</Space>
```

## Examples

### Action Buttons

```tsx
<Space>
  <Button variant="primary">Save</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="ghost">Delete</Button>
</Space>
```

### Icon Group

```tsx
<Space size="small">
  <IconButton icon={<EditIcon />} />
  <IconButton icon={<DeleteIcon />} />
  <IconButton icon={<ShareIcon />} />
</Space>
```

## Related Components

- [Stack](/docs/react/stack) - More advanced layout
- [Grid](/docs/react/grid) - Grid layout
- [Divider](/docs/react/divider) - Visual separator

