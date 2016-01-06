var path  = process.argv[2],
    db    = require('level')(path),
    fs    = require('fs'),
    lines = fs.readFileSync(process.argv[3], 'utf8').split('\n'),
    ops   = [];

ops = lines.map(function(line) {
    var tokens = line.split(',');
    return {
        type: tokens[0],
        key: tokens[1],
        value: tokens[2]
    };
});

db.batch(ops, function(err) {
    if (err) {
        throw err;
    }
});

db.close();
