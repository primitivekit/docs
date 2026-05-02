---
title: Drawer
weight: 2
---

# Drawer

A slide-out panel component for displaying content from the side of the screen.

## Import

```tsx
import { Drawer } from '@primitivekit/react';
```

## Basic Usage

```tsx
import { useState } from 'react';

function BasicDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      
      <Drawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Drawer Title"
      >
        <p>Drawer content goes here</p>
      </Drawer>
    </>
  );
}
```

## Placement

```tsx
<Drawer placement="left" isOpen={isOpen} onClose={onClose}>
  Left drawer
</Drawer>

<Drawer placement="right" isOpen={isOpen} onClose={onClose}>
  Right drawer
</Drawer>

<Drawer placement="top" isOpen={isOpen} onClose={onClose}>
  Top drawer
</Drawer>

<Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
  Bottom drawer
</Drawer>
```

## Sizes

```tsx
<Drawer size="small" isOpen={isOpen} onClose={onClose}>
  Small drawer
</Drawer>

<Drawer size="medium" isOpen={isOpen} onClose={onClose}>
  Medium drawer
</Drawer>

<Drawer size="large" isOpen={isOpen} onClose={onClose}>
  Large drawer
</Drawer>

<Drawer size="full" isOpen={isOpen} onClose={onClose}>
  Full width drawer
</Drawer>
```

## With Footer

```tsx
<Drawer 
  isOpen={isOpen} 
  onClose={onClose}
  title="Drawer with Footer"
  footer={
    <>
      <Button variant="outline" onClick={onClose}>
        Cancel
      </Button>
      <Button variant="primary">
        Save
      </Button>
    </>
  }
>
  <p>Drawer content</p>
</Drawer>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | **required** | Drawer open state |
| `onClose` | `function` | **required** | Close handler |
| `title` | `string \| ReactNode` | - | Drawer title |
| `footer` | `ReactNode` | - | Drawer footer content |
| `placement` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Drawer placement |
| `size` | `'small' \| 'medium' \| 'large' \| 'full'` | `'medium'` | Drawer size |
| `closeOnOverlayClick` | `boolean` | `true` | Close on overlay click |
| `closeOnEscape` | `boolean` | `true` | Close on Escape key |
| `children` | `ReactNode` | **required** | Drawer content |
| `className` | `string` | - | Additional CSS classes |

## Customization

```tsx
<Drawer
  isOpen={isOpen}
  onClose={onClose}
  style={{
    '--drawer-bg': 'rgba(255, 255, 255, 1)',
    '--drawer-width': '400px',
    '--drawer-overlay-bg': 'rgba(0, 0, 0, 0.5)',
  }}
>
  Custom drawer
</Drawer>
```

## Examples

### Navigation Drawer

```tsx
function NavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Menu</Button>
      
      <Drawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        placement="left"
        title="Navigation"
      >
        <Menu>
          <Menu.Item href="/">Home</Menu.Item>
          <Menu.Item href="/about">About</Menu.Item>
          <Menu.Item href="/services">Services</Menu.Item>
          <Menu.Item href="/contact">Contact</Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}
```

### Filter Drawer

```tsx
function FilterDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Filters</Button>
      
      <Drawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Filters"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Clear
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Apply
            </Button>
          </>
        }
      >
        <Stack spacing="medium">
          <Select label="Category" options={categories} />
          <Select label="Price Range" options={priceRanges} />
          <Checkbox label="In Stock Only" />
        </Stack>
      </Drawer>
    </>
  );
}
```

## Accessibility

- ✅ Focus trap within drawer
- ✅ Focus returns to trigger on close
- ✅ Escape key to close
- ✅ ARIA role="dialog"
- ✅ Body scroll lock
- ✅ Screen reader announcements

## Related Components

- [Modal](/docs/react/modal) - Modal dialog
- [Popover](/docs/react/popover) - Popover overlay
- [Menu](/docs/react/menu) - Navigation menu
