var combine = require('stream-combiner'),
    split   = require('split'),
    through = require('through2'),
    zlib    = require('zlib');

module.exports = function () {
    var acc;

    var write = function write(data, _, cb) {
        if (data.length === 0) {
            return cb();
        }
        var jsonData = JSON.parse(data);

        if (jsonData.type === 'genre') {
            if (acc) {
                this.push(JSON.stringify(acc) + '\n');
            }
            acc = {'name': jsonData.name, 'books': []};

        } else if (jsonData.type === 'book') {
            acc.books.push(jsonData.name);
        }
        cb();
    };

    var end = function end(done) {
        if (acc) {
             this.push(JSON.stringify(acc) + '\n');
        }
        done();
    };

    return combine(split(), through(write, end), zlib.createGzip());
};
