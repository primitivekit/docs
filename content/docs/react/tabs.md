---
title: Tabs
weight: 3
---

# Tabs

A tabs component for organizing content into separate views.

## Import

```tsx
import { Tabs } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
    <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
    <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
  </Tabs.List>
  
  <Tabs.Panel value="tab1">
    <p>Content for Tab 1</p>
  </Tabs.Panel>
  
  <Tabs.Panel value="tab2">
    <p>Content for Tab 2</p>
  </Tabs.Panel>
  
  <Tabs.Panel value="tab3">
    <p>Content for Tab 3</p>
  </Tabs.Panel>
</Tabs>
```

## Variants

```tsx
<Tabs variant="line">
  {/* Line variant (default) */}
</Tabs>

<Tabs variant="enclosed">
  {/* Enclosed variant */}
</Tabs>

<Tabs variant="pills">
  {/* Pills variant */}
</Tabs>
```

## Controlled Tabs

```tsx
import { useState } from 'react';

function ControlledTabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
      </Tabs.List>
      
      <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
      <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
    </Tabs>
  );
}
```

## With Icons

```tsx
import { HomeIcon, SettingsIcon } from 'your-icon-library';

<Tabs>
  <Tabs.List>
    <Tabs.Tab value="home">
      <HomeIcon /> Home
    </Tabs.Tab>
    <Tabs.Tab value="settings">
      <SettingsIcon /> Settings
    </Tabs.Tab>
  </Tabs.List>
  
  <Tabs.Panel value="home">Home Content</Tabs.Panel>
  <Tabs.Panel value="settings">Settings Content</Tabs.Panel>
</Tabs>
```

## Props

### Tabs Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'line' \| 'enclosed' \| 'pills'` | `'line'` | Tab style variant |
| `value` | `string` | - | Controlled active tab |
| `defaultValue` | `string` | - | Default active tab |
| `onChange` | `function` | - | Change handler |
| `children` | `ReactNode` | **required** | Tabs content |

### Tabs.Tab Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | Tab value |
| `disabled` | `boolean` | `false` | Disable tab |
| `children` | `ReactNode` | **required** | Tab label |

## Customization

```tsx
<Tabs
  style={{
    '--tabs-border-color': 'rgba(200, 200, 200, 1)',
    '--tabs-active-color': 'rgba(0, 100, 255, 1)',
    '--tabs-active-border-width': '3px',
  }}
>
  {/* Tabs content */}
</Tabs>
```

## Accessibility

- ✅ ARIA tablist role
- ✅ Keyboard navigation (Arrow keys)
- ✅ Focus management
- ✅ Screen reader support

## Related Components

- [Accordion](/docs/react/accordion) - Collapsible content
- [Menu](/docs/react/menu) - Navigation menu
