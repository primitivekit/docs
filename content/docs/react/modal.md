---
title: Modal
weight: 1
---

# Modal

A modal dialog component for displaying content in an overlay.

## Import

```tsx
import { Modal } from '@primitivekit/react';
```

## Basic Usage

```tsx
import { useState } from 'react';

function BasicModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Modal Title"
      >
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}
```

## Sizes

```tsx
<Modal size="small" isOpen={isOpen} onClose={onClose}>
  Small modal
</Modal>

<Modal size="medium" isOpen={isOpen} onClose={onClose}>
  Medium modal
</Modal>

<Modal size="large" isOpen={isOpen} onClose={onClose}>
  Large modal
</Modal>

<Modal size="full" isOpen={isOpen} onClose={onClose}>
  Full screen modal
</Modal>
```

## With Footer

```tsx
<Modal 
  isOpen={isOpen} 
  onClose={onClose}
  title="Confirm Action"
  footer={
    <>
      <Button variant="outline" onClick={onClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleConfirm}>
        Confirm
      </Button>
    </>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>
```

## Centered

```tsx
<Modal 
  isOpen={isOpen} 
  onClose={onClose}
  centered
>
  Centered modal
</Modal>
```

## Close Options

```tsx
<Modal 
  isOpen={isOpen} 
  onClose={onClose}
  closeOnOverlayClick={false}
  closeOnEscape={false}
  showCloseButton={false}
>
  Cannot be closed by clicking outside or pressing Escape
</Modal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | **required** | Modal open state |
| `onClose` | `function` | **required** | Close handler |
| `title` | `string \| ReactNode` | - | Modal title |
| `footer` | `ReactNode` | - | Modal footer content |
| `size` | `'small' \| 'medium' \| 'large' \| 'full'` | `'medium'` | Modal size |
| `centered` | `boolean` | `true` | Center vertically |
| `showCloseButton` | `boolean` | `true` | Show close button |
| `closeOnOverlayClick` | `boolean` | `true` | Close on overlay click |
| `closeOnEscape` | `boolean` | `true` | Close on Escape key |
| `preventScroll` | `boolean` | `true` | Prevent body scroll |
| `children` | `ReactNode` | **required** | Modal content |
| `className` | `string` | - | Additional CSS classes |
| `style` | `ModalCSSVariables` | - | CSS variable overrides |

## Customization

```tsx
<Modal
  isOpen={isOpen}
  onClose={onClose}
  style={{
    '--modal-bg-color': 'rgba(255, 255, 255, 1)',
    '--modal-border-radius': '16px',
    '--modal-box-shadow': '0 20px 60px rgba(0, 0, 0, 0.3)',
    '--modal-overlay-bg-color': 'rgba(0, 0, 0, 0.7)',
    '--modal-max-width': '600px',
  }}
>
  Custom styled modal
</Modal>
```

## Examples

### Confirmation Dialog

```tsx
function DeleteConfirmation({ isOpen, onClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Item"
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </>
      }
    >
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </Modal>
  );
}
```

### Form Modal

```tsx
function EditProfileModal({ isOpen, onClose, user }) {
  const [formData, setFormData] = useState(user);

  const handleSubmit = async () => {
    await updateProfile(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Profile"
      size="large"
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </>
      }
    >
      <Stack spacing="medium">
        <Input
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Textarea
          label="Bio"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
      </Stack>
    </Modal>
  );
}
```

## Accessibility

- ✅ Focus trap within modal
- ✅ Focus returns to trigger on close
- ✅ Escape key to close
- ✅ ARIA role="dialog"
- ✅ aria-modal="true"
- ✅ aria-labelledby for title
- ✅ Body scroll lock
- ✅ Screen reader announcements

## Related Components

- [Drawer](/docs/react/drawer) - Slide-out panel
- [Popover](/docs/react/popover) - Contextual overlay
- [Alert](/docs/react/alert) - Alert messages
