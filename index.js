// const backgroundColor = 'rgba(0,0,0,0.6)';
const backgroundColor = 'rgba(0,0,0)';
const borderColor = 'transparent';
const colors = {
  black: '#000000',
  red: '#c75646',
  green: '#8eb33b',
  yellow: '#d0b03c',
  blue: '#72b3cc',
  magenta: '#c8a0d1',
  cyan: '#218693',
  white: '#b0b0b0',
  lightBlack: '#5d5d5d',
  lightRed: '#e09690',
  lightGreen: '#cdee69',
  lightYellow: '#ffe377',
  lightBlue: '#9cd9f0',
  lightMagenta: '#fbb1f9',
  lightCyan: '#77dfd8',
  lightWhite: '#f7f7f7',
};

// module.exports.onWindow = (browserWindow) => {
//   browserWindow.setVibrancy('dark');
// }

module.exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    borderColor,
    colors,
    css: `
      ${config.css || ''}

      .hyper_main {
        border: none;
      }

      .tab_tab::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        border-width: 0px 0px 1px 0px;
        border-style: solid;
        border-image: -webkit-linear-gradient(right, ${colors.green}, ${
      colors.blue
    }) 100% 1;
        transform: scaleX(0);
        transition: none;
      }

      .tab_tab.tab_active::before {
        transform: scaleX(1);
        transition: all 300ms cubic-bezier(0.0, 0.0, 0.2, 1)
      }

      .tab_tab {
        border: 0;
        opacity: 0.5;
      }

      .tab_active {
        opacity: 1;
      }

      .tab_textActive {
        opacity: 1;
      }

      .splitpane_divider {
        background-image: -webkit-linear-gradient(right, ${colors.green}, ${
      colors.blue
    });
      }
    `,
  });
};
