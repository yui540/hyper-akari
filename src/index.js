import {
  foregroundColor,
  borderColor,
  selectionColor,
  colors,
  cursorColor
} from './colors'
import { termCSS, css } from './stylesheets'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor: "transparent",
    foregroundColor,
    borderColor,
    selectionColor,
    colors,
    cursorColor,
    termCSS: `
      ${ config.termCSS || '' }
    `,
    css: `
      ${ config.css || '' }
      ${ css }
      ${ termCSS }
    `
  })
}
