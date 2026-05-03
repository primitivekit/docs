# Tabs

# Tabs

Navigation component for organizing content into multiple panels with tab selection.

## Import

```svelte
import Tabs from '@primitivekit/svelte/Tabs.svelte';
```

## Basic Usage

```svelte
<Tabs>Content</Tabs>
```

## Props

No props available.







## Customization

The Tabs component supports CSS variables for complete customization:

```svelte
<Tabs style={{
  '--tabs-bg-color': '#007bff',
  '--tabs-text-color': '#ffffff'
}}>Custom</Tabs>
```

### Design Tokens

The following design tokens are available for customization:

- `--tabs-bg-color`
- `--tabs-border-color`
- `--tabs-border-width`
- `--tabs-border-radius`
- `--tabs-padding`
- `--tabs-gap`
- `--tabs-list-bg-color`
- `--tabs-list-border-color`
- `--tabs-list-border-width`
- `--tabs-list-padding`
- ... and 60 more

## Accessibility

The Tabs component is fully accessible and follows WCAG 2.1 AA standards:

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
| `Enter` | Activate component |
| `Space` | Activate component |


## Related Components

- [Link](/docs/svelte/link) - Navigation component for creating accessible hyperlinks with various styles.
- [Breadcrumb](/docs/svelte/breadcrumb) - Navigation component for showing the current page location in a hierarchical structure.
- [Menu](/docs/svelte/menu) - Navigation component for displaying a list of actions or navigation links.
- [Steps](/docs/svelte/steps) - Navigation component for showing progress through a multi-step process or wizard.
- [Pagination](/docs/svelte/pagination) - Navigation component for splitting content across multiple pages with page controls.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

