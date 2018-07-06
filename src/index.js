import {
  foregroundColor,
  backgroundColor,
  borderColor,
  selectionColor,
  colors,
  cursorColor
} from './colors'
import { termCSS, css } from './stylesheets'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    selectionColor,
    colors,
    cursorColor,
    termCSS: `
      ${ config.termCSS || '' }
      ${ termCSS }
    `,
    css: `
      ${ config.css || '' }
      ${ css }
    `
  })
}
