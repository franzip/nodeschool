var q = require('q');

var d1 = q.defer(),
    d2 = q.defer();

function all(d1, d2) {
    var wrapD   = q.defer(),
        counter = 0, res1, res2;

    d1.promise
    .then(function(val) {
        res1 = val;
        if (++counter >= 2) {
            wrapD.resolve([res1, res2]);
        }
    })
    .then(null, wrapD.reject)
    .done();

    d2.promise
    .then(function(val) {
        res2 = val;
        if (++counter >= 2) {
            wrapD.resolve([res1, res2]);
        }
    })
    .then(null, wrapD.reject)
    .done();

    return wrapD.promise;
}

all(d1, d2)
.then(console.log)
.done();

setTimeout(function() {
    d1.resolve('PROMISES');
    d2.resolve('FTW');
}, 200);
