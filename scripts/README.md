# Documentation Scripts

This directory contains automation scripts for generating and maintaining the PrimitiveKit documentation.

## Scripts

### extract-component-metadata.js

Extracts metadata from component source files across all 6 frameworks (React, Vue, Angular, Svelte, Astro, Vanilla JS) and generates JSON metadata files.

**Purpose:**
- Reads component source files from the packages
- Extracts component names, props, types, and descriptions from TypeScript/JSDoc
- Generates JSON metadata files for each component
- Handles framework-specific syntax patterns

**Requirements:** 8.2, 8.4, 13.6

**Usage:**
```bash
cd docs
node scripts/extract-component-metadata.js
```

**Output:**
- Creates `docs/data/components/{framework}/{component}.json` files
- Each JSON file contains:
  - Component name
  - Framework information
  - Category (layout, form, feedback, navigation, overlay, data-display)
  - Description
  - Props with types, defaults, and descriptions
  - Version information
  - Related components
  - Design tokens (CSS custom properties)

**Example Output Structure:**
```json
{
  "name": "Button",
  "framework": "react",
  "frameworkName": "React",
  "category": "form",
  "description": "",
  "props": [
    {
      "name": "variant",
      "type": "ButtonVariant",
      "required": false,
      "default": "'primary'",
      "description": "Visual style variant"
    }
  ],
  "version": "0.2.1",
  "relatedComponents": ["Input", "Select", "Checkbox", "Radio", "Switch"],
  "designTokens": ["--btn-padding-top", "--btn-padding-x", ...]
}
```

**Supported Frameworks:**
- React (39 components)
- Vue (39 components)
- Angular (39 components)
- Svelte (39 components)
- Astro (39 components)
- Vanilla JS (39 components)

**Total:** 234 components

**Features:**
- ✅ Extracts TypeScript interfaces and types
- ✅ Parses JSDoc comments for descriptions
- ✅ Extracts @default values from JSDoc
- ✅ Identifies required vs optional props
- ✅ Extracts CSS custom properties (design tokens)
- ✅ Automatically determines component categories
- ✅ Suggests related components based on category
- ✅ Reads version from package.json

**Framework-Specific Handling:**
- **React**: Extracts from `.types.ts` files with full JSDoc support
- **Vue**: Extracts from `types.ts` files (simpler structure)
- **Angular**: Extracts from `.types.ts` files
- **Svelte**: Extracts from `types.ts` files
- **Astro**: Extracts from `types.ts` files
- **Vanilla JS**: Extracts from `.types.ts` files

**Component Categories:**
- **Layout**: Card, Container, Grid, Stack, Space, Divider
- **Form**: Button, Input, Select, Checkbox, Radio, Switch, Textarea, Slider, Form, Upload
- **Feedback**: Alert, Badge, Spinner, Progress, Skeleton
- **Navigation**: Link, Breadcrumb, Tabs, Menu, Steps, Pagination
- **Overlay**: Modal, Drawer, Tooltip, Popover, Dropdown
- **Data Display**: Avatar, Tag, Table, Collapse, Image, Empty, Typography

**Next Steps:**
The generated JSON metadata files will be consumed by the `generate-component-pages.js` script (Task 2.2) to create markdown documentation pages for each component.

### generate-component-pages.js

Generates component documentation pages for all frameworks by reading component metadata and populating markdown templates.

**Purpose:**
- Reads component metadata from JSON files
- Generates markdown files from archetypes
- Creates framework-specific import statements and code examples
- Supports all 6 frameworks with appropriate syntax

**Requirements:** 2.1, 8.2, 8.3, 8.4, 9.2

**Usage:**
```bash
cd docs

# Generate all pages for all frameworks
node scripts/generate-component-pages.js

# Generate pages for a specific framework
node scripts/generate-component-pages.js --framework vue

# Generate a specific component across all frameworks
node scripts/generate-component-pages.js --component button

# Force overwrite existing pages
node scripts/generate-component-pages.js --force

# Dry run (preview without writing files)
node scripts/generate-component-pages.js --dry-run

# Quiet mode (minimal output)
node scripts/generate-component-pages.js --quiet
```

**Output:**
- Creates `docs/content/docs/{framework}/{component}.md` files
- Each markdown file contains:
  - Frontmatter with metadata
  - Framework-specific import statement
  - Basic usage example
  - Props/API reference table
  - Variant, size, and state examples (if applicable)
  - Customization examples with CSS variables
  - Design token documentation
  - Accessibility information
  - Related component links

**Framework-Specific Syntax:**
- **React**: `import { Button } from '@primitivekit/react';` → `<Button>Content</Button>`
- **Vue**: `import { Button } from '@primitivekit/vue';` → `<Button>Content</Button>`
- **Angular**: `import { ButtonComponent } from '@primitivekit/angular';` → `<pk-button>Content</pk-button>`
- **Svelte**: `import Button from '@primitivekit/svelte/Button.svelte';` → `<Button>Content</Button>`
- **Astro**: `import { Button } from '@primitivekit/astro';` → `<Button>Content</Button>`
- **Vanilla JS**: `import { Button } from '@primitivekit/vanilla';` → `const button = new Button({ /* options */ });`

**Generation Statistics:**
- Total pages: 234 (39 components × 6 frameworks)
- Generated: 194 new pages (Vue, Angular, Svelte, Astro, Vanilla JS)
- Skipped: 40 existing pages (React)

See [GENERATION_SUMMARY.md](./GENERATION_SUMMARY.md) for detailed information.

### update-navigation.js

Generates hugo.toml menu entries for all component pages across all frameworks. Creates a 3-level hierarchical navigation menu: Framework → Category → Component.

**Purpose:**
- Reads component metadata from JSON files
- Groups components by framework and category
- Adds component counts to category labels (e.g., "Layout Components (6)")
- Generates properly weighted menu entries
- Preserves existing non-component menu sections (Getting Started, Frameworks, Guides)

**Requirements:** 3.1, 3.2, 3.3, 3.6

**Usage:**
```bash
cd docs
node scripts/update-navigation.js
```

**Output:**
- Updates `docs/hugo.toml` with complete navigation menu
- Preserves all configuration before menu sections
- Preserves all configuration after menu sections (params, etc.)
- Generates 3-level hierarchy for all frameworks

**Navigation Structure:**
```
Getting Started
├── Introduction
├── Installation
└── Quick Start

Frameworks
├── Framework Comparison
├── React
├── Vue
├── Angular
├── Svelte
├── Astro
└── Vanilla JS

Guides
├── Customization
├── Accessibility
├── Design Tokens
└── Theming

React Components
├── Form Components (10)
│   ├── Button
│   ├── Checkbox
│   ├── Form
│   ├── Input
│   ├── Radio
│   ├── Select
│   ├── Slider
│   ├── Switch
│   ├── Textarea
│   └── Upload
├── Layout Components (6)
│   ├── Card
│   ├── Container
│   ├── Divider
│   ├── Grid
│   ├── Space
│   └── Stack
├── Feedback Components (5)
│   ├── Alert
│   ├── Badge
│   ├── Progress
│   ├── Skeleton
│   └── Spinner
├── Navigation Components (6)
│   ├── Breadcrumb
│   ├── Link
│   ├── Menu
│   ├── Pagination
│   ├── Steps
│   └── Tabs
├── Overlay Components (5)
│   ├── Drawer
│   ├── Dropdown
│   ├── Modal
│   ├── Popover
│   └── Tooltip
└── Data Display Components (7)
    ├── Avatar
    ├── Collapse
    ├── Empty
    ├── Image
    ├── Table
    ├── Tag
    └── Typography

[Same structure repeated for Vue, Angular, Svelte, Astro, and Vanilla JS]
```

**Generation Statistics:**
- 6 frameworks
- 6 categories per framework
- 39 components per framework
- 234 total components
- 276 total menu entries generated

**Features:**
- ✅ Automatic component counting per category
- ✅ Alphabetical sorting of components within categories
- ✅ Proper weight-based ordering
- ✅ Preserves existing menu sections
- ✅ Framework-specific component grouping
- ✅ Category-based organization

**Component Categories:**
- **Form Components**: Button, Checkbox, Form, Input, Radio, Select, Slider, Switch, Textarea, Upload
- **Layout Components**: Card, Container, Divider, Grid, Space, Stack
- **Feedback Components**: Alert, Badge, Progress, Skeleton, Spinner
- **Navigation Components**: Breadcrumb, Link, Menu, Pagination, Steps, Tabs
- **Overlay Components**: Drawer, Dropdown, Modal, Popover, Tooltip
- **Data Display Components**: Avatar, Collapse, Empty, Image, Table, Tag, Typography

**When to Run:**
- After adding new components
- After changing component categories
- After generating new component pages
- When navigation menu needs to be regenerated

**Safe to Run:**
- ✅ Preserves all non-menu configuration
- ✅ Preserves Getting Started, Frameworks, and Guides sections
- ✅ Can be run multiple times safely
- ✅ Automatically backs up to hugo.toml (Git tracks changes)

## Future Scripts

### validate-docs.js
Validates documentation completeness and correctness across all frameworks.

**Purpose:**
- Checks that all components have documentation pages
- Verifies all required sections are present
- Validates internal links resolve correctly
- Checks frontmatter is valid and complete
- Reports missing or incomplete documentation

**Requirements:** 8.6, 13.7

**Usage:**
```bash
cd docs

# Validate all frameworks
node scripts/validate-docs.js

# Validate specific framework
node scripts/validate-docs.js --framework vue

# Validate specific component
node scripts/validate-docs.js --component button

# Show detailed output
node scripts/validate-docs.js --verbose

# Validate specific framework with details
node scripts/validate-docs.js --framework react --verbose
```

**Checks Performed:**
1. **File Existence**: Verifies all components have documentation pages
2. **Frontmatter Validation**: 
   - Required fields: `title`, `weight`
   - Recommended fields: `description`, `framework`, `category`
   - Validates framework matches directory
3. **Section Completeness**: Checks for required sections:
   - Import
   - Basic Usage
   - Props
   - Customization
   - Accessibility
   - Related Components
4. **Code Blocks**: Warns about code blocks missing language tags
5. **Internal Links**: Validates all internal links resolve to existing pages
6. **Empty Sections**: Warns about sections with no content

**Exit Codes:**
- `0` - All validations passed
- `1` - Validation errors found
- `2` - Fatal error (script failure)

**Output:**
```
Starting documentation validation...

Validating react...
  36/39 passed
Validating vue...
  39/39 passed
...

Validating internal links...
  ✓ All internal links are valid

============================================================
VALIDATION SUMMARY
============================================================

REACT
  Total: 39
  Passed: 36 (92.3%)
  Failed: 3
  Missing: 0

...

------------------------------------------------------------
OVERALL
------------------------------------------------------------
Total components: 234
Passed: 231
Failed: 3
Missing: 0
Broken links: 0

Pass rate: 98.7%
```

**CI/CD Integration:**
The script exits with code 1 if validation fails, making it suitable for CI/CD pipelines:

```yaml
# .github/workflows/validate-docs.yml
- name: Validate Documentation
  run: |
    cd docs
    node scripts/validate-docs.js
```

**When to Run:**
- After generating new component pages
- Before committing documentation changes
- In CI/CD pipeline before deployment
- When adding new components
- When updating documentation structure

**Current Status:**
- ✅ 234 components across 6 frameworks
- ✅ 98.7% pass rate
- ⚠️ 3 React components missing sections (Form, Space, Typography)
- ⚠️ 5 broken links to non-existent components (Toast, Chip, Accordion)

## Development

To add support for new component properties or improve extraction:

1. Edit `extract-component-metadata.js`
2. Update the parsing functions:
   - `parseTypeScriptInterface()` - for TypeScript interface parsing
   - `extractJSDocComment()` - for JSDoc comment extraction
   - `extractDefaultValue()` - for @default tag extraction
3. Test with: `node scripts/extract-component-metadata.js`
4. Verify output in `docs/data/components/`

## Troubleshooting

**No components found:**
- Check that framework package paths are correct
- Verify component directories exist in `{framework}/src/components/`

**Missing props:**
- Ensure component has a `.types.ts` or `types.ts` file
- Verify the interface is named `{ComponentName}Props`
- Check that JSDoc comments are properly formatted

**Incorrect descriptions:**
- Verify JSDoc comments are immediately before the property
- Check for proper `/** */` comment syntax
- Ensure no extra comments between JSDoc and property

## License

MIT
