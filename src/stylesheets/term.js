import illust from '../images/mirai-akari.svg'

export default `
  .terms_terms:before {
    content: ""; display: block;
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: url(${ illust });
    background-size: auto 80%;
    background-position: right bottom;
    background-repeat: no-repeat;
    opacity: 0.3;
  }
  .xterm .xterm-viewport {
    background-color: rgba(0,0,0,0) !impotant;
  }
`
