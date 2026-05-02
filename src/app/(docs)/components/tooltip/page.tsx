'use client'

import { Tooltip, Button } from '@primitivekit/react'

export default function TooltipPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Tooltip Component</h1>
        <p className="text-xl text-gray-600">
          Floating label that appears on hover or focus
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Tooltip, Button } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Tooltip content="Tooltip content">
            <Button>Hover me</Button>
          </Tooltip>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Tooltip content="Tooltip content">
  <Button>Hover me</Button>
</Tooltip>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Multiple placement options</li>
          <li>Trigger on hover or focus</li>
          <li>Customizable via CSS variables</li>
          <li>Accessible with ARIA labels</li>
        </ul>
      </section>
    </div>
  )
}
