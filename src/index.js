import {
  backgroundColor,
  foregroundColor,
  borderColor,
  selectionColor,
  colors,
  cursorColor
} from './colors'
import { termCSS, css } from './stylesheets'

exports.decorateConfig = config => {
  const options = Object.assign({}, {
    illust: true,
    opacity: 0.3,
  }, config.hyperAkari)

  return Object.assign({}, config, {
    backgroundColor: backgroundColor,
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
