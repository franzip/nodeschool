var through = require('through2'),
    http    = require('http'),
    port    = process.argv[2];

var stream = through(function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
});

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(stream).pipe(res);
    }
});

server.listen(port);
