var q = require('q');


var throwMyGod = function() {
    throw new Error('OH NOES');
};

var iterate = function(arg) {
    console.log(arg);
    return arg + 1;
};

q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);
