function duckCount() {
  var args = Array.prototype.slice.call(arguments);
  return args.filter(function(el) {
    return el.hasOwnProperty('quack');
  }).length;
}

module.exports = duckCount;
