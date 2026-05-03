#!/usr/bin/env node

/**
 * Navigation Menu Generation Script
 * 
 * Generates hugo.toml menu entries for all component pages across all frameworks.
 * Creates a 3-level hierarchy: Framework → Category → Component
 * 
 * Features:
 * - Reads component metadata from JSON files
 * - Groups components by framework and category
 * - Adds component counts to category labels (e.g., "Layout (6)")
 * - Generates properly weighted menu entries
 * - Preserves existing non-component menu sections
 * 
 * Usage: node scripts/update-navigation.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const FRAMEWORKS = [
  { id: 'react', name: 'React', weight: 2 },
  { id: 'vue', name: 'Vue', weight: 3 },
  { id: 'angular', name: 'Angular', weight: 4 },
  { id: 'svelte', name: 'Svelte', weight: 5 },
  { id: 'astro', name: 'Astro', weight: 6 },
  { id: 'vanilla', name: 'Vanilla JS', weight: 7 }
];

const CATEGORIES = {
  'form': { name: 'Form Components', weight: 1 },
  'layout': { name: 'Layout Components', weight: 2 },
  'feedback': { name: 'Feedback Components', weight: 3 },
  'navigation': { name: 'Navigation Components', weight: 4 },
  'overlay': { name: 'Overlay Components', weight: 5 },
  'data-display': { name: 'Data Display Components', weight: 6 }
};

const DATA_DIR = path.join(__dirname, '..', 'data', 'components');
const HUGO_CONFIG = path.join(__dirname, '..', 'hugo.toml');

/**
 * Read all component metadata files for a framework
 */
function readComponentMetadata(framework) {
  const frameworkDir = path.join(DATA_DIR, framework);
  
  if (!fs.existsSync(frameworkDir)) {
    console.warn(`⚠️  Framework directory not found: ${frameworkDir}`);
    return [];
  }

  const files = fs.readdirSync(frameworkDir).filter(f => f.endsWith('.json'));
  const components = [];

  for (const file of files) {
    try {
      const filePath = path.join(frameworkDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const metadata = JSON.parse(content);
      components.push(metadata);
    } catch (error) {
      console.error(`❌ Error reading ${file}:`, error.message);
    }
  }

  return components;
}

/**
 * Group components by category
 */
function groupByCategory(components) {
  const grouped = {};
  
  for (const component of components) {
    const category = component.category || 'other';
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(component);
  }

  // Sort components within each category by name
  for (const category in grouped) {
    grouped[category].sort((a, b) => a.name.localeCompare(b.name));
  }

  return grouped;
}

/**
 * Generate menu entries for a framework
 */
function generateFrameworkMenuEntries(framework, components) {
  const entries = [];
  const grouped = groupByCategory(components);
  
  // Parent menu for framework components (e.g., "React Components")
  const parentName = `${framework.name} Components`;
  entries.push({
    name: parentName,
    weight: framework.weight + 2 // Offset to place after "Frameworks" section
  });

  // Generate category sections with component counts
  const sortedCategories = Object.keys(grouped).sort((a, b) => {
    const weightA = CATEGORIES[a]?.weight || 999;
    const weightB = CATEGORIES[b]?.weight || 999;
    return weightA - weightB;
  });

  for (const categoryId of sortedCategories) {
    const categoryComponents = grouped[categoryId];
    const categoryInfo = CATEGORIES[categoryId] || { name: categoryId, weight: 999 };
    const componentCount = categoryComponents.length;
    
    // Category menu entry with count
    entries.push({
      name: `${categoryInfo.name} (${componentCount})`,
      parent: parentName,
      weight: categoryInfo.weight
    });

    // Individual component entries
    categoryComponents.forEach((component, index) => {
      entries.push({
        name: component.name,
        pageRef: `/docs/${framework.id}/${component.name.toLowerCase()}`,
        parent: `${categoryInfo.name} (${componentCount})`,
        weight: index + 1
      });
    });
  }

  return entries;
}

/**
 * Convert menu entry to TOML format
 */
function entryToToml(entry, indent = 0) {
  const spaces = '  '.repeat(indent);
  let toml = `${spaces}[[menu.sidebar]]\n`;
  toml += `${spaces}name = "${entry.name}"\n`;
  
  if (entry.pageRef) {
    toml += `${spaces}pageRef = "${entry.pageRef}"\n`;
  }
  
  if (entry.parent) {
    toml += `${spaces}parent = "${entry.parent}"\n`;
  }
  
  toml += `${spaces}weight = ${entry.weight}\n`;
  
  return toml;
}

/**
 * Generate complete navigation menu
 */
function generateNavigationMenu() {
  console.log('🔍 Reading component metadata...\n');
  
  const allEntries = [];
  let totalComponents = 0;

  for (const framework of FRAMEWORKS) {
    const components = readComponentMetadata(framework.id);
    console.log(`   ${framework.name}: ${components.length} components`);
    totalComponents += components.length;
    
    const entries = generateFrameworkMenuEntries(framework, components);
    allEntries.push(...entries);
  }

  console.log(`\n✅ Total: ${totalComponents} components across ${FRAMEWORKS.length} frameworks\n`);
  
  return allEntries;
}

/**
 * Read existing hugo.toml and extract non-component sections
 */
function readExistingConfig() {
  if (!fs.existsSync(HUGO_CONFIG)) {
    throw new Error(`Hugo config not found: ${HUGO_CONFIG}`);
  }

  return fs.readFileSync(HUGO_CONFIG, 'utf-8');
}

/**
 * Extract the section before menu.sidebar entries
 */
function extractConfigHeader(config) {
  const menuSidebarIndex = config.indexOf('[[menu.sidebar]]');
  if (menuSidebarIndex === -1) {
    // No existing menu.sidebar, return everything up to [menu] section
    const menuIndex = config.indexOf('[menu]');
    if (menuIndex === -1) {
      return config;
    }
    return config.substring(0, menuIndex);
  }
  return config.substring(0, menuSidebarIndex);
}

/**
 * Extract non-component menu entries (Getting Started, Frameworks, Guides)
 */
function extractStaticMenuEntries(config) {
  const entries = [];
  const lines = config.split('\n');
  let currentEntry = null;
  let inMenuSidebar = false;

  for (const line of lines) {
    if (line.trim() === '[[menu.sidebar]]') {
      if (currentEntry) {
        entries.push(currentEntry);
      }
      currentEntry = { lines: [line] };
      inMenuSidebar = true;
    } else if (inMenuSidebar && currentEntry) {
      currentEntry.lines.push(line);
      
      // Check if this is a component-related entry (skip it)
      if (line.includes('Components') && line.includes('parent =')) {
        currentEntry.isComponent = true;
      }
      if (line.includes('parent = "') && line.includes('Components')) {
        currentEntry.isComponent = true;
      }
      
      // End of entry (empty line or next entry)
      if (line.trim() === '' || line.startsWith('[[menu.')) {
        if (line.startsWith('[[menu.')) {
          currentEntry.lines.pop(); // Remove the next entry marker
        }
        if (!currentEntry.isComponent) {
          entries.push(currentEntry);
        }
        currentEntry = line.startsWith('[[menu.') ? { lines: [line] } : null;
      }
    }
  }

  // Add last entry if exists
  if (currentEntry && !currentEntry.isComponent) {
    entries.push(currentEntry);
  }

  return entries.filter(e => !e.isComponent).map(e => e.lines.join('\n')).join('\n');
}

/**
 * Main function
 */
function main() {
  console.log('🚀 Navigation Menu Generation Script\n');
  console.log('=' .repeat(50) + '\n');

  try {
    // Generate component menu entries
    const componentEntries = generateNavigationMenu();

    // Read existing config
    console.log('📖 Reading existing hugo.toml...\n');
    const existingConfig = readExistingConfig();
    
    // Extract header (everything before menu.sidebar)
    const configHeader = extractConfigHeader(existingConfig);
    
    // Build static menu entries (Getting Started, Frameworks, Guides)
    const staticMenuToml = `[menu]
[[menu.main]]
name = "Documentation"
pageRef = "/docs"
weight = 1

[[menu.main]]
name = "Components"
pageRef = "/docs/react"
weight = 2

[[menu.main]]
name = "Showcase"
pageRef = "/showcase"
weight = 3

[[menu.main]]
name = "Blog"
pageRef = "/blog"
weight = 4

[[menu.main]]
name = "Search"
weight = 5
[menu.main.params]
type = "search"

[[menu.main]]
name = "GitHub"
url = "https://github.com/primitivekit/react"
weight = 6
[menu.main.params]
icon = "github"

[[menu.main]]
name = "NPM"
url = "https://www.npmjs.com/package/@primitivekit/react"
weight = 7
[menu.main.params]
icon = "cube"

[[menu.sidebar]]
name = "Getting Started"
weight = 1

[[menu.sidebar]]
name = "Introduction"
pageRef = "/docs"
parent = "Getting Started"
weight = 1

[[menu.sidebar]]
name = "Installation"
pageRef = "/docs/installation"
parent = "Getting Started"
weight = 2

[[menu.sidebar]]
name = "Quick Start"
pageRef = "/docs/quick-start"
parent = "Getting Started"
weight = 3

[[menu.sidebar]]
name = "Frameworks"
weight = 2

[[menu.sidebar]]
name = "Framework Comparison"
pageRef = "/docs/framework-comparison"
parent = "Frameworks"
weight = 1

[[menu.sidebar]]
name = "React"
pageRef = "/docs/react"
parent = "Frameworks"
weight = 2

[[menu.sidebar]]
name = "Vue"
pageRef = "/docs/vue"
parent = "Frameworks"
weight = 3

[[menu.sidebar]]
name = "Angular"
pageRef = "/docs/angular"
parent = "Frameworks"
weight = 4

[[menu.sidebar]]
name = "Svelte"
pageRef = "/docs/svelte"
parent = "Frameworks"
weight = 5

[[menu.sidebar]]
name = "Astro"
pageRef = "/docs/astro"
parent = "Frameworks"
weight = 6

[[menu.sidebar]]
name = "Vanilla JS"
pageRef = "/docs/vanilla"
parent = "Frameworks"
weight = 7

[[menu.sidebar]]
name = "Guides"
weight = 3

[[menu.sidebar]]
name = "Customization"
pageRef = "/docs/customization"
parent = "Guides"
weight = 1

[[menu.sidebar]]
name = "Accessibility"
pageRef = "/docs/accessibility"
parent = "Guides"
weight = 2

[[menu.sidebar]]
name = "Design Tokens"
pageRef = "/docs/design-tokens"
parent = "Guides"
weight = 3

[[menu.sidebar]]
name = "Theming"
pageRef = "/docs/theming"
parent = "Guides"
weight = 4

`;

    // Generate component menu entries TOML
    const componentMenuToml = componentEntries.map(entry => entryToToml(entry)).join('\n');

    // Extract params section and everything after menu
    const paramsIndex = existingConfig.indexOf('[params]');
    const paramsSection = paramsIndex !== -1 ? existingConfig.substring(paramsIndex) : '';

    // Combine everything
    const newConfig = configHeader + staticMenuToml + componentMenuToml + '\n' + paramsSection;

    // Write updated config
    console.log('💾 Writing updated hugo.toml...\n');
    fs.writeFileSync(HUGO_CONFIG, newConfig, 'utf-8');

    console.log('=' .repeat(50));
    console.log('✅ Navigation menu updated successfully!\n');
    console.log(`📊 Summary:`);
    console.log(`   - ${FRAMEWORKS.length} frameworks`);
    console.log(`   - ${Object.keys(CATEGORIES).length} categories per framework`);
    console.log(`   - ${componentEntries.length} total menu entries generated`);
    console.log(`\n📝 Updated file: ${HUGO_CONFIG}\n`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateNavigationMenu, groupByCategory };
