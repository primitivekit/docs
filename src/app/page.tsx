import Link from 'next/link'
import { ArrowRight, Package, Palette, Accessibility, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            PrimitiveKit React
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A flexible, accessible React component library with 600+ design tokens.
            Zero hardcoded values. Complete customization.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/installation"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/components/button"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600"
            >
              View Components
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Package className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">38 Components</h3>
            <p className="text-gray-600">
              Complete set of production-ready components for any project
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Palette className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">600+ Design Tokens</h3>
            <p className="text-gray-600">
              Comprehensive token system following industry standards
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Accessibility className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">WCAG 2.1 AA</h3>
            <p className="text-gray-600">
              Fully accessible with keyboard navigation and screen reader support
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-orange-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Zero Hardcoded</h3>
            <p className="text-gray-600">
              Every visual property customizable via CSS variables
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/installation" className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2">Installation</h3>
              <p className="text-gray-600">Get started with npm or yarn</p>
            </Link>
            <Link href="/design-tokens" className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2">Design Tokens</h3>
              <p className="text-gray-600">Explore 600+ design tokens</p>
            </Link>
            <Link href="/components/button" className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2">Components</h3>
              <p className="text-gray-600">Browse all 38 components</p>
            </Link>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-16 bg-gray-900 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Quick Example</h2>
          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
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
        </div>
      </div>
    </div>
  )
}
