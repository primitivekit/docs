---
title: Components
weight: 5
---

# Components Overview

PrimitiveKit provides 38 production-ready components organized into 6 categories. All components are fully accessible, customizable, and TypeScript-ready.

## Quick Navigation

### Form Components (10)
Build interactive forms with validation and accessibility:

| Component | Description |
|-----------|-------------|
| [Button](/docs/react/button) | Clickable button with variants and loading states |
| [Input](/docs/react/input) | Text input with validation and icons |
| [Select](/docs/react/select) | Dropdown selection with options |
| [Checkbox](/docs/react/checkbox) | Checkbox input with labels |
| [Radio](/docs/react/radio) | Radio button groups |
| [Switch](/docs/react/switch) | Toggle switch for boolean values |
| [Textarea](/docs/react/textarea) | Multi-line text input with auto-resize |
| [Slider](/docs/react/slider) | Range slider for numeric values |
| [Form](/docs/react/form) | Form wrapper with validation |
| [Upload](/docs/react/upload) | File upload with drag-and-drop |

### Layout Components (6)
Structure your pages with flexible layouts:

| Component | Description |
|-----------|-------------|
| [Card](/docs/react/card) | Content container with variants |
| [Container](/docs/react/container) | Responsive page container |
| [Grid](/docs/react/grid) | CSS Grid layout system |
| [Stack](/docs/react/stack) | Vertical/horizontal stacking |
| [Space](/docs/react/space) | Consistent spacing between elements |
| [Divider](/docs/react/divider) | Visual content separator |

### Feedback Components (5)
Provide user feedback and loading states:

| Component | Description |
|-----------|-------------|
| [Alert](/docs/react/alert) | Alert messages with status variants |
| [Badge](/docs/react/badge) | Status badges and labels |
| [Spinner](/docs/react/spinner) | Loading spinner indicator |
| [Progress](/docs/react/progress) | Progress bar with animations |
| [Skeleton](/docs/react/skeleton) | Loading content placeholder |

### Navigation Components (6)
Help users navigate your application:

| Component | Description |
|-----------|-------------|
| [Link](/docs/react/link) | Styled link component |
| [Breadcrumb](/docs/react/breadcrumb) | Breadcrumb navigation trail |
| [Tabs](/docs/react/tabs) | Tab navigation with panels |
| [Menu](/docs/react/menu) | Navigation menu with nesting |
| [Steps](/docs/react/steps) | Step indicator for processes |
| [Pagination](/docs/react/pagination) | Page navigation controls |

### Overlay Components (5)
Display content in overlays and modals:

| Component | Description |
|-----------|-------------|
| [Modal](/docs/react/modal) | Modal dialog with sizes |
| [Drawer](/docs/react/drawer) | Slide-out panel from edges |
| [Tooltip](/docs/react/tooltip) | Hover tooltip with placement |
| [Popover](/docs/react/popover) | Rich content popover |
| [Dropdown](/docs/react/dropdown) | Dropdown menu with items |

### Data Display Components (7)
Display data and content effectively:

| Component | Description |
|-----------|-------------|
| [Avatar](/docs/react/avatar) | User avatar with fallbacks |
| [Tag](/docs/react/tag) | Removable tag labels |
| [Table](/docs/react/table) | Data table with sorting |
| [Collapse](/docs/react/collapse) | Collapsible content panels |
| [Image](/docs/react/image) | Image with loading states |
| [Empty](/docs/react/empty) | Empty state placeholder |
| [Typography](/docs/react/typography) | Text and heading components |

## Component Features

### 🎨 Fully Customizable
Every component supports extensive CSS variable customization:
- 50-150+ CSS variables per component
- Component-level and global customization
- Design token integration
- Theme support

### ♿ Accessibility First
All components follow WCAG 2.1 AA standards:
- Proper ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus management
- Touch target sizes (44x44px)

### 📘 TypeScript Support
Complete TypeScript definitions:
- Full prop type definitions
- CSS variable types
- Event handler types
- Generic component types

### 🎯 Design Tokens
Components use 600+ design tokens:
- Color scales
- Spacing system
- Typography scale
- Shadow system
- Border radius
- Animation timing

## Getting Started

### Installation

```bash
npm install @primitivekit/react
```

### Basic Usage

```tsx
import { Button, Input, Card } from '@primitivekit/react';

function App() {
  return (
    <Card>
      <Input 
        label="Email" 
        type="email"
        placeholder="Enter your email"
      />
      <Button variant="primary" size="large">
        Submit
      </Button>
    </Card>
  );
}
```

### With Design Tokens

```tsx
import '@primitivekit/react/tokens/tokens.css';
import { Button } from '@primitivekit/react';

function App() {
  return (
    <Button
      style={{
        '--btn-bg-color': 'var(--color-brand-primary-500)',
        '--btn-border-radius': 'var(--border-radius-lg)',
        '--btn-padding-x': 'var(--spacing-4)',
      }}
    >
      Token-based Button
    </Button>
  );
}
```

## Component Patterns

### Form Pattern

```tsx
<Form onSubmit={handleSubmit}>
  <Stack spacing="medium">
    <Input label="Name" required />
    <Input label="Email" type="email" required />
    <Textarea label="Message" rows={5} />
    <Button type="submit">Submit</Button>
  </Stack>
</Form>
```

### Layout Pattern

```tsx
<Container size="lg">
  <Grid columns={{ base: 1, md: 2, lg: 3 }} gap="large">
    <Card>Content 1</Card>
    <Card>Content 2</Card>
    <Card>Content 3</Card>
  </Grid>
</Container>
```

### Modal Pattern

```tsx
const [isOpen, setIsOpen] = useState(false);

<>
  <Button onClick={() => setIsOpen(true)}>
    Open Modal
  </Button>
  
  <Modal 
    isOpen={isOpen} 
    onClose={() => setIsOpen(false)}
    title="Modal Title"
    footer={
      <>
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button onClick={handleConfirm}>
          Confirm
        </Button>
      </>
    }
  >
    <p>Modal content</p>
  </Modal>
</>
```

## Next Steps

- Browse individual [component documentation](/docs/react)
- Learn about [customization](/docs/customization)
- Explore [design tokens](/docs/design-tokens)
- Check [accessibility guidelines](/docs/accessibility)
- View [examples and patterns](/docs/examples)

## Support

- [GitHub Issues](https://github.com/primitivekit/react/issues)
- [Discussions](https://github.com/primitivekit/react/discussions)
- [NPM Package](https://www.npmjs.com/package/@primitivekit/react)
