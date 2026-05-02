'use client'

import { Badge } from '@primitivekit/react'

export default function BadgePage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Badge Component</h1>
        <p className="text-xl text-gray-600">
          Small count and labeling component for displaying status or notifications.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Badge } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Badge>New</Badge>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Badge>New</Badge>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 flex flex-wrap gap-4">
          <Badge variant="solid">Solid</Badge>
          <Badge variant="subtle">Subtle</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Badge variant="solid">Solid</Badge>
<Badge variant="subtle">Subtle</Badge>
<Badge variant="outline">Outline</Badge>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Colors</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 flex flex-wrap gap-4">
          <Badge colorScheme="primary">Primary</Badge>
          <Badge colorScheme="success">Success</Badge>
          <Badge colorScheme="warning">Warning</Badge>
          <Badge colorScheme="danger">Danger</Badge>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Badge colorScheme="primary">Primary</Badge>
<Badge colorScheme="success">Success</Badge>
<Badge colorScheme="warning">Warning</Badge>
<Badge colorScheme="danger">Danger</Badge>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Multiple color schemes</li>
          <li>Different visual variants</li>
          <li>Customizable via CSS variables</li>
          <li>TypeScript support included</li>
        </ul>
      </section>
    </div>
  )
}
