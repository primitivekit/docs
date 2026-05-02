---
title: Switch
weight: 6
---

# Switch

A toggle switch component for boolean on/off states.

## Import

```tsx
import { Switch } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Switch label="Enable notifications" />
```

## Sizes

```tsx
<Switch size="small" label="Small" />
<Switch size="medium" label="Medium" />
<Switch size="large" label="Large" />
```

## Color Schemes

```tsx
<Switch colorScheme="primary" label="Primary" />
<Switch colorScheme="secondary" label="Secondary" />
<Switch colorScheme="success" label="Success" />
<Switch colorScheme="danger" label="Danger" />
```

## States

```tsx
// On
<Switch checked label="Enabled" />

// Off
<Switch checked={false} label="Disabled" />

// Disabled
<Switch disabled label="Disabled switch" />

// Disabled & On
<Switch disabled checked label="Disabled & On" />
```

## Controlled Switch

```tsx
import { useState } from 'react';

function ControlledSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={(e) => setEnabled(e.target.checked)}
      label="Enable dark mode"
    />
  );
}
```

## With Description

```tsx
<Switch 
  label="Marketing emails"
  description="Receive emails about new products and features"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string \| ReactNode` | - | Switch label |
| `description` | `string \| ReactNode` | - | Description text |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Switch size |
| `colorScheme` | `'primary' \| 'secondary' \| 'success' \| 'danger'` | `'primary'` | Color scheme |
| `checked` | `boolean` | - | Checked state (controlled) |
| `defaultChecked` | `boolean` | `false` | Default checked state |
| `onChange` | `function` | - | Change handler |
| `disabled` | `boolean` | `false` | Disable switch |
| `name` | `string` | - | Input name |
| `value` | `string` | - | Input value |

## Customization

```tsx
<Switch
  label="Custom switch"
  style={{
    '--switch-width': '60px',
    '--switch-height': '32px',
    '--switch-bg-color': 'rgba(200, 200, 200, 1)',
    '--switch-bg-color-checked': 'rgba(0, 200, 0, 1)',
    '--switch-thumb-size': '28px',
    '--switch-border-radius': '16px',
  }}
/>
```

## Accessibility

- ✅ Proper label association
- ✅ Keyboard navigation (Space to toggle)
- ✅ Focus indicators
- ✅ Screen reader support (role="switch")
- ✅ Touch target size (44x44px)
- ✅ ARIA checked state

## Examples

### Settings Panel

```tsx
function SettingsPanel() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
  });

  return (
    <div>
      <Switch
        checked={settings.notifications}
        onChange={(e) => setSettings({
          ...settings,
          notifications: e.target.checked
        })}
        label="Push Notifications"
        description="Receive push notifications on your device"
      />
      
      <Switch
        checked={settings.darkMode}
        onChange={(e) => setSettings({
          ...settings,
          darkMode: e.target.checked
        })}
        label="Dark Mode"
        description="Use dark theme across the app"
      />
      
      <Switch
        checked={settings.autoSave}
        onChange={(e) => setSettings({
          ...settings,
          autoSave: e.target.checked
        })}
        label="Auto Save"
        description="Automatically save your work"
      />
    </div>
  );
}
```

## Related Components

- [Checkbox](/docs/react/checkbox) - Multiple selection
- [Radio](/docs/react/radio) - Single selection
- [Button](/docs/react/button) - Action buttons
