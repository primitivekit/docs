---
title: Collapse
weight: 4
---

# Collapse

A collapsible content component for showing and hiding content.

## Import

```tsx
import { Collapse } from '@primitivekit/react';
```

## Basic Usage

```tsx
import { useState } from 'react';

function BasicCollapse() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>
        Toggle Content
      </Button>
      
      <Collapse isOpen={isOpen}>
        <p>This content can be collapsed</p>
      </Collapse>
    </div>
  );
}
```

## Accordion

```tsx
<Collapse.Accordion>
  <Collapse.Item title="Section 1">
    <p>Content for section 1</p>
  </Collapse.Item>
  
  <Collapse.Item title="Section 2">
    <p>Content for section 2</p>
  </Collapse.Item>
  
  <Collapse.Item title="Section 3">
    <p>Content for section 3</p>
  </Collapse.Item>
</Collapse.Accordion>
```

## Allow Multiple

```tsx
<Collapse.Accordion allowMultiple>
  <Collapse.Item title="Section 1">
    <p>Content 1</p>
  </Collapse.Item>
  
  <Collapse.Item title="Section 2">
    <p>Content 2</p>
  </Collapse.Item>
</Collapse.Accordion>
```

## Default Expanded

```tsx
<Collapse.Accordion defaultIndex={[0]}>
  <Collapse.Item title="Expanded by default">
    <p>This section is open by default</p>
  </Collapse.Item>
  
  <Collapse.Item title="Collapsed by default">
    <p>This section is closed by default</p>
  </Collapse.Item>
</Collapse.Accordion>
```

## Props

### Collapse Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Open state |
| `children` | `ReactNode` | **required** | Collapsible content |
| `className` | `string` | - | Additional CSS classes |

### Collapse.Item Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string \| ReactNode` | **required** | Item title |
| `children` | `ReactNode` | **required** | Item content |
| `disabled` | `boolean` | `false` | Disable item |

## Customization

```tsx
<Collapse
  isOpen={isOpen}
  style={{
    '--collapse-transition-duration': '300ms',
    '--collapse-border-color': 'rgba(200, 200, 200, 1)',
  }}
>
  Custom collapse
</Collapse>
```

## Examples

### FAQ Accordion

```tsx
<Collapse.Accordion>
  <Collapse.Item title="What is PrimitiveKit?">
    <p>PrimitiveKit is a flexible, accessible component library...</p>
  </Collapse.Item>
  
  <Collapse.Item title="How do I install it?">
    <p>Run: npm install @primitivekit/react</p>
  </Collapse.Item>
  
  <Collapse.Item title="Is it free?">
    <p>Yes, PrimitiveKit is open source and free to use.</p>
  </Collapse.Item>
</Collapse.Accordion>
```

## Accessibility

- ✅ ARIA expanded state
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader support

## Related Components

- [Tabs](/docs/react/tabs) - Tab navigation
- [Accordion](/docs/react/accordion) - Accordion component
- [Card](/docs/react/card) - Content container
