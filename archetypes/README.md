# Hugo Archetypes for PrimitiveKit Documentation

This directory contains Hugo archetypes (templates) for generating consistent documentation pages across all frameworks.

## Available Archetypes

### component.md

Template for component documentation pages. Includes all standard sections required by the documentation structure specification.

**Usage:**

```bash
# Generate a new component page
hugo new docs/react/new-component.md --kind component

# Or for other frameworks
hugo new docs/vue/new-component.md --kind component
hugo new docs/angular/new-component.md --kind component
hugo new docs/svelte/new-component.md --kind component
hugo new docs/astro/new-component.md --kind component
hugo new docs/vanilla/new-component.md --kind component
```

**Frontmatter Fields:**

- `title`: Component name (auto-generated from filename)
- `description`: Brief description of the component
- `framework`: Framework identifier (react, vue, angular, svelte, astro, vanilla)
- `category`: Component category (layout, form, feedback, navigation, overlay, data-display)
- `weight`: Order in navigation menu (lower numbers appear first)
- `tags`: Array of relevant tags for search and categorization
- `version`: Version when component was added (e.g., "0.2.1")
- `wcagLevel`: WCAG compliance level (A, AA, or AAA)
- `relatedComponents`: Array of related component names

**Standard Sections:**

1. **Import** - Framework-specific import statement
2. **Basic Usage** - Simplest example demonstrating core functionality
3. **Props** - API reference table with all properties
4. **Variants** - Different visual styles (primary, secondary, etc.)
5. **Sizes** - Size options (small, medium, large)
6. **States** - Component states (disabled, loading, active, etc.)
7. **Examples** - 3+ working code examples (basic, intermediate, advanced)
8. **Customization** - CSS variable overrides (inline and global)
9. **Accessibility** - WCAG compliance, keyboard navigation, ARIA attributes
10. **Related Components** - Links to related component documentation
11. **Framework-Specific Notes** - Special considerations per framework
12. **TypeScript** - Type definitions and interfaces
13. **API Reference** - Methods and events (if applicable)
14. **Best Practices** - Dos and don'ts
15. **Common Patterns** - Frequently used patterns
16. **Troubleshooting** - Common issues and solutions
17. **Version History** - When component was added/updated
18. **See Also** - Links to relevant guides

## Customization

When using the archetype, you should:

1. Fill in the frontmatter fields with appropriate values
2. Replace placeholder comments with actual code examples
3. Update the Props table with real component properties
4. Add framework-specific syntax to code blocks
5. List actual design tokens available for the component
6. Document real keyboard shortcuts and ARIA attributes
7. Link to actual related components

## Automation

For bulk generation of component pages, use the automation script:

```bash
node scripts/generate-component-pages.js
```

This script will:
- Read component metadata from source code
- Generate pages using this archetype
- Populate with framework-specific code examples
- Create appropriate directory structure

## Requirements Mapping

This archetype satisfies the following requirements from the specification:

- **Requirement 2.2**: Standard sections (Import, Basic Usage, Props, Variants, Customization, Accessibility, Related Components)
- **Requirement 8.1**: Content template for component pages
- **Requirement 8.5**: Placeholders for component name, import, usage, props, examples, customization, accessibility
- **Requirement 9.4**: Consistent section headings across all frameworks

## Notes

- Hugo archetypes use Go template syntax (`{{ }}`)
- The `.Name` variable contains the filename without extension
- The `.Params` variable accesses frontmatter fields
- Code block language is dynamically set using `{{ .Params.framework }}`
- All placeholders should be replaced when generating actual documentation
