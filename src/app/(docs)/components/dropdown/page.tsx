'use client'

import { Dropdown, Button } from '@primitivekit/react'

export default function DropdownPage() {
  const items = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ]

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Dropdown Component</h1>
        <p className="text-xl text-gray-600">
          Menu component for displaying a list of actions or options
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Dropdown, Button } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Dropdown items={items}>
            <Button>Open Menu</Button>
          </Dropdown>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`const items = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
]

<Dropdown items={items}>
  <Button>Open Menu</Button>
</Dropdown>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Keyboard navigation support</li>
          <li>Multiple placement options</li>
          <li>Customizable via CSS variables</li>
          <li>TypeScript support included</li>
        </ul>
      </section>
    </div>
  )
}
