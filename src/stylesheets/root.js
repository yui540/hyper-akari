import color from 'color';
import { backgroundColor } from '../colors'

export default ({ vibrancyOpacity }) => {
  return `
    .hyper_main {
      background-color: ${ color(backgroundColor).fade(1 - vibrancyOpacity) };
    }
  `
}
