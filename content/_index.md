---
title: PrimitiveKit
layout: hextra-home
---

{{< hextra/hero-badge >}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  <span>Open Source & Free</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

<div class="hx-mt-6 hx-mb-6">
{{< hextra/hero-headline >}}
  Build Beautiful UIs&nbsp;<br class="hx-sm:block hx-hidden" />with PrimitiveKit
{{< /hextra/hero-headline >}}
</div>

<div class="hx-mb-12">
{{< hextra/hero-subtitle >}}
  A flexible, accessible component library with 600+ design tokens.&nbsp;<br class="hx-sm:block hx-hidden" />Zero hardcoded values. Complete customization for React, Vue, Svelte, Angular & more.
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx-mb-6">
{{< hextra/hero-button text="Get Started" link="docs" >}}
</div>

<div class="hx-mt-24"></div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="38+ Production-Ready Components"
    subtitle="Complete set of components for any project. From simple buttons to complex data tables, all fully customizable."
    class="hx-aspect-auto hx-md:aspect-[1.1/1] hx-max-md:min-h-[340px]"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="600+ Design Tokens"
    subtitle="Comprehensive token system following DTCG specification. Every color, spacing, and typography value is a token."
    class="hx-aspect-auto hx-md:aspect-[1.1/1] hx-max-lg:min-h-[340px]"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(142,53,74,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Multi-Framework Support"
    subtitle="Works with React, Vue, Svelte, Angular, Astro, and Vanilla JS. Same API across all frameworks."
    class="hx-aspect-auto hx-md:aspect-[1.1/1] hx-max-md:min-h-[340px]"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="WCAG 2.1 AA Compliant"
    subtitle="Fully accessible with keyboard navigation, screen reader support, and proper ARIA attributes built-in."
  >}}
  {{< hextra/feature-card
    title="TypeScript First"
    subtitle="Written in TypeScript with comprehensive type definitions. Full IntelliSense support in your IDE."
  >}}
  {{< hextra/feature-card
    title="Zero Hardcoded Values"
    subtitle="Every visual property is customizable via CSS variables. No hardcoded colors, sizes, or spacing anywhere."
  >}}
  {{< hextra/feature-card
    title="Dark Mode Ready"
    subtitle="All components support dark mode out of the box. Toggle the theme and everything adapts automatically."
  >}}
  {{< hextra/feature-card
    title="Tree Shakeable & Lightweight"
    subtitle="Import only what you need. Modern build tools automatically remove unused components from your bundle."
  >}}
  {{< hextra/feature-card
    title="And Much More..."
    icon="sparkles"
    subtitle="Responsive design / Customizable themes / Comprehensive docs / Active development / MIT licensed"
  >}}
{{< /hextra/feature-grid >}}

<div class="hx-mt-32"></div>

## Quick Start

Get up and running in seconds with your favorite framework.

<div class="hx-mt-8"></div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="React"
    subtitle="Install and start building with React components"
  >}}
  {{< hextra/feature-card
    title="Vue"
    subtitle="Use Vue 3 Composition API with PrimitiveKit"
  >}}
  {{< hextra/feature-card
    title="Angular"
    subtitle="Integrate with Angular standalone components"
  >}}
  {{< hextra/feature-card
    title="Svelte"
    subtitle="Build reactive UIs with Svelte components"
  >}}
  {{< hextra/feature-card
    title="Astro"
    subtitle="Create static sites with Astro components"
  >}}
  {{< hextra/feature-card
    title="Vanilla JS"
    subtitle="Use with plain JavaScript, no framework needed"
  >}}
{{< /hextra/feature-grid >}}

<div class="hx-mt-32"></div>

## Installation

Choose your framework and get started in seconds.

<div class="hx-mt-8 hx-mb-8"></div>

```bash
# React
npm install @primitivekit/react

# Vue
npm install @primitivekit/vue

# Angular
npm install @primitivekit/angular

# Svelte
npm install @primitivekit/svelte

# Astro
npm install @primitivekit/astro

# Vanilla JS
npm install @primitivekit/vanilla
```

<div class="hx-mt-32"></div>

## Example Usage

Here's how easy it is to build beautiful UIs with PrimitiveKit.

<div class="hx-mt-8 hx-mb-8"></div>

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

<div class="hx-mt-32"></div>

## Why Choose PrimitiveKit?

<div class="hx-mt-8"></div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="🎨 Complete Customization"
    subtitle="Every component uses CSS variables for styling. Change colors, spacing, borders, shadows - everything - without touching component code."
  >}}
  {{< hextra/feature-card
    title="🚀 Framework Agnostic"
    subtitle="Use the same components across React, Vue, Svelte, Angular, Astro, and Vanilla JS. Learn once, use everywhere."
  >}}
  {{< hextra/feature-card
    title="♿ Accessibility First"
    subtitle="Built with WCAG 2.1 AA compliance in mind. Keyboard navigation, screen reader support, and proper ARIA attributes out of the box."
  >}}
  {{< hextra/feature-card
    title="📦 Tree Shakeable"
    subtitle="Import only what you need. Modern build tools will automatically remove unused components from your bundle."
  >}}
  {{< hextra/feature-card
    title="🎯 Production Ready"
    subtitle="Battle-tested components used in production applications. Comprehensive test coverage and documentation."
  >}}
  {{< hextra/feature-card
    title="🌙 Dark Mode Ready"
    subtitle="All components support dark mode out of the box. Just toggle the theme and everything adapts automatically."
  >}}
{{< /hextra/feature-grid >}}

<div class="hx-mt-32"></div>

## Explore Components

Browse our complete collection of components organized by category.

<div class="hx-mt-8"></div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="Layout Components"
    subtitle="Card, Container, Grid, Stack, Space, Divider"
    link="/docs/react#layout-components"
  >}}
  {{< hextra/feature-card
    title="Form Components"
    subtitle="Button, Input, Select, Checkbox, Radio, Switch, Textarea, Slider, Form, Upload"
    link="/docs/react#form-components"
  >}}
  {{< hextra/feature-card
    title="Feedback Components"
    subtitle="Alert, Badge, Spinner, Progress, Skeleton"
    link="/docs/react#feedback-components"
  >}}
  {{< hextra/feature-card
    title="Navigation Components"
    subtitle="Link, Breadcrumb, Tabs, Menu, Steps, Pagination"
    link="/docs/react#navigation-components"
  >}}
  {{< hextra/feature-card
    title="Overlay Components"
    subtitle="Modal, Drawer, Tooltip, Popover, Dropdown"
    link="/docs/react#overlay-components"
  >}}
  {{< hextra/feature-card
    title="Data Display Components"
    subtitle="Avatar, Tag, Table, Collapse, Image, Empty, Typography"
    link="/docs/react#data-display-components"
  >}}
{{< /hextra/feature-grid >}}

<div class="hx-mt-32"></div>

## Ready to Get Started?

<div class="hx-mt-8 hx-mb-12"></div>

<div class="hx-flex hx-gap-4 hx-flex-wrap">
{{< hextra/hero-button text="View Documentation" link="docs" >}}
{{< hextra/hero-button text="Browse Components" link="docs/react" style="secondary" >}}
{{< hextra/hero-button text="GitHub" link="https://github.com/primitivekit/react" style="secondary" >}}
</div>

<div class="hx-mt-24"></div>
