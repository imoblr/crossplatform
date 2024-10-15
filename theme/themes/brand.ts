const Color = require('color');
import { vars } from "nativewind";
import { slate, brand as brandColor, gray } from "../colors";
import { error } from "../colors/error";

export const brand = {
  'light': vars({
    // Primary theme color
    '--color-primary': brandColor['600'],
    '--color-primary-25': brandColor['25'],
    '--color-primary-50': brandColor['50'],
    '--color-primary-100': brandColor['100'],
    '--color-primary-200': brandColor['200'],
    '--color-primary-300': brandColor['300'],
    '--color-primary-400': brandColor['400'],
    '--color-primary-500': brandColor['500'],
    '--color-primary-600': brandColor['600'],
    '--color-primary-700': brandColor['700'],
    '--color-primary-800': brandColor['800'],
    '--color-primary-900': brandColor['900'],
    '--color-primary-950': brandColor['950'],
    // Primary theme color
    '--color-gray': gray['600'],
    '--color-gray-25': gray['25'],
    '--color-gray-50': gray['50'],
    '--color-gray-100': gray['100'],
    '--color-gray-200': gray['200'],
    '--color-gray-300': gray['300'],
    '--color-gray-400': gray['400'],
    '--color-gray-500': gray['500'],
    '--color-gray-600': gray['600'],
    '--color-gray-700': gray['700'],
    '--color-gray-800': gray['800'],
    '--color-gray-900': gray['900'],
    '--color-gray-950': gray['950'],
    // Theme color variables
    '--color-background': '#FFFFFF',
    '--color-background-a1': Color('#FFF').alpha(0.9),
    '--color-background-a2': Color('#FFF').alpha(0.75),
    '--color-background-a3': Color('#FFF').alpha(0.6),
    '--color-background-darker': slate['2'],
    '--color-background-darker-a1': Color(slate['4']).alpha(0.9),
    '--color-background-darker-a2': Color(slate['4']).alpha(0.75),
    '--color-background-darker-a3': Color(slate['4']).alpha(0.6),
    '--color-background-darkest': slate['4'],
    '--color-background-darkest-a1': Color(slate['10']).alpha(0.9),
    '--color-background-darkest-a2': Color(slate['10']).alpha(0.75),
    '--color-background-darkest-a3': Color(slate['10']).alpha(0.6),
    '--button-primary-outer-gradient-1': 'linear-gradient(180deg, #000 0%, #FFF 100%)',
    '--button-primary-outer-gradient-2': 'linear-gradient(180deg, var(--color-primary-7) 0%, var(--color-primary-6) 100%)',
    '--color-border': gray['300'],
    '--color-secondary': 'green',
    // -----------------------------------------------------------------------------
    // TYPOGRAPHY COLORS
    // -----------------------------------------------------------------------------
    '--color-text': gray['900'],
    '--color-text-on-brand': 'white',
    '--color-text-secondary': gray['700'],
    '--color-text-secondary_hover': gray['800'],
    '--color-text-secondary_on-brand': brandColor['200'],
    '--color-text-tertiary': gray['600'],
    '--color-text-tertiary_hover': gray['700'],
    '--color-text-tertiary_on-brand': brandColor['200'],
    '--color-text-quaternary': gray['500'],
    '--color-text-quaternary_on-brand': brandColor['300'],
    '--color-text-disabled': gray['500'],
    '--color-text-placeholder': gray['500'],
    '--color-text-placeholder_subtle': gray['300'],
    '--color-text-error': error['600'],
    // -----------------------------------------------------------------------------
    // 
    // UTIL COLORS
    // 
    // -----------------------------------------------------------------------------
    // Shadow colors
    '--color-shadow': 'rgba(10,13,18,0.05)',
    '--color-shadow-dark': 'rgba(10,13,18,0.075)',  
    '--color-shadow-darker': 'rgba(10,13,18,0.1)',  
  }),
  'dark': vars({
    '--color-input': 'green',
    '--color-primary': 'green',
    '--color-secondary': 'red'
  })
}