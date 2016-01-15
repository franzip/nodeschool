var q           = require('q'),
    invalidJSON = process.argv[2];

var parsePromised = function() {
    var defer = q.defer();
    try {
        var result = JSON.parse(invalidJSON);
    } catch(e) {
        defer.reject(e);
    }

    defer.resolve(result);
    return defer.promise;
};

parsePromised()
.then(null, console.log);
