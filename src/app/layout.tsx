import type { Metadata } from 'next'
import '@primitivekit/react/tokens/tokens.css'
import '../styles/global.css'

export const metadata: Metadata = {
  title: 'PrimitiveKit React - Documentation',
  description: 'Complete documentation for @primitivekit/react - A flexible, accessible React component library with 600+ design tokens',
  keywords: 'react, components, design tokens, ui library, accessibility, wcag, primitivekit',
  authors: [{ name: 'PrimitiveKit Team' }],
  openGraph: {
    title: 'PrimitiveKit React Documentation',
    description: 'Complete documentation for @primitivekit/react component library',
    url: 'https://primitivekit.com',
    siteName: 'PrimitiveKit',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
