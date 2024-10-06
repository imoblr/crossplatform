import { vars } from "nativewind";
import { slate, brand as brandColor } from "../colors";

export const brand = {
  'light': vars({
    '--color-input': slate['8'],
    '--color-primary': brandColor['7'],
    '--color-secondary': 'green'
  }),
  'dark': vars({
    '--color-input': 'green',
    '--color-primary': 'green',
    '--color-secondary': 'red'
  })
}