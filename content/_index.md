---
title: PrimitiveKit
layout: hextra-home
---

<div class="hx-mt-12 hx-mb-8">
{{< hextra/hero-headline >}}
  Build Beautiful UIs&nbsp;<br class="sm:hx-block hx-hidden" />with PrimitiveKit
{{< /hextra/hero-headline >}}
</div>

<div class="hx-mb-16">
{{< hextra/hero-subtitle >}}
  A flexible, accessible component library with 600+ design tokens.&nbsp;<br class="sm:hx-block hx-hidden" />Zero hardcoded values. Complete customization for React, Vue, Svelte, Angular & Vanilla JS.
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx-mb-16 hx-flex hx-gap-4 hx-flex-wrap hx-justify-center">
{{< hextra/hero-button text="Get Started" link="docs/installation" >}}
{{< hextra/hero-button text="View Components" link="docs/react" style="secondary" >}}
</div>

<div class="hx-mt-16"></div>

## Multi-Framework Support

<div class="hx-grid hx-grid-cols-2 md:hx-grid-cols-3 lg:hx-grid-cols-6 hx-gap-4 hx-my-12">
  <a href="/docs/react" class="hx-flex hx-flex-col hx-items-center hx-p-6 hx-bg-gray-50 dark:hx-bg-gray-900 hx-rounded-lg hover:hx-shadow-lg hx-transition-all">
    <div class="hx-text-4xl hx-mb-2">⚛️</div>
    <div class="hx-font-semibold">React</div>
    <div class="hx-text-xs hx-text-gray-500">v0.2.1</div>
  </a>
  <a href="/docs/vue" class="hx-flex hx-flex-col hx-items-center hx-p-6 hx-bg-gray-50 dark:hx-bg-gray-900 hx-rounded-lg hover:hx-shadow-lg hx-transition-all">
    <div class="hx-text-4xl hx-mb-2">💚</div>
    <div class="hx-font-semibold">Vue</div>
    <div class="hx-text-xs hx-text-gray-500">v0.1.0</div>
  </a>
  <a href="/docs/angular" class="hx-flex hx-flex-col hx-items-center hx-p-6 hx-bg-gray-50 dark:hx-bg-gray-900 hx-rounded-lg hover:hx-shadow-lg hx-transition-all">
    <div class="hx-text-4xl hx-mb-2">🅰️</div>
    <div class="hx-font-semibold">Angular</div>
    <div class="hx-text-xs hx-text-gray-500">v0.1.0</div>
  </a>
  <a href="/docs/svelte" class="hx-flex hx-flex-col hx-items-center hx-p-6 hx-bg-gray-50 dark:hx-bg-gray-900 hx-rounded-lg hover:hx-shadow-lg hx-transition-all">
    <div class="hx-text-4xl hx-mb-2">🧡</div>
    <div class="hx-font-semibold">Svelte</div>
    <div class="hx-text-xs hx-text-gray-500">v0.1.0</div>
  </a>
  <a href="/docs/astro" class="hx-flex hx-flex-col hx-items-center hx-p-6 hx-bg-gray-50 dark:hx-bg-gray-900 hx-rounded-lg hover:hx-shadow-lg hx-transition-all">
    <div class="hx-text-4xl hx-mb-2">🚀</div>
    <div class="hx-font-semibold">Astro</div>
    <div class="hx-text-xs hx-text-gray-500">v0.1.0</div>
  </a>
  <a href="/docs/vanilla" class="hx-flex hx-flex-col hx-items-center hx-p-6 hx-bg-gray-50 dark:hx-bg-gray-900 hx-rounded-lg hover:hx-shadow-lg hx-transition-all">
    <div class="hx-text-4xl hx-mb-2">📦</div>
    <div class="hx-font-semibold">Vanilla JS</div>
    <div class="hx-text-xs hx-text-gray-500">v0.1.0</div>
  </a>
</div>

## Key Features

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="38+ Components"
    subtitle="Complete set of production-ready components for any project. From buttons to complex data tables."
    icon="cube"
  >}}
  {{< hextra/feature-card
    title="600+ Design Tokens"
    subtitle="Comprehensive token system following DTCG specification. Every color, spacing, and typography value is a token."
    icon="color-swatch"
  >}}
  {{< hextra/feature-card
    title="WCAG 2.1 AA"
    subtitle="Fully accessible with keyboard navigation, screen reader support, and proper ARIA attributes."
    icon="shield-check"
  >}}
  {{< hextra/feature-card
    title="Zero Hardcoded Values"
    subtitle="Every visual property is customizable via CSS variables. No hardcoded colors, sizes, or spacing."
    icon="adjustments"
  >}}
  {{< hextra/feature-card
    title="Multi-Framework"
    subtitle="Works with React, Vue, Svelte, Angular, Astro, and plain HTML/CSS. Same API across all frameworks."
    icon="code"
  >}}
  {{< hextra/feature-card
    title="TypeScript First"
    subtitle="Written in TypeScript with comprehensive type definitions. Full IntelliSense support."
    icon="document-text"
  >}}
{{< /hextra/feature-grid >}}

## Quick Example

```tsx
import { Card, Button, Badge } from '@primitivekit/react';
import '@primitivekit/react/tokens/tokens.css';

function App() {
  return (
    <Card variant="elevated" hoverable>
      <Badge variant="solid" color="primary">New</Badge>
      <h2>Welcome to PrimitiveKit</h2>
      <p>Build beautiful UIs with zero hardcoded values.</p>
      <Button onClick={() => alert('Hello!')}>Get Started</Button>
    </Card>
  );
}
```

## Why PrimitiveKit?

### 🎨 Complete Customization
Every component uses CSS variables for styling. Change colors, spacing, borders, shadows - everything - without touching component code.

### 🚀 Framework Agnostic
Use the same components across React, Vue, Svelte, Angular, Astro, and Vanilla JS. Learn once, use everywhere.

### ♿ Accessibility First
Built with WCAG 2.1 AA compliance in mind. Keyboard navigation, screen reader support, and proper ARIA attributes out of the box.

### 📦 Tree Shakeable
Import only what you need. Modern build tools will automatically remove unused components from your bundle.

### 🎯 Production Ready
Battle-tested components used in production applications. Comprehensive test coverage and documentation.

### 🌙 Dark Mode Ready
All components support dark mode out of the box. Just toggle the theme and everything adapts automatically.
