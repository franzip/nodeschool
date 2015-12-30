var duplexer = require('duplexer2'),
    through  = require('through2').obj;

module.exports = function(counter) {
    var countryCounter = {};

    var write = function(obj, _, next) {
        countryCounter[obj.country] = (countryCounter[obj.country] || 0) + 1;
        next();
    };

    var end = function(done) {
        counter.setCounts(countryCounter);
        done();
    };

    return duplexer(through(write, end), counter);
};
