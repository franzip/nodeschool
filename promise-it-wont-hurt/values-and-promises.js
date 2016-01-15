var q = require('q');

var defer = q.defer();

var attachTitle = function(arg) {
    return 'DR. ' + arg;
};

defer.promise
.then(attachTitle)
.then(console.log);

defer.resolve('MANHATTAN');


