'use client'

import { Button } from '@primitivekit/react'
import { Metadata } from 'next'

export default function ButtonPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Button Component</h1>
        <p className="text-xl text-gray-600">
          A versatile, accessible button component with multiple variants, sizes, and states.
        </p>
      </div>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Button } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Button>Click me</Button>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Button>Click me</Button>`}</code>
        </pre>
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <p className="text-gray-600 mb-4">
          The button comes with six built-in variants:
        </p>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}</code>
        </pre>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-4">
          Three sizes are available:
        </p>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 flex flex-wrap items-center gap-4">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}</code>
        </pre>
      </section>

      {/* States */}
      <section>
        <h2 className="text-2xl font-bold mb-4">States</h2>
        
        <h3 className="text-xl font-semibold mb-3">Disabled</h3>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Button disabled>Disabled Button</Button>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6">
          <code>{`<Button disabled>Disabled Button</Button>`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-3">Full Width</h3>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Button fullWidth>Full Width Button</Button>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Button fullWidth>Full Width Button</Button>`}</code>
        </pre>
      </section>

      {/* Props Table */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold">Prop</th>
                <th className="text-left p-3 font-semibold">Type</th>
                <th className="text-left p-3 font-semibold">Default</th>
                <th className="text-left p-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">variant</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'primary'</td>
                <td className="p-3">Button style variant</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'medium'</td>
                <td className="p-3">Button size</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3">Disable the button</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">fullWidth</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3">Make button full width</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">onClick</td>
                <td className="p-3 font-mono text-sm">function</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Click handler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Custom Styling */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Custom Styling</h2>
        <p className="text-gray-600 mb-4">
          Customize the button using CSS variables:
        </p>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Button
            style={{
              '--btn-bg-color': 'rgba(139, 92, 246, 1)',
              '--btn-border-radius': '2rem',
            } as React.CSSProperties}
          >
            Custom Purple Button
          </Button>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Button
  style={{
    '--btn-bg-color': 'rgba(139, 92, 246, 1)',
    '--btn-border-radius': '2rem',
  }}
>
  Custom Purple Button
</Button>`}</code>
        </pre>
      </section>
    </div>
  )
}
