'use client'

import { Input } from '@primitivekit/react'
import { Mail, Lock, Search } from 'lucide-react'

export default function InputPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Input Component</h1>
        <p className="text-xl text-gray-600">
          A flexible input component with multiple variants, sizes, states, and validation support.
        </p>
      </div>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import { Input } from '@primitivekit/react';`}</code>
        </pre>
      </section>

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Input label="Email" placeholder="Enter your email" />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Input label="Email" placeholder="Enter your email" />`}</code>
        </pre>
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 space-y-4">
          <Input variant="default" label="Default" placeholder="Default variant" />
          <Input variant="filled" label="Filled" placeholder="Filled variant" />
          <Input variant="flushed" label="Flushed" placeholder="Flushed variant" />
          <Input variant="unstyled" label="Unstyled" placeholder="Unstyled variant" />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Input variant="default" label="Default" placeholder="Default variant" />
<Input variant="filled" label="Filled" placeholder="Filled variant" />
<Input variant="flushed" label="Flushed" placeholder="Flushed variant" />
<Input variant="unstyled" label="Unstyled" placeholder="Unstyled variant" />`}</code>
        </pre>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 space-y-4">
          <Input size="small" label="Small" placeholder="Small input" />
          <Input size="medium" label="Medium" placeholder="Medium input" />
          <Input size="large" label="Large" placeholder="Large input" />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Input size="small" label="Small" placeholder="Small input" />
<Input size="medium" label="Medium" placeholder="Medium input" />
<Input size="large" label="Large" placeholder="Large input" />`}</code>
        </pre>
      </section>

      {/* States */}
      <section>
        <h2 className="text-2xl font-bold mb-4">States</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 space-y-4">
          <Input label="Default" placeholder="Default state" />
          <Input label="Error" error="This field is required" placeholder="Error state" />
          <Input label="Success" success="Looks good!" placeholder="Success state" />
          <Input label="Warning" warning="Please verify" placeholder="Warning state" />
          <Input label="Disabled" disabled placeholder="Disabled state" />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Input label="Default" placeholder="Default state" />
<Input label="Error" error="This field is required" placeholder="Error state" />
<Input label="Success" success="Looks good!" placeholder="Success state" />
<Input label="Warning" warning="Please verify" placeholder="Warning state" />
<Input label="Disabled" disabled placeholder="Disabled state" />`}</code>
        </pre>
      </section>

      {/* With Icons */}
      <section>
        <h2 className="text-2xl font-bold mb-4">With Icons</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4 space-y-4">
          <Input
            label="Email"
            placeholder="Enter your email"
            leftElement={<Mail size={20} />}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            leftElement={<Lock size={20} />}
          />
          <Input
            label="Search"
            placeholder="Search..."
            rightElement={<Search size={20} />}
          />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Input
  label="Email"
  placeholder="Enter your email"
  leftElement={<Mail size={20} />}
/>
<Input
  label="Password"
  type="password"
  placeholder="Enter your password"
  leftElement={<Lock size={20} />}
/>
<Input
  label="Search"
  placeholder="Search..."
  rightElement={<Search size={20} />}
/>`}</code>
        </pre>
      </section>

      {/* Helper Text */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Helper Text</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-4">
          <Input
            label="Email"
            placeholder="Enter your email"
            helperText="We'll never share your email with anyone else."
          />
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Input
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email with anyone else."
/>`}</code>
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
                <td className="p-3 font-mono text-sm">'default'</td>
                <td className="p-3">Visual style variant</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'medium'</td>
                <td className="p-3">Input size</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">state</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'default'</td>
                <td className="p-3">Validation state</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">label</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Label text</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">helperText</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Helper text below input</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">error</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Error message</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">leftElement</td>
                <td className="p-3 font-mono text-sm">ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Icon or element on left</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">rightElement</td>
                <td className="p-3 font-mono text-sm">ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3">Icon or element on right</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3">Disable the input</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">fullWidth</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3">Make input full width</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
