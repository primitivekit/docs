# Dropdown

# Dropdown

A dropdown menu component for displaying a list of actions or options.

## Import

```tsx
import { Dropdown } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Dropdown>
  <Dropdown.Trigger>
    <Button>Actions</Button>
  </Dropdown.Trigger>
  
  <Dropdown.Menu>
    <Dropdown.Item>Edit</Dropdown.Item>
    <Dropdown.Item>Duplicate</Dropdown.Item>
    <Dropdown.Item>Delete</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

## With Icons

```tsx
import { EditIcon, CopyIcon, TrashIcon } from 'your-icon-library';

<Dropdown>
  <Dropdown.Trigger>
    <Button>Actions</Button>
  </Dropdown.Trigger>
  
  <Dropdown.Menu>
    <Dropdown.Item icon={<EditIcon />}>Edit</Dropdown.Item>
    <Dropdown.Item icon={<CopyIcon />}>Duplicate</Dropdown.Item>
    <Dropdown.Item icon={<TrashIcon />}>Delete</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

## With Divider

```tsx
<Dropdown>
  <Dropdown.Trigger>
    <Button>Options</Button>
  </Dropdown.Trigger>
  
  <Dropdown.Menu>
    <Dropdown.Item>Profile</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

## Placement

```tsx
<Dropdown placement="bottom-start">
  <Dropdown.Trigger>
    <Button>Bottom Start</Button>
  </Dropdown.Trigger>
  <Dropdown.Menu>
    <Dropdown.Item>Item 1</Dropdown.Item>
    <Dropdown.Item>Item 2</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

## Props

### Dropdown Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `string` | `'bottom'` | Menu placement |
| `children` | `ReactNode` | **required** | Dropdown content |

### Dropdown.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | - | Item icon |
| `disabled` | `boolean` | `false` | Disable item |
| `onClick` | `function` | - | Click handler |
| `children` | `ReactNode` | **required** | Item content |

## Customization

```tsx
<Dropdown
  style={{
    '--dropdown-bg': 'rgba(255, 255, 255, 1)',
    '--dropdown-border-color': 'rgba(200, 200, 200, 1)',
    '--dropdown-item-hover-bg': 'rgba(230, 240, 255, 1)',
  }}
>
  {/* Dropdown content */}
</Dropdown>
```

## Examples

### User Menu

```tsx
<Dropdown>
  <Dropdown.Trigger>
    <Avatar src="/avatar.jpg" />
  </Dropdown.Trigger>
  
  <Dropdown.Menu>
    <Dropdown.Item icon={<UserIcon />}>Profile</Dropdown.Item>
    <Dropdown.Item icon={<SettingsIcon />}>Settings</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item icon={<LogoutIcon />}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

## Accessibility

- ✅ ARIA menu role
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Escape to close
- ✅ Screen reader support

## Related Components

- [Menu](/docs/react/menu) - Navigation menu
- [Popover](/docs/react/popover) - Popover overlay
- [Select](/docs/react/select) - Select dropdown

