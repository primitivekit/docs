import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer/MarkdownRenderer';

const content = `
# Accessibility

Our components are built with accessibility as a core principle, following WCAG 2.1 Level AA guidelines.

## Button Accessibility Features

### ARIA Attributes

The Button component supports all necessary ARIA attributes:

\`\`\`jsx
<Button
  ariaLabel="Close dialog"
  ariaDescribedBy="dialog-description"
  ariaPressed={isPressed}
  ariaExpanded={isExpanded}
  ariaControls="menu-id"
  ariaHasPopup="menu"
>
  Menu
</Button>
\`\`\`

### Keyboard Navigation

All buttons are fully keyboard accessible:

- **Tab** - Focus the button
- **Enter** or **Space** - Activate the button
- **Shift + Tab** - Move focus backward

### Focus Management

Buttons include visible focus indicators that meet WCAG requirements:

\`\`\`css
/* Automatic focus styles */
.btn:focus-visible {
  outline: 2px solid var(--btn-outline-color);
  outline-offset: 2px;
}
\`\`\`

You can customize focus styles:

\`\`\`css
:root {
  --btn-outline-color: #3b82f6;
  --btn-outline-width: 2px;
  --btn-outline-offset: 2px;
}
\`\`\`

### Screen Reader Support

#### Loading State

When a button is in loading state, screen readers announce it properly:

\`\`\`jsx
<Button loading loadingText="Saving changes">
  Save
</Button>
\`\`\`

This renders with:
- \`aria-busy="true"\` - Indicates the button is processing
- \`aria-disabled="true"\` - Prevents interaction during loading
- Loading text is announced to screen readers

#### Icons

Icons are properly hidden from screen readers:

\`\`\`jsx
<Button
  leftIcon={<SaveIcon />}
  ariaLabel="Save document"
>
  Save
</Button>
\`\`\`

Icons have \`aria-hidden="true"\` to prevent redundant announcements.

### Disabled State

Disabled buttons are properly communicated:

\`\`\`jsx
<Button disabled>
  Cannot Click
</Button>
\`\`\`

This includes:
- \`disabled\` attribute for native behavior
- \`aria-disabled="true"\` for assistive technologies
- Visual styling with reduced opacity
- Cursor change to \`not-allowed\`

## Color Contrast

All default color variants meet WCAG AA contrast requirements (4.5:1 for normal text).

### Checking Your Custom Colors

When customizing colors, ensure they meet contrast requirements:

\`\`\`jsx
// Good - High contrast
<Button style={{ 
  '--btn-bg-color': '#1e40af',
  '--btn-text-color': '#ffffff'
}}>
  High Contrast
</Button>

// Bad - Low contrast (avoid)
<Button style={{ 
  '--btn-bg-color': '#fef3c7',
  '--btn-text-color': '#fef08a'
}}>
  Low Contrast
</Button>
\`\`\`

Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify your custom colors.

## Reduced Motion

The library respects user motion preferences:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  .btn {
    --btn-transition-duration: 0.01ms;
    --btn-transform-hover: none;
  }
}
\`\`\`

Users who prefer reduced motion won't see animations or transforms.

## High Contrast Mode

Components work properly in high contrast mode:

\`\`\`css
@media (prefers-contrast: high) {
  .btn {
    --btn-border-width: 2px;
  }
}
\`\`\`

## Best Practices

### 1. Always Provide Meaningful Labels

\`\`\`jsx
// Good
<Button ariaLabel="Delete item">
  <TrashIcon />
</Button>

// Bad - Screen readers can't understand the icon
<Button>
  <TrashIcon />
</Button>
\`\`\`

### 2. Use Semantic HTML

Buttons use the native \`<button>\` element, which provides:
- Keyboard accessibility by default
- Proper role announcement
- Expected behavior for assistive technologies

### 3. Indicate State Changes

\`\`\`jsx
// Toggle button
<Button
  ariaPressed={isActive}
  onClick={() => setIsActive(!isActive)}
>
  {isActive ? 'Active' : 'Inactive'}
</Button>

// Expandable button
<Button
  ariaExpanded={isOpen}
  ariaControls="panel-id"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? 'Collapse' : 'Expand'}
</Button>
\`\`\`

### 4. Provide Loading Feedback

\`\`\`jsx
<Button
  loading={isSubmitting}
  loadingText="Submitting form..."
  onClick={handleSubmit}
>
  Submit
</Button>
\`\`\`

### 5. Group Related Buttons

\`\`\`jsx
<div role="group" aria-label="Document actions">
  <Button>Save</Button>
  <Button>Cancel</Button>
  <Button>Delete</Button>
</div>
\`\`\`

## Testing Accessibility

### Keyboard Testing

1. Navigate to the button using Tab
2. Activate using Enter or Space
3. Verify focus is visible
4. Check that disabled buttons can't be activated

### Screen Reader Testing

Test with popular screen readers:
- **NVDA** (Windows, free)
- **JAWS** (Windows)
- **VoiceOver** (macOS/iOS)
- **TalkBack** (Android)

### Automated Testing

Use tools like:
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Manual Testing

1. Zoom to 200% - Ensure buttons remain usable
2. Use keyboard only - Verify all functionality works
3. Enable high contrast mode - Check visibility
4. Test with reduced motion - Verify animations are disabled

## WCAG Compliance Checklist

- ✅ Keyboard accessible
- ✅ Focus visible
- ✅ Color contrast meets AA standards
- ✅ Works with screen readers
- ✅ Respects reduced motion
- ✅ Supports high contrast mode
- ✅ Proper ARIA attributes
- ✅ Semantic HTML
- ✅ State changes announced
- ✅ Loading states communicated

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
`;

const Accessibility = () => {
  return <MarkdownRenderer content={content} />;
};

export default Accessibility;
