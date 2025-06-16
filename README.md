# Strides UI

A modern, accessible design system built with React, TypeScript, TailwindCSS, and Storybook.

## Features

- 🎨 **Modern Design**: Clean and contemporary UI components
- 🌓 **Dark Mode**: Full light/dark mode theming system with automatic switching
- ⚡ **High Performance**: Built with Vite for fast development and building
- 🎭 **TypeScript**: Full type safety and excellent developer experience
- 🎨 **TailwindCSS**: Utility-first CSS framework with CSS custom properties
- 📚 **Storybook**: Interactive component documentation with dark mode preview
- ♿ **Accessible**: Built with accessibility in mind
- 🎯 **Tree-shakable**: Import only the components you need
- 🎨 **Design Tokens**: Comprehensive semantic color system

## Installation

```bash
npm install strides-ui
```

## Usage

> **Important:** You must import the CSS for the components to be styled correctly.

```tsx
import { Button } from 'strides-ui';
import 'strides-ui/styles';

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

### Available Components

#### Button

A versatile button component with multiple variants and states.

```tsx
import { Button } from 'strides-ui';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With states
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>

// With icons
<Button startIcon={<PlusIcon />}>Add Item</Button>
<Button endIcon={<ArrowIcon />}>Next</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
```

### Dark Mode Support

The design system includes built-in dark mode support using CSS custom properties.

```tsx
import { Button, initializeTheme, toggleTheme } from 'strides-ui';

function App() {
  // Initialize theme on app start
  React.useEffect(() => {
    initializeTheme();
  }, []);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div>
      <Button onClick={handleToggleTheme}>
        Toggle Theme
      </Button>
      <Button variant="primary">Primary Button</Button>
    </div>
  );
}
```

#### Theme Utilities

```tsx
import { getTheme, setTheme, toggleTheme, initializeTheme } from 'strides-ui';

// Get current theme
const currentTheme = getTheme(); // 'light' | 'dark'

// Set specific theme
setTheme('dark');

// Toggle between themes
const newTheme = toggleTheme();

// Initialize theme (usually on app start)
initializeTheme();
```

## Development

### Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd strides-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
npm run storybook
```

4. Build the library:
```bash
npm run build
```

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build the library for production
- `npm run preview` - Preview the production build
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## Design Tokens

The design system uses a comprehensive semantic color system with CSS custom properties that automatically adapts to light and dark modes.

### Semantic Colors

- **Primary**: Main brand color for primary actions and elements
- **Secondary**: Secondary brand color and neutral elements
- **Destructive**: Error and destructive action colors
- **Muted**: Subdued text and backgrounds
- **Accent**: Accent colors for highlights and interactive states
- **Background**: Main background colors
- **Foreground**: Primary text colors
- **Border**: Border and divider colors
- **Input**: Form input backgrounds
- **Card**: Card and elevated surface colors
- **Popover**: Overlay and modal backgrounds
- **Ring**: Focus ring colors

### Color Usage

```css
/* Use semantic colors in your CSS */
.my-component {
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}

/* Or with Tailwind classes */
.my-component {
  @apply bg-background text-foreground border border-border;
}
```

### Typography

- **Font Family**: Inter (with system fallbacks)
- **Font Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl

### Spacing

- Standard spacing scale based on 0.25rem increments
- Custom spacing values: 18 (4.5rem), 88 (22rem)

### Border Radius

- Standard border radius values: xl, 2xl, 3xl

### Dark Mode

The design system automatically switches between light and dark variants of all colors based on the presence of the `dark` class on the `<html>` or `<body>` element.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes and add tests
4. Run the linter: `npm run lint`
5. Build the library: `npm run build`
6. Commit your changes: `git commit -am 'Add new component'`
7. Push to the branch: `git push origin feature/new-component`
8. Submit a pull request

## License

MIT © Douglas Henrique

## Changelog

### v1.0.0

- Initial release
- Button component with multiple variants and states
- TailwindCSS integration
- Storybook documentation
- TypeScript support 