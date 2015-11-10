module.exports = function(namespace) {
  var fn = console.log.bind(console, namespace);
  return fn;
};
