#!/usr/bin/env node

/**
 * Component Page Generation Script
 * 
 * This script generates component documentation pages for all frameworks
 * by reading component metadata and populating markdown templates.
 * 
 * Features:
 * - Reads component metadata from JSON files
 * - Generates markdown files from archetypes
 * - Creates framework-specific import statements and code examples
 * - Supports all 6 frameworks with appropriate syntax
 * 
 * Requirements: 2.1, 8.2, 8.3, 8.4, 9.2
 * 
 * Usage: node docs/scripts/generate-component-pages.js [options]
 * 
 * Options:
 *   --framework <name>  Generate pages for specific framework only
 *   --component <name>  Generate page for specific component only
 *   --force            Overwrite existing pages
 *   --dry-run          Show what would be generated without writing files
 */

const fs = require('fs');
const path = require('path');

// Framework configurations
const FRAMEWORKS = {
  react: {
    name: 'React',
    packageName: '@primitivekit/react',
    importSyntax: (component) => `import { ${component} } from '@primitivekit/react';`,
    basicUsage: (component) => `<${component}>Content</${component}>`,
    language: 'tsx'
  },
  vue: {
    name: 'Vue',
    packageName: '@primitivekit/vue',
    importSyntax: (component) => `import { ${component} } from '@primitivekit/vue';`,
    basicUsage: (component) => `<${component}>Content</${component}>`,
    language: 'vue'
  },
  angular: {
    name: 'Angular',
    packageName: '@primitivekit/angular',
    importSyntax: (component) => `import { ${component}Component } from '@primitivekit/angular';`,
    basicUsage: (component) => {
      const kebab = toKebabCase(component);
      return `<pk-${kebab}>Content</pk-${kebab}>`;
    },
    language: 'typescript'
  },
  svelte: {
    name: 'Svelte',
    packageName: '@primitivekit/svelte',
    importSyntax: (component) => `import ${component} from '@primitivekit/svelte/${component}.svelte';`,
    basicUsage: (component) => `<${component}>Content</${component}>`,
    language: 'svelte'
  },
  astro: {
    name: 'Astro',
    packageName: '@primitivekit/astro',
    importSyntax: (component) => `import { ${component} } from '@primitivekit/astro';`,
    basicUsage: (component) => `<${component}>Content</${component}>`,
    language: 'astro'
  },
  vanilla: {
    name: 'Vanilla JS',
    packageName: '@primitivekit/vanilla',
    importSyntax: (component) => `import { ${component} } from '@primitivekit/vanilla';`,
    basicUsage: (component) => `const ${component.toLowerCase()} = new ${component}({ /* options */ });\ndocument.body.appendChild(${component.toLowerCase()}.element);`,
    language: 'javascript'
  }
};

// Component descriptions (fallback if not in metadata)
const COMPONENT_DESCRIPTIONS = {
  'Button': 'Interactive button component with multiple variants, sizes, and states for triggering actions.',
  'Input': 'Text input field component with validation, icons, and various input types.',
  'Card': 'Container component for grouping related content with optional header, body, and footer sections.',
  'Badge': 'Small label component for displaying status, counts, or categories.',
  'Tag': 'Removable label component for displaying tags, filters, or selections.',
  'Avatar': 'Component for displaying user profile images or initials in a circular or rounded container.',
  'Divider': 'Visual separator component for dividing content sections horizontally or vertically.',
  'Space': 'Layout component for adding consistent spacing between elements.',
  'Stack': 'Layout component for arranging children in a vertical or horizontal stack with consistent spacing.',
  'Container': 'Layout component for constraining content width and centering content on the page.',
  'Grid': 'Layout component for creating responsive grid layouts with customizable columns and gaps.',
  'Alert': 'Feedback component for displaying important messages, warnings, or notifications.',
  'Progress': 'Feedback component for showing the completion progress of a task or operation.',
  'Spinner': 'Loading indicator component for showing that content is being loaded or processed.',
  'Skeleton': 'Placeholder component for showing loading states with animated skeleton screens.',
  'Empty': 'Component for displaying empty states when no data or content is available.',
  'Image': 'Enhanced image component with lazy loading, fallback, and aspect ratio support.',
  'Link': 'Navigation component for creating accessible hyperlinks with various styles.',
  'Typography': 'Text component for consistent typography with predefined styles and semantic HTML.',
  'Breadcrumb': 'Navigation component for showing the current page location in a hierarchical structure.',
  'Checkbox': 'Form input component for selecting one or multiple options from a set.',
  'Radio': 'Form input component for selecting a single option from a set of mutually exclusive choices.',
  'Switch': 'Toggle component for switching between two states, typically on/off or enabled/disabled.',
  'Textarea': 'Multi-line text input component for entering longer text content.',
  'Select': 'Dropdown component for selecting one or multiple options from a list.',
  'Slider': 'Input component for selecting a numeric value from a range using a draggable handle.',
  'Form': 'Container component for grouping form inputs with validation and submission handling.',
  'Upload': 'Component for uploading files with drag-and-drop support and progress indication.',
  'Tabs': 'Navigation component for organizing content into multiple panels with tab selection.',
  'Steps': 'Navigation component for showing progress through a multi-step process or wizard.',
  'Collapse': 'Component for showing and hiding content sections with expand/collapse animation.',
  'Dropdown': 'Overlay component for displaying a menu or list of options triggered by a button.',
  'Menu': 'Navigation component for displaying a list of actions or navigation links.',
  'Modal': 'Overlay component for displaying content in a dialog that requires user interaction.',
  'Drawer': 'Overlay component for displaying a sliding panel from the edge of the screen.',
  'Tooltip': 'Overlay component for displaying helpful information when hovering over an element.',
  'Popover': 'Overlay component for displaying rich content in a floating panel triggered by user interaction.',
  'Table': 'Data display component for showing structured data in rows and columns with sorting and pagination.',
  'Pagination': 'Navigation component for splitting content across multiple pages with page controls.'
};

// Utility functions
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function toTitleCase(str) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}

function getCategoryDisplayName(category) {
  const names = {
    'layout': 'Layout',
    'form': 'Form',
    'feedback': 'Feedback',
    'navigation': 'Navigation',
    'overlay': 'Overlay',
    'data-display': 'Data Display'
  };
  return names[category] || category;
}

/**
 * Generate framework-specific import statement
 */
function generateImportStatement(framework, componentName) {
  const config = FRAMEWORKS[framework];
  return config.importSyntax(componentName);
}

/**
 * Generate framework-specific basic usage example
 */
function generateBasicUsage(framework, componentName, metadata) {
  const config = FRAMEWORKS[framework];
  const usage = config.basicUsage(componentName);
  
  // Wrap in code block with appropriate language
  return `\`\`\`${config.language}\n${usage}\n\`\`\``;
}

/**
 * Generate framework-specific variant examples
 */
function generateVariantExamples(framework, componentName, metadata) {
  const config = FRAMEWORKS[framework];
  const hasVariant = metadata.props.some(p => p.name === 'variant');
  
  if (!hasVariant) {
    return '';
  }
  
  const examples = [];
  
  if (framework === 'vanilla') {
    examples.push(`const primary = new ${componentName}({ variant: 'primary' });`);
    examples.push(`const secondary = new ${componentName}({ variant: 'secondary' });`);
    examples.push(`const success = new ${componentName}({ variant: 'success' });`);
    examples.push(`const danger = new ${componentName}({ variant: 'danger' });`);
  } else if (framework === 'angular') {
    const kebab = toKebabCase(componentName);
    examples.push(`<pk-${kebab} variant="primary">Primary</ pk-${kebab}>`);
    examples.push(`<pk-${kebab} variant="secondary">Secondary</pk-${kebab}>`);
    examples.push(`<pk-${kebab} variant="success">Success</pk-${kebab}>`);
    examples.push(`<pk-${kebab} variant="danger">Danger</pk-${kebab}>`);
  } else {
    examples.push(`<${componentName} variant="primary">Primary</${componentName}>`);
    examples.push(`<${componentName} variant="secondary">Secondary</${componentName}>`);
    examples.push(`<${componentName} variant="success">Success</${componentName}>`);
    examples.push(`<${componentName} variant="danger">Danger</${componentName}>`);
  }
  
  return `\`\`\`${config.language}\n${examples.join('\n')}\n\`\`\``;
}

/**
 * Generate framework-specific size examples
 */
function generateSizeExamples(framework, componentName, metadata) {
  const config = FRAMEWORKS[framework];
  const hasSize = metadata.props.some(p => p.name === 'size');
  
  if (!hasSize) {
    return '';
  }
  
  const examples = [];
  
  if (framework === 'vanilla') {
    examples.push(`const small = new ${componentName}({ size: 'small' });`);
    examples.push(`const medium = new ${componentName}({ size: 'medium' });`);
    examples.push(`const large = new ${componentName}({ size: 'large' });`);
  } else if (framework === 'angular') {
    const kebab = toKebabCase(componentName);
    examples.push(`<pk-${kebab} size="small">Small</pk-${kebab}>`);
    examples.push(`<pk-${kebab} size="medium">Medium</pk-${kebab}>`);
    examples.push(`<pk-${kebab} size="large">Large</pk-${kebab}>`);
  } else {
    examples.push(`<${componentName} size="small">Small</${componentName}>`);
    examples.push(`<${componentName} size="medium">Medium</${componentName}>`);
    examples.push(`<${componentName} size="large">Large</${componentName}>`);
  }
  
  return `\`\`\`${config.language}\n${examples.join('\n')}\n\`\`\``;
}

/**
 * Generate framework-specific disabled example
 */
function generateDisabledExample(framework, componentName, metadata) {
  const config = FRAMEWORKS[framework];
  const hasDisabled = metadata.props.some(p => p.name === 'disabled');
  
  if (!hasDisabled) {
    return '';
  }
  
  let example;
  
  if (framework === 'vanilla') {
    example = `const disabled = new ${componentName}({ disabled: true });`;
  } else if (framework === 'angular') {
    const kebab = toKebabCase(componentName);
    example = `<pk-${kebab} [disabled]="true">Disabled</pk-${kebab}>`;
  } else {
    example = `<${componentName} disabled>Disabled</${componentName}>`;
  }
  
  return `\`\`\`${config.language}\n${example}\n\`\`\``;
}

/**
 * Generate props table in markdown format
 */
function generatePropsTable(metadata) {
  if (!metadata.props || metadata.props.length === 0) {
    return 'No props available.';
  }
  
  const rows = metadata.props.map(prop => {
    const name = prop.required ? `\`${prop.name}\`*` : `\`${prop.name}\``;
    const type = `\`${prop.type}\``;
    const defaultValue = prop.default ? `\`${prop.default}\`` : '-';
    const description = prop.description || 'No description';
    
    return `| ${name} | ${type} | ${defaultValue} | ${description} |`;
  });
  
  const header = '| Prop | Type | Default | Description |\n|------|------|---------|-------------|';
  const note = '\n\n**Note:** Props marked with `*` are required.';
  
  return header + '\n' + rows.join('\n') + note;
}

/**
 * Generate related components links
 */
function generateRelatedComponents(framework, metadata) {
  if (!metadata.relatedComponents || metadata.relatedComponents.length === 0) {
    return '';
  }
  
  return metadata.relatedComponents
    .map(comp => `- [${comp}](/docs/${framework}/${toKebabCase(comp)}) - ${COMPONENT_DESCRIPTIONS[comp] || 'Related component'}`)
    .join('\n');
}

/**
 * Generate design tokens list
 */
function generateDesignTokens(metadata) {
  if (!metadata.designTokens || metadata.designTokens.length === 0) {
    return 'No design tokens available.';
  }
  
  // Group tokens by category (prefix)
  const grouped = {};
  metadata.designTokens.forEach(token => {
    const parts = token.split('-');
    const category = parts.slice(0, 2).join('-'); // e.g., --btn
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(token);
  });
  
  // Generate list
  const lists = Object.entries(grouped).map(([category, tokens]) => {
    const items = tokens.slice(0, 10).map(t => `- \`${t}\``).join('\n'); // Limit to 10 per category
    const more = tokens.length > 10 ? `\n- ... and ${tokens.length - 10} more` : '';
    return items + more;
  });
  
  return lists.join('\n');
}

/**
 * Generate component page content
 */
function generateComponentPage(framework, metadata) {
  const config = FRAMEWORKS[framework];
  const componentName = metadata.name;
  const description = metadata.description || COMPONENT_DESCRIPTIONS[componentName] || `${componentName} component for ${config.name}`;
  const kebabName = toKebabCase(componentName);
  
  // Calculate weight based on category and component name
  const categoryWeights = {
    'layout': 100,
    'form': 200,
    'feedback': 300,
    'navigation': 400,
    'overlay': 500,
    'data-display': 600
  };
  const baseWeight = categoryWeights[metadata.category] || 700;
  const componentWeight = baseWeight + componentName.charCodeAt(0); // Simple ordering by first letter
  
  const content = `---
title: "${componentName}"
description: "${description}"
framework: "${framework}"
category: "${metadata.category}"
weight: ${componentWeight}
tags: ["${metadata.category}", "${framework}"]
version: "${metadata.version}"
wcagLevel: "AA"
relatedComponents: ${JSON.stringify(metadata.relatedComponents || [])}
---

# ${componentName}

${description}

## Import

\`\`\`${config.language}
${generateImportStatement(framework, componentName)}
\`\`\`

## Basic Usage

${generateBasicUsage(framework, componentName, metadata)}

## Props

${generatePropsTable(metadata)}

${generateVariantExamples(framework, componentName, metadata) ? `## Variants\n\n${generateVariantExamples(framework, componentName, metadata)}` : ''}

${generateSizeExamples(framework, componentName, metadata) ? `## Sizes\n\n${generateSizeExamples(framework, componentName, metadata)}` : ''}

${generateDisabledExample(framework, componentName, metadata) ? `## States\n\n### Disabled\n\n${generateDisabledExample(framework, componentName, metadata)}` : ''}

## Customization

The ${componentName} component supports CSS variables for complete customization:

\`\`\`${config.language}
${framework === 'vanilla' 
  ? `const ${componentName.toLowerCase()} = new ${componentName}({\n  style: {\n    '--${kebabName}-bg-color': '#007bff',\n    '--${kebabName}-text-color': '#ffffff'\n  }\n});`
  : framework === 'angular'
  ? `<pk-${kebabName} [style]="{\n  '--${kebabName}-bg-color': '#007bff',\n  '--${kebabName}-text-color': '#ffffff'\n}">Custom</pk-${kebabName}>`
  : `<${componentName} style={{\n  '--${kebabName}-bg-color': '#007bff',\n  '--${kebabName}-text-color': '#ffffff'\n}}>Custom</${componentName}>`
}
\`\`\`

### Design Tokens

The following design tokens are available for customization:

${generateDesignTokens(metadata)}

## Accessibility

The ${componentName} component is fully accessible and follows WCAG 2.1 AA standards:

- ✅ Semantic HTML elements
- ✅ Keyboard accessible
- ✅ Focus visible indicator
- ✅ Proper ARIA attributes
- ✅ Screen reader compatible
- ✅ Touch target size (44x44px minimum)
- ✅ Color contrast compliance

### Keyboard Navigation

| Key | Action |
|-----|--------|
| \`Tab\` | Move focus to/from component |
${metadata.category === 'form' || metadata.category === 'navigation' ? `| \`Enter\` | Activate component |\n| \`Space\` | Activate component |` : ''}
${metadata.category === 'overlay' ? `| \`Escape\` | Close component |` : ''}

## Related Components

${generateRelatedComponents(framework, metadata)}

## See Also

- [Installation Guide](/docs/installation)
- [Customization Guide](/docs/customization)
- [Design Tokens Reference](/docs/design-tokens)
- [Accessibility Guide](/docs/accessibility)
`;
  
  return content;
}

/**
 * Generate component page file
 */
function generateComponentFile(framework, metadata, options = {}) {
  const componentName = metadata.name;
  const kebabName = toKebabCase(componentName);
  const outputPath = path.join(
    __dirname,
    '../content/docs',
    framework,
    `${kebabName}.md`
  );
  
  // Check if file exists and force flag is not set
  if (fs.existsSync(outputPath) && !options.force) {
    if (options.verbose) {
      console.log(`  ⊘ ${componentName} (already exists, use --force to overwrite)`);
    }
    return { skipped: true, path: outputPath };
  }
  
  // Generate content
  const content = generateComponentPage(framework, metadata);
  
  // Dry run - don't write file
  if (options.dryRun) {
    console.log(`  ⊙ ${componentName} (dry run)`);
    return { dryRun: true, path: outputPath, content };
  }
  
  // Ensure directory exists
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write file
  fs.writeFileSync(outputPath, content, 'utf-8');
  
  if (options.verbose) {
    console.log(`  ✓ ${componentName}`);
  }
  
  return { success: true, path: outputPath };
}

/**
 * Generate all component pages for a framework
 */
function generateFrameworkPages(framework, options = {}) {
  const metadataDir = path.join(__dirname, '../data/components', framework);
  
  if (!fs.existsSync(metadataDir)) {
    console.warn(`Metadata directory not found: ${metadataDir}`);
    return { total: 0, generated: 0, skipped: 0, errors: 0 };
  }
  
  const files = fs.readdirSync(metadataDir).filter(f => f.endsWith('.json'));
  
  let stats = {
    total: files.length,
    generated: 0,
    skipped: 0,
    errors: 0
  };
  
  files.forEach(file => {
    try {
      const metadataPath = path.join(metadataDir, file);
      const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
      
      // Filter by component if specified
      if (options.component && metadata.name.toLowerCase() !== options.component.toLowerCase()) {
        return;
      }
      
      const result = generateComponentFile(framework, metadata, options);
      
      if (result.skipped) {
        stats.skipped++;
      } else if (result.success || result.dryRun) {
        stats.generated++;
      }
    } catch (error) {
      console.error(`  ✗ ${file}: ${error.message}`);
      stats.errors++;
    }
  });
  
  return stats;
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const options = {
    framework: null,
    component: null,
    force: false,
    dryRun: false,
    verbose: true
  };
  
  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--framework' && args[i + 1]) {
      options.framework = args[i + 1];
      i++;
    } else if (args[i] === '--component' && args[i + 1]) {
      options.component = args[i + 1];
      i++;
    } else if (args[i] === '--force') {
      options.force = true;
    } else if (args[i] === '--dry-run') {
      options.dryRun = true;
    } else if (args[i] === '--quiet') {
      options.verbose = false;
    }
  }
  
  console.log('Starting component page generation...\n');
  
  if (options.dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be written\n');
  }
  
  const frameworks = options.framework 
    ? [options.framework] 
    : Object.keys(FRAMEWORKS);
  
  let totalStats = {
    total: 0,
    generated: 0,
    skipped: 0,
    errors: 0
  };
  
  frameworks.forEach(framework => {
    if (!FRAMEWORKS[framework]) {
      console.error(`Unknown framework: ${framework}`);
      return;
    }
    
    console.log(`Processing ${FRAMEWORKS[framework].name}...`);
    const stats = generateFrameworkPages(framework, options);
    
    console.log(`  Total: ${stats.total}, Generated: ${stats.generated}, Skipped: ${stats.skipped}, Errors: ${stats.errors}\n`);
    
    totalStats.total += stats.total;
    totalStats.generated += stats.generated;
    totalStats.skipped += stats.skipped;
    totalStats.errors += stats.errors;
  });
  
  console.log('Component page generation complete!');
  console.log(`Total components: ${totalStats.total}`);
  console.log(`Generated: ${totalStats.generated}`);
  console.log(`Skipped: ${totalStats.skipped}`);
  console.log(`Errors: ${totalStats.errors}`);
  
  if (options.dryRun) {
    console.log('\n💡 Run without --dry-run to write files');
  }
  
  process.exit(totalStats.errors > 0 ? 1 : 0);
}

// Run the script
if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

module.exports = {
  generateComponentPage,
  generateComponentFile,
  generateFrameworkPages,
  generateImportStatement,
  generateBasicUsage,
  generatePropsTable
};
