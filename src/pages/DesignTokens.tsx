import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer/MarkdownRenderer';
import Demo from '../components/Demo/Demo';

const introContent = `
# Design Tokens

@primitivekit/react includes a comprehensive design token system with **600+ tokens across 21 categories**, following industry standards from DTCG, Material Design 3, Tailwind CSS, and Ant Design.

## What are Design Tokens?

Design tokens are the visual design atoms of the design system — named entities that store visual design attributes. They ensure consistency and make customization effortless.

## Import

\`\`\`jsx
// Import tokens in JavaScript/TypeScript
import { designTokens } from '@primitivekit/react/tokens';

// Import CSS variables
import '@primitivekit/react/tokens/tokens.css';
\`\`\`

## Token Categories

Our token system includes 21 comprehensive categories:

1. **Color Tokens** (100+) - Brand, semantic, neutral colors
2. **Spacing Tokens** (30) - 4px-based grid system
3. **Typography Tokens** (60+) - Fonts, sizes, weights
4. **Border Tokens** (15) - Widths, radius, styles
5. **Shadow Tokens** (12) - Elevation system
6. **Animation Tokens** (25) - Duration, easing
7. **Z-Index Tokens** (11) - Layering system
8. **Breakpoint Tokens** (6) - Responsive breakpoints
9. **Semantic Tokens** (27) - High-level mappings
10. **Grid Tokens** (12) - 12-column grid
11. **Container Tokens** (9) - Max-widths
12. **Aspect Ratio Tokens** (7) - Media ratios
13. **Blur Tokens** (8) - Glassmorphism
14. **Gradient Tokens** (12) - Pre-defined gradients
15. **Focus Ring Tokens** (13) - Accessibility
16. **Icon Size Tokens** (10) - Icon sizing
17. **Motion Tokens** (30) - Transforms
18. **Viewport Tokens** (26) - vw, vh units
19. **Accessibility Tokens** (10) - WCAG helpers
20. **Transform Tokens** (11) - CSS transforms
21. **Filter Tokens** (40+) - Visual effects
`;

const colorContent = `
## Color Tokens

### Brand Colors

Full color scales from 50 to 950 for primary and secondary brand colors.

\`\`\`jsx
// In JavaScript
const primaryColor = designTokens.color.brand.primary[500];

// In CSS
background: var(--color-brand-primary-500);
\`\`\`

### Semantic Colors

Colors with meaning: success, warning, error, info.

\`\`\`css
/* Success */
color: var(--color-semantic-success-600);

/* Warning */
color: var(--color-semantic-warning-600);

/* Error */
color: var(--color-semantic-error-600);

/* Info */
color: var(--color-semantic-info-600);
\`\`\`

### Neutral Colors

Grayscale from white (0) to black (1000).

\`\`\`css
background: var(--color-neutral-0);    /* White */
color: var(--color-neutral-900);       /* Dark text */
border: 1px solid var(--color-neutral-200);
\`\`\`
`;

const spacingContent = `
## Spacing Tokens

4px-based spacing scale from 0 to 384px.

\`\`\`css
padding: var(--spacing-4);    /* 16px */
margin: var(--spacing-8);     /* 32px */
gap: var(--spacing-6);        /* 24px */
\`\`\`

### Common Spacing Values

| Token | Value | Pixels |
|-------|-------|--------|
| \`--spacing-1\` | 0.25rem | 4px |
| \`--spacing-2\` | 0.5rem | 8px |
| \`--spacing-4\` | 1rem | 16px |
| \`--spacing-6\` | 1.5rem | 24px |
| \`--spacing-8\` | 2rem | 32px |
| \`--spacing-12\` | 3rem | 48px |
`;

const typographyContent = `
## Typography Tokens

### Font Families

\`\`\`css
font-family: var(--font-family-sans);   /* System sans-serif */
font-family: var(--font-family-serif);  /* Serif stack */
font-family: var(--font-family-mono);   /* Monospace */
\`\`\`

### Font Sizes

\`\`\`css
font-size: var(--font-size-xs);    /* 12px */
font-size: var(--font-size-sm);    /* 14px */
font-size: var(--font-size-base);  /* 16px */
font-size: var(--font-size-lg);    /* 18px */
font-size: var(--font-size-xl);    /* 20px */
font-size: var(--font-size-2xl);   /* 24px */
\`\`\`

### Font Weights

\`\`\`css
font-weight: var(--font-weight-normal);    /* 400 */
font-weight: var(--font-weight-medium);    /* 500 */
font-weight: var(--font-weight-semibold);  /* 600 */
font-weight: var(--font-weight-bold);      /* 700 */
\`\`\`
`;

const gradientContent = `
## Gradient Tokens

Pre-defined gradients for quick styling.

\`\`\`css
/* Linear Gradients */
background: var(--gradient-linear-primary);
background: var(--gradient-linear-success);
background: var(--gradient-linear-error);

/* Radial Gradients */
background: var(--gradient-radial-primary);

/* Mesh Gradients */
background: var(--gradient-mesh-sunset);
background: var(--gradient-mesh-ocean);
background: var(--gradient-mesh-forest);
\`\`\`
`;

const blurContent = `
## Blur Tokens

Backdrop blur for glassmorphism effects.

\`\`\`css
backdrop-filter: blur(var(--blur-sm));    /* 4px */
backdrop-filter: blur(var(--blur-base));  /* 8px */
backdrop-filter: blur(var(--blur-lg));    /* 16px */
backdrop-filter: blur(var(--blur-xl));    /* 24px */
\`\`\`
`;

const gridContent = `
## Grid Tokens

Industry-standard 12-column grid system.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns-12), 1fr);
  gap: var(--spacing-4);
}

.col-6 {
  grid-column: span var(--grid-columns-6);
}
\`\`\`
`;

const accessibilityContent = `
## Accessibility Tokens

WCAG 2.1 AA compliant tokens.

\`\`\`css
/* Focus Ring */
button:focus-visible {
  outline: var(--accessibility-focus-outline);
  outline-offset: var(--accessibility-focus-outline-offset);
}

/* Touch Targets (WCAG 2.5.5) */
button {
  min-width: var(--accessibility-touch-target-min-width);   /* 44px */
  min-height: var(--accessibility-touch-target-min-height); /* 44px */
}
\`\`\`

### Reduced Motion Support

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`
`;

const usageContent = `
## Usage Examples

### Glassmorphism Card

\`\`\`jsx
<div style={{
  backdropFilter: 'blur(var(--blur-lg))',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 'var(--border-radius-xl)',
  padding: 'var(--spacing-6)',
  border: '1px solid rgba(255, 255, 255, 0.2)'
}}>
  Glass effect content
</div>
\`\`\`

### Gradient Button

\`\`\`jsx
<button style={{
  background: 'var(--gradient-linear-primary)',
  color: 'white',
  padding: 'var(--spacing-4) var(--spacing-8)',
  borderRadius: 'var(--border-radius-lg)',
  border: 'none',
  fontSize: 'var(--font-size-base)',
  fontWeight: 'var(--font-weight-semibold)'
}}>
  Gradient Button
</button>
\`\`\`

### Responsive Grid

\`\`\`jsx
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--grid-columns-12), 1fr)',
  gap: 'var(--spacing-4)',
  maxWidth: 'var(--container-max-width-xl)',
  margin: '0 auto'
}}>
  <div style={{ gridColumn: 'span var(--grid-columns-4)' }}>Column 1</div>
  <div style={{ gridColumn: 'span var(--grid-columns-4)' }}>Column 2</div>
  <div style={{ gridColumn: 'span var(--grid-columns-4)' }}>Column 3</div>
</div>
\`\`\`

### Custom Theme

\`\`\`css
:root {
  /* Override brand colors */
  --color-brand-primary-500: rgba(255, 0, 0, 1);
  
  /* Override semantic tokens */
  --interactive-default: var(--color-brand-primary-500);
  
  /* Override spacing */
  --spacing-base: 1.5rem;
}
\`\`\`
`;

const utilityContent = `
## Utility Functions

Import utility functions for programmatic token usage:

\`\`\`jsx
import { 
  applyGradient, 
  applyFocusRing, 
  createResponsiveContainer,
  applyTouchTarget,
  prefersReducedMotion
} from '@primitivekit/react/tokens';

// Apply gradient
const element = document.querySelector('.hero');
applyGradient(element, 'linear', 'primary');

// Apply focus ring
const button = document.querySelector('button');
applyFocusRing(button, 'primary', 'base');

// Create responsive container
const container = document.querySelector('.container');
createResponsiveContainer(container, 'xl', 'md');

// Apply WCAG touch target
const touchButton = document.querySelector('.touch-button');
applyTouchTarget(touchButton);

// Check reduced motion preference
if (prefersReducedMotion()) {
  // Use instant animations
} else {
  // Use normal animations
}
\`\`\`
`;

const DesignTokens = () => {
  return (
    <div>
      <MarkdownRenderer content={introContent} />

      <Demo title="Color Tokens">
        <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            background: 'var(--color-brand-primary-500)',
            borderRadius: 'var(--border-radius-lg)'
          }} />
          <div style={{ 
            width: '80px', 
            height: '80px', 
            background: 'var(--color-brand-secondary-500)',
            borderRadius: 'var(--border-radius-lg)'
          }} />
          <div style={{ 
            width: '80px', 
            height: '80px', 
            background: 'var(--color-semantic-success-500)',
            borderRadius: 'var(--border-radius-lg)'
          }} />
          <div style={{ 
            width: '80px', 
            height: '80px', 
            background: 'var(--color-semantic-warning-500)',
            borderRadius: 'var(--border-radius-lg)'
          }} />
          <div style={{ 
            width: '80px', 
            height: '80px', 
            background: 'var(--color-semantic-error-500)',
            borderRadius: 'var(--border-radius-lg)'
          }} />
          <div style={{ 
            width: '80px', 
            height: '80px', 
            background: 'var(--color-semantic-info-500)',
            borderRadius: 'var(--border-radius-lg)'
          }} />
        </div>
      </Demo>

      <MarkdownRenderer content={colorContent} />

      <Demo title="Spacing Scale">
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--spacing-2)' }}>
          <div style={{ width: 'var(--spacing-1)', height: 'var(--spacing-1)', background: 'var(--color-brand-primary-500)' }} />
          <div style={{ width: 'var(--spacing-2)', height: 'var(--spacing-2)', background: 'var(--color-brand-primary-500)' }} />
          <div style={{ width: 'var(--spacing-4)', height: 'var(--spacing-4)', background: 'var(--color-brand-primary-500)' }} />
          <div style={{ width: 'var(--spacing-6)', height: 'var(--spacing-6)', background: 'var(--color-brand-primary-500)' }} />
          <div style={{ width: 'var(--spacing-8)', height: 'var(--spacing-8)', background: 'var(--color-brand-primary-500)' }} />
          <div style={{ width: 'var(--spacing-12)', height: 'var(--spacing-12)', background: 'var(--color-brand-primary-500)' }} />
        </div>
      </Demo>

      <MarkdownRenderer content={spacingContent} />
      <MarkdownRenderer content={typographyContent} />

      <Demo title="Gradient Tokens">
        <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
          <div style={{ 
            width: '150px', 
            height: '100px', 
            background: 'var(--gradient-linear-primary)',
            borderRadius: 'var(--border-radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'var(--font-weight-semibold)'
          }}>
            Primary
          </div>
          <div style={{ 
            width: '150px', 
            height: '100px', 
            background: 'var(--gradient-linear-success)',
            borderRadius: 'var(--border-radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'var(--font-weight-semibold)'
          }}>
            Success
          </div>
          <div style={{ 
            width: '150px', 
            height: '100px', 
            background: 'var(--gradient-mesh-sunset)',
            borderRadius: 'var(--border-radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'var(--font-weight-semibold)'
          }}>
            Sunset
          </div>
        </div>
      </Demo>

      <MarkdownRenderer content={gradientContent} />

      <Demo title="Glassmorphism with Blur">
        <div style={{ 
          position: 'relative',
          height: '200px',
          background: 'var(--gradient-mesh-ocean)',
          borderRadius: 'var(--border-radius-xl)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
            backdropFilter: 'blur(var(--blur-lg))',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--border-radius-lg)',
            padding: 'var(--spacing-6)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            fontWeight: 'var(--font-weight-semibold)'
          }}>
            Glass Effect Card
          </div>
        </div>
      </Demo>

      <MarkdownRenderer content={blurContent} />
      <MarkdownRenderer content={gridContent} />
      <MarkdownRenderer content={accessibilityContent} />
      <MarkdownRenderer content={usageContent} />
      <MarkdownRenderer content={utilityContent} />

      <div style={{ 
        marginTop: 'var(--spacing-12)',
        padding: 'var(--spacing-6)',
        background: 'var(--color-neutral-50)',
        borderRadius: 'var(--border-radius-lg)',
        borderLeft: '4px solid var(--color-brand-primary-500)'
      }}>
        <h3 style={{ marginTop: 0 }}>📚 Complete Documentation</h3>
        <p>
          For complete token documentation including all 600+ tokens, utility functions, 
          and advanced usage examples, see the{' '}
          <a 
            href="https://github.com/primitivekit/react/blob/main/DESIGN_TOKENS.md"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-brand-primary-600)' }}
          >
            Design Tokens Guide
          </a>
          {' '}on GitHub.
        </p>
      </div>
    </div>
  );
};

export default DesignTokens;
