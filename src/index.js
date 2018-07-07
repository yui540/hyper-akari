import {
  foregroundColor,
  borderColor,
  selectionColor,
  colors,
  cursorColor
} from './colors'
import { termCSS, css } from './stylesheets'

exports.decorateConfig = config => {
  const options = config.hyperAkari || {}

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
      ${ css(options) }
      ${ termCSS(options) }
    `
  })
}
