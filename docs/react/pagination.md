# Pagination

# Pagination

A pagination component for navigating through pages of content.

## Import

```tsx
import { Pagination } from '@primitivekit/react';
```

## Basic Usage

```tsx
<Pagination 
  total={100} 
  pageSize={10}
  onChange={(page) => console.log(page)}
/>
```

## Controlled

```tsx
import { useState } from 'react';

function ControlledPagination() {
  const [current, setCurrent] = useState(1);

  return (
    <Pagination
      current={current}
      total={100}
      pageSize={10}
      onChange={setCurrent}
    />
  );
}
```

## Sizes

```tsx
<Pagination size="small" total={100} />
<Pagination size="medium" total={100} />
<Pagination size="large" total={100} />
```

## Show Size Changer

```tsx
<Pagination
  total={100}
  showSizeChanger
  onShowSizeChange={(current, size) => console.log(current, size)}
/>
```

## Show Total

```tsx
<Pagination
  total={100}
  showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
/>
```

## Simple Mode

```tsx
<Pagination total={100} simple />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `total` | `number` | **required** | Total number of items |
| `current` | `number` | `1` | Current page |
| `pageSize` | `number` | `10` | Items per page |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Pagination size |
| `simple` | `boolean` | `false` | Simple mode |
| `showSizeChanger` | `boolean` | `false` | Show page size selector |
| `showTotal` | `function` | - | Show total items |
| `onChange` | `function` | - | Page change handler |
| `onShowSizeChange` | `function` | - | Page size change handler |
| `className` | `string` | - | Additional CSS classes |

## Customization

```tsx
<Pagination
  total={100}
  style={{
    '--pagination-item-size': '40px',
    '--pagination-item-bg': 'rgba(255, 255, 255, 1)',
    '--pagination-item-bg-active': 'rgba(0, 100, 255, 1)',
    '--pagination-item-color-active': 'rgba(255, 255, 255, 1)',
  }}
/>
```

## Examples

### With Table

```tsx
function PaginatedTable() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const data = getData(current, pageSize);

  return (
    <div>
      <Table dataSource={data} columns={columns} />
      
      <Pagination
        current={current}
        pageSize={pageSize}
        total={1000}
        onChange={setCurrent}
        onShowSizeChange={(_, size) => setPageSize(size)}
        showSizeChanger
        showTotal={(total, range) => 
          `${range[0]}-${range[1]} of ${total} items`
        }
      />
    </div>
  );
}
```

## Accessibility

- ✅ ARIA navigation role
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader support

## Related Components

- [Table](/docs/react/table) - Data table
- [Button](/docs/react/button) - Action buttons

