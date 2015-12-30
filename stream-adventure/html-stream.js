var through = require('through2'),
    trumpet = require('trumpet'),
    tr      = trumpet();

var selected = tr.select('.loud').createStream();

selected.pipe(through(function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
})).pipe(selected);

process.stdin
    .pipe(tr)
    .pipe(process.stdout);
