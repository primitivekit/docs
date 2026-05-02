---
title: Typography
weight: 7
---

# Typography

Typography components for consistent text styling.

## Import

```tsx
import { Typography } from '@primitivekit/react';
```

## Heading

```tsx
<Typography.H1>Heading 1</Typography.H1>
<Typography.H2>Heading 2</Typography.H2>
<Typography.H3>Heading 3</Typography.H3>
<Typography.H4>Heading 4</Typography.H4>
<Typography.H5>Heading 5</Typography.H5>
<Typography.H6>Heading 6</Typography.H6>
```

## Text

```tsx
<Typography.Text>Regular text</Typography.Text>
<Typography.Text size="small">Small text</Typography.Text>
<Typography.Text size="large">Large text</Typography.Text>
```

## Paragraph

```tsx
<Typography.Paragraph>
  This is a paragraph with proper spacing and line height.
</Typography.Paragraph>
```

## Text Styles

```tsx
<Typography.Text weight="bold">Bold text</Typography.Text>
<Typography.Text weight="semibold">Semibold text</Typography.Text>
<Typography.Text weight="normal">Normal text</Typography.Text>
<Typography.Text weight="light">Light text</Typography.Text>
```

## Text Transform

```tsx
<Typography.Text transform="uppercase">Uppercase</Typography.Text>
<Typography.Text transform="lowercase">Lowercase</Typography.Text>
<Typography.Text transform="capitalize">Capitalize</Typography.Text>
```

## Text Decoration

```tsx
<Typography.Text decoration="underline">Underlined</Typography.Text>
<Typography.Text decoration="line-through">Strikethrough</Typography.Text>
```

## Text Alignment

```tsx
<Typography.Text align="left">Left aligned</Typography.Text>
<Typography.Text align="center">Center aligned</Typography.Text>
<Typography.Text align="right">Right aligned</Typography.Text>
```

## Color

```tsx
<Typography.Text color="primary">Primary color</Typography.Text>
<Typography.Text color="secondary">Secondary color</Typography.Text>
<Typography.Text color="success">Success color</Typography.Text>
<Typography.Text color="danger">Danger color</Typography.Text>
<Typography.Text color="muted">Muted color</Typography.Text>
```

## Truncate

```tsx
<Typography.Text truncate>
  This is a very long text that will be truncated with an ellipsis
</Typography.Text>

<Typography.Text lines={2}>
  This text will be clamped to 2 lines and show an ellipsis if it exceeds that length
</Typography.Text>
```

## Props

### Common Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Text size |
| `weight` | `'light' \| 'normal' \| 'semibold' \| 'bold'` | `'normal'` | Font weight |
| `color` | `string` | - | Text color |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `transform` | `'uppercase' \| 'lowercase' \| 'capitalize'` | - | Text transform |
| `decoration` | `'underline' \| 'line-through'` | - | Text decoration |
| `truncate` | `boolean` | `false` | Truncate with ellipsis |
| `lines` | `number` | - | Clamp to number of lines |
| `children` | `ReactNode` | **required** | Text content |
| `className` | `string` | - | Additional CSS classes |

## Customization

```tsx
<Typography.Text
  style={{
    '--text-color': 'rgba(100, 100, 100, 1)',
    '--text-font-size': '18px',
    '--text-line-height': '1.6',
    '--text-letter-spacing': '0.5px',
  }}
>
  Custom text
</Typography.Text>
```

## Examples

### Article Header

```tsx
<div>
  <Typography.H1>Article Title</Typography.H1>
  <Typography.Text color="muted" size="small">
    Published on January 1, 2024
  </Typography.Text>
  <Typography.Paragraph>
    This is the article introduction paragraph with proper spacing.
  </Typography.Paragraph>
</div>
```

### Card Content

```tsx
<Card>
  <Typography.H3>Card Title</Typography.H3>
  <Typography.Text color="muted" truncate>
    This is a description that will be truncated if too long
  </Typography.Text>
  <Typography.Text weight="bold" color="primary">
    $99.99
  </Typography.Text>
</Card>
```

## Accessibility

- ✅ Semantic HTML headings
- ✅ Proper heading hierarchy
- ✅ Readable font sizes
- ✅ Sufficient color contrast
- ✅ Line height for readability

## Related Components

- [Link](/docs/react/link) - Text links
- [Card](/docs/react/card) - Content container
- [Alert](/docs/react/alert) - Alert messages
