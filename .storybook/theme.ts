import { create } from '@storybook/theming';

export const lightTheme = create({
  base: 'light',
  brandTitle: 'Strides UI',
  brandUrl: 'https://your-url.com',
  brandImage: '',

  // Colors for light mode
  colorPrimary: '#18181B', // --primary-light
  colorSecondary: '#0866FF', // --secondary-foreground-light

  // UI
  appBg: '#ffffff', // --background-light
  appContentBg: '#ffffff', // --background-light
  appBorderColor: '#e4e4e7', // --border-light
  appBorderRadius: 8,

  // Typography
  fontBase: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontCode: 'Menlo, Monaco, "Courier New", monospace',

  // Text colors
  textColor: '#18181b', // --foreground-light
  textInverseColor: '#ffffff', // --background-light

  // Toolbar default and active colors
  barTextColor: '#18181b', // --foreground-light
  barSelectedColor: '#18181B', // --primary-light
  barBg: '#ffffff', // --background-light

  // Form colors
  inputBg: '#ffffff', // --background-light
  inputBorder: '#e4e4e7', // --border-light
  inputTextColor: '#18181b', // --foreground-light
  inputBorderRadius: 4,
});

export const darkTheme = create({
  base: 'dark',
  brandTitle: 'Strides UI',
  brandUrl: 'https://your-url.com',
  brandImage: '',

  // Colors for dark mode
  colorPrimary: '#FAFAFA', // --primary-dark
  colorSecondary: '#FAFAFA', // --secondary-foreground-dark

  // UI
  appBg: '#09090b', // --background-dark
  appContentBg: '#09090b', // --background-dark
  appBorderColor: '#27272a', // --border-dark
  appBorderRadius: 8,

  // Typography
  fontBase: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontCode: 'Menlo, Monaco, "Courier New", monospace',

  // Text colors
  textColor: '#fafafa', // --foreground-dark
  textInverseColor: '#09090b', // --background-dark

  // Toolbar default and active colors
  barTextColor: '#fafafa', // --foreground-dark
  barSelectedColor: '#FAFAFA', // --primary-dark
  barBg: '#09090b', // --background-dark

  // Form colors
  inputBg: '#09090b', // --background-dark
  inputBorder: '#27272a', // --border-dark
  inputTextColor: '#fafafa', // --foreground-dark
  inputBorderRadius: 4,
});

// Default export for backward compatibility
export default darkTheme; 