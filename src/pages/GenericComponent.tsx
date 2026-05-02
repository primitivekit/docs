import React from 'react';
import { Navigate } from 'react-router-dom';
import { components } from '../config/components';
import MarkdownRenderer from '../components/MarkdownRenderer/MarkdownRenderer';

interface GenericComponentProps {
  componentId: string;
}

const GenericComponent: React.FC<GenericComponentProps> = ({ componentId }) => {
  const component = components.find(c => c.id === componentId);

  if (!component) {
    return <Navigate to="/404" replace />;
  }

  if (component.status !== 'complete') {
    return (
      <div>
        <h1>{component.name}</h1>
        <p>This component is currently {component.status}. Documentation will be available soon.</p>
      </div>
    );
  }

  const content = `
# ${component.name}

${component.description}

## Import

\`\`\`jsx
import { ${component.name} } from '@primitivekit/react';
\`\`\`

## Basic Usage

\`\`\`jsx
<${component.name}>
  Content
</${component.name}>
\`\`\`

## Props

Documentation coming soon. This component follows the same comprehensive customization pattern as all PrimitiveKit components, with 50-150+ CSS variables for complete control.

## Customization

Every visual property can be customized via CSS variables:

\`\`\`jsx
<${component.name}
  style={{
    '--${component.id}-bg-color': 'rgba(139, 92, 246, 1)',
    '--${component.id}-border-radius': '0.5rem',
    '--${component.id}-padding-x': '1.5rem'
  }}
>
  Custom Styled ${component.name}
</${component.name}>
\`\`\`

## Accessibility

This component is built with WCAG 2.1 AA compliance:
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- Focus management
- High contrast mode support
- Reduced motion support
`;

  return (
    <div>
      <MarkdownRenderer content={content} />
    </div>
  );
};

export default GenericComponent;
