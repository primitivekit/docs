'use client'

import { Alert } from '@primitivekit/react'
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react'

export default function AlertPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Alert Component</h1>
        <p className="text-xl text-gray-600">
          A flexible alert component for displaying important messages with different statuses and variants.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Alert } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 space-y-4">
          <Alert status="info">This is an informational alert</Alert>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Alert status="info">This is an informational alert</Alert>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Status Variants</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 space-y-4">
          <Alert status="info" icon={<Info size={20} />}>
            This is an info alert with an icon
          </Alert>
          <Alert status="success" icon={<CheckCircle size={20} />}>
            This is a success alert with an icon
          </Alert>
          <Alert status="warning" icon={<AlertTriangle size={20} />}>
            This is a warning alert with an icon
          </Alert>
          <Alert status="error" icon={<XCircle size={20} />}>
            This is an error alert with an icon
          </Alert>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Alert status="info" icon={<Info size={20} />}>
  This is an info alert with an icon
</Alert>
<Alert status="success" icon={<CheckCircle size={20} />}>
  This is a success alert with an icon
</Alert>
<Alert status="warning" icon={<AlertTriangle size={20} />}>
  This is a warning alert with an icon
</Alert>
<Alert status="error" icon={<XCircle size={20} />}>
  This is an error alert with an icon
</Alert>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Style Variants</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 space-y-4">
          <Alert variant="solid" status="info">Solid variant</Alert>
          <Alert variant="subtle" status="success">Subtle variant</Alert>
          <Alert variant="left-accent" status="warning">Left accent variant</Alert>
          <Alert variant="top-accent" status="error">Top accent variant</Alert>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Alert variant="solid" status="info">Solid variant</Alert>
<Alert variant="subtle" status="success">Subtle variant</Alert>
<Alert variant="left-accent" status="warning">Left accent variant</Alert>
<Alert variant="top-accent" status="error">Top accent variant</Alert>`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">With Title</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Alert status="success" title="Success!" icon={<CheckCircle size={20} />}>
            Your changes have been saved successfully.
          </Alert>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Alert status="success" title="Success!" icon={<CheckCircle size={20} />}>
  Your changes have been saved successfully.
</Alert>`}</code>
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
                <td className="p-3 font-mono text-sm">status</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'info'</td>
                <td className="p-3">Alert status (info, success, warning, error)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">variant</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'subtle'</td>
                <td className="p-3">Visual style variant</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">title</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Alert title</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">icon</td>
                <td className="p-3 font-mono text-sm">ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Custom icon</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">onClose</td>
                <td className="p-3 font-mono text-sm">function</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Close handler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
