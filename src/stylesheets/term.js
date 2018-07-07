import illust from '../images/mirai-akari.svg'

export default (options) => {
  const show = (options.illust === undefined) ? true : options.illust
  const opacity = (options.opacity === undefined) ? 0.3 : options.opacity

  return `
    .terms_terms:before {
      content: "";
      display: ${ show ? 'block' : 'none' };
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${ illust });
      background-size: auto 80%;
      background-position: right bottom;
      background-repeat: no-repeat;
      opacity: ${ opacity };
    }
    .xterm .xterm-viewport {
      background-color: rgba(0,0,0,0) !impotant;
    }
  `
}
