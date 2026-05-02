export const metadata = {
  title: 'Installation - PrimitiveKit React',
  description: 'Install @primitivekit/react in your project with npm, yarn, or pnpm',
}

export default function InstallationPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>Installation</h1>
      
      <p>
        Get started with @primitivekit/react by installing it via your preferred package manager.
      </p>

      <h2>NPM</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>npm install @primitivekit/react</code>
      </pre>

      <h2>Yarn</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>yarn add @primitivekit/react</code>
      </pre>

      <h2>pnpm</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>pnpm add @primitivekit/react</code>
      </pre>

      <h2>Import Design Tokens (Optional)</h2>
      <p>
        To use the design token CSS variables, import the tokens CSS file in your app:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`import '@primitivekit/react/tokens/tokens.css';`}</code>
      </pre>

      <h2>Basic Usage</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{`import { Button, Input } from '@primitivekit/react';

function App() {
  return (
    <div>
      <Input 
        label="Email" 
        placeholder="Enter your email" 
      />
      <Button variant="primary">
        Submit
      </Button>
    </div>
  );
}`}</code>
      </pre>

      <h2>Requirements</h2>
      <ul>
        <li>React 18.0.0 or higher</li>
        <li>React DOM 18.0.0 or higher</li>
      </ul>

      <h2>TypeScript Support</h2>
      <p>
        @primitivekit/react is written in TypeScript and includes type definitions out of the box.
        No additional @types packages needed!
      </p>

      <h2>Next Steps</h2>
      <ul>
        <li>
          <a href="/customization">Learn about customization</a>
        </li>
        <li>
          <a href="/design-tokens">Explore design tokens</a>
        </li>
        <li>
          <a href="/components/button">Browse components</a>
        </li>
      </ul>
    </div>
  )
}
