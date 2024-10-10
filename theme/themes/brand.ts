const Color = require('color');
import { vars } from "nativewind";
import { slate, brand as brandColor } from "../colors";

export const brand = {
  'light': vars({
    // Primary theme color
    '--color-primary': brandColor['6'],
    '--color-primary-1': brandColor['1'],
    '--color-primary-2': brandColor['2'],
    '--color-primary-3': brandColor['3'],
    '--color-primary-4': brandColor['4'],
    '--color-primary-5': brandColor['5'],
    '--color-primary-6': brandColor['6'],
    '--color-primary-7': brandColor['7'],
    '--color-primary-8': brandColor['8'],
    '--color-primary-9': brandColor['9'],
    '--color-primary-10': brandColor['10'],
    '--color-primary-11': brandColor['11'],
    '--color-primary-12': brandColor['12'],
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
    '--color-input': slate['8'],
    '--color-secondary': 'green'
  }),
  'dark': vars({
    '--color-input': 'green',
    '--color-primary': 'green',
    '--color-secondary': 'red'
  })
}