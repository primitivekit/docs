'use client'

import { Breadcrumb } from '@primitivekit/react'

export default function BreadcrumbPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Breadcrumb Component</h1>
        <p className="text-xl text-gray-600">
          Navigation component showing the current page location in the hierarchy
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Breadcrumb } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Breadcrumb
            items={[
              { id: '1', label: 'Home', href: '/' },
              { id: '2', label: 'Components', href: '/components' },
              { id: '3', label: 'Breadcrumb' },
            ]}
          />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Breadcrumb
  items={[
    { id: '1', label: 'Home', href: '/' },
    { id: '2', label: 'Components', href: '/components' },
    { id: '3', label: 'Breadcrumb' },
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
          Customize the breadcrumb using CSS variables:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Breadcrumb
  style={{
    '--breadcrumb-bg-color': 'rgba(59, 130, 246, 1)',
    '--breadcrumb-text-color': 'rgba(255, 255, 255, 1)',
  } as React.CSSProperties}
/>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
        <p className="text-gray-600 mb-4">
          The Breadcrumb component follows WCAG 2.1 AA standards:
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
