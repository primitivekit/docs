export const metadata = {
  title: 'Customization - PrimitiveKit React',
  description: 'Learn how to customize PrimitiveKit components using CSS variables and design tokens',
}

export default function CustomizationPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Customization</h1>
        <p className="text-xl text-gray-600">
          PrimitiveKit components are built with zero hardcoded values. Every visual property is customizable via CSS variables.
        </p>
      </div>

      {/* CSS Variables */}
      <section>
        <h2 className="text-2xl font-bold mb-4">CSS Variables</h2>
        <p className="text-gray-600 mb-4">
          Each component exposes 50-150+ CSS variables that control every aspect of its appearance.
          You can customize these variables globally or per-component instance.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`/* Global customization */
:root {
  --btn-bg-color: rgba(59, 130, 246, 1);
  --btn-text-color: rgba(255, 255, 255, 1);
  --btn-border-radius: 0.5rem;
}

/* Per-instance customization */
.custom-button {
  --btn-bg-color: rgba(139, 92, 246, 1);
  --btn-border-radius: 2rem;
}`}</code>
        </pre>
      </section>

      {/* Inline Styles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Inline Styles</h2>
        <p className="text-gray-600 mb-4">
          You can also customize components using inline styles with CSS variables:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Button
  style={{
    '--btn-bg-color': 'rgba(139, 92, 246, 1)',
    '--btn-border-radius': '2rem',
  } as React.CSSProperties}
>
  Custom Button
</Button>`}</code>
        </pre>
      </section>

      {/* Design Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Design Tokens</h2>
        <p className="text-gray-600 mb-4">
          PrimitiveKit includes 600+ design tokens following the DTCG specification.
          Import the tokens CSS file to use them:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import '@primitivekit/react/tokens/tokens.css';

// Use tokens in your CSS
.my-component {
  color: var(--color-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
}`}</code>
        </pre>
        <p className="text-gray-600 mt-4">
          <a href="/design-tokens" className="text-blue-600 hover:underline">
            Explore all design tokens →
          </a>
        </p>
      </section>

      {/* Dark Mode */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Dark Mode</h2>
        <p className="text-gray-600 mb-4">
          All components support dark mode out of the box. Simply add the <code className="bg-gray-100 px-2 py-1 rounded">dark</code> class to your root element:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<html className="dark">
  <body>
    <Button>Dark Mode Button</Button>
  </body>
</html>`}</code>
        </pre>
        <p className="text-gray-600 mt-4">
          Dark mode uses pure black backgrounds (#000000) and adjusted color values for optimal contrast.
        </p>
      </section>

      {/* RGBA Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-4">RGBA Colors</h2>
        <p className="text-gray-600 mb-4">
          All colors in PrimitiveKit use RGBA format for better transparency control:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`/* Good - RGBA format */
--btn-bg-color: rgba(59, 130, 246, 1);
--btn-bg-color-hover: rgba(59, 130, 246, 0.8);

/* Avoid - Hex format */
--btn-bg-color: #3b82f6;`}</code>
        </pre>
      </section>

      {/* Component-Specific Variables */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Component-Specific Variables</h2>
        <p className="text-gray-600 mb-4">
          Each component has its own set of CSS variables. Check the component documentation for the complete list.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-sm text-gray-700">
            <strong>Tip:</strong> Use your browser's DevTools to inspect components and see all available CSS variables.
          </p>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        
        <h3 className="text-xl font-semibold mb-3">Custom Theme</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6">
          <code>{`:root {
  /* Primary colors */
  --btn-primary-bg: rgba(139, 92, 246, 1);
  --btn-primary-hover: rgba(124, 58, 237, 1);
  
  /* Border radius */
  --btn-border-radius: 0.75rem;
  --input-border-radius: 0.75rem;
  --card-border-radius: 1rem;
  
  /* Spacing */
  --btn-padding-x: 2rem;
  --btn-padding-y: 0.75rem;
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-3">Minimal Design</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`:root {
  /* Remove shadows */
  --btn-shadow: none;
  --card-shadow: none;
  
  /* Minimal borders */
  --btn-border-width: 1px;
  --input-border-width: 1px;
  
  /* Square corners */
  --btn-border-radius: 0;
  --input-border-radius: 0;
  --card-border-radius: 0;
}`}</code>
        </pre>
      </section>
    </div>
  )
}
