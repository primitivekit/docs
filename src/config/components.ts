/**
 * Component Registry
 * Central configuration for all components in the library
 */

export interface ComponentInfo {
  id: string;
  name: string;
  category: 'form' | 'layout' | 'feedback' | 'navigation' | 'overlay';
  path: string;
  description: string;
  status: 'complete' | 'in-progress' | 'planned';
}

export const components: ComponentInfo[] = [
  // Form Components
  {
    id: 'button',
    name: 'Button',
    category: 'form',
    path: '/components/button',
    description: 'Versatile button component with multiple variants and states',
    status: 'complete'
  },
  {
    id: 'input',
    name: 'Input',
    category: 'form',
    path: '/components/input',
    description: 'Text input field with validation states',
    status: 'complete'
  },
  {
    id: 'textarea',
    name: 'Textarea',
    category: 'form',
    path: '/components/textarea',
    description: 'Multi-line text input with auto-resize',
    status: 'complete'
  },
  {
    id: 'select',
    name: 'Select',
    category: 'form',
    path: '/components/select',
    description: 'Dropdown select component',
    status: 'complete'
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'form',
    path: '/components/checkbox',
    description: 'Checkbox input with indeterminate state',
    status: 'complete'
  },
  {
    id: 'radio',
    name: 'Radio',
    category: 'form',
    path: '/components/radio',
    description: 'Radio button for single selection',
    status: 'complete'
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'form',
    path: '/components/switch',
    description: 'Toggle switch for boolean values',
    status: 'complete'
  },
  
  // Layout Components
  {
    id: 'card',
    name: 'Card',
    category: 'layout',
    path: '/components/card',
    description: 'Container for content with elevation',
    status: 'complete'
  },
  {
    id: 'container',
    name: 'Container',
    category: 'layout',
    path: '/components/container',
    description: 'Responsive container with max-width',
    status: 'complete'
  },
  {
    id: 'stack',
    name: 'Stack',
    category: 'layout',
    path: '/components/stack',
    description: 'Vertical or horizontal layout stack',
    status: 'complete'
  },
  {
    id: 'grid',
    name: 'Grid',
    category: 'layout',
    path: '/components/grid',
    description: 'Responsive grid layout system',
    status: 'complete'
  },
  {
    id: 'divider',
    name: 'Divider',
    category: 'layout',
    path: '/components/divider',
    description: 'Visual separator between content',
    status: 'complete'
  },
  
  // Feedback Components
  {
    id: 'badge',
    name: 'Badge',
    category: 'feedback',
    path: '/components/badge',
    description: 'Small status indicator or label',
    status: 'complete'
  },
  {
    id: 'spinner',
    name: 'Spinner',
    category: 'feedback',
    path: '/components/spinner',
    description: 'Loading spinner indicator',
    status: 'complete'
  },
  {
    id: 'alert',
    name: 'Alert',
    category: 'feedback',
    path: '/components/alert',
    description: 'Alert message with status variants',
    status: 'complete'
  },
  {
    id: 'progress',
    name: 'Progress',
    category: 'feedback',
    path: '/components/progress',
    description: 'Progress bar indicator',
    status: 'complete'
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    category: 'feedback',
    path: '/components/skeleton',
    description: 'Loading placeholder skeleton',
    status: 'complete'
  },
  
  // Navigation Components
  {
    id: 'link',
    name: 'Link',
    category: 'navigation',
    path: '/components/link',
    description: 'Hyperlink with variants and states',
    status: 'complete'
  },
  {
    id: 'tabs',
    name: 'Tabs',
    category: 'navigation',
    path: '/components/tabs',
    description: 'Tabbed navigation interface',
    status: 'complete'
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    category: 'navigation',
    path: '/components/breadcrumb',
    description: 'Breadcrumb navigation trail',
    status: 'complete'
  },
  
  // Overlay Components
  {
    id: 'modal',
    name: 'Modal',
    category: 'overlay',
    path: '/components/modal',
    description: 'Modal dialog overlay',
    status: 'complete'
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'overlay',
    path: '/components/tooltip',
    description: 'Contextual tooltip on hover',
    status: 'complete'
  },
  {
    id: 'popover',
    name: 'Popover',
    category: 'overlay',
    path: '/components/popover',
    description: 'Popover content overlay',
    status: 'complete'
  },
  {
    id: 'dropdown',
    name: 'Dropdown',
    category: 'overlay',
    path: '/components/dropdown',
    description: 'Dropdown menu component',
    status: 'complete'
  }
];

export const componentsByCategory = {
  form: components.filter(c => c.category === 'form'),
  layout: components.filter(c => c.category === 'layout'),
  feedback: components.filter(c => c.category === 'feedback'),
  navigation: components.filter(c => c.category === 'navigation'),
  overlay: components.filter(c => c.category === 'overlay')
};

export const categoryLabels = {
  form: 'Form',
  layout: 'Layout',
  feedback: 'Feedback',
  navigation: 'Navigation',
  overlay: 'Overlay'
};
