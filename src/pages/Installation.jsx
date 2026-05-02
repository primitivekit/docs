import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer/MarkdownRenderer';

const content = `
# Installation

Get started with the Custom Component Library in your React project.

## Prerequisites

Make sure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- React 18.0.0 or higher

## Install via npm

\`\`\`bash
npm install @primitivekit/react
\`\`\`

## Install via yarn

\`\`\`bash
yarn add @primitivekit/react
\`\`\`

## Basic Setup

After installation, import the components you need:

\`\`\`jsx
import { Button } from '@primitivekit/react';

function App() {
  return (
    <Button variant="primary">
      Hello World
    </Button>
  );
}

export default App;
\`\`\`

## Styles

The component styles are automatically included when you import components. No additional CSS imports are needed!

## Customization

To customize the components, add CSS variables to your global CSS file:

\`\`\`css
/* styles/global.css or App.css */
:root {
  /* Customize button colors */
  --btn-primary-bg: #8b5cf6;
  --btn-primary-bg-hover: #7c3aed;
  
  /* Customize button shape */
  --btn-border-radius: 0.75rem;
  
  /* Customize button typography */
  --btn-font-weight: 600;
}
\`\`\`

That's it! All components will instantly react to your CSS variable changes.

## Next Steps

- Learn about [Customization](/customization) to theme components
- Explore [Accessibility](/accessibility) features
- Check out the [Button Component](/components/button) documentation
`;

const Installation = () => {
  return <MarkdownRenderer content={content} />;
};

export default Installation;
