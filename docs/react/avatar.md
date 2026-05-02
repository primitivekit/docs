# Avatar

# Avatar

A component for displaying user avatars with fallback options.

## Import

```tsx
import { Avatar } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Avatar src="/avatar.jpg" alt="User Name" />
```

## Sizes

```tsx
<Avatar size="small" src="/avatar.jpg" />
<Avatar size="medium" src="/avatar.jpg" />
<Avatar size="large" src="/avatar.jpg" />
<Avatar size={80} src="/avatar.jpg" /> {/* Custom size */}
```

## Shapes

```tsx
// Circle (default)
<Avatar shape="circle" src="/avatar.jpg" />

// Square
<Avatar shape="square" src="/avatar.jpg" />
```

## With Initials

```tsx
<Avatar>JD</Avatar>
<Avatar>AB</Avatar>
```

## With Icon

```tsx
import { UserIcon } from 'your-icon-library';

<Avatar icon={<UserIcon />} />
```

## Fallback

```tsx
// Shows initials if image fails to load
<Avatar src="/broken-image.jpg" alt="John Doe">
  JD
</Avatar>
```

## Clickable

```tsx
<Avatar 
  src="/avatar.jpg" 
  onClick={() => navigate('/profile')}
  style={{ cursor: 'pointer' }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Image alt text |
| `size` | `'small' \| 'medium' \| 'large' \| number` | `'medium'` | Avatar size |
| `shape` | `'circle' \| 'square'` | `'circle'` | Avatar shape |
| `icon` | `ReactNode` | - | Icon to display |
| `children` | `ReactNode` | - | Initials or fallback content |
| `onClick` | `function` | - | Click handler |
| `className` | `string` | - | Additional CSS classes |
| `style` | `AvatarCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Avatar
  src="/avatar.jpg"
  style={{
    '--avatar-size': '80px',
    '--avatar-border-radius': '12px',
    '--avatar-border-width': '3px',
    '--avatar-border-color': 'rgba(0, 100, 255, 1)',
    '--avatar-bg-color': 'rgba(230, 230, 255, 1)',
  }}
/>
```

## Examples

### Avatar Group

```tsx
function AvatarGroup() {
  return (
    <div style={{ display: 'flex', marginLeft: '-8px' }}>
      <Avatar src="/user1.jpg" style={{ marginLeft: '-8px' }} />
      <Avatar src="/user2.jpg" style={{ marginLeft: '-8px' }} />
      <Avatar src="/user3.jpg" style={{ marginLeft: '-8px' }} />
      <Avatar style={{ marginLeft: '-8px' }}>+5</Avatar>
    </div>
  );
}
```

### User Profile

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <Avatar src="/avatar.jpg" size="large" />
  <div>
    <h3>John Doe</h3>
    <p>Software Engineer</p>
  </div>
</div>
```

### Status Indicator

```tsx
<div style={{ position: 'relative', display: 'inline-block' }}>
  <Avatar src="/avatar.jpg" />
  <div style={{
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'green',
    border: '2px solid white'
  }} />
</div>
```

## Accessibility

- ✅ Proper alt text for images
- ✅ Semantic HTML
- ✅ Keyboard navigation (when clickable)
- ✅ Focus indicators

## Related Components

- [Badge](/docs/react/badge) - Status indicators
- [Card](/docs/react/card) - Profile cards
- [Image](/docs/react/image) - Image component

