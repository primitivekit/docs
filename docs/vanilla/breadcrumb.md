# Breadcrumb

# Breadcrumb

Navigation component for showing the current page location in a hierarchical structure.

## Import

```javascript
import { Breadcrumb } from '@primitivekit/vanilla';
```

## Basic Usage

```javascript
const breadcrumb = new Breadcrumb({ /* options */ });
document.body.appendChild(breadcrumb.element);
```

## Props

No props available.







## Customization

The Breadcrumb component supports CSS variables for complete customization:

```javascript
const breadcrumb = new Breadcrumb({
  style: {
    '--breadcrumb-bg-color': '#007bff',
    '--breadcrumb-text-color': '#ffffff'
  }
});
```

### Design Tokens

The following design tokens are available for customization:

- `--breadcrumb-bg-color`
- `--breadcrumb-padding-top`
- `--breadcrumb-padding-y`
- `--breadcrumb-padding-right`
- `--breadcrumb-padding-x`
- `--breadcrumb-padding-bottom`
- `--breadcrumb-padding-left`
- `--breadcrumb-gap`
- `--breadcrumb-item-color`
- `--breadcrumb-item-color-hover`
- ... and 34 more

## Accessibility

The Breadcrumb component is fully accessible and follows WCAG 2.1 AA standards:

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

- [Link](/docs/vanilla/link) - Navigation component for creating accessible hyperlinks with various styles.
- [Tabs](/docs/vanilla/tabs) - Navigation component for organizing content into multiple panels with tab selection.
- [Menu](/docs/vanilla/menu) - Navigation component for displaying a list of actions or navigation links.
- [Steps](/docs/vanilla/steps) - Navigation component for showing progress through a multi-step process or wizard.
- [Pagination](/docs/vanilla/pagination) - Navigation component for splitting content across multiple pages with page controls.

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)

