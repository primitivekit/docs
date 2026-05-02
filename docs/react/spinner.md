# Spinner

# Spinner

A loading spinner component for indicating loading states.

## Import

```tsx
import { Spinner } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Spinner />
```

## Sizes

```tsx
<Spinner size="small" />
<Spinner size="medium" />
<Spinner size="large" />
<Spinner size="xl" />
```

## Color Schemes

```tsx
<Spinner colorScheme="primary" />
<Spinner colorScheme="secondary" />
<Spinner colorScheme="success" />
<Spinner colorScheme="danger" />
```

## With Label

```tsx
<Spinner label="Loading..." />
```

## Thickness

```tsx
<Spinner thickness="thin" />
<Spinner thickness="medium" />
<Spinner thickness="thick" />
```

## Speed

```tsx
<Spinner speed="slow" />
<Spinner speed="normal" />
<Spinner speed="fast" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large' \| 'xl'` | `'medium'` | Spinner size |
| `colorScheme` | `'primary' \| 'secondary' \| 'success' \| 'danger'` | `'primary'` | Color scheme |
| `thickness` | `'thin' \| 'medium' \| 'thick'` | `'medium'` | Border thickness |
| `speed` | `'slow' \| 'normal' \| 'fast'` | `'normal'` | Animation speed |
| `label` | `string` | - | Loading label |
| `className` | `string` | - | Additional CSS classes |
| `style` | `SpinnerCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Spinner
  style={{
    '--spinner-size': '60px',
    '--spinner-color': 'rgba(255, 0, 0, 1)',
    '--spinner-width': '4px',
    '--spinner-duration': '1s',
  }}
/>
```

## Examples

### Loading Button

```tsx
<Button disabled>
  <Spinner size="small" />
  Loading...
</Button>
```

### Page Loading

```tsx
function PageLoader() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <Spinner size="xl" label="Loading page..." />
    </div>
  );
}
```

### Inline Loading

```tsx
<div>
  <p>Fetching data <Spinner size="small" /></p>
</div>
```

## Accessibility

- ✅ ARIA role="status"
- ✅ Screen reader announcements
- ✅ Proper labeling

## Related Components

- [Progress](/docs/react/progress) - Progress bar
- [Skeleton](/docs/react/skeleton) - Content placeholder
- [Button](/docs/react/button) - With loading state

