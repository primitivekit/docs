# Grid

# Grid

Layout component for creating responsive grid layouts with customizable columns and gaps.

## Import

```svelte
import Grid from '@primitivekit/svelte/Grid.svelte';
```

## Basic Usage

```svelte
<Grid>Content</Grid>
```

## Props

No props available.







## Customization

The Grid component supports CSS variables for complete customization:

```svelte
<Grid style={{
  '--grid-bg-color': '#007bff',
  '--grid-text-color': '#ffffff'
}}>Custom</Grid>
```

### Design Tokens

The following design tokens are available for customization:

- `--grid-columns`
- `--grid-gap`
- `--grid-row-gap`
- `--grid-column-gap`
- `--grid-auto-rows`
- `--grid-auto-columns`

## Accessibility

The Grid component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Card](/docs/svelte/card) - Container component for grouping related content with optional header, body, and footer sections.
- [Container](/docs/svelte/container) - Layout component for constraining content width and centering content on the page.
- [Stack](/docs/svelte/stack) - Layout component for arranging children in a vertical or horizontal stack with consistent spacing.
- [Space](/docs/svelte/space) - Layout component for adding consistent spacing between elements.
- [Divider](/docs/svelte/divider) - Visual separator component for dividing content sections horizontally or vertically.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

