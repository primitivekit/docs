# Tag

# Tag

A tag component for labels, categories, and removable items.

## Import

```tsx
import { Tag } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Tag>Default Tag</Tag>
```

## Color Schemes

```tsx
<Tag colorScheme="primary">Primary</Tag>
<Tag colorScheme="secondary">Secondary</Tag>
<Tag colorScheme="success">Success</Tag>
<Tag colorScheme="warning">Warning</Tag>
<Tag colorScheme="danger">Danger</Tag>
<Tag colorScheme="info">Info</Tag>
```

## Variants

```tsx
<Tag variant="solid" colorScheme="primary">Solid</Tag>
<Tag variant="subtle" colorScheme="success">Subtle</Tag>
<Tag variant="outline" colorScheme="warning">Outline</Tag>
```

## Sizes

```tsx
<Tag size="small">Small</Tag>
<Tag size="medium">Medium</Tag>
<Tag size="large">Large</Tag>
```

## Closable

```tsx
<Tag closable onClose={() => console.log('Tag closed')}>
  Closable Tag
</Tag>
```

## With Icon

```tsx
import { CheckIcon } from 'your-icon-library';

<Tag icon={<CheckIcon />} colorScheme="success">
  Verified
</Tag>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'subtle' \| 'outline'` | `'solid'` | Tag variant |
| `colorScheme` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | Color scheme |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tag size |
| `closable` | `boolean` | `false` | Show close button |
| `onClose` | `function` | - | Close handler |
| `icon` | `ReactNode` | - | Tag icon |
| `children` | `ReactNode` | **required** | Tag content |
| `className` | `string` | - | Additional CSS classes |

## Customization

```tsx
<Tag
  style={{
    '--tag-bg': 'rgba(255, 230, 230, 1)',
    '--tag-color': 'rgba(200, 0, 0, 1)',
    '--tag-border-radius': '20px',
    '--tag-padding-x': '16px',
  }}
>
  Custom Tag
</Tag>
```

## Examples

### Tag Group

```tsx
function TagGroup() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'CSS']);

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <Space wrap>
      {tags.map(tag => (
        <Tag 
          key={tag} 
          closable 
          onClose={() => removeTag(tag)}
        >
          {tag}
        </Tag>
      ))}
    </Space>
  );
}
```

### Category Tags

```tsx
<Space wrap>
  <Tag colorScheme="primary">JavaScript</Tag>
  <Tag colorScheme="success">React</Tag>
  <Tag colorScheme="info">TypeScript</Tag>
  <Tag colorScheme="warning">CSS</Tag>
</Space>
```

## Accessibility

- ✅ Semantic HTML
- ✅ Keyboard navigation for close button
- ✅ Focus indicators
- ✅ Screen reader support

## Related Components

- [Badge](/docs/react/badge) - Status indicators
- [Chip](/docs/react/chip) - Interactive chips
- [Button](/docs/react/button) - Action buttons

