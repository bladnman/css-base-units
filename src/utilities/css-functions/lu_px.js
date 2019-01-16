var lu = require('./lu');
module.exports = function(value, appendPx=false) {
  return lu(value, true);
}