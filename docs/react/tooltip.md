# Tooltip

# Tooltip

A tooltip component for displaying helpful information on hover.

## Import

```tsx
import { Tooltip } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

## Placement

```tsx
<Tooltip content="Top tooltip" placement="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Right tooltip" placement="right">
  <Button>Right</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" placement="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" placement="left">
  <Button>Left</Button>
</Tooltip>
```

## With Arrow

```tsx
<Tooltip content="Tooltip with arrow" showArrow>
  <Button>Hover me</Button>
</Tooltip>
```

## Delay

```tsx
<Tooltip content="Delayed tooltip" delay={500}>
  <Button>Hover me</Button>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `ReactNode` | **required** | Tooltip content |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Tooltip placement |
| `showArrow` | `boolean` | `true` | Show arrow |
| `delay` | `number` | `0` | Show delay (ms) |
| `children` | `ReactNode` | **required** | Trigger element |
| `className` | `string` | - | Additional CSS classes |

## Customization

```tsx
<Tooltip
  content="Custom tooltip"
  style={{
    '--tooltip-bg': 'rgba(0, 0, 0, 0.9)',
    '--tooltip-color': 'rgba(255, 255, 255, 1)',
    '--tooltip-padding': '8px 12px',
    '--tooltip-border-radius': '6px',
  }}
>
  <Button>Hover me</Button>
</Tooltip>
```

## Accessibility

- ✅ ARIA role="tooltip"
- ✅ Keyboard accessible
- ✅ Focus management
- ✅ Screen reader support

## Related Components

- [Popover](/docs/react/popover) - Richer content overlay
- [Dropdown](/docs/react/dropdown) - Dropdown menu

