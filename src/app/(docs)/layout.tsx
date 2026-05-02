import Link from 'next/link'
import { Home } from 'lucide-react'

const navigation = {
  'Getting Started': [
    { name: 'Introduction', href: '/' },
    { name: 'Installation', href: '/installation' },
    { name: 'Customization', href: '/customization' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Design Tokens', href: '/design-tokens' },
  ],
  'Form Components': [
    { name: 'Button', href: '/components/button' },
    { name: 'Input', href: '/components/input' },
    { name: 'Textarea', href: '/components/textarea' },
    { name: 'Select', href: '/components/select' },
    { name: 'Checkbox', href: '/components/checkbox' },
    { name: 'Radio', href: '/components/radio' },
    { name: 'Switch', href: '/components/switch' },
    { name: 'Form', href: '/components/form' },
    { name: 'Slider', href: '/components/slider' },
    { name: 'Upload', href: '/components/upload' },
  ],
  'Layout Components': [
    { name: 'Card', href: '/components/card' },
    { name: 'Container', href: '/components/container' },
    { name: 'Stack', href: '/components/stack' },
    { name: 'Grid', href: '/components/grid' },
    { name: 'Divider', href: '/components/divider' },
    { name: 'Space', href: '/components/space' },
  ],
  'Feedback Components': [
    { name: 'Badge', href: '/components/badge' },
    { name: 'Spinner', href: '/components/spinner' },
    { name: 'Alert', href: '/components/alert' },
    { name: 'Progress', href: '/components/progress' },
    { name: 'Skeleton', href: '/components/skeleton' },
  ],
  'Navigation Components': [
    { name: 'Link', href: '/components/link' },
    { name: 'Tabs', href: '/components/tabs' },
    { name: 'Breadcrumb', href: '/components/breadcrumb' },
    { name: 'Steps', href: '/components/steps' },
    { name: 'Pagination', href: '/components/pagination' },
  ],
  'Overlay Components': [
    { name: 'Modal', href: '/components/modal' },
    { name: 'Tooltip', href: '/components/tooltip' },
    { name: 'Popover', href: '/components/popover' },
    { name: 'Dropdown', href: '/components/dropdown' },
    { name: 'Drawer', href: '/components/drawer' },
  ],
  'Data Display': [
    { name: 'Avatar', href: '/components/avatar' },
    { name: 'Tag', href: '/components/tag' },
    { name: 'Empty', href: '/components/empty' },
    { name: 'Image', href: '/components/image' },
    { name: 'Collapse', href: '/components/collapse' },
    { name: 'Table', href: '/components/table' },
  ],
  'General': [
    { name: 'Typography', href: '/components/typography' },
    { name: 'Menu', href: '/components/menu' },
  ],
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Home size={24} />
            PrimitiveKit
          </Link>
          <nav className="flex gap-6">
            <Link href="/installation" className="text-gray-600 hover:text-gray-900">
              Docs
            </Link>
            <a
              href="https://github.com/primitivekit/react"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@primitivekit/react"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              NPM
            </a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <nav className="sticky top-24 space-y-8">
            {Object.entries(navigation).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold text-sm text-gray-900 mb-3">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-blue-600 block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
