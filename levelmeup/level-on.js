var path  = process.argv[2],
    key   = process.argv[3],
    db    = require('level')(path);

db.get(key, function(err, val) {
    console.log(val);
});

db.close();


