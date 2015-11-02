var through = require('through2'),
    split   = require('split');

var lineCounter = 0;

var stream = through(function write(buffer, encoding, next) {
    var lines = buffer.toString(),
        out   = lineCounter % 2 ? lines.toUpperCase() + "\n" : lines.toLowerCase() + "\n" ;
    this.push(out);
    lineCounter += 1;
    next();
});

process.stdin
       .pipe(split())
       .pipe(stream)
       .pipe(process.stdout);
