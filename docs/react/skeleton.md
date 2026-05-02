# Skeleton

# Skeleton

A placeholder component for loading content.

## Import

```tsx
import { Skeleton } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Skeleton />
```

## Variants

```tsx
// Text (default)
<Skeleton variant="text" />

// Circle
<Skeleton variant="circle" width="50px" height="50px" />

// Rectangle
<Skeleton variant="rectangle" width="200px" height="100px" />
```

## Sizes

```tsx
<Skeleton width="100%" height="20px" />
<Skeleton width="80%" height="20px" />
<Skeleton width="60%" height="20px" />
```

## Animation

```tsx
// Pulse (default)
<Skeleton animation="pulse" />

// Wave
<Skeleton animation="wave" />

// None
<Skeleton animation="none" />
```

## Multiple Lines

```tsx
<div>
  <Skeleton width="100%" />
  <Skeleton width="90%" />
  <Skeleton width="80%" />
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'text' \| 'circle' \| 'rectangle'` | `'text'` | Skeleton variant |
| `width` | `string \| number` | `'100%'` | Skeleton width |
| `height` | `string \| number` | `'1em'` | Skeleton height |
| `animation` | `'pulse' \| 'wave' \| 'none'` | `'pulse'` | Animation type |
| `className` | `string` | - | Additional CSS classes |
| `style` | `SkeletonCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Skeleton
  style={{
    '--skeleton-bg': 'rgba(230, 230, 230, 1)',
    '--skeleton-highlight': 'rgba(245, 245, 245, 1)',
    '--skeleton-border-radius': '8px',
  }}
/>
```

## Examples

### Card Skeleton

```tsx
function CardSkeleton() {
  return (
    <Card>
      <Skeleton variant="rectangle" width="100%" height="200px" />
      <Skeleton width="80%" height="24px" style={{ marginTop: '16px' }} />
      <Skeleton width="60%" height="20px" />
      <Skeleton width="40%" height="20px" />
    </Card>
  );
}
```

### Profile Skeleton

```tsx
function ProfileSkeleton() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Skeleton variant="circle" width="60px" height="60px" />
      <div style={{ flex: 1 }}>
        <Skeleton width="40%" height="20px" />
        <Skeleton width="60%" height="16px" />
        <Skeleton width="80%" height="16px" />
      </div>
    </div>
  );
}
```

### List Skeleton

```tsx
function ListSkeleton({ count = 5 }) {
  return (
    <div>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{ marginBottom: '16px' }}>
          <Skeleton width="100%" height="60px" />
        </div>
      ))}
    </div>
  );
}
```

### Conditional Loading

```tsx
function UserProfile({ loading, user }) {
  if (loading) {
    return <ProfileSkeleton />;
  }

  return (
    <div>
      <Avatar src={user.avatar} />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </div>
  );
}
```

## Accessibility

- ✅ ARIA role="status"
- ✅ aria-busy attribute
- ✅ Screen reader announcements
- ✅ Proper loading states

## Related Components

- [Spinner](/docs/react/spinner) - Loading indicator
- [Progress](/docs/react/progress) - Progress bar

