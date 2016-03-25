var async    = require('async'),
    http     = require('http'),
    fs       = require('fs'),
    filepath = process.argv[2];

async.waterfall([
    readFile,
    getBody
], function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

function readFile(cb) {
    fs.readFile(filepath, function(err, url) {
        if (err) {
            cb(err);
        }
        cb(null, url);
    });
}

function getBody(url, cb) {
    var body = '';
    http.get(url.toString(), function(res) {
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
