---
title: Empty
weight: 6
---

# Empty

An empty state component for displaying when there's no data.

## Import

```tsx
import { Empty } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Empty />
```

## With Description

```tsx
<Empty description="No data available" />
```

## With Image

```tsx
<Empty 
  image="/empty-state.svg"
  description="No items found"
/>
```

## With Action

```tsx
<Empty 
  description="No products found"
  action={
    <Button onClick={() => navigate('/products/new')}>
      Add Product
    </Button>
  }
/>
```

## Custom Content

```tsx
<Empty>
  <div>
    <h3>No Results</h3>
    <p>Try adjusting your search or filters</p>
    <Button>Clear Filters</Button>
  </div>
</Empty>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `string \| ReactNode` | - | Empty state image |
| `description` | `string \| ReactNode` | `'No data'` | Description text |
| `action` | `ReactNode` | - | Action button or element |
| `children` | `ReactNode` | - | Custom content |
| `className` | `string` | - | Additional CSS classes |

## Customization

```tsx
<Empty
  description="No items"
  style={{
    '--empty-padding': '48px',
    '--empty-color': 'rgba(150, 150, 150, 1)',
    '--empty-font-size': '16px',
  }}
/>
```

## Examples

### Search Results

```tsx
function SearchResults({ results, query }) {
  if (results.length === 0) {
    return (
      <Empty 
        description={`No results found for "${query}"`}
        action={
          <Button onClick={() => clearSearch()}>
            Clear Search
          </Button>
        }
      />
    );
  }

  return <ResultsList results={results} />;
}
```

### Empty Table

```tsx
<Table
  columns={columns}
  dataSource={[]}
  emptyText={
    <Empty 
      description="No users found"
      action={
        <Button onClick={() => navigate('/users/new')}>
          Add User
        </Button>
      }
    />
  }
/>
```

## Accessibility

- ✅ Semantic HTML
- ✅ Proper text alternatives
- ✅ Screen reader support

## Related Components

- [Skeleton](/docs/react/skeleton) - Loading placeholder
- [Spinner](/docs/react/spinner) - Loading indicator
- [Alert](/docs/react/alert) - Alert messages
