module.exports = function(value, appendPx=false) {
  return `calc( calc(var(--lu, var(--bu, 10)) * var(--lum, 1.0)) * ${value||0}${appendPx?'px':''})`;
}