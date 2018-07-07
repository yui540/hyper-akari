import {
  backgroundColor,
  foregroundColor
} from '../colors'

export default (options) => {
  return `
    .header_header {
      background-color: rgba(255,255,255,0.08);
    }
    .tabs_title {
      position: relative;
      padding: 0;
      background-color: ${ backgroundColor };
    }
    .tabs_title:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${ foregroundColor };
      opacity: 0.7;
    }
    .tab_tab {
      position: relative;
      border: none;
      overflow: hidden;
    }
    .tab_tab:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 1px; left: 0;
      width: 100%; height: 1px;
      background-color: ${ foregroundColor };
      opacity: 0.7;
      transform: translateX(-100%);
      transition: all 0.4s ease 0s;
    }
    .tab_tab.tab_active {
      border: none;
      background-color: ${ backgroundColor };
    }
    .tab_active:after {
      transform: translateX(0%);
    }
    .tab_tab .tab_icon {
      top: 2px;
      right: 2px;
      width: 30px;
      height: 30px;
    }
    .tab_tab .tab_icon:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: ${ foregroundColor };
      opacity: 0.3;
      transform: scale(0);
      transition: all 0.3s ease 0s;
    }
    .tab_tab .tab_icon .tab_shape {
      top: 10px;
      left: 10px;
      width: 10px;
      height: 10px;
      opacity: 0;
    }
    .tab_tab:hover .tab_icon .tab_shape {
      opacity: 1;
    }
    .tab_tab .tab_icon:hover {
      background-color: transparent;
    }
    .tab_tab .tab_icon:hover:before {
      transform: scale(1);
    }
  `
}
