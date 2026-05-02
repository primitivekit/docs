---
title: Accessibility
weight: 3
---

PrimitiveKit components are built with accessibility as a core principle, following WCAG 2.1 AA standards.

## Overview

Every component in PrimitiveKit is designed to be accessible by default:

- ✅ Semantic HTML elements
- ✅ ARIA attributes where needed
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Focus management
- ✅ Color contrast compliance

## Keyboard Navigation

All interactive components support keyboard navigation:

| Key | Action |
|-----|--------|
| `Tab` | Move focus to next interactive element |
| `Shift + Tab` | Move focus to previous interactive element |
| `Enter / Space` | Activate buttons and links |
| `Arrow Keys` | Navigate within components (tabs, menus, etc.) |
| `Escape` | Close modals, dropdowns, and overlays |

## Screen Reader Support

Components include proper ARIA labels and descriptions for screen readers:

```jsx
<Button aria-label="Close dialog">
  <X size={20} />
</Button>

<Input
  label="Email"
  aria-describedby="email-help"
  aria-required="true"
/>
<span id="email-help">
  We'll never share your email
</span>
```

## Focus Management

Components handle focus appropriately:

- ✅ Visible focus indicators on all interactive elements
- ✅ Focus trap in modals and drawers
- ✅ Focus restoration when closing overlays
- ✅ Skip links for navigation

### Custom Focus Styles

```css
:root {
  --focus-ring-color: rgba(59, 130, 246, 0.5);
  --focus-ring-width: 3px;
  --focus-ring-offset: 2px;
}
```

## Color Contrast

All default color combinations meet WCAG 2.1 AA standards:

- ✅ Text contrast ratio of at least 4.5:1
- ✅ Large text contrast ratio of at least 3:1
- ✅ Interactive element contrast ratio of at least 3:1

**Note:** When customizing colors, ensure you maintain proper contrast ratios for accessibility.

## ARIA Attributes

Components use appropriate ARIA attributes:

### Buttons

```jsx
<Button aria-label="Delete item" aria-pressed="false" />
```

### Form Inputs

```jsx
<Input
  aria-required="true"
  aria-invalid="false"
  aria-describedby="help-text"
/>
```

### Modals

```jsx
<Modal
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
/>
```

## Testing Accessibility

We recommend testing your implementation with:

- ✅ Screen readers (NVDA, JAWS, VoiceOver)
- ✅ Keyboard-only navigation
- ✅ Browser accessibility tools (Lighthouse, axe DevTools)
- ✅ Color contrast checkers

**Important:** While PrimitiveKit components are accessible by default, full WCAG compliance requires proper implementation and testing in your specific application context.

## Resources

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
