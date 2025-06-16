import type { Preview } from '@storybook/react';
import React from 'react';
import { lightTheme, darkTheme } from './theme';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: darkTheme,
      light: lightTheme,
      stylePreview: true,
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
    },
    docs: {
      theme: lightTheme,
      inlineStories: false,
    },
    backgrounds: {
      disable: true,
    },
    viewport: {
      disable: true,
    },
    grid: {
      disable: true,
    },
    toolbar: {
      viewMode: false,
    },
  },
  decorators: [
    (Story, context) => {
      // For docs pages, inject CSS to style only the story preview containers
      if (context.viewMode === 'docs') {
        React.useEffect(() => {
          const style = document.createElement('style');
          style.textContent = `
            .docs-story {
              background-color: var(--background) !important;
              color: var(--foreground) !important;
            }
          `;
          document.head.appendChild(style);
          
          return () => {
            document.head.removeChild(style);
          };
        }, []);
      }
      
      return React.createElement(Story);
    },
  ],
  
};

export default preview; 