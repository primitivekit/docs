'use client'

import { Space } from '@primitivekit/react'

export default function SpacePage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Space Component</h1>
        <p className="text-xl text-gray-600">
          Layout component for adding consistent spacing between elements
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Space } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Space>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </Space>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Space>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Space>`}</code>
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
          Customize the space using CSS variables:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Space
  style={{
    '--space-bg-color': 'rgba(59, 130, 246, 1)',
    '--space-text-color': 'rgba(255, 255, 255, 1)',
  } as React.CSSProperties}
/>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
        <p className="text-gray-600 mb-4">
          The Space component follows WCAG 2.1 AA standards:
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
