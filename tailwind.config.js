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
    fontFamily: {
      base: ['Figtree, Helvetica, Arial, sans-serif'],
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
        ...colors,
        shadow: {
          DEFAULT: 'var(--color-shadow)',
          light: 'var(--color-shadow-light)',
        },
        border: 'var(--color-border)',
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
        // - start - Primary colors
        'gray-25': 'var(--color-gray-25)',
        'gray-50': 'var(--color-gray-50)',
        'gray-100': 'var(--color-gray-100)', 
        'gray-200': 'var(--color-gray-200)',
        'gray-300': 'var(--color-gray-300)',
        'gray-400': 'var(--color-gray-400)',
        'gray-500': 'var(--color-gray-500)',
        'gray-600': 'var(--color-gray-600)',
        'gray-700': 'var(--color-gray-700)',
        'gray-800': 'var(--color-gray-800)',
        'gray-900': 'var(--color-gray-900)',
        'gray-950': 'var(--color-gray-950)',
        // - end - Primary colors
        // -----------------------------------------------------------------------------
        // TYPOGRAPHY COLORS
        // -----------------------------------------------------------------------------
        'text': {
          DEFAULT: 'var(--color-text)',
          'on-brand': 'var(--color-text-on-brand)',
          'secondary': 'var(--color-text-secondary)',
          'secondary_hover': 'var(--color-text-secondary_hover)',
          'secondary_on-brand': 'var(--color-text-secondary_on-brand)',
          'tertiary': 'var(--color-text-tertiary)',
          'tertiary_hover': 'var(--color-text-tertiary_hover)',
          'tertiary_on-brand': 'var(--color-text-tertiary_on-brand)',
          'quaternary': 'var(--color-text-quaternary)',
          'quaternary_on-brand': 'var(--color-text-quaternary_on-brand)',
          'disabled': 'var(--color-text-disabled)',
          'placeholder': 'var(--color-text-placeholder)',
          'placeholder_subtle': 'var(--color-text-placeholder_subtle)',
          'error': 'var(--color-text-error)',
          'warning': 'var(--color-text-warning)',
          'success': 'var(--color-text-success)', 
        },
        // Shadow colors
        '--color-shadow': 'rgba(10,13,18,0.05)',
        '--color-shadow-dark': 'rgba(10,13,18,0.075)',  
        '--color-shadow-darker': 'rgba(10,13,18,0.1)',  
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
  ]
};
