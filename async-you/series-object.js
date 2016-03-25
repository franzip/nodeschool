var async = require('async'),
    http  = require('http'),
    url1  = process.argv[2],
    url2  = process.argv[3];

async.series({
    requestOne: function(cb) {
        getBody(cb, url1);
    },
    requestTwo: function(cb) {
        getBody(cb, url2);
    }
}, function(err, results) {
    if (err) {
        return console.log(err);
    }
    console.log(results);
});

function getBody(cb, url) {
    var body = '';
    http.get(url, function(res) {
        res.on('data', function(chunk) {
            body += chunk.toString();
        });

        res.on('end', function() {
            cb(null, body);
        });
    }).on('error', function(err) {
        cb(err);
    });
}
