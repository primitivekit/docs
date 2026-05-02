'use client'

import { Spinner } from '@primitivekit/react'

export default function SpinnerPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Spinner Component</h1>
        <p className="text-xl text-gray-600">
          Loading indicator component with different sizes and variants.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Spinner } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Spinner />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Spinner />`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 flex items-center gap-6">
          <Spinner size="small" />
          <Spinner size="medium" />
          <Spinner size="large" />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Spinner size="small" />
<Spinner size="medium" />
<Spinner size="large" />`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Multiple sizes</li>
          <li>Smooth animations</li>
          <li>Customizable colors via CSS variables</li>
          <li>Accessible with ARIA labels</li>
        </ul>
      </section>
    </div>
  )
}
