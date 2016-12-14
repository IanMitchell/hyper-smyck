const backgroundColor = 'rgba(29,29,29,0.5)';
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

module.exports.onWindow = (browserWindow) => {
  browserWindow.setVibrancy('dark');
}

module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    colors,
  });
}
