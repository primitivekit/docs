# Design Token Deep Dive

# Design Token Deep Dive

Learn how PrimitiveKit's comprehensive design token system enables complete customization without touching component code.

## What are Design Tokens?

Design tokens are the visual design atoms of your design system. They're named entities that store visual design attributes like colors, spacing, typography, and more.

## Token Categories

PrimitiveKit organizes tokens into logical categories:

### Colors
```css
--primitive-color-primary
--primitive-color-secondary
--primitive-color-success
--primitive-color-danger
```

### Spacing
```css
--primitive-spacing-xs: 0.25rem
--primitive-spacing-sm: 0.5rem
--primitive-spacing-md: 1rem
--primitive-spacing-lg: 1.5rem
```

### Typography
```css
--primitive-font-size-sm: 0.875rem
--primitive-font-weight-normal: 400
--primitive-line-height-normal: 1.5
```

## Customization

Override tokens to match your brand:

```css
:root {
  --primitive-color-primary: #8b5cf6;
  --primitive-radius-md: 0.75rem;
  --primitive-font-family: 'Inter', sans-serif;
}
```

## DTCG Specification

PrimitiveKit follows the [Design Tokens Community Group](https://design-tokens.github.io/community-group/) specification for maximum interoperability.

## Learn More

- [Full Token Reference](/docs/design-tokens)
- [Theming Guide](/docs/theming)
- [Customization Examples](/docs/customization)

