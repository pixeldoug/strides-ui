# Figma Color Mapping System

This document explains how to automatically convert hardcoded Tailwind colors from Figma MCP output to your design system tokens.

## 🎯 Problem Solved

When you use Figma MCP to generate code, it often returns hardcoded colors like:
- `bg-zinc-900` instead of `bg-primary`
- `text-[#0866ff]` instead of `text-secondary-foreground`
- `bg-red-600` instead of `bg-destructive`

This system automatically maps these hardcoded colors to your design system tokens.

## 🛠️ How It Works

### 1. Automatic Mapping

The `figma-color-mapper.ts` utility automatically converts:

```typescript
// FROM Figma MCP output:
"bg-zinc-900 text-zinc-50"

// TO design system tokens:
"bg-primary text-primary-foreground"
```

### 2. Color Mapping Table

| Figma Output | Design Token | CSS Variable |
|-------------|--------------|--------------|
| `bg-zinc-900` | `bg-primary` | `var(--primary)` |
| `text-zinc-50` | `text-primary-foreground` | `var(--primary-foreground)` |
| `bg-zinc-100` | `bg-secondary` | `var(--secondary)` |
| `text-[#0866ff]` | `text-secondary-foreground` | `var(--secondary-foreground)` |
| `bg-red-600` | `bg-destructive` | `var(--destructive)` |
| `text-red-50` | `text-destructive-foreground` | `var(--destructive-foreground)` |
| `bg-[rgba(255,255,255,0)]` | `bg-transparent` | `transparent` |
| `border-zinc-200` | `border-border` | `var(--border)` |

## 🚀 Usage

### Method 1: Manual Processing

```typescript
import { processFigmaOutput } from './src/utils/figma-color-mapper';

// Your Figma MCP output
const figmaCode = `<div className="bg-zinc-900 text-zinc-50">Button</div>`;

// Process it
const { code, report } = processFigmaOutput(figmaCode);

console.log(report); // Shows mapping report
console.log(code);   // Shows processed code with design tokens
```

### Method 2: Cursor Rule Integration

The `.cursorrules` file has been updated to automatically use this system. When you get Figma MCP output, the AI will:

1. Automatically process the colors using the mapping utility
2. Show you a report of what was mapped
3. Present the final code with design system tokens

## 📊 Example Output

When you process Figma output, you'll get a report like this:

```
## ✅ Colors Mapped to Design System Tokens

- `bg-zinc-900` → `bg-primary`
- `text-zinc-50` → `text-primary-foreground`
- `bg-zinc-100` → `bg-secondary`
- `text-[#0866ff]` → `text-secondary-foreground`

## ⚠️ Colors Missing - Awaiting Confirmation

- Color `#custom-brand-color` not found in design system - awaiting approval
```

## 🎨 Design System Reference

Your design system tokens (from `src/styles/globals.css`):

### Primary Colors
- `--primary: #18181B` (dark zinc)
- `--primary-foreground: #FAFAFA` (light zinc)

### Secondary Colors  
- `--secondary: #f4f4f5` (light zinc)
- `--secondary-foreground: #0866FF` (blue)

### Semantic Colors
- `--destructive: #dc2626` (red)
- `--destructive-foreground: #fef2f2` (light red)
- `--background: #ffffff` (white)
- `--foreground: #18181b` (dark zinc)
- `--border: #e4e4e7` (zinc border)

## 🔧 Customization

To add new color mappings, edit `src/utils/figma-color-mapper.ts`:

```typescript
const COLOR_MAPPINGS: Record<string, string> = {
  // Add your custom mappings here
  'bg-custom-color': 'bg-brand',
  '#your-hex-color': 'brand-foreground',
  // ...
};
```

## ✅ Benefits

1. **Consistency**: All components use design system tokens
2. **Maintainability**: Colors update automatically when tokens change
3. **Theme Support**: Automatic dark/light mode switching
4. **Quality Control**: Reports unknown colors for approval
5. **Automation**: No manual color conversion needed

## 🚫 What It Prevents

- Hardcoded colors in components
- Inconsistent color usage
- Manual token conversion errors
- Design system drift
- Theme switching issues 