'use client'

import { Popover, Button } from '@primitivekit/react'

export default function PopoverPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Popover Component</h1>
        <p className="text-xl text-gray-600">
          Floating content container triggered by user interaction
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Popover, Button } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Popover content={<div className="p-2">Popover content</div>}>
            <Button>Hover me</Button>
          </Popover>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Popover content={<div className="p-2">Popover content</div>}>
  <Button>Hover me</Button>
</Popover>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Multiple placement options</li>
          <li>Trigger on hover, click, or focus</li>
          <li>Customizable via CSS variables</li>
          <li>TypeScript support included</li>
        </ul>
      </section>
    </div>
  )
}
