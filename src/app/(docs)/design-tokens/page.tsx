'use client'

export default function DesignTokensPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Design Tokens</h1>
        <p className="text-xl text-gray-600">
          PrimitiveKit includes 600+ design tokens following the DTCG specification and industry best practices.
        </p>
      </div>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-600 mb-4">
          Design tokens are the visual design atoms of the design system. They are named entities that store visual design attributes, used in place of hard-coded values to ensure flexibility and maintainability.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">600+</div>
            <div className="text-sm text-gray-600">Total Tokens</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">21</div>
            <div className="text-sm text-gray-600">Token Categories</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">CSS Variables</div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Installation</h2>
        <p className="text-gray-600 mb-4">
          Import the design tokens CSS file in your application:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import '@primitivekit/react/tokens/tokens.css';`}</code>
        </pre>
      </section>

      {/* Color Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Color Tokens</h2>
        <p className="text-gray-600 mb-4">
          100+ color tokens organized into brand, semantic, and neutral categories.
        </p>

        <h3 className="text-xl font-semibold mb-3">Brand Colors</h3>
        <p className="text-gray-600 mb-3">Primary and secondary brand colors with full scale (50-950).</p>
        <div className="grid grid-cols-10 gap-2 mb-6">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
            <div key={shade} className="text-center">
              <div
                className="h-12 rounded mb-1"
                style={{ backgroundColor: `var(--color-brand-primary-${shade}, #3b82f6)` }}
              />
              <div className="text-xs text-gray-600">{shade}</div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-3">Semantic Colors</h3>
        <p className="text-gray-600 mb-3">Colors with meaning: success, warning, error, info.</p>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div>
            <div className="h-16 rounded mb-2" style={{ backgroundColor: 'rgba(34, 197, 94, 1)' }} />
            <div className="text-sm font-semibold">Success</div>
            <div className="text-xs text-gray-600">--color-semantic-success-500</div>
          </div>
          <div>
            <div className="h-16 rounded mb-2" style={{ backgroundColor: 'rgba(234, 179, 8, 1)' }} />
            <div className="text-sm font-semibold">Warning</div>
            <div className="text-xs text-gray-600">--color-semantic-warning-500</div>
          </div>
          <div>
            <div className="h-16 rounded mb-2" style={{ backgroundColor: 'rgba(239, 68, 68, 1)' }} />
            <div className="text-sm font-semibold">Error</div>
            <div className="text-xs text-gray-600">--color-semantic-error-500</div>
          </div>
          <div>
            <div className="h-16 rounded mb-2" style={{ backgroundColor: 'rgba(59, 130, 246, 1)' }} />
            <div className="text-sm font-semibold">Info</div>
            <div className="text-xs text-gray-600">--color-semantic-info-500</div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Neutral Colors</h3>
        <p className="text-gray-600 mb-3">Grayscale palette from white (0) to black (1000).</p>
        <div className="grid grid-cols-11 gap-2">
          {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((shade) => (
            <div key={shade} className="text-center">
              <div
                className="h-12 rounded mb-1 border border-gray-200"
                style={{ backgroundColor: `var(--color-neutral-${shade}, ${shade === 0 ? '#fff' : shade === 1000 ? '#000' : '#888'})` }}
              />
              <div className="text-xs text-gray-600">{shade}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Spacing Tokens</h2>
        <p className="text-gray-600 mb-4">
          30 spacing tokens based on 4px (0.25rem) increments.
        </p>
        <div className="space-y-2">
          {[0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24].map((size) => (
            <div key={size} className="flex items-center gap-4">
              <div className="w-32 text-sm font-mono">--spacing-{size}</div>
              <div className="h-8 bg-blue-500 rounded" style={{ width: `${size * 4}px` }} />
              <div className="text-sm text-gray-600">{size * 4}px / {size * 0.25}rem</div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Typography Tokens</h2>
        <p className="text-gray-600 mb-4">
          60+ typography tokens including font families, sizes, weights, and line heights.
        </p>

        <h3 className="text-xl font-semibold mb-3">Font Sizes</h3>
        <div className="space-y-3">
          <div style={{ fontSize: 'var(--font-size-xs, 0.75rem)' }}>
            Extra Small (--font-size-xs) - 0.75rem / 12px
          </div>
          <div style={{ fontSize: 'var(--font-size-sm, 0.875rem)' }}>
            Small (--font-size-sm) - 0.875rem / 14px
          </div>
          <div style={{ fontSize: 'var(--font-size-base, 1rem)' }}>
            Base (--font-size-base) - 1rem / 16px
          </div>
          <div style={{ fontSize: 'var(--font-size-lg, 1.125rem)' }}>
            Large (--font-size-lg) - 1.125rem / 18px
          </div>
          <div style={{ fontSize: 'var(--font-size-xl, 1.25rem)' }}>
            Extra Large (--font-size-xl) - 1.25rem / 20px
          </div>
          <div style={{ fontSize: 'var(--font-size-2xl, 1.5rem)' }}>
            2X Large (--font-size-2xl) - 1.5rem / 24px
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6">Font Weights</h3>
        <div className="space-y-2">
          <div style={{ fontWeight: 300 }}>Light (--font-weight-light) - 300</div>
          <div style={{ fontWeight: 400 }}>Normal (--font-weight-normal) - 400</div>
          <div style={{ fontWeight: 500 }}>Medium (--font-weight-medium) - 500</div>
          <div style={{ fontWeight: 600 }}>Semibold (--font-weight-semibold) - 600</div>
          <div style={{ fontWeight: 700 }}>Bold (--font-weight-bold) - 700</div>
        </div>
      </section>

      {/* Border Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Border Tokens</h2>
        <p className="text-gray-600 mb-4">
          15 border tokens for widths, radius, and styles.
        </p>

        <h3 className="text-xl font-semibold mb-3">Border Radius</h3>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="h-16 bg-blue-500" style={{ borderRadius: 'var(--border-radius-none, 0)' }} />
            <div className="text-sm mt-2">None (0)</div>
          </div>
          <div>
            <div className="h-16 bg-blue-500" style={{ borderRadius: 'var(--border-radius-sm, 0.125rem)' }} />
            <div className="text-sm mt-2">Small (2px)</div>
          </div>
          <div>
            <div className="h-16 bg-blue-500" style={{ borderRadius: 'var(--border-radius-md, 0.375rem)' }} />
            <div className="text-sm mt-2">Medium (6px)</div>
          </div>
          <div>
            <div className="h-16 bg-blue-500" style={{ borderRadius: 'var(--border-radius-lg, 0.5rem)' }} />
            <div className="text-sm mt-2">Large (8px)</div>
          </div>
        </div>
      </section>

      {/* Shadow Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Shadow Tokens</h2>
        <p className="text-gray-600 mb-4">
          12 shadow tokens for elevation and depth.
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="h-24 bg-white rounded-lg" style={{ boxShadow: 'var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05))' }} />
            <div className="text-sm mt-2">Small (--shadow-sm)</div>
          </div>
          <div>
            <div className="h-24 bg-white rounded-lg" style={{ boxShadow: 'var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))' }} />
            <div className="text-sm mt-2">Medium (--shadow-md)</div>
          </div>
          <div>
            <div className="h-24 bg-white rounded-lg" style={{ boxShadow: 'var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1))' }} />
            <div className="text-sm mt-2">Large (--shadow-lg)</div>
          </div>
        </div>
      </section>

      {/* Animation Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Animation Tokens</h2>
        <p className="text-gray-600 mb-4">
          25+ animation tokens for durations, easing functions, and motion.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`/* Duration */
--duration-instant: 0ms;
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

/* Easing */
--easing-linear: linear;
--easing-ease-in: cubic-bezier(0.4, 0, 1, 1);
--easing-ease-out: cubic-bezier(0, 0, 0.2, 1);
--easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);`}</code>
        </pre>
      </section>

      {/* Breakpoint Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Breakpoint Tokens</h2>
        <p className="text-gray-600 mb-4">
          6 responsive breakpoint tokens for different screen sizes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold">Token</th>
                <th className="text-left p-3 font-semibold">Value</th>
                <th className="text-left p-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">--breakpoint-xs</td>
                <td className="p-3">320px</td>
                <td className="p-3">Extra small devices</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">--breakpoint-sm</td>
                <td className="p-3">640px</td>
                <td className="p-3">Small devices</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">--breakpoint-md</td>
                <td className="p-3">768px</td>
                <td className="p-3">Medium devices</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">--breakpoint-lg</td>
                <td className="p-3">1024px</td>
                <td className="p-3">Large devices</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">--breakpoint-xl</td>
                <td className="p-3">1280px</td>
                <td className="p-3">Extra large devices</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-mono text-sm">--breakpoint-2xl</td>
                <td className="p-3">1536px</td>
                <td className="p-3">2X large devices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Usage Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code>{`import '@primitivekit/react/tokens/tokens.css';

// Use tokens in your CSS
.my-component {
  /* Colors */
  color: var(--color-brand-primary-500);
  background-color: var(--color-neutral-0);
  
  /* Spacing */
  padding: var(--spacing-4);
  margin: var(--spacing-2);
  gap: var(--spacing-3);
  
  /* Typography */
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  
  /* Border */
  border-radius: var(--border-radius-md);
  border-width: var(--border-width-default);
  
  /* Shadow */
  box-shadow: var(--shadow-md);
  
  /* Animation */
  transition-duration: var(--duration-normal);
  transition-timing-function: var(--easing-ease-in-out);
}`}</code>
        </pre>
      </section>

      {/* All Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-4">All Token Categories</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Visual Tokens</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Color (100+ tokens)</li>
              <li>• Spacing (30 tokens)</li>
              <li>• Typography (60+ tokens)</li>
              <li>• Border (15 tokens)</li>
              <li>• Shadow (12 tokens)</li>
              <li>• Gradient (12 tokens)</li>
              <li>• Blur (8 tokens)</li>
              <li>• Filter (40+ tokens)</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Behavioral Tokens</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Animation (25 tokens)</li>
              <li>• Motion (30 tokens)</li>
              <li>• Z-Index (11 tokens)</li>
              <li>• Focus Ring (13 tokens)</li>
              <li>• Transform (11 tokens)</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Layout Tokens</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Breakpoint (6 tokens)</li>
              <li>• Grid (12 tokens)</li>
              <li>• Container (9 tokens)</li>
              <li>• Aspect Ratio (7 tokens)</li>
              <li>• Viewport (26 tokens)</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Semantic Tokens</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Semantic Colors (27 tokens)</li>
              <li>• Icon Size (10 tokens)</li>
              <li>• Accessibility (10 tokens)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Standards Compliance</h2>
        <p className="text-gray-600 mb-4">
          Our token system follows industry standards:
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>✅ <strong>DTCG (Design Tokens Community Group)</strong> - Official W3C specification</li>
          <li>✅ <strong>Material Design 3</strong> - Google's design system tokens</li>
          <li>✅ <strong>Tailwind CSS</strong> - Utility-first design tokens</li>
          <li>✅ <strong>Ant Design</strong> - Enterprise-grade design tokens</li>
          <li>✅ <strong>WCAG 2.1 AA</strong> - Accessibility compliance</li>
          <li>✅ <strong>CSS Custom Properties</strong> - Native browser support</li>
        </ul>
      </section>
    </div>
  )
}
