# Progress

# Progress

A progress bar component for showing completion status.

## Import

```tsx
import { Progress } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Progress value={50} />
```

## Sizes

```tsx
<Progress size="small" value={30} />
<Progress size="medium" value={50} />
<Progress size="large" value={70} />
```

## Color Schemes

```tsx
<Progress colorScheme="primary" value={25} />
<Progress colorScheme="success" value={50} />
<Progress colorScheme="warning" value={75} />
<Progress colorScheme="danger" value={90} />
```

## With Label

```tsx
<Progress value={60} showLabel />
```

## Striped

```tsx
<Progress value={70} striped />
```

## Animated

```tsx
<Progress value={80} striped animated />
```

## Indeterminate

```tsx
<Progress indeterminate />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Progress value (0-100) |
| `max` | `number` | `100` | Maximum value |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Progress bar size |
| `colorScheme` | `'primary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color scheme |
| `showLabel` | `boolean` | `false` | Show percentage label |
| `striped` | `boolean` | `false` | Striped pattern |
| `animated` | `boolean` | `false` | Animate stripes |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `className` | `string` | - | Additional CSS classes |
| `style` | `ProgressCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Progress
  value={65}
  style={{
    '--progress-height': '12px',
    '--progress-bg': 'rgba(230, 230, 230, 1)',
    '--progress-fill-bg': 'rgba(0, 200, 0, 1)',
    '--progress-border-radius': '10px',
  }}
/>
```

## Examples

### File Upload

```tsx
function FileUpload() {
  const [progress, setProgress] = useState(0);

  const handleUpload = async (file) => {
    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div>
      <Progress value={progress} showLabel />
      <p>{progress === 100 ? 'Upload complete!' : 'Uploading...'}</p>
    </div>
  );
}
```

### Multi-step Form

```tsx
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <div>
      <Progress value={progress} showLabel />
      <p>Step {step} of {totalSteps}</p>
    </div>
  );
}
```

## Accessibility

- ✅ ARIA role="progressbar"
- ✅ aria-valuenow, aria-valuemin, aria-valuemax
- ✅ Screen reader announcements
- ✅ Proper labeling

## Related Components

- [Spinner](/docs/react/spinner) - Loading indicator
- [Skeleton](/docs/react/skeleton) - Content placeholder

