var cssFunctions = require('./src/utilities/css-functions/');

module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0
    },
    'postcss-functions' : {
      functions: cssFunctions
    },
    'postcss-variables' : {
      globals: {
        text : {
          title_section     : cssFunctions.lu_px(4),
          title_item        : cssFunctions.lu_px(2.2),
          body              : cssFunctions.lu_px(1.5),
          button            : cssFunctions.lu_px(2),
        },
        colors: {
          primary: '#fff',
          secondary: '#000'
        }
      }
    }
  }
};