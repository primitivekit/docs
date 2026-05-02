---
title: Image
weight: 5
---

# Image

An image component with loading states, fallback, and lazy loading support.

## Import

```tsx
import { Image } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Image src="/image.jpg" alt="Description" />
```

## With Fallback

```tsx
<Image 
  src="/image.jpg" 
  alt="Description"
  fallbackSrc="/placeholder.jpg"
/>
```

## Loading States

```tsx
<Image 
  src="/image.jpg" 
  alt="Description"
  loading="lazy"
  showSkeleton
/>
```

## Object Fit

```tsx
<Image 
  src="/image.jpg" 
  alt="Description"
  objectFit="cover"
  width="300px"
  height="200px"
/>
```

## Rounded

```tsx
<Image 
  src="/image.jpg" 
  alt="Description"
  rounded
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | **required** | Image source URL |
| `alt` | `string` | **required** | Alt text |
| `fallbackSrc` | `string` | - | Fallback image URL |
| `loading` | `'lazy' \| 'eager'` | `'lazy'` | Loading strategy |
| `objectFit` | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'cover'` | Object fit |
| `width` | `string \| number` | - | Image width |
| `height` | `string \| number` | - | Image height |
| `rounded` | `boolean` | `false` | Rounded corners |
| `showSkeleton` | `boolean` | `true` | Show skeleton while loading |
| `onLoad` | `function` | - | Load handler |
| `onError` | `function` | - | Error handler |
| `className` | `string` | - | Additional CSS classes |

## Customization

```tsx
<Image
  src="/image.jpg"
  alt="Description"
  style={{
    '--image-border-radius': '12px',
    '--image-skeleton-bg': 'rgba(230, 230, 230, 1)',
  }}
/>
```

## Examples

### Image Gallery

```tsx
function ImageGallery({ images }) {
  return (
    <Grid columns={{ base: 1, sm: 2, md: 3 }} gap="medium">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          objectFit="cover"
          height="200px"
          rounded
        />
      ))}
    </Grid>
  );
}
```

### Profile Picture

```tsx
<Image
  src="/avatar.jpg"
  alt="User profile"
  width="100px"
  height="100px"
  objectFit="cover"
  rounded
  fallbackSrc="/default-avatar.jpg"
/>
```

## Accessibility

- ✅ Required alt text
- ✅ Proper image semantics
- ✅ Loading states
- ✅ Error handling

## Related Components

- [Avatar](/docs/react/avatar) - User avatars
- [Card](/docs/react/card) - Content container
- [Skeleton](/docs/react/skeleton) - Loading placeholder
