function curryN(fn, n) {
  n = n || fn.length;
  return function(arg) {
      if (n <= 1) {
        return fn(arg);
      } else {
        return curryN(fn.bind(this, arg), n - 1);
      }
  }
}

module.exports = curryN
