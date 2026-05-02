'use client'

import { useState } from 'react'
import { Drawer, Button } from '@primitivekit/react'

export default function DrawerPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Drawer Component</h1>
        <p className="text-xl text-gray-600">
          Sliding panel component for navigation or additional content
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Drawer, Button } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
          <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Drawer Content</h3>
              <p>This is the drawer content.</p>
            </div>
          </Drawer>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`const [isOpen, setIsOpen] = useState(false)

<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
<Drawer open={isOpen} onClose={() => setIsOpen(false)}>
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-4">Drawer Content</h3>
    <p>This is the drawer content.</p>
  </div>
</Drawer>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Slide from left, right, top, or bottom</li>
          <li>Keyboard navigation support</li>
          <li>Focus trap when open</li>
          <li>Customizable via CSS variables</li>
          <li>TypeScript support included</li>
        </ul>
      </section>
    </div>
  )
}
