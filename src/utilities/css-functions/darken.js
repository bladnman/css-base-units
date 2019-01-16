var color = require('css-color-converter');
module.exports = function(colorValue, frac) {
  var amt         = 1 - parseFloat(frac);
  var rgba        = color(colorValue).toRgbaArray();
  var r           = rgba[0] * amt;
  var g           = rgba[1] * amt;
  var b           = rgba[2] * amt;
  return color([r,g,b]).toHexString();
}