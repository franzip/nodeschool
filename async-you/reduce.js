var async  = require('async'),
    http   = require('http'),
    url    = process.argv[2],
    values = ['one', 'two', 'three'];

async.reduce(values, 0, function(acc, item, cb) {
    http.get(url + '?number=' + item, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            cb(null, acc + Number(body));
        });
    }).on('error', function(err) {
        cb(err);
    });
}, function(err, result) {
    if (err) {
        return console.log(err);
    }
    console.log(result);
});
