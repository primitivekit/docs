# Container

# Container

Layout component for constraining content width and centering content on the page.

## Import

```astro
import { Container } from '@primitivekit/astro';
```

## Basic Usage

```astro
<Container>Content</Container>
```

## Props

No props available.







## Customization

The Container component supports CSS variables for complete customization:

```astro
<Container style={{
  '--container-bg-color': '#007bff',
  '--container-text-color': '#ffffff'
}}>Custom</Container>
```

### Design Tokens

The following design tokens are available for customization:

- `--container-max-width`
- `--container-padding-x`
- `--container-padding-y`
- `--sm`
- `--md`
- `--lg`
- `--xl`
- `--2xl`
- `--full`
- `--center`

## Accessibility

The Container component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Card](/docs/astro/card) - Container component for grouping related content with optional header, body, and footer sections.
- [Grid](/docs/astro/grid) - Layout component for creating responsive grid layouts with customizable columns and gaps.
- [Stack](/docs/astro/stack) - Layout component for arranging children in a vertical or horizontal stack with consistent spacing.
- [Space](/docs/astro/space) - Layout component for adding consistent spacing between elements.
- [Divider](/docs/astro/divider) - Visual separator component for dividing content sections horizontally or vertically.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

