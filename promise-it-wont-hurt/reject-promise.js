var q = require('q');

var defer = q.defer();

defer.promise.fail(console.log);

setTimeout(defer.reject, 300, 'REJECTED!');
