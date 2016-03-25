var async = require('async'),
    http  = require('http'),
    urls  = [process.argv[2], process.argv[3]];

async.each(urls, function(url, cb) {
    http.get(url, function(res) {
    }).on('error', function(err) {
        cb(err);
    });
}, function(err) {
    if (err) {
        console.log(err);
    }
});
