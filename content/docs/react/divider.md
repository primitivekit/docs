---
title: Divider
weight: 6
---

# Divider

A visual separator component for dividing content.

## Import

```tsx
import { Divider } from '@primitivekit/react';
```

## Basic Usage

```tsx
<div>
  <p>Content above</p>
  <Divider />
  <p>Content below</p>
</div>
```

## Orientation

```tsx
// Horizontal (default)
<Divider orientation="horizontal" />

// Vertical
<div style={{ display: 'flex', height: '100px' }}>
  <div>Left</div>
  <Divider orientation="vertical" />
  <div>Right</div>
</div>
```

## Variants

```tsx
<Divider variant="solid" />
<Divider variant="dashed" />
<Divider variant="dotted" />
```

## With Label

```tsx
<Divider label="OR" />
<Divider label="Continue with" />
<Divider label="Section 2" />
```

## Label Position

```tsx
<Divider label="Left" labelPosition="left" />
<Divider label="Center" labelPosition="center" />
<Divider label="Right" labelPosition="right" />
```

## Thickness

```tsx
<Divider thickness="thin" />
<Divider thickness="medium" />
<Divider thickness="thick" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider orientation |
| `variant` | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` | Line style |
| `label` | `string \| ReactNode` | - | Label text |
| `labelPosition` | `'left' \| 'center' \| 'right'` | `'center'` | Label position |
| `thickness` | `'thin' \| 'medium' \| 'thick'` | `'thin'` | Line thickness |
| `className` | `string` | - | Additional CSS classes |
| `style` | `DividerCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Divider
  style={{
    '--divider-color': 'rgba(255, 0, 0, 1)',
    '--divider-width': '3px',
    '--divider-margin-y': '32px',
  }}
/>
```

## Examples

### Section Separator

```tsx
<div>
  <section>
    <h2>Section 1</h2>
    <p>Content...</p>
  </section>
  
  <Divider label="Section 2" />
  
  <section>
    <h2>Section 2</h2>
    <p>Content...</p>
  </section>
</div>
```

### Login Form

```tsx
<form>
  <Input label="Email" type="email" />
  <Input label="Password" type="password" />
  <Button type="submit">Sign In</Button>
  
  <Divider label="OR" />
  
  <Button variant="outline">Sign in with Google</Button>
</form>
```

## Accessibility

- ✅ Semantic HTML (hr element)
- ✅ ARIA role for decorative dividers
- ✅ Proper contrast ratios

## Related Components

- [Stack](/docs/react/stack) - Layout with dividers
- [Space](/docs/react/space) - Spacing component
