var path   = process.argv[2],
    db     = require('level')(path),
    prefix = 'key';

var getValue = function(key) {
    db.get(key, function(err, val) {
        if (val) {
            console.log(`${key}=${val}`);
        }
    });
};

for (var i = 0; i < 100; i++) {
    var key = prefix + i;
    getValue(key);
}

db.close();

