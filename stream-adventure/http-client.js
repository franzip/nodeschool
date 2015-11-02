var request = require('request'),
    address = 'http://localhost:8099';

var r = request.post(address);

process.stdin.pipe(r).pipe(process.stdout);
