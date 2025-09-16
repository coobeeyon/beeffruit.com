module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Modern, minimal color system inspired by high-engagement sites
        // Primary: Almost black for main text (not pure black - softer)
        'ink': {
          950: '#0a0a0a', // Darkest - headers
          900: '#171717', // Very dark
          800: '#262626', // Dark
          700: '#404040', // Medium-dark
          600: '#525252', // Medium
          500: '#737373', // Muted text
          400: '#a3a3a3', // Subtle text
          300: '#d4d4d4', // Borders
          200: '#e5e5e5', // Light borders
          100: '#f5f5f5', // Backgrounds
          50:  '#fafafa', // Lightest bg
        },
        // Single accent color - a muted red/coral (beef-inspired but sophisticated)
        'accent': {
          600: '#dc2626', // Darker for hover states
          500: '#ef4444', // Primary accent
          400: '#f87171', // Lighter variant
          100: '#fee2e2', // Very light for backgrounds
        },
        // Success/positive (fruit-inspired green but subtle)
        'positive': {
          600: '#16a34a',
          500: '#22c55e',
          100: '#dcfce7',
        },
        // Keep these for specific UI needs
        'surface': {
          white: '#ffffff',
          light: '#fafafa',
          muted: '#f5f5f5',
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        // Add a serif option for article body text (like Medium)
        serif: [
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif'
        ]
      },
      fontSize: {
        // Refined font sizes for better readability
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
      }
    }
  },
  plugins: []
};

