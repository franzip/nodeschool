var async = require('async'),
    http  = require('http'),
    urls  = [process.argv[2], process.argv[3]];

async.map(urls, getBody, function(err, results) {
    if (err) {
        return console.log(err);
    }
    console.log(results);
});

function getBody(url, cb) {
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            cb(null, body);
        });
    }).on('error', function(err) {
        cb(err);
    });
}
