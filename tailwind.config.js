const plugin = require('tailwindcss/plugin')

const { hairlineWidth } = require('nativewind/theme');
const { colors } = require('./theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      ...colors,
    },
    borderRadius: {
      'none': '0',
      'xs': '0.16rem',
      'sm': '0.32rem',
      DEFAULT: '0.42rem',
      'md': '0.48rem',
      'lg': '0.64rem',
      'xl': '1rem',
      'xxl': '1.4rem', 
      'full': '9999px',
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      boxShadow: {
        DEFAULT: '0 2px 4px -2px rgba(16, 24, 40, 0.06), 0 4px 8px -2px rgba(16, 24, 40, 0.1)',
        'xs': '0 1px 2px 0 rgba(16, 24, 40, 0.08)',
        'sm': '0 1px 2px 0 rgba(16, 24, 40, 0.12), 0 1px 3px 0 rgba(16, 24, 40, 0.20)',
        'md': '0 2px 4px -2px rgba(16, 24, 40, 0.12), 0 4px 8px -2px rgba(16, 24, 40, 0.20)',
        'lg': '0 4px 6px -2px rgba(16, 24, 40, 0.03), 0 12px 16px -4px rgba(16, 24, 40, 0.08)',
        'xl': '0 8px 8px -4px rgba(16, 24, 40, 0.03), 0 20px 24px -4px rgba(16, 24, 40, 0.08)',
        '2xl': '0 24px 48px -12px rgba(16, 24, 40, 0.18)',
        '3xl': '0 32px 64px -12px rgba(16, 24, 40, 0.16)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'var(--color-input)', 
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'var(--color-background)',
          a1: 'var(--color-background-a1)',
          a2: 'var(--color-background-a2)',
          a3: 'var(--color-background-a3)',
          darker: 'var(--color-background-darker)',
          'darker-a1': 'var(--color-background-darker-a1)', 
          'darker-a2': 'var(--color-background-darker-a2)',
          'darker-a3': 'var(--color-background-darker-a3)',
          darkest: 'var(--color-background-darkest)',
          'darkest-a1': 'var(--color-background-darkest-a1)',
          'darkest-a2': 'var(--color-background-darkest-a2)',
          'darkest-a3': 'var(--color-background-darkest-a3)',
        },
        foreground: 'hsl(var(--foreground))',
        // - start - Primary colors
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: colors.slate['1'],
        },
        'primary-25': 'var(--color-primary-25)',
        'primary-50': 'var(--color-primary-50)',
        'primary-100': 'var(--color-primary-100)', 
        'primary-200': 'var(--color-primary-200)',
        'primary-300': 'var(--color-primary-300)',
        'primary-400': 'var(--color-primary-400)',
        'primary-500': 'var(--color-primary-500)',
        'primary-600': 'var(--color-primary-600)',
        'primary-700': 'var(--color-primary-700)',
        'primary-800': 'var(--color-primary-800)',
        'primary-900': 'var(--color-primary-900)',
        'primary-950': 'var(--color-primary-950)',
        // - end - Primary colors
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'textshadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),],
};
