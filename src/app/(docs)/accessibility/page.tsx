export const metadata = {
  title: 'Accessibility - PrimitiveKit React',
  description: 'Learn about accessibility features in PrimitiveKit components',
}

export default function AccessibilityPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Accessibility</h1>
        <p className="text-xl text-gray-600">
          PrimitiveKit components are built with accessibility as a core principle, following WCAG 2.1 AA standards.
        </p>
      </div>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-600 mb-4">
          Every component in PrimitiveKit is designed to be accessible by default:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Semantic HTML elements</li>
          <li>ARIA attributes where needed</li>
          <li>Keyboard navigation support</li>
          <li>Screen reader compatibility</li>
          <li>Focus management</li>
          <li>Color contrast compliance</li>
        </ul>
      </section>

      {/* Keyboard Navigation */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Keyboard Navigation</h2>
        <p className="text-gray-600 mb-4">
          All interactive components support keyboard navigation:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold">Key</th>
                <th className="text-left p-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">Tab</td>
                <td className="p-3">Move focus to next interactive element</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">Shift + Tab</td>
                <td className="p-3">Move focus to previous interactive element</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">Enter / Space</td>
                <td className="p-3">Activate buttons and links</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">Arrow Keys</td>
                <td className="p-3">Navigate within components (tabs, menus, etc.)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">Escape</td>
                <td className="p-3">Close modals, dropdowns, and overlays</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Screen Readers */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Screen Reader Support</h2>
        <p className="text-gray-600 mb-4">
          Components include proper ARIA labels and descriptions for screen readers:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`<Button aria-label="Close dialog">
  <X size={20} />
</Button>

<Input
  label="Email"
  aria-describedby="email-help"
  aria-required="true"
/>
<span id="email-help">
  We'll never share your email
</span>`}</code>
        </pre>
      </section>

      {/* Focus Management */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Focus Management</h2>
        <p className="text-gray-600 mb-4">
          Components handle focus appropriately:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Visible focus indicators on all interactive elements</li>
          <li>Focus trap in modals and drawers</li>
          <li>Focus restoration when closing overlays</li>
          <li>Skip links for navigation</li>
        </ul>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mt-4">
          <code>{`/* Custom focus styles */
:root {
  --focus-ring-color: rgba(59, 130, 246, 0.5);
  --focus-ring-width: 3px;
  --focus-ring-offset: 2px;
}`}</code>
        </pre>
      </section>

      {/* Color Contrast */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Color Contrast</h2>
        <p className="text-gray-600 mb-4">
          All default color combinations meet WCAG 2.1 AA standards:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Text contrast ratio of at least 4.5:1</li>
          <li>Large text contrast ratio of at least 3:1</li>
          <li>Interactive element contrast ratio of at least 3:1</li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> When customizing colors, ensure you maintain proper contrast ratios for accessibility.
          </p>
        </div>
      </section>

      {/* ARIA Attributes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">ARIA Attributes</h2>
        <p className="text-gray-600 mb-4">
          Components use appropriate ARIA attributes:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Buttons</h3>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`<Button aria-label="Delete item" aria-pressed="false" />`}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Form Inputs</h3>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`<Input
  aria-required="true"
  aria-invalid="false"
  aria-describedby="help-text"
/>`}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Modals</h3>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`<Modal
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Testing */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Testing Accessibility</h2>
        <p className="text-gray-600 mb-4">
          We recommend testing your implementation with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
          <li>Keyboard-only navigation</li>
          <li>Browser accessibility tools (Lighthouse, axe DevTools)</li>
          <li>Color contrast checkers</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
          <p className="text-sm text-gray-700">
            <strong>Important:</strong> While PrimitiveKit components are accessible by default, full WCAG compliance requires proper implementation and testing in your specific application context.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Resources</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://www.w3.org/WAI/WCAG21/quickref/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              WCAG 2.1 Quick Reference
            </a>
          </li>
          <li>
            <a
              href="https://www.w3.org/WAI/ARIA/apg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ARIA Authoring Practices Guide
            </a>
          </li>
          <li>
            <a
              href="https://webaim.org/resources/contrastchecker/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              WebAIM Contrast Checker
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
