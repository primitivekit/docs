---
title: Steps
weight: 5
---

# Steps

A step indicator component for multi-step processes.

## Import

```tsx
import { Steps } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Steps current={1}>
  <Steps.Step title="Step 1" description="First step" />
  <Steps.Step title="Step 2" description="Second step" />
  <Steps.Step title="Step 3" description="Third step" />
</Steps>
```

## Vertical

```tsx
<Steps current={1} direction="vertical">
  <Steps.Step title="Step 1" description="Complete" />
  <Steps.Step title="Step 2" description="In progress" />
  <Steps.Step title="Step 3" description="Waiting" />
</Steps>
```

## With Icons

```tsx
import { CheckIcon, EditIcon, UploadIcon } from 'your-icon-library';

<Steps current={1}>
  <Steps.Step title="Login" icon={<CheckIcon />} />
  <Steps.Step title="Verification" icon={<EditIcon />} />
  <Steps.Step title="Upload" icon={<UploadIcon />} />
</Steps>
```

## Status

```tsx
<Steps current={1}>
  <Steps.Step title="Finished" status="finish" />
  <Steps.Step title="In Progress" status="process" />
  <Steps.Step title="Waiting" status="wait" />
  <Steps.Step title="Error" status="error" />
</Steps>
```

## Props

### Steps Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `current` | `number` | `0` | Current step index |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Steps direction |
| `children` | `ReactNode` | **required** | Step items |
| `className` | `string` | - | Additional CSS classes |

### Steps.Step Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string \| ReactNode` | **required** | Step title |
| `description` | `string \| ReactNode` | - | Step description |
| `icon` | `ReactNode` | - | Step icon |
| `status` | `'wait' \| 'process' \| 'finish' \| 'error'` | - | Step status |

## Customization

```tsx
<Steps
  current={1}
  style={{
    '--steps-icon-size': '40px',
    '--steps-finish-color': 'rgba(0, 200, 0, 1)',
    '--steps-process-color': 'rgba(0, 100, 255, 1)',
  }}
>
  <Steps.Step title="Step 1" />
  <Steps.Step title="Step 2" />
</Steps>
```

## Examples

### Multi-step Form

```tsx
function MultiStepForm() {
  const [current, setCurrent] = useState(0);

  const steps = [
    { title: 'Account', description: 'Create your account' },
    { title: 'Profile', description: 'Set up your profile' },
    { title: 'Verification', description: 'Verify your email' },
    { title: 'Complete', description: 'All done!' },
  ];

  return (
    <div>
      <Steps current={current}>
        {steps.map((step, index) => (
          <Steps.Step key={index} {...step} />
        ))}
      </Steps>
      
      <div style={{ marginTop: '24px' }}>
        {current < steps.length - 1 && (
          <Button onClick={() => setCurrent(current + 1)}>
            Next
          </Button>
        )}
        {current > 0 && (
          <Button onClick={() => setCurrent(current - 1)}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}
```

## Accessibility

- ✅ ARIA progress indicators
- ✅ Keyboard navigation
- ✅ Screen reader support

## Related Components

- [Progress](/docs/react/progress) - Progress bar
- [Breadcrumb](/docs/react/breadcrumb) - Navigation breadcrumbs
