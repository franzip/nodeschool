function Spy(target, method) {
  var spy = {
    count: 0
  };

  var oldFn = target[method];

  target[method] = function() {
    spy.count += 1;
    return oldFn.apply(target, arguments);
  };

  return spy;
}

module.exports = Spy;
