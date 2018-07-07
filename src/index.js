import color from 'color'
import {
  backgroundColor,
  foregroundColor,
  borderColor,
  selectionColor,
  colors,
  cursorColor
} from './colors'
import { termCSS, css } from './stylesheets'

let browserWindow

exports.onWindow = win => browserWindow = win

exports.decorateConfig = config => {
  const options = Object.assign({}, {
    illust: true,
    opacity: 0.3,
    vibrancy: 'dark',
    vibrancyOpacity: 0.7,
  }, config.hyperAkari)

  if (browserWindow) {
    browserWindow.setVibrancy(options.vibrancy)
  }

  return Object.assign({}, config, {
    backgroundColor: color(backgroundColor).fade(0.9).toString(),
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
