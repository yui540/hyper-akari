import {
  foregroundColor,
  backgroundColor,
  borderColor,
  selectionColor,
  colors,
  cursorColor
} from './colors'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    selectionColor,
    colors,
    cursorColor,
  })
}
