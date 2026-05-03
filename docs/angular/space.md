# Space

# Space

Layout component for adding consistent spacing between elements.

## Import

```typescript
import { SpaceComponent } from '@primitivekit/angular';
```

## Basic Usage

```typescript
<pk-space>Content</pk-space>
```

## Props

No props available.







## Customization

The Space component supports CSS variables for complete customization:

```typescript
<pk-space [style]="{
  '--space-bg-color': '#007bff',
  '--space-text-color': '#ffffff'
}">Custom</pk-space>
```

### Design Tokens

The following design tokens are available for customization:

- `--space-gap`
- `--horizontal`
- `--vertical`
- `--small`
- `--medium`
- `--large`
- `--align-start`
- `--align-end`
- `--align-center`
- `--align-baseline`
- ... and 1 more

## Accessibility

The Space component is fully accessible and follows WCAG 2.1 AA standards:

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
- [Stack](/docs/angular/stack) - Layout component for arranging children in a vertical or horizontal stack with consistent spacing.
- [Divider](/docs/angular/divider) - Visual separator component for dividing content sections horizontally or vertically.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

