# Table

# Table

A data table component with sorting, pagination, and customization.

## Import

```tsx
import { Table } from '@primitivekit/react';
```

## Basic Usage

```tsx
const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'role', title: 'Role', dataIndex: 'role' },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

<Table columns={columns} dataSource={data} rowKey="id" />
```

## Sizes

```tsx
<Table size="small" columns={columns} dataSource={data} />
<Table size="medium" columns={columns} dataSource={data} />
<Table size="large" columns={columns} dataSource={data} />
```

## Bordered

```tsx
<Table bordered columns={columns} dataSource={data} />
```

## Hoverable

```tsx
<Table hoverable columns={columns} dataSource={data} />
```

## Striped

```tsx
<Table striped columns={columns} dataSource={data} />
```

## With Sorting

```tsx
const columns = [
  { 
    key: 'name', 
    title: 'Name', 
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name)
  },
  { 
    key: 'age', 
    title: 'Age', 
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age
  },
];

<Table columns={columns} dataSource={data} />
```

## Custom Render

```tsx
const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { 
    key: 'status', 
    title: 'Status', 
    dataIndex: 'status',
    render: (status) => (
      <Badge colorScheme={status === 'active' ? 'success' : 'danger'}>
        {status}
      </Badge>
    )
  },
  {
    key: 'actions',
    title: 'Actions',
    render: (_, record) => (
      <Space>
        <Button size="small" onClick={() => handleEdit(record)}>Edit</Button>
        <Button size="small" variant="danger" onClick={() => handleDelete(record)}>Delete</Button>
      </Space>
    )
  }
];
```

## With Pagination

```tsx
<Table 
  columns={columns} 
  dataSource={data}
  pagination={{
    current: 1,
    pageSize: 10,
    total: 100,
    onChange: (page, pageSize) => console.log(page, pageSize)
  }}
/>
```

## Loading State

```tsx
<Table columns={columns} dataSource={[]} loading />
```

## Empty State

```tsx
<Table 
  columns={columns} 
  dataSource={[]}
  emptyText="No data available"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `TableColumn[]` | **required** | Table columns |
| `dataSource` | `any[]` | **required** | Table data |
| `rowKey` | `string \| function` | `'id'` | Unique row key |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Table size |
| `bordered` | `boolean` | `false` | Show borders |
| `hoverable` | `boolean` | `false` | Row hover effect |
| `striped` | `boolean` | `false` | Striped rows |
| `loading` | `boolean` | `false` | Loading state |
| `emptyText` | `ReactNode` | `'No data'` | Empty state text |
| `pagination` | `false \| PaginationConfig` | `false` | Pagination config |
| `onRow` | `function` | - | Row event handlers |
| `className` | `string` | - | Additional CSS classes |

### TableColumn Type

```tsx
interface TableColumn {
  key: string;
  title: ReactNode;
  dataIndex?: string;
  render?: (value: any, record: any, index: number) => ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  sorter?: boolean | ((a: any, b: any) => number);
  fixed?: 'left' | 'right';
}
```

## Customization

```tsx
<Table
  columns={columns}
  dataSource={data}
  cssVariables={{
    '--table-border-color': 'rgba(200, 200, 200, 1)',
    '--table-header-background': 'rgba(240, 240, 240, 1)',
    '--table-row-hover-background': 'rgba(230, 240, 255, 1)',
    '--table-cell-padding': '16px',
  }}
/>
```

## Examples

### User Management Table

```tsx
function UserTable() {
  const columns = [
    {
      key: 'avatar',
      title: '',
      render: (_, user) => <Avatar src={user.avatar} size="small" />
    },
    { key: 'name', title: 'Name', dataIndex: 'name', sorter: true },
    { key: 'email', title: 'Email', dataIndex: 'email' },
    {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      render: (role) => <Badge>{role}</Badge>
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      render: (status) => (
        <Badge colorScheme={status === 'active' ? 'success' : 'danger'}>
          {status}
        </Badge>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (_, user) => (
        <Space>
          <Button size="small">Edit</Button>
          <Button size="small" variant="danger">Delete</Button>
        </Space>
      )
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey="id"
      hoverable
      pagination={{
        pageSize: 10,
        total: users.length
      }}
    />
  );
}
```

## Accessibility

- ✅ Semantic table markup
- ✅ Proper headers
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Sort announcements

## Related Components

- [Pagination](/docs/react/pagination) - Page navigation
- [Badge](/docs/react/badge) - Status indicators
- [Button](/docs/react/button) - Action buttons

