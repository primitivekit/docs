#!/usr/bin/env node

/**
 * Documentation Validation Script
 * 
 * This script validates documentation completeness and correctness across all frameworks.
 * 
 * Checks:
 * - All components have documentation pages (234 total: 39 components × 6 frameworks)
 * - All required sections are present (Import, Basic Usage, Props, Customization, Accessibility, Related Components)
 * - Internal links resolve correctly
 * - Frontmatter is valid and complete
 * - Code blocks have proper language tags
 * 
 * Requirements: 8.6, 13.7
 * 
 * Usage: node docs/scripts/validate-docs.js [options]
 * 
 * Options:
 *   --framework <name>  Validate specific framework only
 *   --component <name>  Validate specific component only
 *   --verbose          Show detailed validation output
 *   --fix              Attempt to fix simple issues (not implemented yet)
 * 
 * Exit codes:
 *   0 - All validations passed
 *   1 - Validation errors found
 *   2 - Fatal error (script failure)
 */

const fs = require('fs');
const path = require('path');

// Framework configurations
const FRAMEWORKS = ['react', 'vue', 'angular', 'svelte', 'astro', 'vanilla'];

// Required sections in component documentation
const REQUIRED_SECTIONS = [
  'Import',
  'Basic Usage',
  'Props',
  'Customization',
  'Accessibility',
  'Related Components'
];

// Required frontmatter fields (minimal set - some fields may be optional)
const REQUIRED_FRONTMATTER = [
  'title',
  'weight'
];

// Optional but recommended frontmatter fields
const RECOMMENDED_FRONTMATTER = [
  'description',
  'framework',
  'category'
];

// Utility functions
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  
  if (!frontmatterMatch) {
    return null;
  }
  
  const frontmatterText = frontmatterMatch[1];
  const frontmatter = {};
  
  // Simple YAML parser for our needs
  const lines = frontmatterText.split('\n');
  
  for (const line of lines) {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const key = match[1];
      let value = match[2].trim();
      
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          // Keep as string if parsing fails
        }
      }
      
      frontmatter[key] = value;
    }
  }
  
  return frontmatter;
}

/**
 * Extract section headings from markdown content
 */
function extractSections(content) {
  // Remove frontmatter
  const withoutFrontmatter = content.replace(/^---\n[\s\S]*?\n---\n/, '');
  
  // Extract all ## headings (level 2)
  const headingMatches = withoutFrontmatter.matchAll(/^##\s+(.+)$/gm);
  
  const sections = [];
  for (const match of headingMatches) {
    sections.push(match[1].trim());
  }
  
  return sections;
}

/**
 * Extract internal links from markdown content
 */
function extractInternalLinks(content) {
  // Match markdown links: [text](/path)
  const linkMatches = content.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g);
  
  const links = [];
  for (const match of linkMatches) {
    const url = match[2];
    
    // Only internal links (starting with /)
    if (url.startsWith('/')) {
      links.push({
        text: match[1],
        url: url
      });
    }
  }
  
  return links;
}

/**
 * Extract code blocks from markdown content
 */
function extractCodeBlocks(content) {
  // Match code blocks: ```language\ncode\n```
  const codeBlockMatches = content.matchAll(/```(\w*)\n([\s\S]*?)```/g);
  
  const codeBlocks = [];
  for (const match of codeBlockMatches) {
    codeBlocks.push({
      language: match[1] || 'none',
      code: match[2]
    });
  }
  
  return codeBlocks;
}

/**
 * Validate a single component documentation page
 */
function validateComponentPage(framework, componentName, options = {}) {
  const errors = [];
  const warnings = [];
  
  const kebabName = toKebabCase(componentName);
  const docPath = path.join(
    __dirname,
    '../content/docs',
    framework,
    `${kebabName}.md`
  );
  
  // Check if file exists
  if (!fs.existsSync(docPath)) {
    errors.push(`Documentation file not found: ${docPath}`);
    return { errors, warnings, exists: false };
  }
  
  // Read file content
  let content;
  try {
    content = fs.readFileSync(docPath, 'utf-8');
  } catch (error) {
    errors.push(`Failed to read file: ${error.message}`);
    return { errors, warnings, exists: true };
  }
  
  // Validate frontmatter
  const frontmatter = parseFrontmatter(content);
  
  if (!frontmatter) {
    errors.push('Missing or invalid frontmatter');
  } else {
    // Check required frontmatter fields
    for (const field of REQUIRED_FRONTMATTER) {
      if (!frontmatter[field]) {
        errors.push(`Missing required frontmatter field: ${field}`);
      }
    }
    
    // Check recommended frontmatter fields
    for (const field of RECOMMENDED_FRONTMATTER) {
      if (!frontmatter[field]) {
        warnings.push(`Missing recommended frontmatter field: ${field}`);
      }
    }
    
    // Validate frontmatter values
    if (frontmatter.framework && frontmatter.framework !== framework) {
      errors.push(`Frontmatter framework "${frontmatter.framework}" doesn't match directory "${framework}"`);
    }
    
    if (frontmatter.title && frontmatter.title !== componentName) {
      warnings.push(`Frontmatter title "${frontmatter.title}" doesn't match component name "${componentName}"`);
    }
  }
  
  // Validate sections
  const sections = extractSections(content);
  
  for (const requiredSection of REQUIRED_SECTIONS) {
    if (!sections.includes(requiredSection)) {
      errors.push(`Missing required section: ${requiredSection}`);
    }
  }
  
  // Validate code blocks have language tags
  const codeBlocks = extractCodeBlocks(content);
  const blocksWithoutLanguage = codeBlocks.filter(block => block.language === 'none');
  
  if (blocksWithoutLanguage.length > 0) {
    warnings.push(`${blocksWithoutLanguage.length} code block(s) missing language tag`);
  }
  
  // Check for empty sections (section heading followed immediately by another heading)
  const contentLines = content.split('\n');
  for (let i = 0; i < contentLines.length - 1; i++) {
    const line = contentLines[i].trim();
    const nextLine = contentLines[i + 1].trim();
    
    if (line.startsWith('## ') && nextLine.startsWith('##')) {
      const sectionName = line.replace(/^##\s+/, '');
      warnings.push(`Section "${sectionName}" appears to be empty`);
    }
  }
  
  // Validate internal links (basic check - just verify format)
  const links = extractInternalLinks(content);
  
  for (const link of links) {
    // Check if link follows expected pattern
    if (link.url.startsWith('/docs/')) {
      // Valid docs link
      continue;
    } else if (link.url === '/') {
      // Valid home link
      continue;
    } else {
      warnings.push(`Unusual internal link format: ${link.url}`);
    }
  }
  
  return { errors, warnings, exists: true };
}

/**
 * Validate all components for a framework
 */
function validateFramework(framework, options = {}) {
  const metadataDir = path.join(__dirname, '../data/components', framework);
  
  if (!fs.existsSync(metadataDir)) {
    return {
      framework,
      error: `Metadata directory not found: ${metadataDir}`,
      components: []
    };
  }
  
  const metadataFiles = fs.readdirSync(metadataDir).filter(f => f.endsWith('.json'));
  
  const results = {
    framework,
    total: metadataFiles.length,
    validated: 0,
    passed: 0,
    failed: 0,
    missing: 0,
    components: []
  };
  
  for (const file of metadataFiles) {
    try {
      const metadataPath = path.join(metadataDir, file);
      const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
      const componentName = metadata.name;
      
      // Filter by component if specified
      if (options.component && componentName.toLowerCase() !== options.component.toLowerCase()) {
        continue;
      }
      
      results.validated++;
      
      const validation = validateComponentPage(framework, componentName, options);
      
      const componentResult = {
        name: componentName,
        exists: validation.exists,
        errors: validation.errors,
        warnings: validation.warnings,
        passed: validation.errors.length === 0
      };
      
      if (!validation.exists) {
        results.missing++;
      } else if (validation.errors.length === 0) {
        results.passed++;
      } else {
        results.failed++;
      }
      
      results.components.push(componentResult);
      
      // Print detailed output if verbose
      if (options.verbose) {
        const status = !validation.exists ? '✗ MISSING' : 
                      validation.errors.length === 0 ? '✓ PASS' : '✗ FAIL';
        
        console.log(`  ${status} ${componentName}`);
        
        if (validation.errors.length > 0) {
          validation.errors.forEach(err => console.log(`      ERROR: ${err}`));
        }
        
        if (validation.warnings.length > 0 && options.verbose) {
          validation.warnings.forEach(warn => console.log(`      WARN: ${warn}`));
        }
      }
      
    } catch (error) {
      console.error(`  Error processing ${file}: ${error.message}`);
      results.failed++;
    }
  }
  
  return results;
}

/**
 * Validate internal links across all documentation
 */
function validateInternalLinks(frameworks, options = {}) {
  console.log('\nValidating internal links...');
  
  const allPages = new Set();
  const brokenLinks = [];
  
  // Build set of all existing pages
  for (const framework of frameworks) {
    const docsDir = path.join(__dirname, '../content/docs', framework);
    
    if (!fs.existsSync(docsDir)) {
      continue;
    }
    
    const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const pagePath = `/docs/${framework}/${file.replace('.md', '')}`;
      allPages.add(pagePath);
    }
  }
  
  // Add common pages
  allPages.add('/');
  allPages.add('/docs');
  allPages.add('/docs/installation');
  allPages.add('/docs/quick-start');
  allPages.add('/docs/customization');
  allPages.add('/docs/theming');
  allPages.add('/docs/accessibility');
  allPages.add('/docs/design-tokens');
  allPages.add('/docs/best-practices');
  allPages.add('/docs/framework-comparison');
  
  // Check all links in component pages
  for (const framework of frameworks) {
    const docsDir = path.join(__dirname, '../content/docs', framework);
    
    if (!fs.existsSync(docsDir)) {
      continue;
    }
    
    const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const filePath = path.join(docsDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const links = extractInternalLinks(content);
      
      for (const link of links) {
        // Remove anchor/hash from URL
        const urlWithoutAnchor = link.url.split('#')[0];
        
        if (!allPages.has(urlWithoutAnchor)) {
          brokenLinks.push({
            file: `${framework}/${file}`,
            linkText: link.text,
            linkUrl: link.url
          });
        }
      }
    }
  }
  
  if (brokenLinks.length > 0) {
    console.log(`  ✗ Found ${brokenLinks.length} broken link(s)`);
    
    if (options.verbose) {
      brokenLinks.forEach(link => {
        console.log(`    ${link.file}: [${link.linkText}](${link.linkUrl})`);
      });
    }
  } else {
    console.log('  ✓ All internal links are valid');
  }
  
  return brokenLinks;
}

/**
 * Print summary report
 */
function printSummary(allResults, brokenLinks) {
  console.log('\n' + '='.repeat(60));
  console.log('VALIDATION SUMMARY');
  console.log('='.repeat(60));
  
  let totalComponents = 0;
  let totalPassed = 0;
  let totalFailed = 0;
  let totalMissing = 0;
  
  for (const result of allResults) {
    totalComponents += result.total;
    totalPassed += result.passed;
    totalFailed += result.failed;
    totalMissing += result.missing;
    
    const passRate = result.total > 0 
      ? ((result.passed / result.total) * 100).toFixed(1) 
      : '0.0';
    
    console.log(`\n${result.framework.toUpperCase()}`);
    console.log(`  Total: ${result.total}`);
    console.log(`  Passed: ${result.passed} (${passRate}%)`);
    console.log(`  Failed: ${result.failed}`);
    console.log(`  Missing: ${result.missing}`);
  }
  
  console.log('\n' + '-'.repeat(60));
  console.log('OVERALL');
  console.log('-'.repeat(60));
  console.log(`Total components: ${totalComponents}`);
  console.log(`Passed: ${totalPassed}`);
  console.log(`Failed: ${totalFailed}`);
  console.log(`Missing: ${totalMissing}`);
  console.log(`Broken links: ${brokenLinks.length}`);
  
  const overallPassRate = totalComponents > 0 
    ? ((totalPassed / totalComponents) * 100).toFixed(1) 
    : '0.0';
  
  console.log(`\nPass rate: ${overallPassRate}%`);
  
  if (totalFailed === 0 && totalMissing === 0 && brokenLinks.length === 0) {
    console.log('\n✅ All validations passed!');
    return true;
  } else {
    console.log('\n❌ Validation failed!');
    
    if (totalMissing > 0) {
      console.log(`   - ${totalMissing} component page(s) missing`);
    }
    if (totalFailed > 0) {
      console.log(`   - ${totalFailed} component page(s) have errors`);
    }
    if (brokenLinks.length > 0) {
      console.log(`   - ${brokenLinks.length} broken internal link(s)`);
    }
    
    return false;
  }
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const options = {
    framework: null,
    component: null,
    verbose: false,
    fix: false
  };
  
  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--framework' && args[i + 1]) {
      options.framework = args[i + 1];
      i++;
    } else if (args[i] === '--component' && args[i + 1]) {
      options.component = args[i + 1];
      i++;
    } else if (args[i] === '--verbose') {
      options.verbose = true;
    } else if (args[i] === '--fix') {
      options.fix = true;
      console.log('⚠️  --fix option not yet implemented');
    } else if (args[i] === '--help' || args[i] === '-h') {
      console.log(`
Documentation Validation Script

Usage: node scripts/validate-docs.js [options]

Options:
  --framework <name>  Validate specific framework only
  --component <name>  Validate specific component only
  --verbose          Show detailed validation output
  --fix              Attempt to fix simple issues (not implemented)
  --help, -h         Show this help message

Examples:
  node scripts/validate-docs.js
  node scripts/validate-docs.js --framework react
  node scripts/validate-docs.js --component button
  node scripts/validate-docs.js --framework vue --verbose
      `);
      process.exit(0);
    }
  }
  
  console.log('Starting documentation validation...\n');
  
  const frameworks = options.framework 
    ? [options.framework] 
    : FRAMEWORKS;
  
  // Validate unknown framework
  if (options.framework && !FRAMEWORKS.includes(options.framework)) {
    console.error(`Error: Unknown framework "${options.framework}"`);
    console.error(`Valid frameworks: ${FRAMEWORKS.join(', ')}`);
    process.exit(2);
  }
  
  const allResults = [];
  
  // Validate each framework
  for (const framework of frameworks) {
    console.log(`Validating ${framework}...`);
    const result = validateFramework(framework, options);
    
    if (result.error) {
      console.error(`  Error: ${result.error}`);
    } else if (!options.verbose) {
      console.log(`  ${result.passed}/${result.total} passed`);
    }
    
    allResults.push(result);
  }
  
  // Validate internal links (skip if validating single component)
  let brokenLinks = [];
  if (!options.component) {
    brokenLinks = validateInternalLinks(frameworks, options);
  }
  
  // Print summary
  const success = printSummary(allResults, brokenLinks);
  
  // Exit with appropriate code
  process.exit(success ? 0 : 1);
}

// Run the script
if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(2);
  }
}

module.exports = {
  validateComponentPage,
  validateFramework,
  validateInternalLinks,
  parseFrontmatter,
  extractSections,
  extractInternalLinks,
  extractCodeBlocks
};
