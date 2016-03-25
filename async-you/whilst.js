var async = require('async'),
    http  = require('http'),
    url   = process.argv[2];

var reqCount = 0,
    reqBody = '';

async.whilst(function() {
    return !/meerkat/.test(reqBody.trim());
}, function(cb) {
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk.toString();
        });
        res.on('end', function() {
            reqBody = body;
            reqCount++
            cb(null, reqCount);
        });
    }).on('error', cb);
}, function(err, n) {
    if (err) {
        return console.log(err);
    }
    console.log(n);
});
