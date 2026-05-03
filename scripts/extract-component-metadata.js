#!/usr/bin/env node

/**
 * Component Metadata Extraction Script
 * 
 * This script extracts metadata from component source files across all 6 frameworks
 * (React, Vue, Angular, Svelte, Astro, Vanilla JS) and generates JSON metadata files.
 * 
 * Features:
 * - Reads component source files from packages
 * - Extracts component names, props, types, and descriptions from TypeScript/JSDoc
 * - Generates JSON metadata files for each component
 * - Handles framework-specific syntax patterns
 * 
 * Requirements: 8.2, 8.4, 13.6
 * 
 * Usage: node docs/scripts/extract-component-metadata.js
 */

const fs = require('fs');
const path = require('path');

// Framework configurations
const FRAMEWORKS = {
  react: {
    name: 'React',
    packagePath: '../../react',
    componentPath: 'src/components',
    filePattern: /\.(tsx|ts)$/,
    typesFile: '.types.ts'
  },
  vue: {
    name: 'Vue',
    packagePath: '../../vue',
    componentPath: 'src/components',
    filePattern: /\.(vue|ts)$/,
    typesFile: 'types.ts'
  },
  angular: {
    name: 'Angular',
    packagePath: '../../angular',
    componentPath: 'src/components',
    filePattern: /\.(ts)$/,
    typesFile: '.types.ts'
  },
  svelte: {
    name: 'Svelte',
    packagePath: '../../svelte',
    componentPath: 'src/components',
    filePattern: /\.(svelte|ts)$/,
    typesFile: 'types.ts'
  },
  astro: {
    name: 'Astro',
    packagePath: '../../astro',
    componentPath: 'src/components',
    filePattern: /\.(astro|ts)$/,
    typesFile: 'types.ts'
  },
  vanilla: {
    name: 'Vanilla JS',
    packagePath: '../../vanilla',
    componentPath: 'src/components',
    filePattern: /\.(ts|js)$/,
    typesFile: '.types.ts'
  }
};

// Component categories mapping
const COMPONENT_CATEGORIES = {
  // Layout Components
  'Card': 'layout',
  'Container': 'layout',
  'Grid': 'layout',
  'Stack': 'layout',
  'Space': 'layout',
  'Divider': 'layout',
  
  // Form Components
  'Button': 'form',
  'Input': 'form',
  'Select': 'form',
  'Checkbox': 'form',
  'Radio': 'form',
  'Switch': 'form',
  'Textarea': 'form',
  'Slider': 'form',
  'Form': 'form',
  'Upload': 'form',
  
  // Feedback Components
  'Alert': 'feedback',
  'Badge': 'feedback',
  'Spinner': 'feedback',
  'Progress': 'feedback',
  'Skeleton': 'feedback',
  
  // Navigation Components
  'Link': 'navigation',
  'Breadcrumb': 'navigation',
  'Tabs': 'navigation',
  'Menu': 'navigation',
  'Steps': 'navigation',
  'Pagination': 'navigation',
  
  // Overlay Components
  'Modal': 'overlay',
  'Drawer': 'overlay',
  'Tooltip': 'overlay',
  'Popover': 'overlay',
  'Dropdown': 'overlay',
  
  // Data Display Components
  'Avatar': 'data-display',
  'Tag': 'data-display',
  'Table': 'data-display',
  'Collapse': 'data-display',
  'Image': 'data-display',
  'Empty': 'data-display',
  'Typography': 'data-display'
};

/**
 * Extract JSDoc comment from text
 */
function extractJSDocComment(text, propName) {
  // Look for JSDoc comment immediately before the property
  // Use a more specific pattern that captures only the closest comment
  const lines = text.split('\n');
  let propLineIndex = -1;
  
  // Find the line with the property definition
  for (let i = 0; i < lines.length; i++) {
    // Match property definition: propName?: type or propName: type
    if (lines[i].match(new RegExp(`^\\s*${propName}\\??:\\s*`))) {
      propLineIndex = i;
      break;
    }
  }
  
  if (propLineIndex === -1) {
    return '';
  }
  
  // Look backwards for the JSDoc comment
  let commentLines = [];
  let inComment = false;
  
  for (let i = propLineIndex - 1; i >= 0; i--) {
    const line = lines[i].trim();
    
    if (line === '*/') {
      inComment = true;
      continue;
    }
    
    if (line.startsWith('/**')) {
      // Found the start of the comment
      break;
    }
    
    if (inComment && line.startsWith('*')) {
      const content = line.replace(/^\*\s*/, '');
      // Skip @tags
      if (!content.startsWith('@')) {
        commentLines.unshift(content);
      }
    }
    
    // If we hit a non-comment line, stop
    if (!inComment && line && !line.startsWith('*')) {
      break;
    }
  }
  
  return commentLines.join(' ').trim();
}

/**
 * Extract default value from JSDoc @default tag
 */
function extractDefaultValue(text, propName) {
  const lines = text.split('\n');
  let propLineIndex = -1;
  
  // Find the line with the property definition
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(new RegExp(`^\\s*${propName}\\??:\\s*`))) {
      propLineIndex = i;
      break;
    }
  }
  
  if (propLineIndex === -1) {
    return undefined;
  }
  
  // Look backwards for the @default tag in JSDoc comment
  for (let i = propLineIndex - 1; i >= 0; i--) {
    const line = lines[i].trim();
    
    if (line.startsWith('/**')) {
      // Reached start of comment without finding @default
      break;
    }
    
    const defaultMatch = line.match(/\*\s*@default\s+(.+)/);
    if (defaultMatch) {
      return defaultMatch[1].trim();
    }
    
    // If we hit a non-comment line, stop
    if (!line.startsWith('*') && line !== '*/') {
      break;
    }
  }
  
  return undefined;
}

/**
 * Parse TypeScript interface to extract props
 */
function parseTypeScriptInterface(content, interfaceName) {
  const props = [];
  
  // Find the interface definition
  const interfacePattern = new RegExp(
    `export\\s+interface\\s+${interfaceName}[^{]*{([^}]*)}`,
    's'
  );
  
  const match = content.match(interfacePattern);
  if (!match) {
    return props;
  }
  
  const interfaceBody = match[1];
  
  // Extract individual properties
  // Pattern matches: propertyName?: type; or propertyName: type;
  const propPattern = /\/\*\*[\s\S]*?\*\/\s*(\w+)\??:\s*([^;]+);/g;
  
  let propMatch;
  while ((propMatch = propPattern.exec(interfaceBody)) !== null) {
    const propName = propMatch[1];
    const propType = propMatch[2].trim();
    
    // Check if property is required (no ? after name)
    const fullMatch = propMatch[0];
    const isRequired = !fullMatch.includes(`${propName}?:`);
    
    // Extract description and default value
    const description = extractJSDocComment(content, propName);
    const defaultValue = extractDefaultValue(content, propName);
    
    props.push({
      name: propName,
      type: propType,
      required: isRequired,
      default: defaultValue,
      description: description
    });
  }
  
  return props;
}

/**
 * Parse Vue component to extract props
 */
function parseVueComponent(content) {
  const props = [];
  
  // Look for defineProps with TypeScript interface
  const definePropsPattern = /defineProps<(\w+)>\(\)/;
  const match = content.match(definePropsPattern);
  
  if (match) {
    const interfaceName = match[1];
    // The interface should be defined in a separate types file
    return { interfaceName, props: [] };
  }
  
  return { interfaceName: null, props };
}

/**
 * Extract component description from file header comment
 */
function extractComponentDescription(content) {
  // Look for file-level JSDoc comment
  const headerPattern = /^\/\*\*\s*\n([\s\S]*?)\*\//;
  const match = content.match(headerPattern);
  
  if (match && match[1]) {
    const lines = match[1].split('\n')
      .map(line => line.trim())
      .filter(line => line.startsWith('*'))
      .map(line => line.replace(/^\*\s*/, ''))
      .filter(line => !line.startsWith('@'));
    
    return lines.join(' ').trim();
  }
  
  return '';
}

/**
 * Get component version from package.json
 */
function getComponentVersion(frameworkPath) {
  try {
    const packageJsonPath = path.join(__dirname, frameworkPath, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    return packageJson.version || '0.0.0';
  } catch (error) {
    console.warn(`Could not read version for ${frameworkPath}:`, error.message);
    return '0.0.0';
  }
}

/**
 * Extract metadata for a single component in a framework
 */
function extractComponentMetadata(framework, frameworkConfig, componentName) {
  const componentDir = path.join(
    __dirname,
    frameworkConfig.packagePath,
    frameworkConfig.componentPath,
    componentName
  );
  
  // Check if component directory exists
  if (!fs.existsSync(componentDir)) {
    console.warn(`Component directory not found: ${componentDir}`);
    return null;
  }
  
  const metadata = {
    name: componentName,
    framework: framework,
    frameworkName: frameworkConfig.name,
    category: COMPONENT_CATEGORIES[componentName] || 'other',
    description: '',
    props: [],
    version: getComponentVersion(frameworkConfig.packagePath),
    relatedComponents: [],
    designTokens: []
  };
  
  try {
    // Read component files
    const files = fs.readdirSync(componentDir);
    
    // Find types file
    const typesFile = files.find(f => 
      f.includes('type') || f.includes('Type') || f.endsWith('.types.ts')
    );
    
    if (typesFile) {
      const typesPath = path.join(componentDir, typesFile);
      const typesContent = fs.readFileSync(typesPath, 'utf-8');
      
      // Extract description from types file
      metadata.description = extractComponentDescription(typesContent);
      
      // Extract props from interface
      const propsInterfaceName = `${componentName}Props`;
      metadata.props = parseTypeScriptInterface(typesContent, propsInterfaceName);
    }
    
    // For Vue, also check the .vue file
    if (framework === 'vue') {
      const vueFile = files.find(f => f.endsWith('.vue'));
      if (vueFile) {
        const vuePath = path.join(componentDir, vueFile);
        const vueContent = fs.readFileSync(vuePath, 'utf-8');
        
        // If no description yet, try to extract from Vue file
        if (!metadata.description) {
          metadata.description = extractComponentDescription(vueContent);
        }
      }
    }
    
    // Extract design tokens from CSS/style content
    const cssFiles = files.filter(f => f.endsWith('.css') || f.endsWith('.scss'));
    cssFiles.forEach(cssFile => {
      const cssPath = path.join(componentDir, cssFile);
      const cssContent = fs.readFileSync(cssPath, 'utf-8');
      
      // Extract CSS custom properties (design tokens)
      const tokenPattern = /--[\w-]+/g;
      const tokens = cssContent.match(tokenPattern) || [];
      metadata.designTokens = [...new Set(tokens)]; // Remove duplicates
    });
    
    // Determine related components based on category
    metadata.relatedComponents = Object.keys(COMPONENT_CATEGORIES)
      .filter(comp => 
        comp !== componentName && 
        COMPONENT_CATEGORIES[comp] === metadata.category
      )
      .slice(0, 5); // Limit to 5 related components
    
  } catch (error) {
    console.error(`Error extracting metadata for ${componentName} in ${framework}:`, error.message);
    return null;
  }
  
  return metadata;
}

/**
 * Get all component names from a framework
 */
function getComponentNames(frameworkConfig) {
  const componentsDir = path.join(
    __dirname,
    frameworkConfig.packagePath,
    frameworkConfig.componentPath
  );
  
  if (!fs.existsSync(componentsDir)) {
    console.warn(`Components directory not found: ${componentsDir}`);
    return [];
  }
  
  return fs.readdirSync(componentsDir)
    .filter(item => {
      const itemPath = path.join(componentsDir, item);
      return fs.statSync(itemPath).isDirectory();
    });
}

/**
 * Generate metadata for all components in all frameworks
 */
function generateAllMetadata() {
  const outputDir = path.join(__dirname, '../data/components');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  let totalComponents = 0;
  let successfulExtractions = 0;
  
  console.log('Starting component metadata extraction...\n');
  
  // Process each framework
  Object.entries(FRAMEWORKS).forEach(([framework, config]) => {
    console.log(`Processing ${config.name}...`);
    
    const componentNames = getComponentNames(config);
    console.log(`  Found ${componentNames.length} components`);
    
    componentNames.forEach(componentName => {
      totalComponents++;
      
      const metadata = extractComponentMetadata(framework, config, componentName);
      
      if (metadata) {
        // Create framework-specific directory
        const frameworkDir = path.join(outputDir, framework);
        if (!fs.existsSync(frameworkDir)) {
          fs.mkdirSync(frameworkDir, { recursive: true });
        }
        
        // Write metadata to JSON file
        const outputPath = path.join(
          frameworkDir,
          `${componentName.toLowerCase()}.json`
        );
        
        fs.writeFileSync(
          outputPath,
          JSON.stringify(metadata, null, 2),
          'utf-8'
        );
        
        successfulExtractions++;
        console.log(`  ✓ ${componentName}`);
      } else {
        console.log(`  ✗ ${componentName} (failed)`);
      }
    });
    
    console.log('');
  });
  
  console.log('Metadata extraction complete!');
  console.log(`Total components processed: ${totalComponents}`);
  console.log(`Successful extractions: ${successfulExtractions}`);
  console.log(`Failed extractions: ${totalComponents - successfulExtractions}`);
  console.log(`\nMetadata files saved to: ${outputDir}`);
}

// Run the script
if (require.main === module) {
  try {
    generateAllMetadata();
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

module.exports = {
  extractComponentMetadata,
  parseTypeScriptInterface,
  parseVueComponent,
  extractJSDocComment,
  extractDefaultValue,
  extractComponentDescription
};
