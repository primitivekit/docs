# Menu

# Menu

A navigation menu component with nested items and icons.

## Import

```tsx
import { Menu } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Menu>
  <Menu.Item>Home</Menu.Item>
  <Menu.Item>About</Menu.Item>
  <Menu.Item>Contact</Menu.Item>
</Menu>
```

## With Links

```tsx
<Menu>
  <Menu.Item href="/">Home</Menu.Item>
  <Menu.Item href="/about">About</Menu.Item>
  <Menu.Item href="/contact">Contact</Menu.Item>
</Menu>
```

## With Icons

```tsx
import { HomeIcon, UserIcon, SettingsIcon } from 'your-icon-library';

<Menu>
  <Menu.Item icon={<HomeIcon />} href="/">
    Home
  </Menu.Item>
  <Menu.Item icon={<UserIcon />} href="/profile">
    Profile
  </Menu.Item>
  <Menu.Item icon={<SettingsIcon />} href="/settings">
    Settings
  </Menu.Item>
</Menu>
```

## Nested Menu

```tsx
<Menu>
  <Menu.Item>Home</Menu.Item>
  <Menu.SubMenu label="Products">
    <Menu.Item>Product 1</Menu.Item>
    <Menu.Item>Product 2</Menu.Item>
    <Menu.Item>Product 3</Menu.Item>
  </Menu.SubMenu>
  <Menu.Item>Contact</Menu.Item>
</Menu>
```

## Horizontal Menu

```tsx
<Menu orientation="horizontal">
  <Menu.Item>Home</Menu.Item>
  <Menu.Item>About</Menu.Item>
  <Menu.Item>Services</Menu.Item>
  <Menu.Item>Contact</Menu.Item>
</Menu>
```

## Props

### Menu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Menu orientation |
| `children` | `ReactNode` | **required** | Menu items |
| `className` | `string` | - | Additional CSS classes |

### Menu.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | - | Link URL |
| `icon` | `ReactNode` | - | Item icon |
| `disabled` | `boolean` | `false` | Disable item |
| `active` | `boolean` | `false` | Active state |
| `children` | `ReactNode` | **required** | Item content |

## Customization

```tsx
<Menu
  style={{
    '--menu-item-padding': '12px 16px',
    '--menu-item-bg-hover': 'rgba(230, 240, 255, 1)',
    '--menu-item-color-active': 'rgba(0, 100, 255, 1)',
  }}
>
  <Menu.Item>Custom Menu</Menu.Item>
</Menu>
```

## Accessibility

- ✅ ARIA navigation role
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader support

## Related Components

- [Breadcrumb](/docs/react/breadcrumb) - Breadcrumb navigation
- [Tabs](/docs/react/tabs) - Tab navigation
- [Dropdown](/docs/react/dropdown) - Dropdown menu

