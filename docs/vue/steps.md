# Steps

# Steps

Navigation component for showing progress through a multi-step process or wizard.

## Import

```vue
import { Steps } from '@primitivekit/vue';
```

## Basic Usage

```vue
<Steps>Content</Steps>
```

## Props

No props available.







## Customization

The Steps component supports CSS variables for complete customization:

```vue
<Steps style={{
  '--steps-bg-color': '#007bff',
  '--steps-text-color': '#ffffff'
}}>Custom</Steps>
```

### Design Tokens

The following design tokens are available for customization:

- `--steps-gap`
- `--horizontal`
- `--vertical`
- `--steps-transition-duration`
- `--disabled`
- `--steps-icon-size`
- `--steps-icon-border-radius`
- `--steps-icon-border-width`
- `--steps-icon-font-size`
- `--wait`
- ... and 22 more

## Accessibility

The Steps component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Link](/docs/vue/link) - Navigation component for creating accessible hyperlinks with various styles.
- [Breadcrumb](/docs/vue/breadcrumb) - Navigation component for showing the current page location in a hierarchical structure.
- [Tabs](/docs/vue/tabs) - Navigation component for organizing content into multiple panels with tab selection.
- [Menu](/docs/vue/menu) - Navigation component for displaying a list of actions or navigation links.
- [Pagination](/docs/vue/pagination) - Navigation component for splitting content across multiple pages with page controls.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

