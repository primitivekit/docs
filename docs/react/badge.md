# Badge

# Badge

A small status indicator component for labels and counts.

## Import

```tsx
import { Badge } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Badge>New</Badge>
```

## Color Schemes

```tsx
<Badge colorScheme="primary">Primary</Badge>
<Badge colorScheme="secondary">Secondary</Badge>
<Badge colorScheme="success">Success</Badge>
<Badge colorScheme="warning">Warning</Badge>
<Badge colorScheme="danger">Danger</Badge>
<Badge colorScheme="info">Info</Badge>
```

## Variants

```tsx
// Solid (default)
<Badge variant="solid" colorScheme="primary">
  Solid
</Badge>

// Subtle
<Badge variant="subtle" colorScheme="success">
  Subtle
</Badge>

// Outline
<Badge variant="outline" colorScheme="warning">
  Outline
</Badge>
```

## Sizes

```tsx
<Badge size="small">Small</Badge>
<Badge size="medium">Medium</Badge>
<Badge size="large">Large</Badge>
```

## With Icon

```tsx
import { CheckIcon } from 'your-icon-library';

<Badge colorScheme="success">
  <CheckIcon /> Verified
</Badge>
```

## Dot Badge

```tsx
<Badge dot colorScheme="danger">
  Notifications
</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'subtle' \| 'outline'` | `'solid'` | Visual variant |
| `colorScheme` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | Color scheme |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Badge size |
| `dot` | `boolean` | `false` | Show as dot |
| `children` | `ReactNode` | **required** | Badge content |
| `className` | `string` | - | Additional CSS classes |
| `style` | `BadgeCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Badge
  style={{
    '--badge-bg-color': 'rgba(255, 0, 0, 1)',
    '--badge-text-color': 'rgba(255, 255, 255, 1)',
    '--badge-border-radius': '20px',
    '--badge-padding-x': '12px',
    '--badge-padding-y': '4px',
    '--badge-font-size': '12px',
  }}
>
  Custom
</Badge>
```

## Examples

### Status Indicators

```tsx
<div>
  <Badge colorScheme="success">Active</Badge>
  <Badge colorScheme="warning">Pending</Badge>
  <Badge colorScheme="danger">Inactive</Badge>
</div>
```

### Notification Count

```tsx
<div style={{ position: 'relative' }}>
  <IconButton icon={<BellIcon />} />
  <Badge 
    colorScheme="danger" 
    style={{ 
      position: 'absolute', 
      top: -8, 
      right: -8 
    }}
  >
    5
  </Badge>
</div>
```

### Feature Tags

```tsx
<Card>
  <h3>Premium Plan</h3>
  <Badge colorScheme="primary">Popular</Badge>
  <Badge colorScheme="success">Best Value</Badge>
</Card>
```

## Accessibility

- ✅ Semantic HTML
- ✅ Proper color contrast
- ✅ Screen reader support

## Related Components

- [Tag](/docs/react/tag) - Larger labels
- [Alert](/docs/react/alert) - Alert messages
- [Chip](/docs/react/chip) - Interactive tags

