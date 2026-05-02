# Popover

# Popover

A popover component for displaying rich content in an overlay.

## Import

```tsx
import { Popover } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Popover
  content={
    <div>
      <h4>Popover Title</h4>
      <p>This is the popover content</p>
    </div>
  }
>
  <Button>Click me</Button>
</Popover>
```

## Trigger

```tsx
// Click trigger (default)
<Popover trigger="click" content="Click popover">
  <Button>Click</Button>
</Popover>

// Hover trigger
<Popover trigger="hover" content="Hover popover">
  <Button>Hover</Button>
</Popover>

// Focus trigger
<Popover trigger="focus" content="Focus popover">
  <Button>Focus</Button>
</Popover>
```

## Placement

```tsx
<Popover content="Top popover" placement="top">
  <Button>Top</Button>
</Popover>

<Popover content="Right popover" placement="right">
  <Button>Right</Button>
</Popover>

<Popover content="Bottom popover" placement="bottom">
  <Button>Bottom</Button>
</Popover>

<Popover content="Left popover" placement="left">
  <Button>Left</Button>
</Popover>
```

## With Title

```tsx
<Popover
  title="Popover Title"
  content="This is the popover content with a title"
>
  <Button>Show Popover</Button>
</Popover>
```

## Controlled

```tsx
import { useState } from 'react';

function ControlledPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      content={
        <div>
          <p>Controlled popover content</p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </div>
      }
    >
      <Button>Toggle Popover</Button>
    </Popover>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `ReactNode` | **required** | Popover content |
| `title` | `string \| ReactNode` | - | Popover title |
| `trigger` | `'click' \| 'hover' \| 'focus'` | `'click'` | Trigger type |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Popover placement |
| `isOpen` | `boolean` | - | Controlled open state |
| `onOpenChange` | `function` | - | Open state change handler |
| `children` | `ReactNode` | **required** | Trigger element |
| `className` | `string` | - | Additional CSS classes |

## Customization

```tsx
<Popover
  content="Custom popover"
  style={{
    '--popover-bg': 'rgba(255, 255, 255, 1)',
    '--popover-border-color': 'rgba(200, 200, 200, 1)',
    '--popover-box-shadow': '0 4px 12px rgba(0, 0, 0, 0.15)',
    '--popover-border-radius': '8px',
  }}
>
  <Button>Show Popover</Button>
</Popover>
```

## Examples

### User Profile Popover

```tsx
<Popover
  trigger="hover"
  content={
    <div style={{ padding: '16px', minWidth: '200px' }}>
      <Avatar src="/avatar.jpg" size="large" />
      <h4>John Doe</h4>
      <p>Software Engineer</p>
      <Button size="small" fullWidth>View Profile</Button>
    </div>
  }
>
  <Avatar src="/avatar.jpg" />
</Popover>
```

## Accessibility

- ✅ ARIA role="dialog"
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Escape to close
- ✅ Screen reader support

## Related Components

- [Tooltip](/docs/react/tooltip) - Simple tooltips
- [Dropdown](/docs/react/dropdown) - Dropdown menu
- [Modal](/docs/react/modal) - Modal dialog

