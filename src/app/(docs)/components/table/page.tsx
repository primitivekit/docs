'use client'

import { Table } from '@primitivekit/react'

export default function TablePage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Table Component</h1>
        <p className="text-xl text-gray-600">
          Data table component with sorting and pagination support
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Table } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Table
            columns={[
              { key: 'name', title: 'Name', dataIndex: 'name' },
              { key: 'age', title: 'Age', dataIndex: 'age' },
            ]}
            dataSource={[
              { key: '1', name: 'John', age: 30 },
              { key: '2', name: 'Jane', age: 25 },
            ]}
          />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Table
  columns={[
    { key: 'name', title: 'Name', dataIndex: 'name' },
    { key: 'age', title: 'Age', dataIndex: 'age' },
  ]}
  dataSource={[
    { key: '1', name: 'John', age: 30 },
    { key: '2', name: 'Jane', age: 25 },
  ]}
/>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Fully accessible with ARIA attributes</li>
          <li>Keyboard navigation support</li>
          <li>Customizable via CSS variables</li>
          <li>TypeScript support included</li>
          <li>Responsive and mobile-friendly</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Customization</h2>
        <p className="text-gray-600 mb-4">
          Customize the table using CSS variables:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Table
  style={{
    '--table-bg-color': 'rgba(59, 130, 246, 1)',
    '--table-text-color': 'rgba(255, 255, 255, 1)',
  } as React.CSSProperties}
/>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
        <p className="text-gray-600 mb-4">
          The Table component follows WCAG 2.1 AA standards:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Proper ARIA labels and roles</li>
          <li>Keyboard navigation support</li>
          <li>Screen reader compatible</li>
          <li>Focus management</li>
        </ul>
      </section>
    </div>
  )
}
