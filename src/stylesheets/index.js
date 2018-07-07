import root from './root'
import header from './header'
import term from './term'

export const termCSS = options => {
  return`

  `
}

export const css = options => {
  return `
    ${ root(options) }
    ${ header(options) }
    ${ term(options) }
  `
}
