# Link

# Link

A styled link component with variants and accessibility features.

## Import

```tsx
import { Link } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Link href="/about">About Us</Link>
```

## Variants

```tsx
<Link variant="default" href="/">Default Link</Link>
<Link variant="underline" href="/">Underlined Link</Link>
<Link variant="subtle" href="/">Subtle Link</Link>
```

## External Links

```tsx
<Link href="https://example.com" external>
  External Link
</Link>
```

## With Icon

```tsx
import { ExternalLinkIcon } from 'your-icon-library';

<Link href="https://example.com" external>
  Visit Site <ExternalLinkIcon />
</Link>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | **required** | Link URL |
| `variant` | `'default' \| 'underline' \| 'subtle'` | `'default'` | Link style |
| `external` | `boolean` | `false` | Open in new tab |
| `children` | `ReactNode` | **required** | Link content |
| `className` | `string` | - | Additional CSS classes |

## Customization

```tsx
<Link
  href="/"
  style={{
    '--link-color': 'rgba(0, 100, 255, 1)',
    '--link-color-hover': 'rgba(0, 80, 200, 1)',
    '--link-text-decoration': 'none',
  }}
>
  Custom Link
</Link>
```

## Accessibility

- ✅ Semantic anchor tags
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ External link indicators

## Related Components

- [Button](/docs/react/button) - Action buttons
- [Breadcrumb](/docs/react/breadcrumb) - Navigation breadcrumbs

