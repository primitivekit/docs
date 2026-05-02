import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer/MarkdownRenderer';
import Demo from '../components/Demo/Demo';
import { Button } from '@primitivekit/react';

const introContent = `
# Customization

Complete control over every visual property. PrimitiveKit provides 150+ CSS variables for comprehensive customization.

## Philosophy

**Zero Hardcoded Values** - Every single visual property is controlled through CSS variables. You have complete control without touching the source code.

## Three Levels of Customization

### 1. Global Customization

Define CSS variables at the root level to affect all components:

\`\`\`css
:root {
  --btn-primary-bg: #8b5cf6;
  --btn-border-radius: 0.75rem;
  --btn-font-weight: 600;
}
\`\`\`

### 2. Class-Based Customization

Create custom CSS classes for specific use cases:

\`\`\`css
.my-button {
  --btn-bg-color: #f59e0b;
  --btn-border-radius: 2rem;
  --btn-padding-x: 3rem;
}
\`\`\`

### 3. Inline Customization

Override styles for individual components:

\`\`\`jsx
<Button style={{ '--btn-bg-color': '#ec4899' }}>
  Pink Button
</Button>
\`\`\`
`;

const spacingContent = `
## Spacing Variables

### Padding (All Directions)

Control padding for each side individually or use shortcuts:

\`\`\`css
/* Individual sides */
--btn-padding-top: 0.625rem;
--btn-padding-right: 1.25rem;
--btn-padding-bottom: 0.625rem;
--btn-padding-left: 1.25rem;

/* Shortcuts */
--btn-padding-y: 0.625rem;  /* top & bottom */
--btn-padding-x: 1.25rem;   /* left & right */
\`\`\`

### Margin (All Directions)

\`\`\`css
/* Individual sides */
--btn-margin-top: 0;
--btn-margin-right: 0;
--btn-margin-bottom: 0;
--btn-margin-left: 0;

/* Shortcuts */
--btn-margin-y: 0;  /* top & bottom */
--btn-margin-x: 0;  /* left & right */
\`\`\`
`;

const bordersContent = `
## Border Variables

### Border Width (All Sides)

\`\`\`css
--btn-border-top-width: 1px;
--btn-border-right-width: 1px;
--btn-border-bottom-width: 1px;
--btn-border-left-width: 1px;
--btn-border-width: 1px;  /* shortcut */
\`\`\`

### Border Style (All Sides)

\`\`\`css
--btn-border-top-style: solid;
--btn-border-right-style: solid;
--btn-border-bottom-style: solid;
--btn-border-left-style: solid;
--btn-border-style: solid;  /* shortcut */
\`\`\`

### Border Color (All Sides + States)

\`\`\`css
/* Base state */
--btn-border-top-color: #3b82f6;
--btn-border-right-color: #3b82f6;
--btn-border-bottom-color: #3b82f6;
--btn-border-left-color: #3b82f6;
--btn-border-color: #3b82f6;  /* shortcut */

/* Hover state */
--btn-border-color-hover: #2563eb;
--btn-border-top-color-hover: #2563eb;
/* ... and so on for each side */

/* Active state */
--btn-border-color-active: #1d4ed8;
/* ... and so on */
\`\`\`

### Border Radius (All Corners)

\`\`\`css
--btn-border-top-left-radius: 0.375rem;
--btn-border-top-right-radius: 0.375rem;
--btn-border-bottom-right-radius: 0.375rem;
--btn-border-bottom-left-radius: 0.375rem;
--btn-border-radius: 0.375rem;  /* shortcut */
\`\`\`
`;

const colorsContent = `
## Color Variables

### Base State

\`\`\`css
--btn-bg-color: #3b82f6;
--btn-text-color: #ffffff;
--btn-border-color: #3b82f6;
\`\`\`

### Hover State

\`\`\`css
--btn-bg-color-hover: #2563eb;
--btn-text-color-hover: #ffffff;
--btn-border-color-hover: #2563eb;
\`\`\`

### Active/Pressed State

\`\`\`css
--btn-bg-color-active: #1d4ed8;
--btn-text-color-active: #ffffff;
--btn-border-color-active: #1d4ed8;
\`\`\`

### Focus State

\`\`\`css
--btn-bg-color-focus: #3b82f6;
--btn-text-color-focus: #ffffff;
--btn-border-color-focus: #3b82f6;
--btn-outline-color: #3b82f6;
--btn-outline-width: 2px;
--btn-outline-style: solid;
--btn-outline-offset: 2px;
\`\`\`

### Disabled State

\`\`\`css
--btn-bg-color-disabled: #e5e7eb;
--btn-text-color-disabled: #9ca3af;
--btn-border-color-disabled: #e5e7eb;
--btn-opacity-disabled: 0.6;
\`\`\`
`;

const dimensionsContent = `
## Dimension Variables

\`\`\`css
--btn-width: auto;
--btn-min-width: auto;
--btn-max-width: none;
--btn-height: auto;
--btn-min-height: 2.5rem;
--btn-max-height: none;
\`\`\`
`;

const typographyContent = `
## Typography Variables

\`\`\`css
--btn-font-family: system-ui, -apple-system, sans-serif;
--btn-font-size: 1rem;
--btn-font-weight: 500;
--btn-font-style: normal;
--btn-line-height: 1.5;
--btn-letter-spacing: normal;
--btn-text-align: center;
--btn-text-decoration: none;
--btn-text-transform: none;
--btn-text-shadow: none;
--btn-white-space: nowrap;
--btn-word-spacing: normal;
\`\`\`
`;

const effectsContent = `
## Effects Variables

### Shadows

\`\`\`css
--btn-box-shadow: none;
--btn-box-shadow-hover: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--btn-box-shadow-active: none;
--btn-box-shadow-focus: none;
--btn-box-shadow-disabled: none;
\`\`\`

### Transforms

\`\`\`css
--btn-transform: none;
--btn-transform-hover: translateY(-1px);
--btn-transform-active: translateY(0);
--btn-transform-focus: none;
--btn-transform-disabled: none;
--btn-transform-origin: center;
\`\`\`

### Transitions

\`\`\`css
--btn-transition-property: all;
--btn-transition-duration: 0.2s;
--btn-transition-timing: ease-in-out;
--btn-transition-delay: 0s;
\`\`\`

### Filters

\`\`\`css
--btn-filter: none;
--btn-filter-hover: none;
--btn-filter-active: none;
--btn-filter-disabled: none;
--btn-backdrop-filter: none;
--btn-mix-blend-mode: normal;
\`\`\`

### Animation

\`\`\`css
--btn-animation: none;
--btn-animation-duration: 0s;
--btn-animation-timing: ease;
--btn-animation-delay: 0s;
--btn-animation-iteration: 1;
--btn-animation-direction: normal;
--btn-animation-fill-mode: none;
\`\`\`
`;

const layoutContent = `
## Layout Variables

### Display & Position

\`\`\`css
--btn-display: inline-flex;
--btn-position: relative;
--btn-top: auto;
--btn-right: auto;
--btn-bottom: auto;
--btn-left: auto;
--btn-z-index: auto;
--btn-overflow: visible;
--btn-vertical-align: middle;
\`\`\`

### Flexbox

\`\`\`css
--btn-flex-direction: row;
--btn-flex-wrap: nowrap;
--btn-justify-content: center;
--btn-align-items: center;
--btn-align-content: normal;
--btn-gap: 0.5rem;
--btn-row-gap: 0.5rem;
--btn-column-gap: 0.5rem;
\`\`\`

### Interaction

\`\`\`css
--btn-cursor: pointer;
--btn-cursor-disabled: not-allowed;
--btn-pointer-events: auto;
--btn-user-select: none;
--btn-touch-action: manipulation;
\`\`\`

### Opacity & Visibility

\`\`\`css
--btn-opacity: 1;
--btn-visibility: visible;
\`\`\`
`;

const examplesContent = `
## Complete Examples

### Example 1: Pill Button

\`\`\`jsx
<Button style={{
  '--btn-border-radius': '9999px',
  '--btn-padding-x': '2rem'
}}>
  Pill Button
</Button>
\`\`\`

### Example 2: Gradient Button

\`\`\`jsx
<Button style={{
  '--btn-bg-color': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  '--btn-border': 'none',
  '--btn-box-shadow-hover': '0 10px 20px rgba(102, 126, 234, 0.4)'
}}>
  Gradient
</Button>
\`\`\`

### Example 3: Neumorphic Button

\`\`\`jsx
<Button style={{
  '--btn-bg-color': '#e0e5ec',
  '--btn-text-color': '#4a5568',
  '--btn-border': 'none',
  '--btn-box-shadow': '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
  '--btn-box-shadow-hover': 'inset 9px 9px 16px #a3b1c6, inset -9px -9px 16px #ffffff'
}}>
  Neumorphic
</Button>
\`\`\`

### Example 4: Asymmetric Border Radius

\`\`\`jsx
<Button style={{
  '--btn-border-top-left-radius': '0',
  '--btn-border-top-right-radius': '1.5rem',
  '--btn-border-bottom-right-radius': '0',
  '--btn-border-bottom-left-radius': '1.5rem'
}}>
  Asymmetric
</Button>
\`\`\`

### Example 5: Custom Padding Per Side

\`\`\`jsx
<Button style={{
  '--btn-padding-top': '0.5rem',
  '--btn-padding-right': '3rem',
  '--btn-padding-bottom': '0.5rem',
  '--btn-padding-left': '1rem'
}}>
  Asymmetric Padding
</Button>
\`\`\`
`;

const themeContent = `
## Creating a Complete Theme

\`\`\`css
/* theme.css */
:root {
  /* Brand Colors */
  --brand-primary: #6366f1;
  --brand-primary-dark: #4f46e5;
  --brand-primary-darker: #4338ca;
  
  /* Button Theme */
  --btn-primary-bg: var(--brand-primary);
  --btn-primary-bg-hover: var(--brand-primary-dark);
  --btn-primary-bg-active: var(--brand-primary-darker);
  --btn-font-family: 'Inter', system-ui, sans-serif;
  --btn-font-weight: 600;
  --btn-border-radius: 0.5rem;
  --btn-transition-duration: 0.15s;
  --btn-transform-hover: translateY(-2px);
  --btn-box-shadow-hover: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --btn-primary-bg: #818cf8;
    --btn-primary-bg-hover: #6366f1;
    --btn-primary-text: #000000;
  }
}
\`\`\`

## TypeScript Support

All CSS variables are fully typed:

\`\`\`tsx
import { Button, ButtonCSSVariables } from '@primitivekit/react';

const customStyle: ButtonCSSVariables = {
  '--btn-bg-color': '#8b5cf6',
  '--btn-border-radius': '2rem',
  '--btn-padding-x': '2.5rem'
};

<Button style={customStyle}>Typed Button</Button>
\`\`\`
`;

const Customization = () => {
  return (
    <div>
      <MarkdownRenderer content={introContent} />
      
      <Demo title="Inline Customization Examples">
        <Button style={{ '--btn-bg-color': '#8b5cf6', '--btn-border-radius': '2rem' }}>
          Purple Pill
        </Button>
        <Button style={{ '--btn-bg-color': '#f59e0b', '--btn-padding-x': '3rem' }}>
          Orange Wide
        </Button>
        <Button style={{ 
          '--btn-border-top-left-radius': '0',
          '--btn-border-top-right-radius': '1.5rem',
          '--btn-border-bottom-right-radius': '0',
          '--btn-border-bottom-left-radius': '1.5rem'
        }}>
          Asymmetric
        </Button>
      </Demo>

      <MarkdownRenderer content={spacingContent} />
      <MarkdownRenderer content={bordersContent} />
      <MarkdownRenderer content={colorsContent} />
      <MarkdownRenderer content={dimensionsContent} />
      <MarkdownRenderer content={typographyContent} />
      <MarkdownRenderer content={effectsContent} />
      <MarkdownRenderer content={layoutContent} />
      <MarkdownRenderer content={examplesContent} />
      <MarkdownRenderer content={themeContent} />
    </div>
  );
};

export default Customization;
