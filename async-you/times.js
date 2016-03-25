var async    = require('async'),
    http     = require('http'),
    hostname = process.argv[2],
    port     = process.argv[3];

async.series({
    createUsers: function(cb) {
        async.times(5, function(n, next) {
            addUser(n, function(err) {
                next(err);
            });
        }, function(err, users) {
            if (err) {
                return cb(err);
            }
            cb(null, 'created');
        });
    },
    getUsers: function(cb) {
        http.get('http://' + hostname + ':' + port + '/users', function(res) {
            var body = '';
            res.on('data', function(chunk) {
                body += chunk.toString();
            });

            res.on('end', function(err) {
                cb(null, body);
            });
        }).on('error', cb);
    }
}, function(err, result) {
    if (err) {
        return console.log(err);
    }
    console.log(result.getUsers);
});

function addUser(n, cb) {
    var userdata = JSON.stringify({'user_id': ++n}),
        options, req;

    options = {
        hostname: hostname,
        port: port,
        path: '/users/create',
        method: 'POST',
        headers: {
             'Content-Length': userdata.length
        }
    };

    req = http.request(options, function(res) {
        res.on('data', function(chunk) {});
        res.on('end', function() {
            cb();
        });
    });

    req.on('error', function(err) {
        cb(err);
    });

    req.write(userdata);
    req.end();
}
