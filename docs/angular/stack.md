# Stack

# Stack

Layout component for arranging children in a vertical or horizontal stack with consistent spacing.

## Import

```typescript
import { StackComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-stack>Content</pk-stack>
```

## Props

No props available.







## Customization

The Stack component supports CSS variables for complete customization:

```typescript
<pk-stack [style]="{
  '--stack-bg-color': '#007bff',
  '--stack-text-color': '#ffffff'
}">Custom</pk-stack>
```

### Design Tokens

The following design tokens are available for customization:

- `--stack-gap`
- `--stack-direction`
- `--stack-align-items`
- `--stack-justify-content`
- `--horizontal`
- `--vertical`
- `--align-start`
- `--align-center`
- `--align-end`
- `--align-stretch`
- ... and 7 more

## Accessibility

The Stack component is fully accessible and follows WCAG 2.1 AA standards:

- ✅ Semantic HTML elements
- ✅ Keyboard accessible
- ✅ Focus visible indicator
- ✅ Proper ARIA attributes
- ✅ Screen reader compatible
- ✅ Touch target size (44x44px minimum)
- ✅ Color contrast compliance

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus to/from component |



## Related Components

- [Card](/docs/angular/card) - Container component for grouping related content with optional header, body, and footer sections.
- [Container](/docs/angular/container) - Layout component for constraining content width and centering content on the page.
- [Grid](/docs/angular/grid) - Layout component for creating responsive grid layouts with customizable columns and gaps.
- [Space](/docs/angular/space) - Layout component for adding consistent spacing between elements.
- [Divider](/docs/angular/divider) - Visual separator component for dividing content sections horizontally or vertically.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

