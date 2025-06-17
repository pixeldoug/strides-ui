/**
 * Figma Color Mapper
 * Maps hardcoded Tailwind colors from Figma MCP to design system tokens
 */

// Color mapping from hardcoded values to design system tokens
const COLOR_MAPPINGS: Record<string, string> = {
  // Primary colors
  '#18181b': 'primary',
  '#18181B': 'primary',
  'bg-zinc-900': 'bg-primary',
  'text-zinc-50': 'text-primary-foreground',
  'text-neutral-50': 'text-primary-foreground',
  '#fafafa': 'primary-foreground',
  '#FAFAFA': 'primary-foreground',

  // Secondary colors
  '#f4f4f5': 'secondary',
  'bg-zinc-100': 'bg-secondary',
  '#0866ff': 'secondary-foreground',
  '#0866FF': 'secondary-foreground',
  'text-[#0866ff]': 'text-secondary-foreground',

  // Background colors
  '#ffffff': 'background',
  'bg-[#ffffff]': 'bg-background',
  'bg-white': 'bg-background',

  // Destructive colors
  '#dc2626': 'destructive',
  'bg-red-600': 'bg-destructive',
  'text-red-50': 'text-destructive-foreground',
  '#fef2f2': 'destructive-foreground',

  // Foreground colors
  'text-zinc-900': 'text-foreground',
  '#24.000000469386578': 'foreground', // Sometimes Figma exports weird values
  'rgba(24.000000469386578, 24.000000469386578, 27.000000290572643, 1)': 'foreground',

  // Border colors
  '#e4e4e7': 'border',
  'border-zinc-200': 'border-border',

  // Transparent
  'bg-[rgba(255,255,255,0)]': 'bg-transparent',
  'rgba(255,255,255,0)': 'transparent',

  // Input colors
  'bg-background': 'bg-background',
  'text-foreground': 'text-foreground',
};

// Regex patterns for more complex mappings
const PATTERN_MAPPINGS: Array<{pattern: RegExp, replacement: string}> = [
  // Zinc color patterns
  { pattern: /bg-zinc-900/g, replacement: 'bg-primary' },
  { pattern: /text-zinc-50/g, replacement: 'text-primary-foreground' },
  { pattern: /text-neutral-50/g, replacement: 'text-primary-foreground' },
  { pattern: /bg-zinc-100/g, replacement: 'bg-secondary' },
  { pattern: /text-zinc-900/g, replacement: 'text-foreground' },
  { pattern: /border-zinc-200/g, replacement: 'border-border' },
  
  // Red color patterns
  { pattern: /bg-red-600/g, replacement: 'bg-destructive' },
  { pattern: /text-red-50/g, replacement: 'text-destructive-foreground' },
  
  // Blue color patterns
  { pattern: /text-\[#0866ff\]/g, replacement: 'text-secondary-foreground' },
  
  // Transparent patterns
  { pattern: /bg-\[rgba\(255,255,255,0\)\]/g, replacement: 'bg-transparent' },
  
  // Hex color patterns
  { pattern: /#18181[bB]/g, replacement: 'hsl(var(--primary))' },
  { pattern: /#[fF][aA][fF][aA][fF][aA]/g, replacement: 'hsl(var(--primary-foreground))' },
  { pattern: /#f4f4f5/g, replacement: 'hsl(var(--secondary))' },
  { pattern: /#0866[fF]{2}/g, replacement: 'hsl(var(--secondary-foreground))' },
  { pattern: /#dc2626/g, replacement: 'hsl(var(--destructive))' },
  { pattern: /#fef2f2/g, replacement: 'hsl(var(--destructive-foreground))' },
  { pattern: /#ffffff/g, replacement: 'hsl(var(--background))' },
  { pattern: /#e4e4e7/g, replacement: 'hsl(var(--border))' },
];

interface ColorMappingResult {
  mappedColors: Array<{original: string, mapped: string}>;
  unmappedColors: Array<{color: string, context: string}>;
  processedCode: string;
}

/**
 * Maps Figma colors to design system tokens
 */
export function mapFigmaColorsToTokens(figmaCode: string): ColorMappingResult {
  let processedCode = figmaCode;
  const mappedColors: Array<{original: string, mapped: string}> = [];
  const unmappedColors: Array<{color: string, context: string}> = [];

  // Track what we've mapped to avoid duplicates
  const mappedSet = new Set<string>();

  // Apply direct mappings
  Object.entries(COLOR_MAPPINGS).forEach(([original, mapped]) => {
    if (processedCode.includes(original)) {
      processedCode = processedCode.replace(new RegExp(original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), mapped);
      if (!mappedSet.has(original)) {
        mappedColors.push({ original, mapped });
        mappedSet.add(original);
      }
    }
  });

  // Apply pattern mappings
  PATTERN_MAPPINGS.forEach(({ pattern, replacement }) => {
    const matches = processedCode.match(pattern);
    if (matches) {
      matches.forEach(match => {
        if (!mappedSet.has(match)) {
          mappedColors.push({ original: match, mapped: replacement });
          mappedSet.add(match);
        }
      });
      processedCode = processedCode.replace(pattern, replacement);
    }
  });

  // Find unmapped colors (hex codes, rgb values, etc.)
  const unmappedPatterns = [
    /#[0-9a-fA-F]{6}/g, // Hex colors
    /#[0-9a-fA-F]{3}/g,  // Short hex colors
    /rgba?\([^)]+\)/g,    // RGB/RGBA colors
    /bg-\w+-\d+/g,        // Tailwind bg colors
    /text-\w+-\d+/g,      // Tailwind text colors
    /border-\w+-\d+/g,    // Tailwind border colors
  ];

  unmappedPatterns.forEach(pattern => {
    const matches = processedCode.match(pattern);
    if (matches) {
      matches.forEach(match => {
        if (!mappedSet.has(match) && !COLOR_MAPPINGS[match]) {
          unmappedColors.push({ 
            color: match, 
            context: `Found in: ${match}` 
          });
        }
      });
    }
  });

  return {
    mappedColors,
    unmappedColors,
    processedCode
  };
}

/**
 * Generates a report of color mappings
 */
export function generateColorMappingReport(result: ColorMappingResult): string {
  let report = '';

  if (result.mappedColors.length > 0) {
    report += '## ✅ Colors Mapped to Design System Tokens\n\n';
    result.mappedColors.forEach(({ original, mapped }) => {
      report += `- \`${original}\` → \`${mapped}\`\n`;
    });
    report += '\n';
  }

  if (result.unmappedColors.length > 0) {
    report += '## ⚠️ Colors Missing - Awaiting Confirmation\n\n';
    result.unmappedColors.forEach(({ color }) => {
      report += `- Color \`${color}\` not found in design system - awaiting approval\n`;
    });
    report += '\n';
  }

  if (result.mappedColors.length === 0 && result.unmappedColors.length === 0) {
    report += '## ✅ No Color Mappings Needed\n\nAll colors are already using design system tokens.\n\n';
  }

  return report;
}

/**
 * Helper function to process Figma MCP output
 */
export function processFigmaOutput(figmaCode: string): {
  code: string;
  report: string;
} {
  const result = mapFigmaColorsToTokens(figmaCode);
  const report = generateColorMappingReport(result);
  
  return {
    code: result.processedCode,
    report
  };
} 