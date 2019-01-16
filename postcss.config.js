var cssFunctions = require('./src/utilities/css-functions/');

module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0
    },
    'postcss-functions' : {
      functions: cssFunctions
    }
  }
};