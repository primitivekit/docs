'use client'

import { Card } from '@primitivekit/react'

export default function CardPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Card Component</h1>
        <p className="text-xl text-gray-600">
          Container component for grouping related content with elevation and borders.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Card } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Card>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Card Title</h3>
              <p className="text-gray-600">This is a basic card with some content inside.</p>
            </div>
          </Card>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Card>
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-gray-600">This is a basic card with some content inside.</p>
  </div>
</Card>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 space-y-4">
          <Card variant="elevated">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Elevated Card</h3>
              <p className="text-gray-600">Card with shadow elevation</p>
            </div>
          </Card>
          <Card variant="outlined">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Outlined Card</h3>
              <p className="text-gray-600">Card with border outline</p>
            </div>
          </Card>
          <Card variant="filled">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Filled Card</h3>
              <p className="text-gray-600">Card with filled background</p>
            </div>
          </Card>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Card variant="elevated">Elevated Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="filled">Filled Card</Card>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Hoverable</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Card hoverable>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Hoverable Card</h3>
              <p className="text-gray-600">Hover over this card to see the effect</p>
            </div>
          </Card>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Card hoverable>
  <div className="p-4">
    <h3 className="font-semibold mb-2">Hoverable Card</h3>
    <p className="text-gray-600">Hover over this card to see the effect</p>
  </div>
</Card>`}</code>
        </pre>
      </section>

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
                <td className="p-3 font-mono text-sm">'elevated'</td>
                <td className="p-3">Card style variant</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">hoverable</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3">Enable hover effect</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">clickable</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3">Make card clickable</td>
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
    </div>
  )
}
