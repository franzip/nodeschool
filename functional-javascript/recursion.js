function getDependencies(tree) {
  var accumulator = [];

  function iterate(tree, acc) {
    var depObj = tree && tree.dependencies;
    if (depObj) {
      var deps = Object.keys(depObj);
      deps.forEach(function(dep) {
        var key = dep + "@" + depObj[dep].version;
        if (acc.indexOf(key) === -1) {
          acc.push(key);
        }
        iterate(depObj[dep], acc);
      });
    }
    return acc.sort();
  }

  return iterate(tree, accumulator);
}

module.exports = getDependencies;
