module.exports = function(value, appendPx=false) {
  return `calc( var(--bu, 10) * ${value||0}${appendPx?'px':''})`;
}