# Theming

# Theming

Create custom themes for your application using PrimitiveKit's design token system.

## Overview

PrimitiveKit uses CSS variables (custom properties) for theming, making it easy to create light/dark themes or completely custom color schemes.

## Quick Start

### Basic Theme

```css
:root {
  /* Primary colors */
  --color-primary: #007bff;
  --color-primary-hover: #0056b3;
  --color-primary-active: #004085;
  
  /* Text colors */
  --color-text: #212529;
  --color-text-secondary: #6c757d;
  
  /* Background colors */
  --color-bg: #ffffff;
  --color-bg-secondary: #f8f9fa;
}
```

## Dark Mode

### Automatic Dark Mode

```css
:root {
  --color-bg: #ffffff;
  --color-text: #212529;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #212529;
    --color-text: #ffffff;
  }
}
```

### Manual Dark Mode Toggle

```css
/* Light theme (default) */
:root {
  --color-bg: #ffffff;
  --color-text: #212529;
}

/* Dark theme */
[data-theme="dark"] {
  --color-bg: #212529;
  --color-text: #ffffff;
}
```

```jsx
// Toggle dark mode
function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  return (
    <Button onClick={toggleTheme}>
      Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}
```

## Custom Themes

### Brand Theme

```css
:root {
  /* Brand colors */
  --color-primary: #ff6b6b;
  --color-secondary: #4ecdc4;
  --color-accent: #ffe66d;
  
  /* Typography */
  --font-family: 'Inter', sans-serif;
  --font-size-base: 16px;
  
  /* Spacing */
  --spacing-unit: 8px;
  
  /* Border radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
}
```

### Multiple Themes

```css
/* Default theme */
:root {
  --color-primary: #007bff;
}

/* Ocean theme */
[data-theme="ocean"] {
  --color-primary: #0077be;
  --color-secondary: #00a8e8;
  --color-accent: #00c9ff;
}

/* Forest theme */
[data-theme="forest"] {
  --color-primary: #2d6a4f;
  --color-secondary: #40916c;
  --color-accent: #52b788;
}

/* Sunset theme */
[data-theme="sunset"] {
  --color-primary: #ff6b6b;
  --color-secondary: #ee5a6f;
  --color-accent: #f4a261;
}
```

## Component-Specific Theming

### Button Theme

```css
:root {
  /* Button colors */
  --button-primary-bg: #007bff;
  --button-primary-color: #ffffff;
  --button-primary-hover-bg: #0056b3;
  
  /* Button sizes */
  --button-padding-sm: 4px 12px;
  --button-padding-md: 8px 16px;
  --button-padding-lg: 12px 24px;
  
  /* Button borders */
  --button-border-radius: 8px;
  --button-border-width: 1px;
}
```

### Input Theme

```css
:root {
  /* Input colors */
  --input-bg: #ffffff;
  --input-border: #ced4da;
  --input-focus-border: #007bff;
  --input-text: #212529;
  
  /* Input sizes */
  --input-padding: 8px 12px;
  --input-height: 40px;
  
  /* Input borders */
  --input-border-radius: 4px;
  --input-border-width: 1px;
}
```

## Theme Presets

### Minimal Theme

```css
:root {
  --color-primary: #000000;
  --color-secondary: #666666;
  --color-bg: #ffffff;
  --color-text: #000000;
  --border-radius-sm: 0px;
  --border-radius-md: 0px;
  --border-radius-lg: 0px;
  --font-family: 'Helvetica Neue', sans-serif;
}
```

### Playful Theme

```css
:root {
  --color-primary: #ff6b6b;
  --color-secondary: #4ecdc4;
  --color-accent: #ffe66d;
  --border-radius-sm: 12px;
  --border-radius-md: 16px;
  --border-radius-lg: 24px;
  --font-family: 'Comic Sans MS', cursive;
}
```

### Professional Theme

```css
:root {
  --color-primary: #2c3e50;
  --color-secondary: #34495e;
  --color-accent: #3498db;
  --color-bg: #ecf0f1;
  --color-text: #2c3e50;
  --border-radius-sm: 2px;
  --border-radius-md: 4px;
  --border-radius-lg: 6px;
  --font-family: 'Roboto', sans-serif;
}
```

## Dynamic Theming

### React Context

```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const applyTheme = (themeName) => {
    setTheme(themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

### Usage

```jsx
function App() {
  const { theme, applyTheme } = useTheme();
  
  return (
    <div>
      <select 
        value={theme} 
        onChange={(e) => applyTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="ocean">Ocean</option>
        <option value="forest">Forest</option>
      </select>
    </div>
  );
}
```

## Best Practices

### 1. Use Semantic Names

```css
/* ✅ Good */
--color-primary
--color-text
--color-bg

/* ❌ Avoid */
--blue
--dark-gray
--white
```

### 2. Maintain Contrast

Ensure sufficient color contrast for accessibility:

```css
/* ✅ Good - 4.5:1 contrast ratio */
--color-text: #212529;
--color-bg: #ffffff;

/* ❌ Poor - Low contrast */
--color-text: #cccccc;
--color-bg: #ffffff;
```

### 3. Test Both Themes

Always test your application in both light and dark modes.

### 4. Use CSS Variables Consistently

```css
/* ✅ Good */
.button {
  background: var(--button-primary-bg);
  color: var(--button-primary-color);
}

/* ❌ Avoid hardcoded values */
.button {
  background: #007bff;
  color: #ffffff;
}
```

## Resources

- [Design Tokens](/docs/design-tokens) - Complete token reference
- [Customization](/docs/customization) - Customization guide
- [Accessibility](/docs/accessibility) - Accessibility guidelines

## Examples

Check out our [Showcase](/showcase) for real-world theming examples.

